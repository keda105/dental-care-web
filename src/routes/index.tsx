import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MessageSquare, Phone, Sparkles, ShieldCheck, Clock, Heart, Smile, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { TrustBar } from "@/components/site/TrustBar";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import hero from "@/assets/hero-smile.jpg";
import smile from "@/assets/smile-closeup.jpg";
import dentist1 from "@/assets/dentist-1.jpg";
import dentist2 from "@/assets/dentist-2.jpg";
import dentist3 from "@/assets/dentist-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Dental — Your Perfect Smile Starts Here" },
      { name: "description", content: "Premium dental clinic offering cosmetic dentistry, implants, orthodontics and emergency care. Book your free consultation today." },
      { property: "og:title", content: "Lumière Dental — Your Perfect Smile Starts Here" },
      { property: "og:description", content: "Premium dental clinic for families, professionals and international patients." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Smile, title: "Cosmetic Dentistry", text: "Veneers, whitening and smile design tailored to you." },
  { icon: Sparkles, title: "Dental Implants", text: "Permanent, natural-looking tooth replacement." },
  { icon: Heart, title: "Family & Pediatric", text: "Gentle care for every age, every smile." },
  { icon: ShieldCheck, title: "Orthodontics", text: "Invisible aligners and modern braces." },
];

const why = [
  { icon: Sparkles, title: "Award-winning specialists", text: "Internationally trained dentists with 10+ years of experience." },
  { icon: ShieldCheck, title: "Hospital-grade safety", text: "Sterilization protocols exceeding EU medical standards." },
  { icon: Clock, title: "Same-day treatment", text: "Digital scanning, CAD/CAM crowns and in-house lab." },
  { icon: Heart, title: "Patient-first comfort", text: "Sedation, noise-free chairs, and concierge international service." },
];

const reviews = [
  { name: "Elena M.", role: "Cosmetic patient", text: "The most beautiful clinic I've ever stepped into. My smile is completely transformed.", stars: 5 },
  { name: "Marco R.", role: "Implants patient", text: "Painless implant procedure. The team treats you like family.", stars: 5 },
  { name: "Sophia K.", role: "Family patient", text: "Our kids love coming here. The pediatric room is magical.", stars: 5 },
  { name: "Daniel H.", role: "Whitening patient", text: "8 shades whiter in a single visit — and absolutely no sensitivity. Highly recommended.", stars: 5 },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" aria-hidden className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-primary/70 to-black/60" />
          <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-teal/30 blur-3xl" />
        </div>
        <div className="container-px relative mx-auto max-w-7xl py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl animate-fade-up text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" /> Now welcoming new patients
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Professional Dental Care <span className="text-gradient">You Can Trust</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              A modern dental sanctuary combining precision technology, artistry and
              compassionate care — crafting confident smiles that last a lifetime.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant transition-all">
                <a href="#book"><CalendarCheck className="mr-2 h-4 w-4" />Book Appointment</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white">
                <Link to="/contact"><MessageSquare className="mr-2 h-4 w-4" />Free Consultation</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/80">
              <div className="flex -space-x-2">
                {[dentist1, dentist2, dentist3].map((d, i) => (
                  <img key={i} src={d} alt="" className="h-9 w-9 rounded-full border-2 border-white/80 object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  <span className="ml-1 font-semibold text-white">4.9</span>
                </div>
                <p className="text-xs">From 1,200+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <Section
        eyebrow="What we offer"
        title="Treatments crafted with precision"
        description="From routine care to full smile makeovers — every visit is built around your comfort and your goals."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="group p-6 bg-gradient-card border-border/60 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-teal transition-colors group-hover:bg-teal group-hover:text-teal-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary/30">
            <Link to="/services">All services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* WHY US */}
      <section className="bg-gradient-soft">
        <Section eyebrow="Why Lumière" title="The difference, in every detail">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <w.icon className="h-7 w-7 text-teal" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* BEFORE / AFTER */}
      <Section
        eyebrow="Real results"
        title="Before & after — slide to reveal"
        description="A glimpse of the smiles we've reshaped. See the full gallery for hundreds of cases."
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <BeforeAfter before={smile} after={smile} />
          <div>
            <h3 className="font-display text-3xl font-semibold">Smiles that change lives</h3>
            <p className="mt-4 text-muted-foreground">
              Our digital smile design process lets you preview your results before treatment begins —
              giving you confidence at every step.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["3D digital smile preview", "CAD/CAM in-house lab", "Pain-free guarantee", "Lifetime smile warranty"].map((i) => (
                <li key={i} className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-teal" />{i}</li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-primary">
              <Link to="/gallery">Browse the gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* DENTIST HIGHLIGHTS */}
      <Section eyebrow="Meet our team" title="Specialists who care, deeply">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: dentist1, name: "Dr. Ana Rossi", role: "Cosmetic & Veneers" },
            { img: dentist2, name: "Dr. Liam Park", role: "Implant Surgery" },
            { img: dentist3, name: "Dr. Mira Chen", role: "Orthodontics" },
          ].map((d) => (
            <Card key={d.name} className="overflow-hidden border-border/60 bg-gradient-card group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{d.name}</h3>
                <p className="text-sm text-teal">{d.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* EMERGENCY BANNER */}
      <section className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-14">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-widest">24/7</span>
              <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Dental emergency? We're on call.</h3>
              <p className="mt-3 text-primary-foreground/80">Toothache, broken tooth or trauma — call us anytime, day or night.</p>
            </div>
            <a href="tel:+0000000" className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-primary shadow-elegant transition-transform hover:scale-105">
              <Phone className="h-5 w-5" /> + 00 00000
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <Section eyebrow="Patient stories" title="Loved by 12,000+ smiling patients">
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} className="bg-gradient-card p-6 border-border/60">
              <div className="flex gap-1 text-gold">
                {[...Array(r.stars)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-hero" />
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 text-center md:p-16 shadow-soft">
          <h3 className="font-display text-4xl font-semibold md:text-5xl">Ready to meet your new smile?</h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Book a complimentary consultation. We'll design a plan tailored to your goals and budget.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
