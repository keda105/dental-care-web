import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:+35542220000"
        aria-label="Call clinic"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/35542220000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp chat"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110 animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
