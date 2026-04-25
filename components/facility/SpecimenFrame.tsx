'use client';

import { ReactNode } from 'react';

interface SpecimenFrameProps {
  children: ReactNode;
}

const cornerBracketStyle: React.CSSProperties = {
  position: 'absolute',
  width: '20px',
  height: '20px',
  borderColor: 'var(--color-ink-tertiary)',
  borderStyle: 'solid',
  borderWidth: 0,
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '9px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--color-ink-tertiary)',
  backgroundColor: 'var(--color-wall)',
  padding: '0 4px',
};

export default function SpecimenFrame({ children }: SpecimenFrameProps) {
  return (
    <div
      style={{
        position: 'relative',
        border: '0.5px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      {/* Corner Brackets */}
      {/* Top Left */}
      <span
        style={{
          ...cornerBracketStyle,
          top: '8px',
          left: '8px',
          borderTopWidth: '1px',
          borderLeftWidth: '1px',
        }}
      />
      {/* Top Right */}
      <span
        style={{
          ...cornerBracketStyle,
          top: '8px',
          right: '8px',
          borderTopWidth: '1px',
          borderRightWidth: '1px',
        }}
      />
      {/* Bottom Left */}
      <span
        style={{
          ...cornerBracketStyle,
          bottom: '8px',
          left: '8px',
          borderBottomWidth: '1px',
          borderLeftWidth: '1px',
        }}
      />
      {/* Bottom Right */}
      <span
        style={{
          ...cornerBracketStyle,
          bottom: '8px',
          right: '8px',
          borderBottomWidth: '1px',
          borderRightWidth: '1px',
        }}
      />

      {/* Top Label Bar */}
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 16px',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      >
        <span style={labelStyle}>SUBJECT: HLX-PRIME</span>
        <span style={labelStyle}>
          STATUS: OPERATIONAL{' '}
          <span style={{ color: '#22C55E' }}>●</span>
        </span>
      </div>

      {/* Content */}
      {children}

      {/* Bottom Label Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '-1px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 16px',
          transform: 'translateY(50%)',
          pointerEvents: 'none',
        }}
      >
        <span style={labelStyle}>28.6139°N 77.2090°E</span>
        <span style={labelStyle}>HELIXAR RESEARCH FACILITY v0.1</span>
      </div>
    </div>
  );
}
