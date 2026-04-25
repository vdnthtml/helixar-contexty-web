'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface PricingCardProps {
  tierLabel: string;
  price: string;
  buildFee: string;
  features: string[];
  forText: string;
  isHighlighted?: boolean;
  padding: string;
  hasRightBorder?: boolean;
  hasBottomBorder?: boolean;
  index: number;
}

function PricingCard({
  tierLabel,
  price,
  buildFee,
  features,
  forText,
  isHighlighted,
  padding,
  hasRightBorder,
  hasBottomBorder,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
      style={{
        padding,
        borderRight: hasRightBorder ? '0.5px solid var(--color-border)' : 'none',
        borderBottom: hasBottomBorder ? '0.5px solid var(--color-border)' : 'none',
        position: isHighlighted ? 'relative' : 'static',
      }}
    >
      {/* Highlight strip for Growth tier */}
      {isHighlighted && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '40px',
            right: '40px',
            height: '2px',
            backgroundColor: 'var(--color-signal)',
          }}
        />
      )}

      {/* Tier Label */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: isHighlighted ? 'var(--color-signal)' : 'var(--color-ink-tertiary)',
        }}
      >
        {tierLabel}
      </div>

      {/* Price */}
      <div style={{ marginTop: '16px' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 5vw, 72px)',
            fontWeight: 300,
            color: 'var(--color-ink)',
          }}
        >
          {price}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--color-ink-tertiary)',
            marginLeft: '4px',
          }}
        >
          /month
        </span>
      </div>

      {/* Build Fee */}
      <div
        style={{
          marginTop: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--color-ink-secondary)',
        }}
      >
        {buildFee}
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

      {/* Features List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {features.map((feature) => (
          <div
            key={feature}
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-ink-tertiary)',
                fontSize: '13px',
                lineHeight: 1.5,
              }}
            >
              —
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.5,
              }}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Tag for Growth tier */}
      {isHighlighted && (
        <div
          style={{
            marginTop: '16px',
            display: 'inline-block',
            backgroundColor: 'var(--color-signal-dim, rgba(33, 128, 141, 0.08))',
            color: 'var(--color-signal)',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '6px 12px',
          }}
        >
          MOST REQUESTED
        </div>
      )}

      {/* For text */}
      <div
        style={{
          marginTop: '24px',
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-tertiary)',
        }}
      >
        {forText}
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tiers = [
    {
      tierLabel: 'STARTER',
      price: '$800',
      buildFee: 'Build fee — waived',
      features: [
        'LinkedIn content automation',
        'X / Twitter distribution',
        '2 SEO articles / month',
      ],
      forText: 'Early-stage founders. No marketing budget.',
      padding: isMobile ? '0 0 32px 0' : '0 40px 0 0',
      hasRightBorder: isMobile ? false : true,
      hasBottomBorder: isMobile ? true : false,
    },
    {
      tierLabel: 'GROWTH',
      price: '$2,000',
      buildFee: 'Build fee — $2,000 one-time',
      features: [
        'Everything in Starter',
        'Prospect identification',
        'LinkedIn DM sequences',
        'Cold email outreach',
        'Reply handling & booking',
        'Analytics dashboard',
        'Forward deployed engineer',
      ],
      forText: 'Core ICP — B2B SaaS founder, 0–3M ARR.',
      isHighlighted: true,
      padding: isMobile ? '32px 0' : '0 40px',
      hasRightBorder: isMobile ? false : true,
      hasBottomBorder: isMobile ? true : false,
    },
    {
      tierLabel: 'SCALE',
      price: '$5,000',
      buildFee: 'Build fee — $5,000 one-time',
      features: [
        'Everything in Growth',
        'Multi-profile management',
        'White-label option',
        'Custom agent configuration',
        'Dedicated FDE support',
      ],
      forText: 'Agency founders. Series A teams.',
      padding: isMobile ? '32px 0 0 0' : '0 0 0 40px',
      hasRightBorder: false,
      hasBottomBorder: false,
    },
  ];

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
          07 — ACCESS TIERS
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
          What access costs.
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
            letterSpacing: '0.06em',
            color: 'var(--color-ink-secondary)',
            marginTop: '16px',
            maxWidth: '500px',
          }}
        >
          One closed B2B deal attributable to this system covers 6–18 months of cost. The math is intentional.
        </motion.p>

        {/* Pricing Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
            gap: 0,
          }}
        >
          {tiers.map((tier, index) => (
            <PricingCard
              key={tier.tierLabel}
              tierLabel={tier.tierLabel}
              price={tier.price}
              buildFee={tier.buildFee}
              features={tier.features}
              forText={tier.forText}
              isHighlighted={tier.isHighlighted}
              padding={tier.padding}
              hasRightBorder={tier.hasRightBorder}
              hasBottomBorder={tier.hasBottomBorder}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: '64px',
            textAlign: 'center',
            paddingTop: '40px',
            borderTop: '0.5px solid var(--color-border)',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--color-ink-secondary)',
            letterSpacing: '0.06em',
          }}
        >
          Pricing increases with each case study published. First client gets 50% off first month.
        </motion.div>
      </div>
    </section>
  );
}
