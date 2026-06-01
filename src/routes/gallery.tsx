import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Lightbox } from "@/components/site/Lightbox";
import { ZoomIn } from "lucide-react";
import smile from "@/assets/smile-closeup.jpg";
import veneersCase1 from "@/assets/veneers-case-1.jpg.asset.json";
import implantCase from "@/assets/implant-case.jpg.asset.json";
import whiteningCase from "@/assets/whitening-case.jpg.asset.json";
import makeoverCase from "@/assets/makeover-case.jpg.asset.json";
import orthoCase from "@/assets/ortho-case.jpg.asset.json";

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
  { cat: "Veneers" as Category, title: "10 Porcelain Veneers", desc: "Full smile redesign for a professional in her 30s.", image: veneersCase1.url },
  { cat: "Implants" as Category, title: "Single Front Tooth Implant", desc: "Restored confidence after sports injury.", image: implantCase.url },
  { cat: "Whitening" as Category, title: "8 Shades Whiter", desc: "In-office whitening, single 60-minute session.", image: whiteningCase.url },
  { cat: "Orthodontics" as Category, title: "Invisalign — 14 months", desc: "Adult crowding corrected with clear aligners.", image: orthoCase.url },
  { cat: "Full Makeover" as Category, title: "Full Mouth Reconstruction", desc: "Combination of implants and veneers.", image: makeoverCase.url },
];

function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = useMemo(() => active === "All" ? cases : cases.filter((c) => c.cat === active), [active]);
  const lightboxImages = useMemo(
    () => filtered.map((c) => ({ src: (c as any).image ?? smile, title: c.title })),
    [filtered],
  );
  return (
    <SiteLayout>
      <Section eyebrow="Real results" title="Before & after gallery" description="Every smile is unique — these are real outcomes from our patients (shared with permission)." align="center" />
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => { setActive(c); setLightboxIndex(null); }}
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
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative block aspect-[4/3] w-full overflow-hidden"
                aria-label={`Open ${c.title} in lightbox`}
              >
                <img src={(c as any).image ?? smile} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">{c.cat}</span>
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/30 group-hover:opacity-100">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-primary shadow-elegant">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </span>
              </button>
              <figcaption className="p-5">
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground">No cases in this category yet.</p>}
      </section>
      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((i) => i === null ? null : (i - 1 + lightboxImages.length) % lightboxImages.length)}
        onNext={() => setLightboxIndex((i) => i === null ? null : (i + 1) % lightboxImages.length)}
      />
    </SiteLayout>
  );
}
