import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ShieldAlert } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/site/ConsultationForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Lumière Dental" },
      { name: "description", content: "Book your dental appointment, call or visit our clinic. 24/7 emergency dental care available." },
      { property: "og:title", content: "Contact Lumière Dental" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const hours = [
  ["Monday – Friday", "08:00 – 20:00"],
  ["Saturday", "09:00 – 17:00"],
  ["Sunday", "Emergency only"],
];

function Contact() {
  return (
    <SiteLayout>
      <Section eyebrow="Get in touch" title="Book your visit" description="Choose your preferred time. We'll confirm within 1 hour, 24/7." align="center" />

      <section className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Card className="p-8 md:p-10 bg-gradient-card border-border/60">
            <h2 className="font-display text-2xl font-semibold">Appointment request</h2>
            <p className="mt-2 text-sm text-muted-foreground">All fields are required. Your data is encrypted and GDPR-protected.</p>
            <div className="mt-6"><ConsultationForm appointment /></div>
          </Card>

          <div className="space-y-5">
            <Card className="p-6 bg-card border-border/60">
              <h3 className="font-display text-lg font-semibold">Visit the clinic</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-teal mt-0.5" /><span>Rruga ...., City<br />County</span></li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-teal mt-0.5" /><a href="tel:+0000000" className="hover:text-foreground">+ 00 00000</a></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-teal mt-0.5" /><a href="mailto:email@dentalcare" className="hover:text-foreground">email@dentalcare</a></li>
              </ul>
            </Card>
            <Card className="p-6 bg-card border-border/60">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2"><Clock className="h-5 w-5 text-teal" />Opening hours</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {hours.map(([d, t]) => (
                  <li key={d} className="flex justify-between border-b border-border/60 pb-2 last:border-0"><span className="text-muted-foreground">{d}</span><span className="font-medium">{t}</span></li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 bg-gradient-hero text-primary-foreground border-0">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2"><ShieldAlert className="h-5 w-5" />Dental emergency?</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">Call our 24/7 emergency line. We always have a dentist on call.</p>
              <Button asChild className="mt-4 bg-white text-primary hover:bg-white/90 w-full">
                <a href="tel:+0000000"><Phone className="mr-2 h-4 w-4" />Emergency: + 00 00000</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Section eyebrow="Find us" title="On the map">
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Lumière Dental clinic location"
            src="https://www.google.com/maps?q=City,County&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </SiteLayout>
  );
}
