'use client';

import { motion } from 'framer-motion';

const rows = [
  {
    number: '01',
    kicker: 'founders, co-founders, managers',
    title: 'AI for Leadership',
    body: 'AI adoption only spreads if leaders visibly use it themselves. Upgrade your AI and Claude skills and lead by example.',
    accent: 'var(--color-accent-yellow)',
    shadow: 'var(--shadow-offset-yellow)',
  },
  {
    number: '02',
    kicker: 'marketing, sales, ops, support, HR',
    title: 'AI for Teams',
    body: "The best strategy to AI transition is through distributed ownership: each team owns their own AI setup — with a shared layer where what works in one place gets passed to the others. Having one person try to own AI across the whole company \"collapses.\" It doesn't scale as one job.",
    accent: 'var(--color-accent-blue)',
    shadow: 'var(--shadow-offset-blue)',
  },
];

export default function WhoForB() {
  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-8) var(--space-5)',
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
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
              marginBottom: 'var(--space-4)',
            }}
          >
            Who this is for
          </h2>
          <p
            style={{
              font: 'var(--text-body-lg)',
              color: 'var(--color-fg-muted)',
              maxWidth: 560,
            }}
          >
            Small and medium businesses that want to become AI-native.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {rows.map((row, i) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 'var(--space-5)',
                alignItems: 'start',
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: 6,
                padding: 'var(--space-5)',
                boxShadow: row.shadow,
                background: 'var(--color-bg)',
              }}
            >
              <div
                style={{
                  font: '700 40px/1 Space Grotesk',
                  color: row.accent,
                  letterSpacing: '-0.02em',
                  paddingTop: 2,
                }}
              >
                {row.number}
              </div>
              <div>
                <div
                  style={{
                    font: 'var(--text-eyebrow)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--color-fg-faint)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  {row.kicker}
                </div>
                <h3
                  style={{
                    font: 'var(--text-h3)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {row.title}
                </h3>
                <p
                  style={{
                    font: 'var(--text-body-md)',
                    color: 'var(--color-fg-muted)',
                  }}
                >
                  {row.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
