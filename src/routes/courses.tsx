import { createFileRoute } from "@tanstack/react-router";
import { Clock, Signal } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — SmartTrain" },
      { name: "description", content: "Browse our catalog of expert-led, project-based courses in AI, web development, data, and design." },
      { property: "og:title", content: "Courses — SmartTrain" },
      { property: "og:description", content: "Project-based courses in AI, web, data, and design." },
    ],
  }),
  component: CoursesPage,
});

type Level = "Beginner" | "Intermediate" | "Advanced";
type Course = { name: string; description: string; duration: string; level: Level };

const COURSES: Course[] = [
  {
    name: "Modern Web Development",
    description: "Master the modern frontend stack — React, TypeScript, and component architecture — while building production-ready apps from day one.",
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    name: "Applied AI & LLMs",
    description: "Design, prompt, and ship intelligent applications powered by large language models, agents, and retrieval-augmented generation.",
    duration: "6 weeks",
    level: "Intermediate",
  },
  {
    name: "Data Engineering Foundations",
    description: "Build reliable data pipelines, model warehouses, and turn raw data into trustworthy insights teams can actually act on.",
    duration: "10 weeks",
    level: "Intermediate",
  },
  {
    name: "UX Design Essentials",
    description: "Craft delightful, user-centered experiences using research, prototyping, and proven design systems that scale across products.",
    duration: "5 weeks",
    level: "Beginner",
  },
  {
    name: "Cloud & DevOps in Practice",
    description: "Ship faster and safer with infrastructure-as-code, CI/CD, observability, and the cloud-native patterns top teams rely on.",
    duration: "8 weeks",
    level: "Advanced",
  },
  {
    name: "Advanced Machine Learning",
    description: "Go deep on modern ML — from feature engineering to deployment — and turn experiments into measurable business outcomes.",
    duration: "12 weeks",
    level: "Advanced",
  },
];

const levelStyles: Record<Level, string> = {
  Beginner: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  Intermediate: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  Advanced: "bg-rose-500/10 text-rose-700 border-rose-500/20",
};

function CoursesPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Courses</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Hand-picked, hands-on programs designed to take you from curious to capable — fast.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <article
            key={c.name}
            className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1"
            style={{ boxShadow: "var(--shadow-card)", transition: "var(--transition-smooth)" }}
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold leading-snug">{c.name}</h2>
              <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelStyles[c.level]}`}>
                {c.level}
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {c.duration}</span>
              <span className="inline-flex items-center gap-1.5"><Signal className="h-4 w-4" /> {c.level}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
