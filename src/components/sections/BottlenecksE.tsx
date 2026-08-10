'use client';

import { motion } from 'framer-motion';

const items = [
  {
    title: 'Seemingly easy, but not easy',
    body: 'AI lowered the bar, it didn\'t remove it. There\'s still no shortcut up there — you actually have to learn this stuff.',
  },
  {
    title: 'Graveyard of agents',
    body: 'Most teams spin up a bunch of agents — and six months later, half of them are dead. Bad output, something broke, or the process never should\'ve been automated.',
  },
  {
    title: 'AI creates new bottlenecks',
    body: 'Most agents create new overhead — tool sprawl, review loops, fragmented processes. Teams lose a full workday a week to this.',
  },
];

export default function BottlenecksE() {
  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-7) var(--space-5)',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: 'var(--space-6)' }}
        >
          <p style={{ font: 'var(--text-eyebrow)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-fg-faint)', marginBottom: 'var(--space-3)' }}>
            Where teams get stuck
          </p>
          <h2 style={{ font: 'var(--text-h2)', letterSpacing: '-0.02em' }}>
            Why AI adoption fails
          </h2>
        </motion.div>

        {/* Split rows: dark left / cream right */}
        <div
          style={{
            border: 'var(--border-width) solid var(--color-fg)',
            borderRadius: 6,
            overflow: 'hidden',
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                borderBottom: i < items.length - 1 ? 'var(--border-width) solid var(--color-fg)' : 'none',
              }}
            >
              {/* Dark half — title */}
              <div
                style={{
                  background: 'var(--color-fg)',
                  padding: 'var(--space-5) var(--space-6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  borderRight: 'var(--border-width) solid var(--color-fg)',
                }}
              >
                <span
                  style={{
                    font: 'var(--text-eyebrow)',
                    color: 'rgba(250,250,247,0.3)',
                    letterSpacing: '0.06em',
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  style={{
                    font: 'var(--text-h3)',
                    color: '#FAFAF7',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Cream half — body */}
              <div
                style={{
                  background: 'var(--color-bg)',
                  padding: 'var(--space-5) var(--space-6)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    font: 'var(--text-body-md)',
                    color: 'var(--color-fg-muted)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
