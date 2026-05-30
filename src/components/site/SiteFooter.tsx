import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-soft">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <div className="font-display text-2xl font-semibold">
              Lumi<span className="text-teal">ère</span> Dental
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A modern dental sanctuary dedicated to creating confident, healthy smiles for families,
              professionals and international patients since 2009.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="mt-6 flex max-w-sm gap-2"
            >
              <Input type="email" required placeholder="Your email" aria-label="Email for newsletter" />
              <Button type="submit" className="bg-primary">Subscribe</Button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">Smile insights, monthly. No spam.</p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-teal" /> Rruga e Kavajës 27, Tirana, Albania</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-teal" /> +355 4 222 0000</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-teal" /> hello@lumieredental.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/implants" className="hover:text-foreground">Dental Implants</Link></li>
              <li><Link to="/cosmetic" className="hover:text-foreground">Smile Makeover</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground">Before & After</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <Shield className="h-3.5 w-3.5" /> © {new Date().getFullYear()} Lumière Dental Clinic. GDPR compliant.
          </p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a aria-label="Facebook" href="#" className="hover:text-foreground"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Instagram" href="#" className="hover:text-foreground"><Instagram className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
