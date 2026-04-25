'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function CharterSection() {
  const [isMobile, setIsMobile] = useState(false);

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
      id="overview"
      style={{
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
              marginBottom: '48px',
            }}
          >
            02 — WHAT THIS IS
          </motion.div>

          {/* Main Display Heading */}
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: 'var(--color-ink)',
              margin: 0,
            }}
          >
            Built at the edge
            <br />
            of what agents
            <br />
            <span style={{ fontStyle: 'italic' }}>can do.</span>
          </motion.h2>

          {/* Body Paragraphs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              marginTop: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.75,
                color: 'var(--color-ink-secondary)',
                margin: 0,
                maxWidth: '440px',
              }}
            >
              We identify high-ROI bottlenecks inside B2B businesses, build autonomous agent systems to eliminate them, and deploy those systems across entire industry verticals.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.75,
                color: 'var(--color-ink-secondary)',
                margin: 0,
                maxWidth: '440px',
              }}
            >
              What Palantir does for governments at $10M over 7 years — we do for founders at $2,000 over two weeks.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.75,
                color: 'var(--color-ink-secondary)',
                margin: 0,
                maxWidth: '440px',
              }}
            >
              Every system we build goes into a library. The next client pays less. Gets more. The compound interest of proof.
            </p>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              marginTop: '40px',
              width: '100%',
              height: '0.5px',
              backgroundColor: 'var(--color-border)',
            }}
          />

          {/* Metadata Row */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '12px' : '32px',
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-tertiary)',
            }}
          >
            <span>FOUNDED — 2025</span>
            <span>VERTICAL 01 — MARKETING</span>
            <span>STATUS — ACTIVE</span>
          </motion.div>
        </motion.div>

        {/* CENTER (col 6) - empty gutter - desktop only */}
        {!isMobile && <div style={{ gridColumn: '6 / 7' }} />}

        {/* RIGHT SIDE (cols 7-12) */}
        <div
          style={{
            gridColumn: isMobile ? '1' : '7 / 13',
            position: 'relative',
            marginTop: isMobile ? '24px' : 0,
          }}
        >
          {/* Image 1 - Art_Pin.jpg (spine figure) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              width: isMobile ? '100%' : '100%',
              aspectRatio: '3/4',
              position: 'relative',
              zIndex: 2,
              marginRight: isMobile ? 0 : '-20px',
            }}
          >
            <Image
              src="/images/Art_Pin.jpg"
              alt="Spine figure"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </motion.div>

          {/* Image 2 - Statue_Pin.jpg (marble David with circuits) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              width: isMobile ? '45%' : '55%',
              aspectRatio: '1/1',
              position: 'absolute',
              bottom: isMobile ? '-20px' : '-40px',
              left: isMobile ? '-12px' : '-20px',
              zIndex: 3,
              border: '4px solid var(--color-wall)',
            }}
          >
            <Image
              src="/images/Statue_Pin.jpg"
              alt="Marble David with circuits"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              loading="lazy"
              sizes="(max-width: 768px) 45vw, 20vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
