'use client';

import { motion } from 'framer-motion';

const items = [
  {
    title: 'Seemingly easy,\nbut not easy',
    body: 'AI lowered the bar. It didn\'t remove it — you still have to learn this stuff. No shortcut here.',
    shadow: 'var(--shadow-offset-yellow)',
    accent: 'var(--color-accent-yellow)',
  },
  {
    title: 'Graveyard\nof agents',
    body: 'Teams spin up a bunch of agents. Six months later, half are dead — a graveyard nobody visits.',
    shadow: 'var(--shadow-offset-blue)',
    accent: 'var(--color-accent-blue)',
  },
  {
    title: 'AI creates new\nbottlenecks',
    body: 'Spinning up an agent takes five minutes. Keeping it running doesn\'t — teams lose a full workday a week to tool sprawl and upkeep.',
    shadow: 'var(--shadow-offset-yellow)',
    accent: 'var(--color-accent-yellow)',
  },
];

export default function BottlenecksB() {
  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-8) var(--space-5)',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'var(--space-7)' }}
        >
          <h2
            style={{
              font: 'var(--text-h2)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--space-3)',
            }}
          >
            Why AI adoption fails
          </h2>
          <p
            style={{
              font: 'var(--text-body-lg)',
              color: 'var(--color-fg-muted)',
            }}
          >
            Every team tries something. Most hit the same walls.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-5)',
            alignItems: 'stretch',
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: 6,
                boxShadow: item.shadow,
                background: 'var(--color-bg)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Number + accent dot */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 'var(--space-6)',
                }}
              >
                <span
                  style={{
                    font: 'var(--text-eyebrow)',
                    color: 'var(--color-fg-faint)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: item.accent,
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Title — very large */}
              <h3
                style={{
                  font: '700 30px/1.1 Space Grotesk',
                  letterSpacing: '-0.025em',
                  whiteSpace: 'pre-line',
                  marginBottom: 'var(--space-4)',
                  flex: 1,
                }}
              >
                {item.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  height: 2,
                  background: item.accent,
                  marginBottom: 'var(--space-4)',
                  borderRadius: 2,
                }}
              />

              {/* Body */}
              <p
                style={{
                  font: 'var(--text-body-md)',
                  color: 'var(--color-fg-muted)',
                  lineHeight: 1.65,
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
