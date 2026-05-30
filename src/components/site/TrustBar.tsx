import { Award, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "ISO 9001 Certified" },
  { icon: Award, label: "EDA Member 2024" },
  { icon: Stethoscope, label: "15+ Specialists" },
  { icon: Sparkles, label: "12,000+ Smiles" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-card/40 backdrop-blur">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
            <Icon className="h-5 w-5 text-teal" />
            <span className="font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
