'use client';

interface SectionLabelProps {
  label: string;
  index?: number;
}

export default function SectionLabel({ label, index }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      {index !== undefined && (
        <span className="text-[11px] tracking-[0.15em] text-[var(--color-ink-tertiary)] font-mono">
          {String(index).padStart(2, '0')}
        </span>
      )}
      <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-ink-secondary)] font-medium">
        {label}
      </span>
    </div>
  );
}
