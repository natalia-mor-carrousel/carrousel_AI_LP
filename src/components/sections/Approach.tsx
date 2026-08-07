'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Learning by doing',
    bullets: [
      'We sit down and build it together.',
      'You walk away with an upskilled team and an automated process.',
    ],
    accent: 'var(--color-accent-yellow)',
  },
  {
    title: 'Custom training',
    bullets: [
      'Built around your actual workflows and business processes.',
      'Some teams need basics, others want to learn to code. We take it from that level and go deeper.',
    ],
    accent: 'var(--color-accent-blue)',
  },
  {
    title: 'Combo of tech and applied AI skills',
    bullets: [
      'The tech side: Claude Cowork and Claude Code, connecting to GitHub, RAG, self-improving agents.',
      'The applied side: Should this be an agent, who\'s responsible if it breaks, is it actually saving time?',
    ],
    accent: 'var(--color-accent-yellow)',
  },
];

export default function Approach() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-5)',
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
      }}
    >
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
          The training experience
        </h2>
        <p
          style={{
            font: 'var(--text-body-lg)',
            color: 'var(--color-fg-muted)',
            maxWidth: 600,
          }}
        >
          AI didn&apos;t remove the technical barrier. It lowered it enough for you to climb over.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-4)',
        }}
        className="grid grid-cols-1 md:grid-cols-3"
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
            <h3
              style={{
                font: 'var(--text-h4)',
                fontFamily: 'var(--font-display)',
                marginBottom: 'var(--space-3)',
              }}
            >
              {card.title}
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {card.bullets.map((bullet, j) => (
                <li
                  key={j}
                  style={{
                    font: 'var(--text-body-md)',
                    color: 'var(--color-fg-muted)',
                    paddingLeft: 'var(--space-3)',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: card.accent,
                    }}
                  >
                    •
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
