import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export function SiteHeader() {
  const linkBase = "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "var(--gradient-hero)" }}>
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-base tracking-tight">SmartTrain</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/" className={linkBase} activeProps={{ className: "text-foreground font-semibold" }} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/courses" className={linkBase} activeProps={{ className: "text-foreground font-semibold" }}>Courses</Link>
          <Link to="/trainers" className={linkBase} activeProps={{ className: "text-foreground font-semibold" }}>Trainers</Link>
        </nav>
      </div>
    </header>
  );
}
