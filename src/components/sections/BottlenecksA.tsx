'use client';

import { motion } from 'framer-motion';

const items = [
  {
    title: 'Seemingly easy, but not easy',
    body: 'AI lowered the bar, it didn\'t remove it. There\'s still no shortcut up there — you actually have to learn this stuff.',
    accent: 'var(--color-accent-yellow)',
  },
  {
    title: 'Graveyard of agents',
    body: 'Most teams jump in, spin up a bunch of agents — and six months later, half of them are dead. Bad output, something broke, or the process never should\'ve been automated in the first place.',
    accent: 'var(--color-accent-blue)',
  },
  {
    title: 'AI creates new bottlenecks',
    body: 'Spinning up an agent takes five minutes. But most create new bottlenecks — tool sprawl, review overhead, fragmented processes. Teams lose a full workday a week to this.',
    accent: 'var(--color-accent-yellow)',
  },
];

export default function BottlenecksA() {
  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-7) var(--space-5)',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <h2 style={{ font: 'var(--text-h2)', letterSpacing: '-0.02em' }}>
            Why AI adoption fails
          </h2>
          <span
            style={{
              font: 'var(--text-eyebrow)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-fg-faint)',
            }}
          >
            Where teams get stuck
          </span>
        </motion.div>

        {/* Three columns — no cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-5)',
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {/* Accent bar */}
              <div
                style={{
                  height: 3,
                  background: item.accent,
                  borderRadius: 2,
                  marginBottom: 'var(--space-3)',
                }}
              />

              <span
                style={{
                  display: 'block',
                  font: 'var(--text-eyebrow)',
                  color: 'var(--color-fg-faint)',
                  letterSpacing: '0.06em',
                  marginBottom: 'var(--space-2)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3
                style={{
                  font: 'var(--text-h4)',
                  letterSpacing: '-0.01em',
                  marginBottom: 'var(--space-2)',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  font: 'var(--text-body-md)',
                  color: 'var(--color-fg-muted)',
                  lineHeight: 1.6,
                }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
