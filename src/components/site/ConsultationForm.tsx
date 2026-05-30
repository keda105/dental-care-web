import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Send } from "lucide-react";
import { toast } from "sonner";

const baseSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  message: z.string().trim().max(800).optional(),
});

const topics = ["General consultation", "Dental Implants", "Smile Makeover", "Teeth Whitening", "Orthodontics", "Emergency"];

export function ConsultationForm({ topic, appointment }: { topic?: string; appointment?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = baseSchema.safeParse(data);
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
    toast.success("Request received! We'll call you within 1 hour.");
    form.reset();
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-teal/40 bg-teal/10 p-8 text-center">
        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-teal-foreground"><Check className="h-7 w-7" /></div>
        <h3 className="font-display text-2xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">Your request has been received. Our team will be in touch shortly.</p>
        <Button onClick={() => setSent(false)} variant="outline" className="mt-6">Send another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required maxLength={80} placeholder="Jane Doe" className="mt-1.5" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required maxLength={200} placeholder="jane@email.com" className="mt-1.5" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" required maxLength={30} placeholder="+355 ..." className="mt-1.5" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <Label htmlFor="topic">Interest</Label>
          <Select defaultValue={topic ?? topics[0]} name="topic">
            <SelectTrigger id="topic" className="mt-1.5"><SelectValue /></SelectTrigger>
            <SelectContent>
              {topics.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        {appointment && (
          <>
            <div>
              <Label htmlFor="date">Preferred date</Label>
              <Input id="date" name="date" type="date" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="time">Preferred time</Label>
              <Input id="time" name="time" type="time" className="mt-1.5" />
            </div>
          </>
        )}
      </div>
      <div>
        <Label htmlFor="message">Tell us more (optional)</Label>
        <Textarea id="message" name="message" maxLength={800} rows={4} placeholder="Briefly describe your needs..." className="mt-1.5" />
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-hero text-primary-foreground shadow-soft">
        {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" />Request appointment</>}
      </Button>
      <p className="text-center text-xs text-muted-foreground">By submitting, you agree to our privacy policy. We never share your data.</p>
    </form>
  );
}
