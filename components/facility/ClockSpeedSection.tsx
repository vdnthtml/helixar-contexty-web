'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Parse value like "3 days" to extract number and unit
function parseValue(value: string): { number: number; unit: string } {
  const match = value.match(/(\d+)/);
  const number = match ? parseInt(match[1], 10) : 0;
  const unit = value.replace(/\d+/, '').trim();
  return { number, unit };
}

function CountUpValue({ value, isInView }: { value: string; isInView: boolean }) {
  const { number, unit } = parseValue(value);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      });
      return controls.stop;
    }
  }, [isInView, number, count]);

  return (
    <span>
      <motion.span>{rounded}</motion.span> {unit}
    </span>
  );
}

const tableRows = [
  { activity: 'Diagnose', legacy: '4–8 weeks', helixar: '3 days' },
  { activity: 'Design', legacy: '4–8 weeks', helixar: '2 days' },
  { activity: 'Build', legacy: '3–9 months', helixar: '7 days' },
  { activity: 'Deploy', legacy: '2–4 months', helixar: '3 days' },
  { activity: 'Scale to vertical', legacy: '12 months', helixar: '3 weeks' },
];

export default function ClockSpeedSection() {
  const [isMobile, setIsMobile] = useState(false);
  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      style={{
        backgroundColor: 'var(--color-wall)',
        paddingTop: 'var(--space-11)',
        paddingBottom: 'var(--space-11)',
        paddingLeft: 'clamp(24px, 5vw, 120px)',
        paddingRight: 'clamp(24px, 5vw, 120px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)',
          gap: isMobile ? '48px' : '24px',
          width: '100%',
        }}
      >
        {/* LEFT SIDE (cols 1-5) */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            gridColumn: isMobile ? '1' : '1 / 6',
          }}
        >
          {/* Section ID */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-tertiary)',
            }}
          >
            03 — CLOCK SPEED
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--color-ink)',
              margin: '16px 0 0 0',
            }}
          >
            Speed is the only
            <br />
            <span style={{ fontStyle: 'italic' }}>moat that matters.</span>
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'var(--color-ink-secondary)',
              marginTop: '32px',
              maxWidth: '360px',
            }}
          >
            Legacy consulting will replicate the agentic model. We have an 18-month window. Every week not shipping is a week of that window closing.
          </motion.p>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              marginTop: '48px',
              width: isMobile ? '60%' : '80%',
              aspectRatio: '3/4',
              position: 'relative',
              opacity: 0.35,
            }}
          >
            <Image
              src="/images/Image_from_Viktor.jpg"
              alt="Glass anatomy"
              fill
              style={{
                objectFit: 'cover',
                filter: 'grayscale(100%)',
              }}
              loading="lazy"
              sizes="(max-width: 768px) 60vw, 25vw"
            />
          </motion.div>
        </motion.div>

        {/* CENTER (col 6) - empty gutter - desktop only */}
        {!isMobile && <div style={{ gridColumn: '6 / 7' }} />}

        {/* RIGHT SIDE (cols 7-12) */}
        <div style={{ gridColumn: isMobile ? '1' : '7 / 13' }}>
          {/* Table Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1.5fr 1fr 1fr' : '2fr 1fr 1fr',
              paddingBottom: '16px',
              borderBottom: '0.5px solid var(--color-border)',
              fontFamily: 'var(--font-mono)',
              fontSize: isMobile ? '8px' : '9px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            <div />
            <div style={{ color: 'var(--color-ink-tertiary)' }}>LEGACY</div>
            <div style={{ color: 'var(--color-signal)' }}>HELIXAR</div>
          </div>

          {/* Table Rows */}
          <motion.div
            ref={tableRef}
            variants={staggerContainer}
            initial="initial"
            animate={tableInView ? 'animate' : 'initial'}
          >
            {tableRows.map((row) => (
              <motion.div
                key={row.activity}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1.5fr 1fr 1fr' : '2fr 1fr 1fr',
                  padding: isMobile ? '16px 0' : '20px 0',
                  borderBottom: '0.5px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: isMobile ? '13px' : '14px',
                    color: 'var(--color-ink)',
                  }}
                >
                  {row.activity}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? '12px' : '14px',
                    color: 'var(--color-ink-tertiary)',
                    textDecoration: 'line-through',
                  }}
                >
                  {row.legacy}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? '12px' : '14px',
                    color: 'var(--color-ink)',
                    fontWeight: 500,
                  }}
                >
                  <CountUpValue value={row.helixar} isInView={tableInView} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Below table text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: isMobile ? '10px' : '11px',
              lineHeight: 1.6,
              color: 'var(--color-ink-secondary)',
              marginTop: '32px',
              maxWidth: '400px',
            }}
          >
            The absolute ceiling: no problem takes more than 14 days to go from discovery to deployed solution.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
