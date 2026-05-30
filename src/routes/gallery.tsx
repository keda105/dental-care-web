import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import smile from "@/assets/smile-closeup.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Gallery — Lumière Dental" },
      { name: "description", content: "Real smile transformations: veneers, implants, whitening, orthodontics and full makeovers performed at Lumière Dental." },
      { property: "og:title", content: "Before & After Gallery" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

type Category = "All" | "Veneers" | "Implants" | "Whitening" | "Orthodontics" | "Full Makeover";
const cats: Category[] = ["All", "Veneers", "Implants", "Whitening", "Orthodontics", "Full Makeover"];

const cases = [
  { cat: "Veneers" as Category, title: "10 Porcelain Veneers", desc: "Full smile redesign for a professional in her 30s." },
  { cat: "Implants" as Category, title: "Single Front Tooth Implant", desc: "Restored confidence after sports injury." },
  { cat: "Whitening" as Category, title: "8 Shades Whiter", desc: "In-office whitening, single 60-minute session." },
  { cat: "Orthodontics" as Category, title: "Invisalign — 14 months", desc: "Adult crowding corrected with clear aligners." },
  { cat: "Full Makeover" as Category, title: "Full Mouth Reconstruction", desc: "Combination of implants and veneers." },
  { cat: "Veneers" as Category, title: "Hollywood Smile", desc: "20 ultra-thin porcelain veneers." },
  { cat: "Implants" as Category, title: "All-on-4 Full Arch", desc: "Fixed teeth in a single day." },
  { cat: "Whitening" as Category, title: "Pre-wedding Whitening", desc: "Take-home + in-office combo." },
  { cat: "Orthodontics" as Category, title: "Teen Ortho", desc: "Modern ceramic braces." },
];

function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const filtered = useMemo(() => active === "All" ? cases : cases.filter((c) => c.cat === active), [active]);
  return (
    <SiteLayout>
      <Section eyebrow="Real results" title="Before & after gallery" description="Every smile is unique — these are real outcomes from our patients (shared with permission)." align="center" />
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                active === c
                  ? "border-transparent bg-gradient-hero text-primary-foreground shadow-elegant"
                  : "border-border bg-card text-foreground hover:border-teal",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (
            <figure key={i} className="group overflow-hidden rounded-3xl border border-border/60 bg-card animate-fade-up">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={smile} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">{c.cat}</span>
              </div>
              <figcaption className="p-5">
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground">No cases in this category yet.</p>}
      </section>
    </SiteLayout>
  );
}
