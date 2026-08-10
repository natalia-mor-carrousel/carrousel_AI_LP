'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    tag: 'Hands-on',
    title: 'Learning by doing',
    body: 'We sit down and build it together. You walk away with an upskilled team and an automated process.',
    accent: 'var(--color-accent-yellow)',
    shadow: 'var(--shadow-offset-yellow)',
  },
  {
    tag: 'Tailored',
    title: 'Custom training',
    body: 'Built around your actual workflows and business processes. Some teams need basics, others want to learn to code. We take it from that level and go deeper.',
    accent: 'var(--color-accent-blue)',
    shadow: 'var(--shadow-offset-blue)',
  },
  {
    tag: 'Practical',
    title: 'Combo of tech and applied AI skills',
    body: 'The tech side: Claude, GitHub, RAG, self-improving agents. The applied side: Should this be an agent, who\'s responsible if it breaks, is it actually saving time?',
    accent: 'var(--color-accent-yellow)',
    shadow: 'var(--shadow-offset-yellow)',
  },
];

// Layout: large asymmetric — heading takes left half, cards fill right column stacked
export default function ApproachAlt2() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-5)',
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-7)',
          alignItems: 'start',
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Left: sticky heading block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ position: 'sticky', top: 80 }}
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
            The training experience
          </p>
          <h2
            style={{
              font: 'var(--text-h2)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--space-4)',
            }}
          >
            AI didn&apos;t remove the technical barrier. It lowered it enough for you to climb over.
          </h2>
          <p
            style={{
              font: 'var(--text-body-lg)',
              color: 'var(--color-fg-muted)',
            }}
          >
            Every training is built around what your team actually does — not a generic AI crash course.
          </p>
        </motion.div>

        {/* Right: stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: '6px',
                boxShadow: pillar.shadow,
                background: 'var(--color-bg)',
                padding: 'var(--space-5)',
              }}
            >
              {/* Tag pill */}
              <span
                style={{
                  display: 'inline-block',
                  font: 'var(--text-eyebrow)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  background: pillar.accent,
                  color: 'var(--color-fg)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                {pillar.tag}
              </span>

              <h3
                style={{
                  font: 'var(--text-h4)',
                  fontFamily: 'var(--font-display)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  font: 'var(--text-body-md)',
                  color: 'var(--color-fg-muted)',
                }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
