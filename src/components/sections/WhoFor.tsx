'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    kicker: 'founders, co-founders, managers',
    title: 'AI for Leadership',
    body: 'AI adoption only spreads if leaders visibly use it themselves. Upgrade your AI and Claude skills and lead by example.',
    accent: 'var(--color-accent-yellow)',
  },
  {
    kicker: 'marketing, sales, ops, support, HR',
    title: 'AI for Teams',
    body: 'The best strategy to AI transition is through distributed ownership: each team owns their own AI setup — with a shared layer where what works in one place gets passed to the others. Having one person try to own AI across the whole company "collapses." It doesn\'t scale as one job.',
    accent: 'var(--color-accent-blue)',
  },
];

export default function WhoFor() {
  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-8) var(--space-5)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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

        <div
          style={{ display: 'grid', gap: 'var(--space-4)' }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                border: 'var(--border-width) solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-6)',
                boxShadow: card.accent === 'var(--color-accent-yellow)' ? 'var(--shadow-offset-yellow)' : 'var(--shadow-offset-blue)',
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 6,
                  borderRadius: 3,
                  background: card.accent,
                  marginBottom: 'var(--space-3)',
                }}
              />
              <div
                style={{
                  font: 'var(--text-eyebrow)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--color-fg-faint)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                {card.kicker}
              </div>
              <h3
                style={{
                  font: 'var(--text-h3)',
                  fontFamily: 'var(--font-display)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  font: 'var(--text-body-md)',
                  color: 'var(--color-fg-muted)',
                }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
