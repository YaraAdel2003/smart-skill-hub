import { createFileRoute } from "@tanstack/react-router";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Trainers — SmartTrain" },
      { name: "description", content: "Meet the practitioners and educators behind SmartTrain — experts in AI, web, data, and design." },
      { property: "og:title", content: "Meet Our Trainers — SmartTrain" },
      { property: "og:description", content: "Practitioners and educators with deep, real-world expertise." },
    ],
  }),
  component: TrainersPage,
});

const TRAINERS = [
  {
    name: "Sara Lambert",
    specialty: "Modern Web & Frontend Architecture",
    bio: "Sara has spent the last decade shipping web products at fast-growing startups. She loves teaching the craft behind clean, scalable React codebases — and the human side of building great teams around them.",
    image: t1,
  },
  {
    name: "Marcus Reid",
    specialty: "Applied AI & Machine Learning",
    bio: "A former research engineer turned hands-on instructor, Marcus translates dense ML concepts into practical workflows. His students leave able to design, train, and deploy real models — not just talk about them.",
    image: t2,
  },
  {
    name: "Elena Park",
    specialty: "Data Engineering & Analytics",
    bio: "Elena builds the kind of data platforms decision-makers actually trust. She brings warmth, clarity, and a love of well-modeled tables to every cohort she teaches at SmartTrain.",
    image: t3,
  },
];

function TrainersPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-2xl animate-fade-up">
        <span className="inline-flex rounded-full border border-border glass px-3 py-1 text-xs font-medium text-muted-foreground">The team</span>
        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">Meet Our <span className="text-gradient">Trainers</span></h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Practitioners first, educators always. Learn from people who've shipped what they teach.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {TRAINERS.map((t, i) => (
          <article
            key={t.name}
            className="group relative overflow-hidden rounded-2xl border border-border glass p-7 text-center glow-hover animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div aria-hidden className="absolute inset-x-0 -top-20 h-40 opacity-50 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative mx-auto mb-5 h-32 w-32 rounded-full p-[2px]" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
              <div className="h-full w-full overflow-hidden rounded-full ring-4 ring-background">
                <img src={t.image} alt={`Portrait of ${t.name}`} loading="lazy" width={768} height={768} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <h2 className="relative text-xl font-semibold tracking-tight">{t.name}</h2>
            <p className="relative mt-1 text-sm font-medium text-gradient">{t.specialty}</p>
            <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
