import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, Smile, Sparkles, Timer } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ConsultationForm } from "@/components/site/ConsultationForm";

export const Route = createFileRoute("/implants")({
  head: () => ({
    meta: [
      { title: "Dental Implants — Lumière Dental" },
      { name: "description", content: "Permanent, natural-looking tooth replacement. Single implants, full-arch and All-on-4 solutions by certified specialists." },
      { property: "og:title", content: "Dental Implants" },
      { property: "og:url", content: "/implants" },
    ],
    links: [{ rel: "canonical", href: "/implants" }],
  }),
  component: Implants,
});

const benefits = ["Indistinguishable from natural teeth", "Preserves jawbone structure", "Eat anything you love", "Lifetime durability with care", "No impact on neighbouring teeth", "Restores facial structure"];
const steps = [
  { t: "Consultation & 3D scan", d: "We map your jawbone with CBCT imaging to plan a precise placement." },
  { t: "Implant placement", d: "Painless, computer-guided surgery in our sterile suite (1–2 hours)." },
  { t: "Healing phase", d: "Your implant integrates with bone over 3–6 months — most patients work normally." },
  { t: "Crown placement", d: "A custom porcelain crown is bonded — and you're smiling." },
];
const pricing = [
  { tier: "Single Implant", price: "€1,250", inc: ["Titanium implant", "Custom abutment", "Porcelain crown", "10-year warranty"] },
  { tier: "Multiple Implants", price: "€2,400", inc: ["2 implants", "Bridge restoration", "Bone graft if needed", "Sedation included"], featured: true },
  { tier: "All-on-4 Full Arch", price: "€8,900", inc: ["4 implants per arch", "Fixed full-arch bridge", "Same-day teeth", "Lifetime support"] },
];
const faqs = [
  { q: "Are dental implants painful?", a: "The procedure is performed under local anaesthesia (sedation optional). Most patients report little discomfort, easily managed with over-the-counter pain relief." },
  { q: "How long do implants last?", a: "With proper hygiene, dental implants can last a lifetime. Crowns may need replacement after 10–15 years." },
  { q: "Am I a candidate?", a: "Most healthy adults with adequate jawbone are candidates. We'll confirm with a 3D scan during your free consultation." },
  { q: "Do you offer financing?", a: "Yes — flexible monthly plans from 0% APR are available for treatments over €1,000." },
];

function Implants() {
  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-7xl pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs uppercase tracking-widest text-teal">Restorative</span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">Dental <span className="text-gradient">Implants</span> done right</h1>
            <p className="mt-6 text-lg text-muted-foreground">Permanent, beautiful, indistinguishable from natural teeth. Performed by ITI-certified surgeons with computer-guided precision.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground"><Link to="/contact">Book Free Consultation</Link></Button>
              <Button asChild size="lg" variant="outline"><a href="#pricing">View pricing</a></Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" />10-year warranty</div>
              <div className="flex items-center gap-2"><Timer className="h-4 w-4 text-teal" />Same-day teeth</div>
              <div className="flex items-center gap-2"><Smile className="h-4 w-4 text-teal" />1,500+ placed</div>
            </div>
          </div>
          <BeforeAfter />
        </div>
      </section>

      <Section eyebrow="Why implants" title="Benefits that last a lifetime">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal"><Check className="h-4 w-4" /></span>
              <span className="font-medium text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-soft">
        <Section eyebrow="The process" title="Your treatment, step by step">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.t} className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <div className="font-display text-4xl font-semibold text-teal">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section id="pricing" eyebrow="Transparent pricing" title="Investment in your smile">
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <Card key={p.tier} className={`p-8 ${p.featured ? "border-2 border-teal bg-gradient-hero text-primary-foreground shadow-elegant" : "bg-gradient-card"}`}>
              <h3 className="font-display text-xl font-semibold">{p.tier}</h3>
              <div className="mt-4 font-display text-4xl font-bold">{p.price}</div>
              <p className={`mt-1 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>Starting from</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.inc.map((i) => <li key={i} className="flex gap-2"><Sparkles className={`h-4 w-4 ${p.featured ? "text-white" : "text-teal"}`} />{i}</li>)}
              </ul>
              <Button asChild className={`mt-8 w-full ${p.featured ? "bg-white text-primary hover:bg-white/90" : "bg-primary"}`}>
                <Link to="/contact">Get a quote</Link>
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-soft">
        <Section eyebrow="FAQs" title="Questions about implants">
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </section>

      <Section eyebrow="Get started" title="Free implant consultation" description="Tell us about your needs and we'll prepare a personalized plan and quote." align="center">
        <div className="mx-auto max-w-2xl">
          <ConsultationForm topic="Dental Implants" />
        </div>
      </Section>
    </SiteLayout>
  );
}
