import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, HeartHandshake, Microscope, Target, Trophy } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/ui/card";
import clinic from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lumière Dental Clinic" },
      { name: "description", content: "Our story, mission and the team behind Lumière Dental — a modern clinic dedicated to elegant, lasting smiles." },
      { property: "og:title", content: "About Lumière Dental" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: HeartHandshake, title: "Compassion", text: "Every patient is welcomed as family — with patience, empathy and zero judgement." },
  { icon: Microscope, title: "Precision", text: "We invest in best-in-class equipment and continuous education." },
  { icon: Eye, title: "Transparency", text: "Clear treatment plans, honest pricing, no surprises." },
  { icon: Trophy, title: "Excellence", text: "We deliver museum-grade dentistry. Period." },
];

const tech = ["Digital 3D Smile Design", "CAD/CAM In-House Lab", "CBCT 3D Imaging", "Intraoral Scanners", "Laser Dentistry", "Sedation Suite"];
const certifications = ["ISO 9001:2015", "European Dental Association", "ITI Implant Foundation", "Invisalign Platinum Provider", "GDC Registered Specialists"];

function About() {
  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-7xl pt-16 pb-12 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs uppercase tracking-widest text-teal">Our story</span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
              Crafting confident <span className="text-gradient">smiles</span> since 2009
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Lumière Dental was founded with a single belief: that exceptional dentistry is both a science
              and an art. Over 15 years and 12,000+ patients later, we remain devoted to that ideal — blending
              the latest technology with timeless craft and human warmth.
            </p>
          </div>
          <div className="relative">
            <img src={clinic} width={1536} height={1024} loading="lazy" alt="Lumière clinic interior" className="rounded-3xl shadow-elegant w-full object-cover" />
          </div>
        </div>
      </section>

      <Section eyebrow="Mission & Vision" title="A modern dental sanctuary">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8 bg-gradient-card border-border/60">
            <Target className="h-7 w-7 text-teal" />
            <h3 className="mt-4 font-display text-2xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">To make world-class dental care accessible, predictable and beautifully comfortable — for every patient who walks through our doors.</p>
          </Card>
          <Card className="p-8 bg-gradient-card border-border/60">
            <Eye className="h-7 w-7 text-teal" />
            <h3 className="mt-4 font-display text-2xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">To be the most trusted destination for cosmetic and restorative dentistry across the region — known for craft, kindness and clinical excellence.</p>
          </Card>
        </div>
      </Section>

      <section className="bg-gradient-soft">
        <Section eyebrow="What we stand for" title="Our values">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <v.icon className="h-6 w-6 text-teal" />
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section eyebrow="Modern technology" title="Equipped for excellence" description="A fully digital workflow means faster appointments, fewer visits and predictably gorgeous results.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tech.map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-4">
              <Microscope className="h-5 w-5 text-teal" />
              <span className="font-medium text-foreground">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-soft">
        <Section eyebrow="Recognized" title="Certifications & awards">
          <div className="flex flex-wrap gap-4">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium">
                <Award className="h-4 w-4 text-gold" /> {c}
              </div>
            ))}
          </div>
        </Section>
      </section>
    </SiteLayout>
  );
}
