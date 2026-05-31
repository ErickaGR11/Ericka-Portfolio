const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Understanding users and problems",
  },
  {
    n: "02",
    title: "Define",
    body: "Information architecture, user flows. Structuring insights into clear directions",
  },
  {
    n: "03",
    title: "Design",
    body: "From wireframes to high-fidelity — with a scalable design system.",
  },
  {
    n: "04",
    title: "Deliver",
    body: "Prototypes and iterative improvements.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Process</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            A studio process, <span className="italic font-light text-muted-foreground">embedded in your team.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="reveal group relative rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="font-display text-5xl font-bold text-primary/30 transition-colors group-hover:text-primary">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
