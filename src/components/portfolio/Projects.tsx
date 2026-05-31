import { useState } from "react";

import Scry from "@/assets/SCRY/scry_IAI.jpg";
import darkmodeProposalGif from "@/assets/SGP/darkmode_proposal.gif";
import ecommerce from "@/assets/PUA/project-ecommerce.jpg";
import Sgp from "@/assets/SGP/portada.png";
import travel from "@/assets/project-travel.jpg";
import brand from "@/assets/PowerBi/project-brand.jpg";
import plantilla1 from "@/assets/PowerBi/plantilla1.png";
import plantilla2 from "@/assets/PowerBi/plantilla2.png";
import plantilla3 from "@/assets/PowerBi/plantilla3.png";
import plantilla4 from "@/assets/PowerBi/plantilla4.png";
import cards from "@/assets/PowerBi/cards.png";
import colors from "@/assets/PowerBi/colors.png";
import  iconButton from "@/assets/PowerBi/IconButton.png";
import proyectosEnkGif from "@/assets/SGP/proyectos_enk.gif";
import pua_user from "@/assets/PUA/pua_user.gif";
import pua_admin from "@/assets/PUA/pua_admin.gif";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type PreviewMedia = {
  src: string;
  alt: string;
};

type Project = {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  img: string;
  figma?: string;
  prototype?: string;
  pageUrl?: string;
  previewMediaUrl?: string;
  previewMediaItems?: PreviewMedia[];
  size: "lg" | "md" | "sm" | "wide";
  accent?: string;
};

const projects: Project[] = [
  {
    title: "Scry",
    subtitle: "Intelligent chatbot that you can ask in natural language for information about your database.",
    category: "Web · Education",
    year: "2025",
    img: Scry,
    figma: "https://www.figma.com/design/SKEwGjENT1Cc10pkAKeYGM/IA-Institucional?node-id=1-10&t=LGZtzbHBnc3tQnOY-1",
    prototype: "https://www.figma.com/proto/SKEwGjENT1Cc10pkAKeYGM/IA-Institucional?node-id=1-10&t=LGZtzbHBnc3tQnOY-1",
    pageUrl: "https://leds.uaslp.mx/scry/",
    size: "lg",
    accent: "from-primary/20 to-transparent",
  },
  {
    title: "PUA",
    subtitle: "Designed and developed a online store for a candle brand.",
    category: "Web · E-commerce",
    year: "2025",
    img: ecommerce,
    previewMediaUrl: "/pua-preview.gif",
    previewMediaItems: [
      { src: pua_user, alt: "Pua rol user" },
      { src: pua_admin, alt: "Pua rol admin" },
    ],
    size: "md",
  },
  {
    title: "SGP",
    subtitle: "Project management system.",
    category: "Web · Administration",
    year: "2024",
    img: Sgp,
    previewMediaItems: [
      { src: darkmodeProposalGif, alt: "SGP dark mode proposal 1" },
      { src: proyectosEnkGif, alt: "SGP dark mode proposal 2" },
    ],
    size: "md",
  },
  {
    title: "RUDD",
    subtitle: "Collaboration work - Find the career you've always been looking for",
    category: "Web · Education",
    year: "2025",
    img: travel,
    figma: "https://www.figma.com/design/3H2x5OOKPC5LTaeYt5ZVBt/Act_3_2_Gonz%C3%A1lez_Ericka_Hern%C3%A1ndez_Elizabeth?node-id=662-29727&t=ngKsz5ZDCfHFBF7G-1",
    prototype: "https://www.figma.com/proto/3H2x5OOKPC5LTaeYt5ZVBt/Act_3_2_Gonz%C3%A1lez_Ericka_Hern%C3%A1ndez_Elizabeth?node-id=662-29727&t=LKAhRnUYdNs7ElBo-1&scaling=min-zoom&content-scaling=fixed&page-id=210%3A2368&starting-point-node-id=662%3A29727",
    size: "md",
  },
  {
    title: "Power BI component library",
    subtitle: "Components and templates ready for use.",
    category: "Resources . Design system",
    year: "2026",
    img: brand,
    previewMediaItems: [
      { src: plantilla1, alt: "Power BI component library template 1" },
      { src: plantilla2, alt: "Power BI component library template 2" },
      { src: plantilla3, alt: "Power BI component library template 3" },
      { src: plantilla4, alt: "Power BI component library template 4" },
      { src: iconButton, alt: "Power BI component library image 1" },
      { src: cards, alt: "Power BI component library image 2" },
      { src: colors, alt: "Power BI component library image 3" },
    ],
    size: "lg",
  },
];

function sizeClass(s: Project["size"]) {
  switch (s) {
    case "lg":
      return "md:col-span-2 md:row-span-2 min-h-[420px] md:min-h-[560px]";
    case "wide":
      return "md:col-span-2 min-h-[320px] md:min-h-[280px]";
    case "md":
      return "md:col-span-1 min-h-[320px] md:min-h-[280px]";
    case "sm":
      return "md:col-span-1 min-h-[280px] md:min-h-[240px]";
  }
}

function ProjectCard({ p }: { p: Project }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const previewOnlyTitles = ["PUA", "SGP", "Power BI component library"];
  const isPreviewOnly = previewOnlyTitles.includes(p.title);
  const previewItems = p.previewMediaItems ?? (p.previewMediaUrl ? [{ src: p.previewMediaUrl, alt: `${p.title} preview media` }] : []);

  return (
    <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
      <article
        className={`bento-card reveal group flex flex-col ${sizeClass(p.size)}${
          isPreviewOnly ? " cursor-default" : ""
        }`}
        onClick={
          isPreviewOnly
            ? undefined
            : () => window.open(p.figma, "_blank", "noopener,noreferrer")
        }
        role={isPreviewOnly ? undefined : "link"}
        tabIndex={isPreviewOnly ? undefined : 0}
        onKeyDown={
          isPreviewOnly
            ? undefined
            : (e) => {
                if (e.key === "Enter") window.open(p.figma, "_blank", "noopener,noreferrer");
              }
        }
      >
      {/* Image */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          width={1280}
          height={960}
          className="bento-img h-full w-full object-cover"
        />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${p.accent ?? "from-foreground/30 to-transparent"} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-card/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
            {p.category}
          </span>
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[10px] font-semibold text-muted-foreground backdrop-blur">
          {p.year}
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-bold leading-tight">{p.title}</h3>
          <p className="mt-1 truncate text-sm text-muted-foreground">{p.subtitle}</p>
        </div>
        <div
          className="flex shrink-0 items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {isPreviewOnly ? (
            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="rounded-full bg-primary px-3.5 py-2 text-[11px] font-semibold text-primary-foreground transition-transform hover:scale-105"
              aria-label={`Preview ${p.title}`}
            >
              Preview ↗
            </button>
          ) : (
            <>
              {p.pageUrl ? (
                <a
                  href={p.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-card px-3.5 py-2 text-[11px] font-semibold transition-colors hover:bg-foreground hover:text-background"
                  aria-label={`Open ${p.title} live page`}
                >
                  Beta page
                </a>
              ) : null}
              <a
                href={p.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-3.5 py-2 text-[11px] font-semibold transition-colors hover:bg-foreground hover:text-background"
                aria-label={`View ${p.title} design in Figma`}
              >
                View Design
              </a>
              <a
                href={p.prototype}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-3.5 py-2 text-[11px] font-semibold text-primary-foreground transition-transform hover:scale-105"
                aria-label={`View ${p.title} interactive prototype`}
              >
                Prototype ↗
              </a>
            </>
          )}
        </div>
      </div>
      </article>

      {isPreviewOnly ? (
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{p.title} preview</DialogTitle>
            <DialogDescription>
              Animated preview for the {p.title} project.
            </DialogDescription>
          </DialogHeader>
          {previewItems.length > 1 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {previewItems.map((item) => (
                  <CarouselItem key={item.alt}>
                    <div className="overflow-hidden rounded-2xl border border-border bg-card">
                      <img src={item.src} alt={item.alt} className="h-auto w-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={previewItems[0]?.src}
                alt={previewItems[0]?.alt ?? `${p.title} preview gif`}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
        </DialogContent>
      ) : null}
    </Dialog>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Selected Work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Featured <span className="italic font-light text-muted-foreground">projects.</span>
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[280px] md:grid-flow-dense">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
