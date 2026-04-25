'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

interface FieldRowProps {
  label: string;
  value: string;
  isRedacted?: boolean;
}

function FieldRow({ label, value, isRedacted }: FieldRowProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-tertiary)',
        }}
      >
        {label}
      </span>
      {isRedacted ? (
        <span style={{ fontSize: '12px', color: 'var(--color-ink)' }}>████████████</span>
      ) : (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--color-ink)',
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
}

interface MetricRowProps {
  label: string;
  value: string;
}

function MetricRow({ label, value }: MetricRowProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'var(--color-ink-secondary)',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '20px',
          color: 'var(--color-ink)',
          fontWeight: 500,
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function CaseFilesSection() {
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
      style={{
        backgroundColor: 'var(--color-white)',
        paddingTop: 'var(--space-11)',
        paddingBottom: 'var(--space-11)',
        paddingLeft: 'clamp(24px, 5vw, 120px)',
        paddingRight: 'clamp(24px, 5vw, 120px)',
      }}
    >
      <div style={{ width: '100%' }}>
        {/* Section ID */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-tertiary)',
          }}
        >
          06 — CASE FILES
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 72px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-ink)',
            marginTop: '16px',
            marginBottom: 0,
          }}
        >
          The evidence.
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: 'var(--color-ink-secondary)',
            marginTop: '16px',
            maxWidth: '440px',
          }}
        >
          Client identities redacted pending authorization. Outcomes verified.
        </motion.p>

        {/* Content Area */}
        <div
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '48px' : '80px',
            alignItems: 'start',
          }}
        >
          {/* LEFT — Case File Document */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '0.5px solid var(--color-border)',
              padding: '40px',
            }}
          >
            {/* File Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '24px',
                borderBottom: '0.5px solid var(--color-border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink-tertiary)',
                }}
              >
                CASE FILE
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.1em',
                  color: 'var(--color-ink-tertiary)',
                }}
              >
                ⬛ REDACTED
              </span>
            </div>

            {/* Field Rows */}
            <div
              style={{
                marginTop: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <FieldRow label="CLIENT" value="" isRedacted />
              <FieldRow label="VERTICAL" value="B2B SaaS" />
              <FieldRow label="ENGAGEMENT" value="2025.Q4" />
              <FieldRow label="DURATION" value="90 days" />
            </div>

            {/* Divider */}
            <div
              style={{
                width: '100%',
                height: '0.5px',
                backgroundColor: 'var(--color-border)',
                margin: '24px 0',
              }}
            />

            {/* Outcome Label */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-tertiary)',
                marginBottom: '20px',
              }}
            >
              OUTCOME AT DAY 90
            </div>

            {/* Metric Rows */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <MetricRow label="Meetings booked / month" value="+340%" />
              <MetricRow label="Founder time saved" value="16 hrs / week" />
              <MetricRow label="Pipeline generated (Day 90)" value="$180,000" />
            </div>

            {/* Quote Block */}
            <div
              style={{
                marginTop: '32px',
                padding: '20px',
                borderLeft: '2px solid var(--color-signal)',
                backgroundColor: 'var(--color-signal-dim, rgba(33, 128, 141, 0.08))',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontStyle: 'italic',
                  color: 'var(--color-ink)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                "The system replaced 3 people and costs less than one. I don't post anymore — it posts for me."
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.1em',
                  color: 'var(--color-ink-tertiary)',
                  marginTop: '12px',
                  marginBottom: 0,
                }}
              >
                — FOUNDER, B2B SAAS [IDENTITY REDACTED]
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Image */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '2/3',
                position: 'relative',
              }}
            >
              <Image
                src="/images/Mainframe_Synframe_07.jpg"
                alt="Deployed system"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
                loading="lazy"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
            {/* Image Caption */}
            <div
              style={{
                marginTop: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-tertiary)',
              }}
            >
              DEPLOYED SYSTEM — VERTICAL 01
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
