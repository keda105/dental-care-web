import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, GraduationCap, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dentist1 from "@/assets/dentist-1.jpg";
import dentist2 from "@/assets/dentist-2.jpg";
import dentist3 from "@/assets/dentist-3.jpg";

export const Route = createFileRoute("/dentists")({
  head: () => ({
    meta: [
      { title: "Meet Our Dentists — Lumière Dental" },
      { name: "description", content: "Our internationally trained dental specialists — cosmetic, implant and orthodontic experts dedicated to your smile." },
      { property: "og:title", content: "Meet Our Dentists" },
      { property: "og:url", content: "/dentists" },
    ],
    links: [{ rel: "canonical", href: "/dentists" }],
  }),
  component: Dentists,
});

const team = [
  {
    img: dentist1,
    name: "Dr. Ana Rossi, DDS",
    role: "Cosmetic Dentistry & Veneers",
    bio: "12 years of experience in aesthetic dentistry. Trained at NYU College of Dentistry, specialising in digital smile design and porcelain veneers.",
    quals: ["DDS, NYU College of Dentistry", "Diploma in Aesthetic Dentistry, IAACD", "Digital Smile Design Master"],
  },
  {
    img: dentist2,
    name: "Dr. Liam Park, DMD",
    role: "Implant & Oral Surgery",
    bio: "ITI-certified implantologist with 1,500+ implants placed. Focus on full-arch rehabilitation and All-on-4® procedures.",
    quals: ["DMD, University of Pennsylvania", "ITI Implant Foundation", "Diplomate, ICOI"],
  },
  {
    img: dentist3,
    name: "Dr. Mira Chen, MSc",
    role: "Orthodontics & Invisalign",
    bio: "Invisalign Platinum Provider treating teens, adults and complex cases with discreet aligner therapy.",
    quals: ["MSc Orthodontics, King's College London", "Invisalign Platinum Provider", "AAO Member"],
  },
];

function Dentists() {
  return (
    <SiteLayout>
      <Section eyebrow="The team" title="Meet our dentists" description="Internationally trained specialists who treat every smile as a work of art." align="center" />
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {team.map((d) => (
            <Card key={d.name} className="group overflow-hidden border-border/60 bg-gradient-card flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" width={800} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-4 bottom-4 flex gap-2">
                  <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
                  <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
                  <a href="mailto:hello@lumieredental.com" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Mail className="h-4 w-4" /></a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                <p className="text-sm font-medium text-teal">{d.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                <ul className="mt-4 space-y-2">
                  {d.quals.map((q) => (
                    <li key={q} className="flex items-start gap-2 text-sm text-foreground">
                      <GraduationCap className="h-4 w-4 mt-0.5 text-teal" />{q}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-primary">
                  <Link to="/contact"><Sparkles className="mr-2 h-4 w-4" />Book consultation</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
