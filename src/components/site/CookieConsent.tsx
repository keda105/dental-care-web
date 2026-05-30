import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "lumiere_cookie_consent";

export function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(KEY)) {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  const accept = (v: "all" | "essential") => {
    localStorage.setItem(KEY, v);
    setShow(false);
  };
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-6 md:right-auto md:max-w-md animate-fade-up">
      <div className="rounded-2xl border border-border bg-card/95 p-5 shadow-elegant backdrop-blur-xl">
        <p className="text-sm text-foreground">
          We use cookies to improve your experience. You can accept all or only essential ones.
        </p>
        <div className="mt-3 flex gap-2">
          <Button size="sm" onClick={() => accept("all")} className="bg-primary">Accept all</Button>
          <Button size="sm" variant="outline" onClick={() => accept("essential")}>Essential only</Button>
        </div>
      </div>
    </div>
  );
}
