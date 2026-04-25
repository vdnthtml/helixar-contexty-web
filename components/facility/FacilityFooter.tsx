'use client';

import Link from 'next/link';

export default function FacilityFooter() {
  const voidTextColor = 'rgba(232, 228, 220, 0.4)';
  const voidTextHover = 'rgba(232, 228, 220, 0.8)';

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-void, #0A0908)',
        borderTop: '0.5px solid rgba(232, 228, 220, 0.1)',
        padding: '48px clamp(24px, 5vw, 120px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'start',
          gap: '40px',
        }}
      >
        {/* LEFT COL */}
        <div>
          {/* HELIXAR */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '0.06em',
              color: 'var(--color-void-text, #E8E4DC)',
            }}
          >
            HELIXAR
          </div>

          {/* Tagline */}
          <div
            style={{
              marginTop: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.06em',
              color: voidTextColor,
            }}
          >
            The agentic consulting firm.
          </div>

          {/* Social */}
          <Link
            href="https://x.com/HelixarAI"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: voidTextColor,
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = voidTextHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = voidTextColor;
            }}
          >
            @HelixarAI
          </Link>
        </div>

        {/* CENTER COL */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {['Overview', 'Research', 'Specimens'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: voidTextColor,
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = voidTextHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = voidTextColor;
              }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/labs"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: voidTextColor,
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = voidTextHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = voidTextColor;
            }}
          >
            Enter the Hall →
          </Link>
        </nav>

        {/* RIGHT COL */}
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: 'rgba(232, 228, 220, 0.3)',
            }}
          >
            v0.1.2026.04
          </div>
          <div
            style={{
              marginTop: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: 'rgba(232, 228, 220, 0.3)',
            }}
          >
            28.6139°N 77.2090°E
          </div>
          <div
            style={{
              marginTop: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(232, 228, 220, 0.3)',
            }}
          >
            CLASSIFICATION: PUBLIC
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '0.5px solid rgba(232, 228, 220, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(232, 228, 220, 0.25)',
          }}
        >
          © 2026 HELIXAR. ALL RIGHTS RESERVED.
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(232, 228, 220, 0.25)',
          }}
        >
          HELIXAR.PRO
        </span>
      </div>
    </footer>
  );
}
