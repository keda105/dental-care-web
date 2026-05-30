import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Lumière Dental" },
      { name: "description", content: "Answers to common questions about treatments, insurance, payment plans, recovery and what to expect at Lumière Dental." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.flatMap((s) => s.items.map((q) => ({
            "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.a },
          }))),
        }),
      },
    ],
  }),
  component: FAQ,
});

const faqs = [
  {
    section: "Insurance & Payment",
    items: [
      { q: "Do you accept dental insurance?", a: "Yes — we work with major Albanian and international insurers. We'll handle the paperwork for you." },
      { q: "Do you offer payment plans?", a: "Absolutely. Flexible monthly plans from 0% APR for treatments over €1,000. We never want cost to stand between you and great care." },
      { q: "Which payment methods do you accept?", a: "Cash, card, bank transfer, Apple Pay, Google Pay and split payments." },
    ],
  },
  {
    section: "Treatments & Expectations",
    items: [
      { q: "Will my treatment be painful?", a: "We use modern anaesthesia, sedation options and gentle techniques. The vast majority of treatments are painless." },
      { q: "How long does a smile makeover take?", a: "Most makeovers are completed in 2–3 visits over 2–3 weeks, including a digital preview." },
      { q: "Can I see my results before starting?", a: "Yes — our Digital Smile Design service shows you a 3D preview of your new smile before any treatment begins." },
    ],
  },
  {
    section: "Recovery & Aftercare",
    items: [
      { q: "How long is recovery after implants?", a: "Most patients return to work the next day. Full osseointegration takes 3–6 months." },
      { q: "What is included in aftercare?", a: "Free post-treatment checkups, hygiene visits at preferred rates and 24/7 emergency phone support." },
      { q: "Do you offer warranties?", a: "Yes — implants come with a 10-year warranty and cosmetic restorations include a 5-year aesthetic warranty." },
    ],
  },
  {
    section: "International Patients",
    items: [
      { q: "Do you assist international patients?", a: "Yes — we offer concierge service including airport pickup, hotel booking and a dedicated coordinator who speaks English, Italian and Albanian." },
      { q: "What languages do your dentists speak?", a: "English, Albanian, Italian and basic German." },
    ],
  },
];

function FAQ() {
  return (
    <SiteLayout>
      <Section eyebrow="Helpful answers" title="Frequently asked questions" description="Everything you might want to know — and if not, just ask." align="center" />
      <section className="container-px mx-auto max-w-3xl pb-16">
        {faqs.map((s) => (
          <div key={s.section} className="mb-10">
            <h2 className="mb-4 font-display text-2xl font-semibold text-teal">{s.section}</h2>
            <Accordion type="single" collapsible>
              {s.items.map((it, i) => (
                <AccordionItem key={i} value={`${s.section}-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left font-display text-lg">{it.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{it.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
        <div className="rounded-3xl bg-gradient-hero p-10 text-center text-primary-foreground">
          <h3 className="font-display text-3xl font-semibold">Still have questions?</h3>
          <p className="mt-2 text-primary-foreground/80">Our team usually replies within 1 hour.</p>
          <Button asChild className="mt-6 bg-white text-primary hover:bg-white/90" size="lg"><Link to="/contact">Get in touch</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
