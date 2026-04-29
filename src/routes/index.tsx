import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        {/* Decorative orbs */}
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden className="pointer-events-none absolute top-20 -right-32 h-[24rem] w-[24rem] rounded-full opacity-30 blur-3xl animate-float" style={{ background: "radial-gradient(circle, oklch(0.7 0.18 320 / 0.6), transparent 70%)" }} />

        <div className="container relative mx-auto px-6 py-28 md:py-40">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-medium text-foreground/90">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              AI-powered learning paths
            </span>
            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Upgrade Your Skills with{" "}
              <span className="text-gradient">Modern Training</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Learn from industry experts through hands-on, project-based courses designed for
              today's fast-moving tech landscape. Build real skills, ship real work.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="group h-12 px-7 text-base" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
                <Link to="/courses">
                  View Courses <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 glass px-7 text-base">
                <Link to="/trainers">Meet Our Trainers</Link>
              </Button>
            </div>

            {/* Stat strip */}
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "12+", v: "Expert tracks" },
                { k: "3.5k", v: "Learners shipped" },
                { k: "4.9★", v: "Avg. rating" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl font-semibold text-gradient md:text-3xl">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Built for how teams actually learn</h2>
          <p className="mt-3 text-muted-foreground">Real projects, modern tools, and instructors who've shipped what they teach.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: BookOpen, title: "Practical Curriculum", body: "Project-based courses built around what teams actually use in production today." },
            { icon: Users, title: "Expert Trainers", body: "Learn from practitioners with years of real-world experience across leading companies." },
            { icon: Sparkles, title: "Modern Stack", body: "From AI to data engineering — stay ahead with up-to-date tools and best practices." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-border glass p-7 glow-hover">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
