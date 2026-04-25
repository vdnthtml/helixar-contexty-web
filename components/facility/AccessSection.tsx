'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AccessSection() {
  return (
    <section
      id="access"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        backgroundColor: 'var(--color-void, #0A0908)',
        overflow: 'hidden',
      }}
    >
      {/* Background Layer - Mech Knight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src="/images/Typography_Art_Pin.jpg"
          alt=""
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.04,
            filter: 'grayscale(100%)',
          }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          paddingLeft: 'clamp(24px, 5vw, 120px)',
          paddingRight: 'clamp(24px, 5vw, 120px)',
        }}
      >
        {/* Top Stamp */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginBottom: '64px',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(232, 228, 220, 0.3)',
          }}
        >
          HELIXAR RESEARCH FACILITY — INTAKE SYSTEM
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 6vw, 96px)',
            fontWeight: 300,
            lineHeight: 0.95,
            color: 'var(--color-void-text, #E8E4DC)',
            margin: 0,
          }}
        >
          This facility is
          <br />
          <span style={{ fontStyle: 'italic' }}>accepting intake.</span>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'rgba(232, 228, 220, 0.6)',
            marginTop: '32px',
            maxWidth: '480px',
          }}
        >
          Book a session with Vedant Swami, CEO and co-founder. First call is 30 minutes. No deck. No pitch. Diagnosis only.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginTop: '56px' }}
        >
          <Link
            href="https://cal.com/vedant"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-void-text, #E8E4DC)',
              backgroundColor: 'transparent',
              border: '0.5px solid rgba(232, 228, 220, 0.4)',
              padding: '18px 40px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(232, 228, 220, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(232, 228, 220, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(232, 228, 220, 0.4)';
            }}
          >
            REQUEST ACCESS →
          </Link>
        </motion.div>

        {/* Classification Stamps */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: '64px',
            display: 'flex',
            gap: '32px',
            opacity: 0.4,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-void-text, #E8E4DC)',
            }}
          >
            INTAKE REF: HLX-INT-001
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-void-text, #E8E4DC)',
            }}
          >
            CLASSIFICATION: PUBLIC
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-void-text, #E8E4DC)',
            }}
          >
            CAPACITY: LIMITED
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
