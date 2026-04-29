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
  Beginner: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  Intermediate: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  Advanced: "bg-rose-500/10 text-rose-300 border-rose-500/30",
};

function CoursesPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-2xl animate-fade-up">
        <span className="inline-flex rounded-full border border-border glass px-3 py-1 text-xs font-medium text-muted-foreground">Catalog</span>
        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">Our <span className="text-gradient">Courses</span></h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Hand-picked, hands-on programs designed to take you from curious to capable — fast.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c, i) => (
          <article
            key={c.name}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border glass p-7 glow-hover animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div aria-hidden className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: "var(--gradient-hero)" }} />
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold leading-snug tracking-tight">{c.name}</h2>
              <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelStyles[c.level]}`}>
                {c.level}
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {c.duration}</span>
              <span className="inline-flex items-center gap-1.5"><Signal className="h-4 w-4" /> {c.level}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
