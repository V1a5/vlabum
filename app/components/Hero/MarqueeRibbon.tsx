"use client";

interface MarqueeRibbonProps {
  items: string[];
  separatorColor?: string;
  direction?: "left" | "right";
  speedSeconds?: number;
  className?: string;
}

export function MarqueeRibbon({
  items,
  separatorColor = "text-pale-cream",
  direction = "left",
  speedSeconds = 20,
  className = "",
}: MarqueeRibbonProps) {
  // Gandakan array 2x persis (2 track identik) agar loop -50% tersambung tanpa patah
  const trackItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden flex select-none">
      <div
        className={`flex shrink-0 items-center whitespace-nowrap will-change-transform ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } ${className}`}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {/* TRACK A */}
        <div className="flex shrink-0 items-center">
          {trackItems.map((text, idx) => (
            <span key={`a-${idx}`} className="inline-flex items-center">
              <span>{text}</span>
              <span className={`${separatorColor} font-bold mx-4 md:mx-6`}>
                +
              </span>
            </span>
          ))}
        </div>

        {/* TRACK B (Duplikat identik untuk sambungan loop 0% -> -50%) */}
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {trackItems.map((text, idx) => (
            <span key={`b-${idx}`} className="inline-flex items-center">
              <span>{text}</span>
              <span className={`${separatorColor} font-bold mx-4 md:mx-6`}>
                +
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}