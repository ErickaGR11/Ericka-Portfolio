const items = [
  "Figma",
  "★",
  "Framer",
  "★",
  "Component libraries",
  "★",
  "Spline",
  "★",
  "Google stitch",
  "★",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Tools" className="border-y border-border bg-surface/40 py-8 overflow-hidden">
      <div className="marquee flex w-max items-center gap-12 whitespace-nowrap">
        {row.map((it, i) => (
          <span
            key={i}
            className={`font-display text-2xl font-semibold sm:text-3xl ${
              it === "★" ? "text-primary" : "text-foreground/70"
            }`}
          >
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}
