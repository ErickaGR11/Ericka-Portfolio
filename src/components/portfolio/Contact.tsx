export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-blob bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="reveal mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          Improving a project, 
          <br />
          or building <span className="italic font-light text-muted-foreground">something new?</span>
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Tell me what you're building — let's explore it together.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:erickagr119@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
          >
            erickagr119@gmail.com
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="reveal mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <a href="https://github.com/ErickaGR11" className="transition-colors hover:text-foreground">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/ericka-gonz%C3%A1lez-romero-4ab34a295/" className="transition-colors hover:text-foreground">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
