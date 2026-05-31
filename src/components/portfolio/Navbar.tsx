import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(links[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean);

    const getCurrentSection = () => {
      const threshold = window.innerHeight * 0.3;
      let currentHref = links[0].href;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold) {
          currentHref = `#${id}`;
        }
      }

      return currentHref;
    };

    const onScroll = () => setActiveHref(getCurrentSection());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`flex w-full items-center justify-between rounded-none px-5 py-2.5 transition-all duration-500 sm:px-6 md:rounded-full ${
          scrolled
            ? "bg-card/80 shadow-[var(--shadow-soft)] backdrop-blur-xl border border-border/60"
            : "bg-transparent"
        }`}
        style={{ marginInline: "1rem" }}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-base font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
          ErickaGR
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={activeHref === l.href ? "page" : undefined}
              className={`group relative text-sm font-medium transition-colors ${
                activeHref === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  activeHref === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-105 md:inline-flex"
        >
          <span>Start project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-card md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-4 mt-2 overflow-hidden rounded-3xl border border-border/60 bg-card/90 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={activeHref === l.href ? "page" : undefined}
              className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                activeHref === l.href
                  ? "bg-surface text-foreground"
                  : "text-foreground hover:bg-surface"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
          >
            <span>Start project</span>
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
