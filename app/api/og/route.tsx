import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "Trae Rules Directory"
    
    // Font
    const fontData = await fetch(
      new URL("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap", request.url)
    ).then((res) => res.arrayBuffer())
    
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 60,
            color: "white",
            background: "linear-gradient(to bottom right, #1f2937, #111827)",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#4B5563",
              borderRadius: "16px",
              padding: "20px 40px",
              marginBottom: "40px",
            }}
          >
            <span style={{ fontWeight: "bold", color: "#A78BFA" }}>TRAE</span>
            <span style={{ fontWeight: "bold", marginLeft: "10px" }}>RULES</span>
          </div>
          
          <div
            style={{
              fontSize: title.length > 30 ? 50 : 60,
              fontWeight: "bold",
              textAlign: "center",
              maxWidth: "90%",
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          
          <div
            style={{
              fontSize: 24,
              color: "#9CA3AF",
              marginTop: "20px",
            }}
          >
            A collection of AI coding rules to enhance your workflow
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
            weight: 400,
          },
          {
            name: "Inter",
            data: fontData,
            style: "normal",
            weight: 700,
          },
        ],
      }
    )
  } catch (e) {
    console.error(e)
    return new Response("Failed to generate OG image", { status: 500 })
  }
} 