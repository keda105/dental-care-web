import { useRef, useState } from "react";
import smile from "@/assets/smile-closeup.jpg";

export function BeforeAfter({ before = smile, after = smile }: { before?: string; after?: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-elegant select-none"
      onMouseMove={(e) => onMove(e.clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
    >
      <img src={after} alt="After treatment" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={before} alt="Before treatment" className="h-full w-full object-cover saturate-50 contrast-95" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-glow"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-10 w-10 rounded-full bg-white shadow-elegant flex items-center justify-center text-primary font-bold">
          ⇆
        </div>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">BEFORE</span>
      <span className="absolute right-4 top-4 rounded-full bg-teal px-3 py-1 text-xs font-medium text-teal-foreground">AFTER</span>
    </div>
  );
}
