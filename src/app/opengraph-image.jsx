import { ImageResponse } from "next/og";

export const alt = "WebHjerte – webbureau i Horsens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0d0d",
          padding: 72,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 700 }}>
          Web<span style={{ color: "#00a8e8" }}>Hjerte</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
            Webbureau i Horsens
          </div>
          <div style={{ fontSize: 36, color: "#00a8e8", marginTop: 20 }}>
            Hjemmesider med fast pris – live på 14 dage
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8a9696" }}>
          webhjerte.dk · Fra 2.500 kr · Direkte kontakt med udvikleren
        </div>
      </div>
    ),
    { ...size },
  );
}
