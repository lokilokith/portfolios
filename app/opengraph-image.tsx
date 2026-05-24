import { ImageResponse } from "next/og";

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
          padding: 64,
          background:
            "radial-gradient(circle at top left, rgba(79, 209, 255, 0.18), transparent 38%), linear-gradient(180deg, #0a111c 0%, #05070b 100%)",
          color: "#e5eef7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 20, letterSpacing: 4, textTransform: "uppercase", color: "#7dd3fc" }}>
              SOC Analyst Portfolio
            </div>
            <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, maxWidth: 820 }}>
              Lokith Duraisamy
            </div>
          </div>
          <div style={{ fontSize: 18, color: "#9bb0c4", maxWidth: 260, textAlign: "right" }}>
            SentinelTrace, SOC workflow visualization, and evidence-backed detection engineering
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[
            "Threat Detection",
            "SIEM Engineering",
            "Sysmon",
            "Wazuh",
            "MITRE ATT&CK",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "14px 18px",
                borderRadius: 999,
                border: "1px solid rgba(79, 209, 255, 0.22)",
                background: "rgba(79, 209, 255, 0.08)",
                color: "#e5eef7",
                fontSize: 22,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}