'use client';

import { motion } from 'framer-motion';

export default function Hook() {
  return (
    <section
      style={{
        background: 'var(--color-surface-dark)',
        padding: '56px var(--space-5)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 760,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            font: '700 28px/1.35 var(--font-display)',
            color: 'var(--color-surface-dark-fg)',
          }}
        >
          Only 10% of AI&apos;s value comes from the algorithms, 20% from the tech implementation, and{' '}
          <span style={{ color: 'var(--color-accent-yellow)' }}>
            70% from rethinking the people side
          </span>{' '}
          — that is, training
        </p>
      </motion.div>
    </section>
  );
}
