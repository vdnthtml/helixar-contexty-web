"use client"

import { useRef, useEffect, useState } from "react"

export default function Scene01_Hero() {
  const videoRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [glitch, setGlitch] = useState(false)

  // Mouse parallax on video card
  useEffect(() => {
    const section = sectionRef.current
    const card = videoRef.current
    if (!section || !card) return
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      card.style.transform = `perspective(900px) rotateY(${dx * 3}deg) rotateX(${-dy * 2.5}deg) scale(1.01)`
    }
    const onLeave = () => {
      card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)"
    }
    section.addEventListener("mousemove", onMove)
    section.addEventListener("mouseleave", onLeave)
    return () => {
      section.removeEventListener("mousemove", onMove)
      section.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  // Periodic glitch pulse every ~4–7s
  useEffect(() => {
    const timerRef: { current: ReturnType<typeof setTimeout> | null } = { current: null }
    const schedule = () => {
      timerRef.current = setTimeout(() => {
        setGlitch(true)
        setTimeout(() => setGlitch(false), 160)
        schedule()
      }, 4000 + Math.random() * 3000)
    }
    schedule()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  const monoFont = "var(--font-geist-mono,'Courier New',monospace)"
  const serifFont = "'Cormorant Garamond',Georgia,serif"

  return (
    <>
      <style>{`
        @keyframes scanFlash {
          0%   { opacity: 0; top: 0; }
          30%  { opacity: 1; }
          100% { opacity: 0; top: 100%; }
        }
        @keyframes glitchH {
          0%   { clip-path: inset(40% 0 50% 0); transform: translateX(-4px); }
          25%  { clip-path: inset(10% 0 80% 0); transform: translateX(4px); }
          50%  { clip-path: inset(70% 0 10% 0); transform: translateX(-2px); }
          100% { clip-path: inset(0% 0 0% 0); transform: translateX(0); }
        }
      `}</style>

      <section
        ref={sectionRef}
        data-scene-theme="light"
        style={{ position:"relative", width:"100vw", height:"100vh", overflow:"hidden", backgroundColor:"#F8F7F5" }}
      >
        {/* Grid texture */}
        <div style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage:`linear-gradient(rgba(26,25,22,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(26,25,22,0.025) 1px,transparent 1px)`,
          backgroundSize:"80px 80px" }} />

        {/* Nav underline rule */}
        <div style={{ position:"absolute", top:"52px", left:0, right:0, height:"0.5px", backgroundColor:"rgba(26,25,22,0.07)", zIndex:5 }} />

        {/* 3-column grid */}
        <div style={{ position:"absolute", top:"52px", left:0, right:0, bottom:0,
          display:"grid", gridTemplateColumns:"1.15fr 1.7fr 1fr", gridTemplateRows:"1fr 1fr",
          padding:"44px 52px", gap:0, zIndex:10 }}>

          {/* TOP LEFT — HEADLINE */}
          <div style={{ gridColumn:"1", gridRow:"1", display:"flex", flexDirection:"column", justifyContent:"flex-start", paddingRight:"28px", paddingTop:"6px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"28px" }}>
              <div style={{ width:"16px", height:"0.5px", backgroundColor:"rgba(26,25,22,0.18)" }} />
              <span style={{ fontFamily:monoFont, fontSize:"8px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:"rgba(26,25,22,0.22)" }}>01 — The Facility</span>
            </div>
            <div>
              {["Intelligence","that moves","before you"].map(line => (
                <span key={line} style={{ display:"block", fontFamily:serifFont, fontSize:"clamp(30px,3.6vw,60px)", fontWeight:300, lineHeight:0.94, color:"#1A1916", letterSpacing:"-0.01em" }}>{line}</span>
              ))}
              <span style={{ display:"block", fontFamily:serifFont, fontSize:"clamp(30px,3.6vw,60px)", fontWeight:300, fontStyle:"italic", lineHeight:0.94, color:"#1A1916", letterSpacing:"-0.01em" }}>ask.</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginTop:"22px" }}>
              <div style={{ width:"20px", height:"0.5px", backgroundColor:"#FF5E2C" }} />
              <span style={{ fontFamily:monoFont, fontSize:"8px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:"#FF5E2C" }}>Helixar Research Facility</span>
            </div>
          </div>

          {/* CENTER — VIDEO (spans both rows) */}
          <div style={{ gridColumn:"2", gridRow:"1/3", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative" }}>
            {/* Ambient shadow */}
            <div style={{ position:"absolute", bottom:"8%", left:"10%", right:"10%", height:"60px",
              background:"radial-gradient(ellipse at center,rgba(0,0,0,0.18) 0%,transparent 70%)", filter:"blur(20px)", zIndex:0 }} />

            {/* Video card — parallax target */}
            <div ref={videoRef} style={{ position:"relative", width:"92%", aspectRatio:"9/14", overflow:"hidden", zIndex:1,
              backgroundColor:"#0A0908", transition:"transform 0.12s ease-out", willChange:"transform" }}>

              <video autoPlay muted loop playsInline
                style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}>
                <source src="/video/Instagram_Video_ECHO.mp4" type="video/mp4" />
              </video>

              {/* Glitch overlay */}
              {glitch && (
                <div style={{ position:"absolute", inset:0, zIndex:10, pointerEvents:"none",
                  animation:"glitchH 0.16s steps(1) forwards", background:"rgba(255,94,44,0.07)", mixBlendMode:"screen" as const }} />
              )}
              {/* Scan flash */}
              {glitch && (
                <div style={{ position:"absolute", left:0, right:0, top:0, height:"2px",
                  background:"rgba(255,255,255,0.22)", zIndex:11, animation:"scanFlash 0.16s linear forwards", pointerEvents:"none" }} />
              )}

              {/* Persistent scanlines */}
              <div style={{ position:"absolute", inset:0, pointerEvents:"none",
                backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.025) 3px,rgba(0,0,0,0.025) 4px)", zIndex:2 }} />
              {/* Bottom vignette */}
              <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"45%",
                background:"linear-gradient(to top,rgba(10,9,8,0.75) 0%,transparent 100%)", zIndex:3, pointerEvents:"none" }} />

              {/* HUD overlays */}
              <div style={{ position:"absolute", top:"12px", left:"12px", display:"flex", alignItems:"center", gap:"6px", zIndex:4 }}>
                <div style={{ width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#22C55E" }} />
                <span style={{ fontFamily:monoFont, fontSize:"7px", letterSpacing:"0.14em", textTransform:"uppercase" as const, color:"rgba(232,228,220,0.45)" }}>Active</span>
              </div>
              <div style={{ position:"absolute", top:"12px", right:"12px", zIndex:4, fontFamily:monoFont, fontSize:"7px", letterSpacing:"0.12em", textTransform:"uppercase" as const, color:"rgba(232,228,220,0.22)" }}>HLX-PRIME</div>
              <div style={{ position:"absolute", bottom:"12px", left:"12px", zIndex:4, fontFamily:monoFont, fontSize:"7px", letterSpacing:"0.14em", textTransform:"uppercase" as const, color:"rgba(232,228,220,0.32)" }}>Specimen active</div>
            </div>

            {/* Metrics */}
            <div style={{ display:"flex", gap:"36px", marginTop:"22px", zIndex:2 }}>
              {[{ label:"Posts published", value:"47" },{ label:"Meetings booked", value:"06" },{ label:"Founders active", value:"03" }].map(m => (
                <div key={m.label} style={{ textAlign:"center" }}>
                  <div style={{ fontFamily:monoFont, fontSize:"7px", letterSpacing:"0.14em", textTransform:"uppercase" as const, color:"rgba(26,25,22,0.28)", marginBottom:"5px" }}>{m.label}</div>
                  <div style={{ fontFamily:serifFont, fontSize:"34px", fontWeight:300, color:"rgba(26,25,22,0.55)", lineHeight:1, letterSpacing:"-0.01em" }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TOP RIGHT — CLAIM + CTA */}
          <div style={{ gridColumn:"3", gridRow:"1", display:"flex", flexDirection:"column", justifyContent:"flex-start", paddingLeft:"28px", paddingTop:"6px" }}>
            <div style={{ fontFamily:monoFont, fontSize:"7px", letterSpacing:"0.14em", textTransform:"uppercase" as const,
              color:"rgba(26,25,22,0.16)", marginBottom:"16px", borderTop:"0.5px solid rgba(26,25,22,0.08)", paddingTop:"14px" }}>
              Intake ref: HLX-INT-001
            </div>
            <p style={{ fontFamily:serifFont, fontSize:"14px", fontWeight:300, lineHeight:1.75, color:"rgba(26,25,22,0.52)", margin:"0 0 20px 0" }}>
              Agents that diagnose, build, and deploy. Your business, running itself.
            </p>
            <p style={{ fontFamily:serifFont, fontSize:"13px", fontWeight:300, lineHeight:1.7, color:"rgba(26,25,22,0.36)", margin:"0 0 28px 0" }}>
              What Palantir does for governments at $10M — we deliver in 14 days.
            </p>
            <button style={{ fontFamily:monoFont, fontSize:"9px", letterSpacing:"0.18em", textTransform:"uppercase" as const,
              color:"#F8F7F5", backgroundColor:"#1A1916", border:"none", padding:"14px 0", cursor:"pointer",
              width:"100%", textAlign:"center" as const, whiteSpace:"nowrap" as const, transition:"background-color 0.25s ease" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor="#000")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor="#1A1916")}>
              INITIATE INTAKE →
            </button>
            <button style={{ fontFamily:monoFont, fontSize:"8px", letterSpacing:"0.14em", textTransform:"uppercase" as const,
              color:"rgba(26,25,22,0.3)", backgroundColor:"transparent", border:"none", cursor:"pointer",
              display:"flex", alignItems:"center", gap:"10px", padding:"14px 0 0 0", transition:"color 0.25s ease" }}
              onMouseEnter={e => (e.currentTarget.style.color="rgba(26,25,22,0.65)")}
              onMouseLeave={e => (e.currentTarget.style.color="rgba(26,25,22,0.3)")}>
              <div style={{ width:"14px", height:"0.5px", backgroundColor:"rgba(26,25,22,0.18)" }} />
              See how it works
            </button>
          </div>

          {/* BOTTOM LEFT — PROOF */}
          <div style={{ gridColumn:"1", gridRow:"2", display:"flex", flexDirection:"column", justifyContent:"flex-end", paddingRight:"28px", paddingBottom:"8px" }}>
            <div style={{ fontFamily:monoFont, fontSize:"7px", letterSpacing:"0.14em", textTransform:"uppercase" as const,
              color:"rgba(26,25,22,0.16)", marginBottom:"14px", borderTop:"0.5px solid rgba(26,25,22,0.08)", paddingTop:"14px" }}>
              File ref: HLX-001 / Vertical: Marketing OS
            </div>
            <p style={{ fontFamily:serifFont, fontSize:"13px", fontWeight:300, lineHeight:1.8, color:"rgba(26,25,22,0.48)", maxWidth:"220px", marginBottom:"18px" }}>
              The agents are already running. Three founders. 47 posts published. 6 meetings booked this week. No one logged in once.
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
              <div style={{ width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#22C55E", flexShrink:0 }} />
              <span style={{ fontFamily:monoFont, fontSize:"8px", letterSpacing:"0.14em", textTransform:"uppercase" as const, color:"rgba(26,25,22,0.32)" }}>Operational — Accepting intake</span>
            </div>
          </div>

          {/* BOTTOM RIGHT — COORDINATES */}
          <div style={{ gridColumn:"3", gridRow:"2", display:"flex", flexDirection:"column", justifyContent:"flex-end", paddingLeft:"28px", paddingBottom:"8px" }}>
            <div style={{ fontFamily:monoFont, fontSize:"7px", letterSpacing:"0.1em", textTransform:"uppercase" as const,
              color:"rgba(26,25,22,0.14)", lineHeight:2, borderTop:"0.5px solid rgba(26,25,22,0.08)", paddingTop:"14px" }}>
              28.6139°N 77.2090°E<br />v0.1 — Apr 2026
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:"absolute", bottom:"28px", left:"50%", transform:"translateX(-50%)", zIndex:20, display:"flex", flexDirection:"column", alignItems:"center", gap:"8px" }}>
          <div style={{ width:"0.5px", height:"28px", backgroundColor:"rgba(26,25,22,0.14)" }} />
          <span style={{ fontFamily:monoFont, fontSize:"7px", letterSpacing:"0.2em", textTransform:"uppercase" as const, color:"rgba(26,25,22,0.18)" }}>Scroll</span>
        </div>
      </section>
    </>
  )
}
