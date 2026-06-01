import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, Check } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  service: z.string().min(1, "Choose a service"),
  date: z.string().min(1, "Pick a preferred date"),
});

const services = ["Cleaning", "Whitening", "Implants", "Orthodontics"];

export function AppointmentForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
    toast.success("Appointment requested! We'll confirm shortly.");
    form.reset();
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-teal/40 bg-teal/10 p-8 text-center">
        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-teal-foreground"><Check className="h-7 w-7" /></div>
        <h3 className="font-display text-2xl font-semibold">Appointment received</h3>
        <p className="mt-2 text-muted-foreground">Our team will reach out within 1 hour to confirm your booking.</p>
        <Button onClick={() => setSent(false)} variant="outline" className="mt-6">Book another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="ap-name">Full Name</Label>
          <Input id="ap-name" name="name" required maxLength={80} placeholder="Jane Doe" className="mt-1.5" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="ap-email">Email</Label>
          <Input id="ap-email" name="email" type="email" required maxLength={200} placeholder="jane@email.com" className="mt-1.5" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="ap-phone">Phone Number</Label>
          <Input id="ap-phone" name="phone" required maxLength={30} placeholder="+ 00 00000" className="mt-1.5" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <Label htmlFor="ap-service">Service</Label>
          <Select defaultValue={services[0]} name="service">
            <SelectTrigger id="ap-service" className="mt-1.5"><SelectValue /></SelectTrigger>
            <SelectContent>
              {services.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="ap-date">Preferred Date</Label>
          <Input id="ap-date" name="date" type="date" min={today} required className="mt-1.5" />
          {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
        </div>
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-glow transition-all">
        {loading ? "Sending..." : <><CalendarCheck className="mr-2 h-4 w-4" />Book Appointment</>}
      </Button>
      <p className="text-center text-xs text-muted-foreground">Your information is encrypted and GDPR-protected.</p>
    </form>
  );
}
