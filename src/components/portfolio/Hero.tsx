import cvPdf from "@/assets/cv.pdf";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background ornaments */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 animate-blob bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 top-40 h-[28rem] w-[28rem] animate-blob bg-surface blur-3xl" style={{ animationDelay: "-4s" }} />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.62 0.19 258 / 0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Available for new projects · 2026
        </div>

        <h1 className="reveal mt-6 max-w-5xl text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]">
          Designing <span className="italic font-light text-muted-foreground">interfaces</span> people
          <br className="hidden sm:block" /> actually <span className="text-gradient">love to use.</span>
        </h1>

        <p className="reveal mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          I'm Ericka González Romero — an Intelligent Systems Engineering student at UASLP passionate about UI/UX design, creating digital experiences with the belief that everything is improvable.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
          >
            See selected work

          </a>
          <a
            href={cvPdf}
            download="CV.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            aria-label="Download CV (PDF)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        {/* Stats */}
        <div className="reveal mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {[
            ["2+", "Learning & designing"],
            ["10+", "School & academic projects"],
            ["~1 year", "designing in real-world contexts"]
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-bold sm:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
