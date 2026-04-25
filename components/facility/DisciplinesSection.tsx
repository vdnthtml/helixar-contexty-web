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
      staggerChildren: 0.15,
    },
  },
};

// Parse metric value for count-up animation
function parseMetricValue(value: string): { number: number; suffix: string } {
  const match = value.match(/(\d+)/);
  const number = match ? parseInt(match[1], 10) : 0;
  const suffix = value.replace(/\d+/, '').trim();
  return { number, suffix };
}

function CountUpMetric({ value, isInView }: { value: string; isInView: boolean }) {
  const { number, suffix } = parseMetricValue(value);
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
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

interface DisciplineColumnProps {
  number: string;
  heading: string;
  body: string;
  metricLabel: string;
  metricValue: string;
  image?: string;
  padding: string;
  borderRight: boolean;
  borderBottom?: boolean;
  isInView: boolean;
  index: number;
}

function DisciplineColumn({
  number,
  heading,
  body,
  metricLabel,
  metricValue,
  image,
  padding,
  borderRight,
  borderBottom,
  isInView,
  index,
}: DisciplineColumnProps) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
      style={{
        padding,
        borderRight: borderRight ? '0.5px solid var(--color-border)' : 'none',
        borderBottom: borderBottom ? '0.5px solid var(--color-border)' : 'none',
      }}
    >
      {/* Number */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.1em',
          color: 'var(--color-ink-tertiary)',
        }}
      >
        {number}
      </div>

      {/* Image (Build column only) */}
      {image && (
        <div
          style={{
            width: '100%',
            aspectRatio: '3/4',
            position: 'relative',
            marginBottom: '32px',
            marginTop: '24px',
          }}
        >
          <Image
            src={image}
            alt="Data streams"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
            loading="lazy"
            sizes="(max-width: 768px) 90vw, 30vw"
          />
        </div>
      )}

      {/* Heading */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '36px',
          fontWeight: 300,
          color: 'var(--color-ink)',
          marginTop: image ? '0' : '24px',
          marginBottom: 0,
        }}
      >
        {heading}
      </h3>

      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: '0.5px',
          backgroundColor: 'var(--color-border)',
          margin: '24px 0',
        }}
      />

      {/* Body */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          lineHeight: 1.75,
          color: 'var(--color-ink-secondary)',
          margin: 0,
        }}
      >
        {body}
      </p>

      {/* Metric */}
      <div style={{ marginTop: '32px' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-tertiary)',
          }}
        >
          {metricLabel}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '28px',
            color: 'var(--color-ink)',
            marginTop: '4px',
          }}
        >
          <CountUpMetric value={metricValue} isInView={isInView} />
        </div>
      </div>
    </motion.div>
  );
}

export default function DisciplinesSection() {
  const [isMobile, setIsMobile] = useState(false);
  const columnsRef = useRef(null);
  const columnsInView = useInView(columnsRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const columns = [
    {
      number: '01',
      heading: 'Diagnose',
      body: 'One call. Three days. We map the bottleneck worth $10k–$100k per month inside your business. No assumptions — we look at the actual data.',
      metricLabel: 'TIME TO DIAGNOSIS',
      metricValue: '3 days',
      image: '/images/Acrilico_Pin.jpg',
      padding: isMobile ? '0 0 48px 0' : '0 40px 0 0',
      borderRight: isMobile ? false : true,
      borderBottom: isMobile ? true : false,
    },
    {
      number: '02',
      heading: 'Build',
      body: '5–10 days. A working autonomous system — not a prototype, not a deck. Running software that does the job. Built on your data, trained on your voice.',
      metricLabel: 'TIME TO DEPLOYMENT',
      metricValue: '7 days',
      image: '/images/God_Quote_Image.jpg',
      padding: isMobile ? '48px 0' : '0 40px',
      borderRight: isMobile ? false : true,
      borderBottom: isMobile ? true : false,
    },
    {
      number: '03',
      heading: 'Deploy',
      body: '2–5 days embedded. The system integrates with your existing tools. We stay until it\'s generating results — meetings booked, content live, pipeline moving.',
      metricLabel: 'MEETINGS BOOKED / MONTH',
      metricValue: '4–20',
      image: '/images/Visual.jpg',
      padding: isMobile ? '48px 0 0 0' : '0 0 0 40px',
      borderRight: false,
      borderBottom: false,
    },
  ];

  return (
    <section
      id="research"
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
          04 — RESEARCH
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
            lineHeight: 1.0,
            color: 'var(--color-ink)',
            marginTop: '16px',
            marginBottom: 0,
            maxWidth: '600px',
          }}
        >
          Three disciplines.
          <br />
          <span style={{ fontStyle: 'italic' }}>One engagement.</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: '64px',
            width: '100%',
            height: '0.5px',
            backgroundColor: 'var(--color-border)',
            transformOrigin: 'left',
          }}
        />

        {/* Three Column Grid - Responsive */}
        <motion.div
          ref={columnsRef}
          variants={staggerContainer}
          initial="initial"
          animate={columnsInView ? 'animate' : 'initial'}
          style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
            gap: 0,
          }}
        >
          {columns.map((col, index) => (
            <DisciplineColumn
              key={col.number}
              number={col.number}
              heading={col.heading}
              body={col.body}
              metricLabel={col.metricLabel}
              metricValue={col.metricValue}
              image={col.image}
              padding={col.padding}
              borderRight={col.borderRight}
              borderBottom={col.borderBottom}
              isInView={columnsInView}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
