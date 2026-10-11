import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.discipline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#0a1e31";
const INK = "#f3f6f8";
const SOFT = "#9db0c2";
const ACCENT = "#86b4e4";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: NAVY,
          color: INK,
          padding: "72px 80px",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              background: INK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* The "F": spine crossed by two stage gates */}
            <div style={{ display: "flex", position: "relative", width: 24, height: 34 }}>
              <div style={{ position: "absolute", left: 0, top: 0, width: 5, height: 34, background: NAVY }} />
              <div style={{ position: "absolute", left: 0, top: 0, width: 23, height: 5, background: NAVY }} />
              <div style={{ position: "absolute", left: 0, top: 14.5, width: 16, height: 5, background: NAVY }} />
            </div>
          </div>
          <div style={{ fontSize: 30, letterSpacing: "-0.01em" }}>
            {site.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            {site.heroHeadline}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 27,
              lineHeight: 1.45,
              color: SOFT,
              maxWidth: 880,
            }}
          >
            We do not conclude at recommendations. We remain accountable for
            outcomes.
          </div>
        </div>

        {/* Markets */}
        <div
          style={{
            display: "flex",
            gap: 30,
            fontSize: 19,
            color: ACCENT,
            letterSpacing: "0.08em",
            borderTop: `1px solid #1c3a52`,
            paddingTop: 26,
          }}
        >
          <div>FDA 510(k)</div>
          <div>EU MDR</div>
          <div>UKCA</div>
          <div>IEC 62304</div>
          <div>ISO 13485</div>
        </div>
      </div>
    ),
    size,
  );
}
