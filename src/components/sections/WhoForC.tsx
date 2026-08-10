'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    kicker: 'founders, co-founders, managers',
    title: 'AI for Leadership',
    body: 'AI adoption only spreads if leaders visibly use it themselves. Upgrade your AI and Claude skills and lead by example.',
    shadow: 'var(--shadow-offset-yellow)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    kicker: 'marketing, sales, ops, support, HR',
    title: 'AI for Teams',
    body: "The best strategy to AI transition is through distributed ownership: each team owns their own AI setup — with a shared layer where what works in one place gets passed to the others.",
    shadow: 'var(--shadow-offset-blue)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M2 20c0-3 2.7-5.5 6-5.5" />
        <path d="M16 14.5c3.3 0 6 2.5 6 5.5" />
        <path d="M9 14.8c1-.3 2-.4 3-.4s2 .1 3 .4" />
      </svg>
    ),
  },
];

export default function WhoForC() {
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
          style={{ gap: 'var(--space-4)' }}
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
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: 6,
                overflow: 'hidden',
                boxShadow: card.shadow,
                background: 'var(--color-bg)',
              }}
            >
              {/* Dark visual area */}
              <div
                style={{
                  background: 'var(--color-fg)',
                  height: 180,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {card.icon}
              </div>

              {/* Text area */}
              <div style={{ padding: 'var(--space-5)' }}>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
