'use client';

import { motion } from 'framer-motion';
import Button from '../ds/Button';
import { CAL_LINK } from '@/lib/constants';

export default function FinalCta() {
  return (
    <section
      style={{
        background: 'var(--color-surface-dark)',
        padding: 'var(--space-8) var(--space-5)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 640,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-4)',
        }}
      >
        <h2
          style={{
            font: 'var(--text-h2)',
            color: 'var(--color-surface-dark-fg)',
            letterSpacing: 'var(--letter-spacing-tight)',
          }}
        >
          Tell me where you are at
        </h2>
        <p
          style={{
            font: 'var(--text-body-lg)',
            color: 'var(--color-surface-dark-fg)',
          opacity: 0.7,
          }}
        >
          A brief call to see if we are a fit, discuss your needs, and set up a plan.
        </p>
        <Button as="a" href={CAL_LINK} variant="inverted" target="_blank" rel="noopener noreferrer">
          Book an intro
        </Button>
      </motion.div>
    </section>
  );
}
