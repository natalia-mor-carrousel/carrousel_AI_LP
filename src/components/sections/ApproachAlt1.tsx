'use client';

import { motion } from 'framer-motion';

const items = [
  {
    number: '01',
    title: 'Learning by doing',
    body: 'We sit down and build it together. You walk away with an upskilled team and an automated process — not a deck of slides you\'ll never open again.',
    accent: 'var(--color-accent-yellow)',
  },
  {
    number: '02',
    title: 'Custom training',
    body: 'Built around your actual workflows. Some teams need basics, others want to learn to code. We start there and go deeper.',
    accent: 'var(--color-accent-blue)',
  },
  {
    number: '03',
    title: 'Tech + applied AI skills',
    body: 'The tech side: Claude, GitHub, RAG, agents. The applied side: should this be an agent, who\'s responsible if it breaks, is it actually saving time?',
    accent: 'var(--color-accent-yellow)',
  },
];

export default function ApproachAlt1() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-5)',
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
      }}
    >
      {/* Header block */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 'var(--space-7)' }}
      >
        <p
          style={{
            font: 'var(--text-eyebrow)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: 'var(--color-fg-faint)',
            marginBottom: 'var(--space-3)',
          }}
        >
          What you get
        </p>
        <h2
          style={{
            font: 'var(--text-h2)',
            letterSpacing: 'var(--letter-spacing-tight)',
            marginBottom: 'var(--space-4)',
          }}
        >
          The training experience
        </h2>
        <p
          style={{
            font: 'var(--text-body-lg)',
            color: 'var(--color-fg-muted)',
            maxWidth: 560,
          }}
        >
          AI didn&apos;t remove the technical barrier. It lowered it enough for you to climb over.
        </p>
      </motion.div>

      {/* Three columns */}
      <div
        style={{ display: 'grid', gap: 80 }}
        className="grid-cols-1 md:grid-cols-3"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Number */}
            <p
              style={{
                font: 'var(--text-eyebrow)',
                color: 'var(--color-fg-faint)',
                marginBottom: 20,
              }}
            >
              {item.number}
            </p>

            {/* Colored top bar */}
            <div
              style={{
                height: 3,
                background: item.accent,
                marginBottom: 56,
              }}
            />

            {/* Title */}
            <h3
              style={{
                font: 'var(--text-h4)',
                fontFamily: 'var(--font-display)',
                marginBottom: 20,
              }}
            >
              {item.title}
            </h3>

            {/* Body */}
            <p
              style={{
                font: 'var(--text-body-md)',
                color: 'var(--color-fg-muted)',
              }}
            >
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
