export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border/60 py-10 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SmartTrain Center. Upgrade your skills, anywhere.
      </div>
    </footer>
  );
}
