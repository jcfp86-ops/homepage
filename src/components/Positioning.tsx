import { positioning } from "@/content/site";

/**
 * The core positioning statement. Rendered from a single source so the
 * wording stays identical everywhere it appears.
 *
 * `variant`:
 *  - "hero"    — beside the homepage headline, on the navy band
 *  - "band"    — standalone block on a navy band
 *  - "ground"  — standalone block on the light ground
 */
export default function Positioning({
  variant = "ground",
}: {
  variant?: "hero" | "band" | "ground";
}) {
  const onBand = variant === "hero" || variant === "band";
  const soft = onBand ? "text-[var(--band-soft)]" : "text-[var(--ink-soft)]";

  return (
    <div className={variant === "hero" ? "" : "max-w-3xl"}>
      <p className="t-display-sm text-balance">
        {positioning.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <p className={`t-body-sm mt-6 max-w-xl ${soft}`}>{positioning.body}</p>
    </div>
  );
}
