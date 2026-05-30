import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Wand2, Palette, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import smile from "@/assets/smile-closeup.jpg";

export const Route = createFileRoute("/cosmetic")({
  head: () => ({
    meta: [
      { title: "Smile Makeover & Cosmetic Dentistry — Lumière Dental" },
      { name: "description", content: "Veneers, whitening, smile design and complete smile makeovers crafted by award-winning cosmetic dentists." },
      { property: "og:title", content: "Smile Makeover & Cosmetic Dentistry" },
      { property: "og:url", content: "/cosmetic" },
    ],
    links: [{ rel: "canonical", href: "/cosmetic" }],
  }),
  component: Cosmetic,
});

const treatments = [
  { icon: Sparkles, title: "Porcelain Veneers", text: "Hand-crafted veneers, designed to your facial proportions." },
  { icon: Wand2, title: "Professional Whitening", text: "Up to 8 shades whiter in a single 60-minute session." },
  { icon: Palette, title: "Digital Smile Design", text: "Preview your new smile in 3D before any treatment begins." },
];
const cases = [
  { title: "Full Veneer Makeover", desc: "10 porcelain veneers, 2 visits.", img: smile },
  { title: "Single-tooth Restoration", desc: "Discoloured incisor, restored in one day.", img: smile },
  { title: "Gummy Smile Correction", desc: "Laser gum contouring + 6 veneers.", img: smile },
];

function Cosmetic() {
  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-7xl pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs uppercase tracking-widest text-teal">Cosmetic</span>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">Design the <span className="text-gradient">smile</span> you've always wanted</h1>
          <p className="mt-6 text-lg text-muted-foreground">A bespoke smile makeover, crafted with artistry and tested with digital previews — so you fall in love with your smile before treatment even starts.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground"><Link to="/contact">Book consultation</Link></Button>
            <Button asChild size="lg" variant="outline"><a href="#gallery">See cases</a></Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Signature treatments" title="The makeover toolkit">
        <div className="grid gap-6 md:grid-cols-3">
          {treatments.map((t) => (
            <Card key={t.title} className="group p-8 bg-gradient-card border-border/60 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/15 text-teal transition-colors group-hover:bg-gradient-hero group-hover:text-primary-foreground"><t.icon className="h-7 w-7" /></div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-muted-foreground">{t.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section id="gallery" className="bg-gradient-soft">
        <Section eyebrow="Case studies" title="Smile transformations">
          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <Card key={c.title} className="overflow-hidden border-border/60 bg-card group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg"><Link to="/gallery">Full gallery</Link></Button>
          </div>
        </Section>
      </section>

      <Section eyebrow="Includes" title="What's in your smile makeover">
        <ul className="grid gap-3 sm:grid-cols-2">
          {["Free digital smile preview", "Personalised shade matching", "Premium porcelain (E.max®)", "Bite & symmetry analysis", "Photography & 3D scans", "5-year aesthetic warranty"].map((i) => (
            <li key={i} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-4"><Check className="h-4 w-4 text-teal" /><span className="font-medium">{i}</span></li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Book" title="Start your makeover journey" align="center">
        <div className="mx-auto max-w-2xl"><ConsultationForm topic="Smile Makeover" /></div>
      </Section>
    </SiteLayout>
  );
}
