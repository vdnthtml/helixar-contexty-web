'use client';

import { motion } from 'framer-motion';

interface StatusDotProps {
  status: 'active' | 'stabilizing' | 'classified';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const statusColors = {
  active: '#22C55E',
  stabilizing: '#F59E0B',
  classified: 'var(--color-ink-tertiary)',
};

const sizeClasses = {
  xs: 'w-[5px] h-[5px]',
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5',
};

export default function StatusDot({ status, size = 'md' }: StatusDotProps) {
  return (
    <motion.span
      className={`inline-block rounded-full ${sizeClasses[size]}`}
      style={{ backgroundColor: statusColors[status] }}
      animate={{
        opacity: status === 'active' ? [1, 0.5, 1] : 1,
        scale: status === 'active' ? [1, 1.2, 1] : 1,
      }}
      transition={{
        duration: 2,
        repeat: status === 'active' ? Infinity : 0,
        ease: 'easeInOut',
      }}
    />
  );
}
