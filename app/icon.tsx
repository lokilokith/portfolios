import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #08111c 0%, #05070b 100%)",
          color: "#4fd1ff",
          fontSize: 20,
          fontWeight: 700,
          border: "1px solid rgba(79, 209, 255, 0.22)",
        }}
      >
        L
      </div>
    ),
    size,
  );
}