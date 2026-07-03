import { ImageResponse } from "next/og";

// Branded 1200×630 social-share image, generated at build time.
// Used for og:image and twitter:image across the site.
export const alt = "California Mantel & Fireplace — custom mantels & fireplaces since 1987";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", color: "#f59e0b", fontSize: 28, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>
          Family-owned since 1987
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginBottom: 28 }}>
          California Mantel &amp; Fireplace
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#d6d3d1", maxWidth: 900, lineHeight: 1.35 }}>
          Custom mantels, gas &amp; electric fireplaces. Showrooms in Anaheim, Dublin &amp; Sacramento.
        </div>
      </div>
    ),
    { ...size }
  );
}
