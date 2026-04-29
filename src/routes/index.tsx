import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartTrain — Upgrade Your Skills with Modern Training" },
      { name: "description", content: "Join hands-on, expert-led courses designed to take your career to the next level." },
      { property: "og:title", content: "SmartTrain — Modern Training Center" },
      { property: "og:description", content: "Hands-on, expert-led courses for the modern professional." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.18 0.03 270 / 0.85), oklch(0.18 0.03 270 / 0.7)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> AI-powered learning paths
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Upgrade Your Skills with Modern Training
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Learn from industry experts through hands-on, project-based courses designed for
              today's fast-moving tech landscape. Build real skills, ship real work, and advance
              your career with confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-12 px-7 text-base shadow-lg">
                <Link to="/courses">
                  View Courses <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-white/30 bg-white/10 px-7 text-base text-white hover:bg-white/20 hover:text-white">
                <Link to="/trainers">Meet Our Trainers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container mx-auto grid gap-6 px-6 py-20 md:grid-cols-3">
        {[
          { icon: BookOpen, title: "Practical Curriculum", body: "Project-based courses built around what teams actually use in production today." },
          { icon: Users, title: "Expert Trainers", body: "Learn from practitioners with years of real-world experience across leading companies." },
          { icon: Sparkles, title: "Modern Stack", body: "From AI to data engineering — stay ahead with up-to-date tools and best practices." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
