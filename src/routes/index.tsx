import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ericka Gonzalez Romero — Portfolio" },
      {
        name: "description",
        content:
          "Selected work of Ericka Gonzalez Romero",
      },
      { property: "og:title", content: "Ericka Gonzalez Romero — Portfolio" },
      {
        property: "og:description",
        content: "Modern, aesthetic, Figma and interactive prototypes.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
