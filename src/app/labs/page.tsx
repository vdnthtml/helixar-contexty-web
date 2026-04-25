'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import StatusDot from '../../../components/shared/StatusDot';
import { specimens } from '../../../data/specimens';

const statusLabelColors = {
  active: '#22C55E',
  stabilizing: '#F59E0B',
  classified: '#504E4A',
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
      cardRef.current.style.backgroundColor = '#111009';
      const dossier = cardRef.current.querySelector('.dossier-link') as HTMLElement;
      if (dossier) {
        dossier.style.color = '#E8E4DC';
      }
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.backgroundColor = '#0A0908';
      const dossier = cardRef.current.querySelector('.dossier-link') as HTMLElement;
      if (dossier) {
        dossier.style.color = '#504E4A';
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{
        backgroundColor: '#0A0908',
        padding: '40px 32px',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '32px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--color-signal)',
          }}
        >
          {specimen.id}
        </span>
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
      </div>

      {/* Image Area */}
      <div
        style={{
          aspectRatio: '3/4',
          overflow: 'hidden',
          marginBottom: '28px',
          position: 'relative',
        }}
      >
        {isClassified ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#0A0908',
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
                color: '#504E4A',
                opacity: 0.3,
              }}
            >
              CLASSIFIED
            </span>
          </div>
        ) : (
          <Image
            src={specimen.imageFile}
            alt={specimen.name}
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 768px) 90vw, 30vw"
          />
        )}

        {/* Scan Line Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
          }}
        />

        {/* Specimen ID Watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '52px',
            fontWeight: 300,
            color: 'rgba(232, 228, 220, 0.06)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          {specimen.id}
        </div>
      </div>

      {/* Specimen Name */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '32px',
          fontWeight: 300,
          color: '#E8E4DC',
          marginBottom: '8px',
          marginTop: 0,
        }}
      >
        {specimen.name}
      </h3>

      {/* Classification */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#504E4A',
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
          backgroundColor: '#2A2824',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          lineHeight: 1.6,
          color: '#8A8680',
          marginTop: '16px',
          marginBottom: 0,
        }}
      >
        {specimen.description}
      </p>

      {/* Footer Row */}
      <div
        style={{
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          className="dossier-link"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#504E4A',
            transition: 'color 0.3s ease',
          }}
        >
          READ DOSSIER →
        </span>
      </div>
    </motion.div>
  );
}

export default function LabsPage() {
  return (
    <div data-theme="labs" style={{ backgroundColor: '#0A0908', minHeight: '100vh' }}>
      {/* Labs Nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '56px',
          backgroundColor: 'rgba(10, 9, 8, 0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '0.5px solid #2A2824',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Left: Logo + Back Link */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#E8E4DC',
            }}
          >
            HELIXAR
            <span style={{ color: 'var(--color-signal)' }}> / LABS</span>
          </span>
          <Link
            href="/"
            style={{
              marginLeft: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: '#504E4A',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#8A8680';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#504E4A';
            }}
          >
            ← FACILITY
          </Link>
        </div>

        {/* Right: Specimen Count */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#504E4A',
          }}
        >
          SPECIMEN COUNT: 03
        </span>
      </nav>

      {/* Labs Hero */}
      <section
        style={{
          paddingTop: 'calc(56px + 96px)',
          paddingBottom: '96px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#504E4A',
          }}
        >
          SPECIMEN HALL
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 6vw, 88px)',
            fontWeight: 300,
            lineHeight: 0.95,
            color: '#E8E4DC',
            marginTop: '24px',
            marginBottom: 0,
          }}
        >
          Agents currently
          <br />
          <span style={{ fontStyle: 'italic' }}>in development.</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.06em',
            color: '#8A8680',
            maxWidth: '400px',
            margin: '24px auto 0',
          }}
        >
          Each specimen is a running autonomous system. Click to read the full dossier.
        </p>
      </section>

      {/* Specimen Grid */}
      <section
        style={{
          padding: '0 clamp(24px, 5vw, 80px) 160px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            backgroundColor: '#2A2824',
            border: '1px solid #2A2824',
          }}
        >
          {specimens.map((specimen, index) => (
            <SpecimenCard key={specimen.id} specimen={specimen} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
