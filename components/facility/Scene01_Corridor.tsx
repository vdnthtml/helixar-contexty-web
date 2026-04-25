"use client"

import Image from "next/image"

export default function Scene01_Corridor() {
  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0908",
      }}
      data-scene-theme="dark"
    >

      {/* LAYER 1: VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          zIndex: 1,
        }}
      >
        <source src="/video/Mechanical_Knight_Video_Generation.mp4" type="video/mp4" />
      </video>

      {/* LAYER 2: GRADIENT OVERLAYS */}
      {/* Left fade */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, bottom: 0,
        width: "38%",
        background: "linear-gradient(to right, #0A0908 0%, #0A0908 30%, transparent 100%)",
        zIndex: 2,
        pointerEvents: "none",
      }} />
      {/* Right fade */}
      <div style={{
        position: "absolute",
        top: 0, right: 0, bottom: 0,
        width: "38%",
        background: "linear-gradient(to left, #0A0908 0%, #0A0908 20%, transparent 100%)",
        zIndex: 2,
        pointerEvents: "none",
      }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "55%",
        background: "linear-gradient(to top, #0A0908 0%, rgba(10,9,8,0.7) 50%, transparent 100%)",
        zIndex: 2,
        pointerEvents: "none",
      }} />
      {/* Top fade */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "20%",
        background: "linear-gradient(to bottom, rgba(10,9,8,0.5) 0%, transparent 100%)",
        zIndex: 2,
        pointerEvents: "none",
      }} />

      {/* LAYER 3: SCAN LINES */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 3,
        pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)",
      }} />

      {/* LAYER 4: THREE COLUMN CONTENT */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr",
        alignItems: "end",
        padding: "60px 48px 52px 48px",
        gap: "40px",
      }}>

        {/* COLUMN 1: LEFT — Context */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0px",
        }}>

          {/* Scene label */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "24px",
          }}>
            <div style={{ width: "18px", height: "0.5px", backgroundColor: "rgba(232,228,220,0.2)" }} />
            <span style={{
              fontFamily: "var(--font-geist-mono, monospace)",
              fontSize: "8px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(232,228,220,0.2)",
            }}>01 — The Facility</span>
          </div>

          {/* Context paragraph */}
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "13px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(232,228,220,0.45)",
            maxWidth: "220px",
            marginBottom: "28px",
          }}>
            The agents are already running. Three founders. 47 posts published. 6 meetings booked this week. No one logged in once.
          </p>

          {/* Status */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <div style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#22C55E",
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "var(--font-geist-mono, monospace)",
              fontSize: "8px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(232,228,220,0.3)",
            }}>Operational — Accepting intake</span>
          </div>

        </div>

        {/* COLUMN 2: CENTER — Heading + CTA */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}>

          {/* Orange label */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}>
            <div style={{ width: "22px", height: "0.5px", backgroundColor: "#FF5E2C" }} />
            <span style={{
              fontFamily: "var(--font-geist-mono, monospace)",
              fontSize: "8px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FF5E2C",
            }}>Helixar Research Facility</span>
          </div>

          {/* Main heading */}
          <div style={{ marginBottom: "22px" }}>
            <span style={{
              display: "block",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(38px, 4.2vw, 68px)",
              fontWeight: 300,
              lineHeight: 0.93,
              color: "#E8E4DC",
              letterSpacing: "-0.01em",
            }}>The bottleneck</span>
            <span style={{
              display: "block",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(38px, 4.2vw, 68px)",
              fontWeight: 300,
              lineHeight: 0.93,
              color: "#E8E4DC",
              letterSpacing: "-0.01em",
            }}>in your business</span>
            <span style={{
              display: "block",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(38px, 4.2vw, 68px)",
              fontWeight: 300,
              lineHeight: 0.93,
              color: "#E8E4DC",
              letterSpacing: "-0.01em",
            }}>is already</span>
            <span style={{
              display: "block",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(38px, 4.2vw, 68px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.93,
              color: "#E8E4DC",
              letterSpacing: "-0.01em",
            }}>solved.</span>
          </div>

          {/* Sub copy */}
          <p style={{
            fontFamily: "var(--font-geist-sans, system-ui)",
            fontSize: "13px",
            lineHeight: 1.7,
            color: "rgba(232,228,220,0.45)",
            maxWidth: "280px",
            marginBottom: "32px",
          }}>
            We identify it. We build the system. We deploy it. What took legacy consultants 7 years — we deliver in two weeks.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-start",
          }}>

            {/* Primary CTA */}
            <button
              style={{
                fontFamily: "var(--font-geist-mono, monospace)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#0A0908",
                backgroundColor: "#E8E4DC",
                border: "none",
                padding: "13px 28px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#ffffff")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#E8E4DC")}
            >
              REQUEST ACCESS →
            </button>

            {/* Secondary CTA */}
            <button
              style={{
                fontFamily: "var(--font-geist-mono, monospace)",
                fontSize: "9px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(232,228,220,0.35)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "4px 0",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(232,228,220,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,228,220,0.35)")}
            >
              <div style={{ width: "16px", height: "0.5px", backgroundColor: "rgba(232,228,220,0.25)" }} />
              See how it works
            </button>

          </div>
        </div>

        {/* COLUMN 3: RIGHT — Live metrics */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          gap: "0px",
        }}>

          {/* Metrics */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-end",
            marginBottom: "28px",
          }}>

            {[
              { label: "Posts published", value: "47" },
              { label: "Meetings booked", value: "06" },
              { label: "Founders active", value: "03" },
            ].map((m) => (
              <div key={m.label} style={{ textAlign: "right" }}>
                <div style={{
                  fontFamily: "var(--font-geist-mono, monospace)",
                  fontSize: "7px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(232,228,220,0.2)",
                  marginBottom: "4px",
                }}>{m.label}</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "rgba(232,228,220,0.65)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}>{m.value}</div>
              </div>
            ))}

          </div>

          {/* Coordinate stamp */}
          <div style={{
            fontFamily: "var(--font-geist-mono, monospace)",
            fontSize: "7px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(232,228,220,0.15)",
            textAlign: "right",
            lineHeight: 2,
          }}>
            28.6139°N 77.2090°E<br />
            v0.1 — Apr 2026<br />
            Classification: Public
          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div style={{
        position: "absolute",
        bottom: "52px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}>
        <div style={{
          width: "0.5px",
          height: "36px",
          backgroundColor: "rgba(232,228,220,0.18)",
        }} />
        <span style={{
          fontFamily: "var(--font-geist-mono, monospace)",
          fontSize: "7px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(232,228,220,0.18)",
        }}>Scroll</span>
      </div>

    </section>
  )
}
