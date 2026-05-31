import avatar from "@/assets/avatar.jpg";

const skills = [
  "Product Design",
  "Design Systems",
  "Prototyping",
  "Agile Collaboration",
  "Frontend Development",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="reveal">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 animate-blob bg-primary/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card animate-float">
              <img
                src={avatar}
                alt="Portrait of Ericka González Romero"
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card px-5 py-3 shadow-[var(--shadow-soft)]">
              <div className="text-xs text-muted-foreground">Based in</div>
              <div className="font-display text-base font-semibold">San Luis Potosí, S.L.P. · Remote</div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            I help teams bridge the gap between <span className="italic font-light text-muted-foreground">engineering and user-centric design.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            As a near-graduate Intelligent Systems Engineering student at UASLP with an interest in UX/UI design, 
            I focus on creating clear and intuitive digital experiences through academic projects, internships, and service work. 
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I enjoy turning complex ideas into simple, usable interfaces and continuously improving through design and development practice.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-surface"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
