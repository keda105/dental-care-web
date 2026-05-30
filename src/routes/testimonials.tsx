import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Star, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials & Reviews — Lumière Dental" },
      { name: "description", content: "Read 1,200+ verified patient reviews and watch video testimonials from real Lumière Dental patients." },
      { property: "og:title", content: "Patient Reviews" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const stats = [
  { value: "4.9", label: "Average Google rating" },
  { value: "1,200+", label: "Verified reviews" },
  { value: "98%", label: "Would recommend us" },
  { value: "12k+", label: "Happy patients" },
];

const reviews = [
  { name: "Elena Marku", role: "Veneers patient", text: "I've been to clinics across Europe. Lumière is on another level — both the result and the experience.", stars: 5 },
  { name: "Marco Rossi", role: "All-on-4 patient", text: "Painless implants and a team that genuinely cares. Worth every euro and the flight from Milan.", stars: 5 },
  { name: "Sophia Kazi", role: "Family patient", text: "My children actually look forward to dentist visits now. The pediatric area is magical.", stars: 5 },
  { name: "Daniel Hoxha", role: "Whitening patient", text: "8 shades whiter in one session. Wedding-ready smile, no sensitivity.", stars: 5 },
  { name: "Lina Berisha", role: "Invisalign patient", text: "14 months of treatment, almost invisible. Couldn't be happier.", stars: 5 },
  { name: "Andrei Popa", role: "Emergency patient", text: "Broke a tooth on a Sunday — they saw me within the hour. Lifesavers.", stars: 5 },
];

function Testimonials() {
  return (
    <SiteLayout>
      <Section eyebrow="Patient stories" title="What our patients say" description="Real reviews. Real smiles. Real transformations." align="center" />
      <section className="container-px mx-auto max-w-7xl pb-12">
        <div className="grid gap-6 rounded-3xl border border-border bg-gradient-card p-8 md:grid-cols-4 md:p-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow="Video stories" title="Hear from real patients">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <button key={i} className="group relative aspect-video overflow-hidden rounded-3xl bg-gradient-hero shadow-elegant">
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-elegant transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
              </span>
              <span className="absolute bottom-4 left-4 text-sm font-medium text-white">Patient story #{i}</span>
            </button>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-soft">
        <Section eyebrow="Google-style reviews" title="From verified patients">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.name} className="bg-card p-6 border-border/60">
                <Quote className="h-7 w-7 text-teal/50" />
                <p className="mt-3 text-sm leading-relaxed text-foreground">"{r.text}"</p>
                <div className="mt-4 flex gap-1 text-gold">
                  {[...Array(r.stars)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-hero" />
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground"><Link to="/contact">Become our next happy patient</Link></Button>
          </div>
        </Section>
      </section>
    </SiteLayout>
  );
}
