"use client"
import { useEffect, useState } from "react"

export default function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("light")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Theme switching based on visible scene
    const scenes = document.querySelectorAll("[data-scene-theme]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = entry.target.getAttribute("data-scene-theme")
            setTheme(t === "light" ? "light" : "dark")
          }
        })
      },
      { threshold: 0.4 }
    )
    scenes.forEach((s) => observer.observe(s))

    // Scroll border trigger
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const isLight = theme === "light"
  const ink = isLight ? "#1A1916" : "#E8E4DC"
  const inkMuted = isLight ? "rgba(26,25,22,0.38)" : "rgba(232,228,220,0.38)"
  const borderColor = isLight ? "rgba(26,25,22,0.12)" : "rgba(232,228,220,0.12)"
  const bgColor = isLight
    ? "rgba(248,247,245,0.78)"
    : "rgba(10,9,8,0.78)"

  const links = ["Overview", "Research", "Specimens", "Labs"]

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        zIndex: 200,
        backgroundColor: bgColor,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled
          ? `0.5px solid ${borderColor}`
          : "0.5px solid transparent",
        transition: "background-color 0.5s ease, border-color 0.4s ease, color 0.5s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-mono, 'Courier New', monospace)",
            fontSize: "10px",
            letterSpacing: "0.06em",
            color: isLight ? "#FF5E2C" : "rgba(255,94,44,0.8)",
            transition: "color 0.5s ease",
            lineHeight: 1,
          }}
        >
          ◈
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist-mono, 'Courier New', monospace)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            color: ink,
            transition: "color 0.5s ease",
            textTransform: "uppercase" as const,
          }}
        >
          HELIXAR
        </span>
      </div>

      {/* Center links */}
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        {links.map((link) => (
          <span
            key={link}
            style={{
              position: "relative",
              fontFamily: "var(--font-geist-mono, monospace)",
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: inkMuted,
              cursor: "pointer",
              transition: "color 0.3s ease",
              paddingBottom: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = ink
              const line = e.currentTarget.querySelector(".nav-underline") as HTMLElement
              if (line) line.style.transform = "scaleX(1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = inkMuted
              const line = e.currentTarget.querySelector(".nav-underline") as HTMLElement
              if (line) line.style.transform = "scaleX(0)"
            }}
          >
            {link}
            <span
              className="nav-underline"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "0.5px",
                backgroundColor: ink,
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              }}
            />
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        style={{
          fontFamily: "var(--font-geist-mono, monospace)",
          fontSize: "8px",
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: ink,
          backgroundColor: "transparent",
          border: `0.5px solid ${isLight ? "rgba(26,25,22,0.28)" : "rgba(232,228,220,0.28)"}`,
          padding: "9px 20px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap" as const,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = ink
          e.currentTarget.style.color = isLight ? "#F8F7F5" : "#0A0908"
          e.currentTarget.style.borderColor = ink
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent"
          e.currentTarget.style.color = ink
          e.currentTarget.style.borderColor = isLight
            ? "rgba(26,25,22,0.28)"
            : "rgba(232,228,220,0.28)"
        }}
      >
        INITIATE INTAKE
      </button>
    </nav>
  )
}
