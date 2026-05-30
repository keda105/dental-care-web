import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Baby, Bone, Brush, Crown, Heart, Scissors, ShieldAlert, Smile, Sparkles, Stethoscope } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lumière Dental" },
      { name: "description", content: "Full-spectrum dental services: cosmetic dentistry, implants, orthodontics, whitening, pediatric care and emergency dentistry." },
      { property: "og:title", content: "Our Services — Lumière Dental" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Stethoscope, title: "General Dentistry", text: "Check-ups, cleanings, fillings and preventive care.", link: "/services" },
  { icon: Sparkles, title: "Cosmetic Dentistry", text: "Smile makeovers, veneers and bonding.", link: "/cosmetic" },
  { icon: Bone, title: "Dental Implants", text: "Single tooth, multiple, and All-on-4 solutions.", link: "/implants" },
  { icon: Brush, title: "Teeth Whitening", text: "In-office and take-home whitening systems.", link: "/services" },
  { icon: Smile, title: "Veneers", text: "Hand-crafted porcelain veneers for a flawless smile.", link: "/cosmetic" },
  { icon: Crown, title: "Orthodontics", text: "Invisalign aligners and modern braces.", link: "/services" },
  { icon: Scissors, title: "Root Canal", text: "Painless endodontic treatment with rotary tech.", link: "/services" },
  { icon: Baby, title: "Pediatric Dentistry", text: "Gentle dental care for kids and teens.", link: "/services" },
  { icon: Heart, title: "Oral Surgery", text: "Wisdom teeth, extractions and bone grafting.", link: "/services" },
  { icon: ShieldAlert, title: "Emergency Dentistry", text: "Same-day urgent care, 24/7 on-call team.", link: "/contact" },
];

function Services() {
  return (
    <SiteLayout>
      <Section eyebrow="Treatments" title="A full spectrum of care" description="From your first checkup to your dream smile — we handle every step under one elegant roof." align="center" />
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group p-7 bg-gradient-card border-border/60 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-gradient-hero group-hover:text-primary-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <Link to={s.link} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-16 rounded-3xl bg-gradient-hero p-10 text-center text-primary-foreground md:p-14">
          <h3 className="font-display text-3xl font-semibold md:text-4xl">Not sure where to start?</h3>
          <p className="mt-3 text-primary-foreground/80">Book a free consultation and we'll guide you to the right plan.</p>
          <Button asChild className="mt-6 bg-white text-primary hover:bg-white/90" size="lg">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
