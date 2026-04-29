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
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Meet Our Trainers</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Practitioners first, educators always. Learn from people who've shipped what they teach.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {TRAINERS.map((t) => (
          <article
            key={t.name}
            className="rounded-2xl border border-border bg-card p-6 text-center"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full ring-4 ring-background" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={t.image} alt={`Portrait of ${t.name}`} loading="lazy" width={768} height={768} className="h-full w-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="mt-1 text-sm font-medium" style={{ color: "var(--primary)" }}>{t.specialty}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
