'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StatusDot from '../shared/StatusDot';
import { specimens } from '../../data/specimens';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const statusLabelColors = {
  active: '#22C55E',
  stabilizing: '#F59E0B',
  classified: 'var(--color-ink-tertiary)',
};

interface SpecimenCardProps {
  specimen: typeof specimens[0];
  index: number;
}

function SpecimenCard({ specimen, index }: SpecimenCardProps) {
  const isClassified = specimen.status === 'classified';
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.borderColor = 'var(--color-signal)';
      const arrow = cardRef.current.querySelector('.arrow-icon') as HTMLElement;
      if (arrow) {
        arrow.style.transform = 'translateX(4px)';
        arrow.style.color = 'var(--color-ink)';
      }
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.borderColor = 'var(--color-border)';
      const arrow = cardRef.current.querySelector('.arrow-icon') as HTMLElement;
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
        arrow.style.color = 'var(--color-ink-tertiary)';
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '0.5px solid var(--color-border)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.4s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Area */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '3/4',
        }}
      >
        {isClassified ? (
          <>
            {/* Black background with God Quote Image at 15% opacity */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#0A0908',
              }}
            >
              <Image
                src="/images/God_Quote_Image.jpg"
                alt="Background"
                fill
                style={{
                  objectFit: 'cover',
                  opacity: 0.15,
                  filter: 'grayscale(100%)',
                }}
                loading="lazy"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            {/* Clearance Required text */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink-tertiary)',
                }}
              >
                CLEARANCE REQUIRED
              </span>
            </div>
          </>
        ) : (
          <motion.div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={specimen.imageFile}
              alt={specimen.name}
              fill
              style={{
                objectFit: 'cover',
              }}
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 30vw"
            />
          </motion.div>
        )}

        {/* Scan Line Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px)',
          }}
        />
      </div>

      {/* Card Body */}
      <div style={{ padding: '20px 20px 24px' }}>
        {/* Specimen ID */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'var(--color-signal)',
            marginBottom: '8px',
          }}
        >
          {specimen.id}
        </div>

        {/* Specimen Name */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '26px',
            fontWeight: 300,
            color: 'var(--color-ink)',
            marginBottom: '4px',
            marginTop: 0,
          }}
        >
          {specimen.name}
        </h3>

        {/* Classification */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-tertiary)',
            marginBottom: '16px',
          }}
        >
          {specimen.classification}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '0.5px',
            backgroundColor: 'var(--color-border)',
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            lineHeight: 1.6,
            color: 'var(--color-ink-secondary)',
            marginTop: '14px',
            marginBottom: 0,
          }}
        >
          {specimen.description}
        </p>

        {/* Status Row */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Status Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <StatusDot status={specimen.status} size="xs" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: statusLabelColors[specimen.status],
              }}
            >
              {specimen.status}
            </span>
          </div>

          {/* Arrow */}
          <span
            className="arrow-icon"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              color: 'var(--color-ink-tertiary)',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
          >
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SpecimensSection() {
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
      id="specimens"
      style={{
        backgroundColor: 'var(--color-wall)',
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
          05 — ACTIVE SPECIMENS
        </motion.div>

        {/* Heading Row */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: '16px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            gap: isMobile ? '24px' : '0',
          }}
        >
          {/* Left: Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 60px)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: 'var(--color-ink)',
              margin: 0,
            }}
          >
            Currently running
            <br />
            <span style={{ fontStyle: 'italic' }}>in the facility.</span>
          </h2>

          {/* Right: Link */}
          <Link
            href="/labs"
            style={{
              alignSelf: isMobile ? 'flex-start' : 'flex-end',
              marginBottom: isMobile ? 0 : '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-secondary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-ink-secondary)';
            }}
          >
            → ENTER THE HALL
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: '48px',
            width: '100%',
            height: '0.5px',
            backgroundColor: 'var(--color-border)',
            transformOrigin: 'left',
          }}
        />

        {/* Specimens Grid - Responsive */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            marginTop: '48px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {specimens.map((specimen, index) => (
            <SpecimenCard key={specimen.id} specimen={specimen} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
