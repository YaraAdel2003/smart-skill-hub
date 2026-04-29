export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30 py-10">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SmartTrain Center. Upgrade your skills, anywhere.
      </div>
    </footer>
  );
}
