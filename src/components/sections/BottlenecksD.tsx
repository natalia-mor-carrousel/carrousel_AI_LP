'use client';

import { motion } from 'framer-motion';

const items = [
  {
    title: 'Seemingly easy, but not easy',
    body: 'AI lowered the bar, it didn\'t remove it. There\'s still no shortcut up there — you actually have to learn this stuff.',
    shadow: 'var(--shadow-offset-yellow)',
  },
  {
    title: 'Graveyard of agents',
    body: 'Most teams spin up a bunch of agents — and six months later, half of them are dead. Bad output, something broke, or the process never should\'ve been automated.',
    shadow: 'var(--shadow-offset-blue)',
  },
  {
    title: 'AI creates new bottlenecks',
    body: 'Most agents create new overhead — tool sprawl, review loops, fragmented processes. Teams lose a full workday a week to this.',
    shadow: 'var(--shadow-offset-yellow)',
  },
];

export default function BottlenecksD() {
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

        {/* Asymmetric bento: 1 large left + 2 stacked right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 'var(--space-4)' }}>

          {/* Large card — spans both rows */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              gridRow: '1 / 3',
              border: 'var(--border-width) solid var(--color-fg)',
              borderRadius: 6,
              boxShadow: items[0].shadow,
              background: 'var(--color-bg)',
              padding: 'var(--space-6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ font: 'var(--text-eyebrow)', color: 'var(--color-fg-faint)', letterSpacing: '0.06em' }}>01</span>
            <div>
              <h3 style={{ font: 'var(--text-h2)', letterSpacing: '-0.02em', marginBottom: 'var(--space-3)' }}>
                {items[0].title}
              </h3>
              <p style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)', lineHeight: 1.65 }}>
                {items[0].body}
              </p>
            </div>
          </motion.div>

          {/* Two smaller cards stacked right */}
          {items.slice(1).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              style={{
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: 6,
                boxShadow: item.shadow,
                background: 'var(--color-bg)',
                padding: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              <span style={{ font: 'var(--text-eyebrow)', color: 'var(--color-fg-faint)', letterSpacing: '0.06em' }}>
                {String(i + 2).padStart(2, '0')}
              </span>
              <h3 style={{ font: 'var(--text-h3)', letterSpacing: '-0.02em' }}>{item.title}</h3>
              <p style={{ font: 'var(--text-body-md)', color: 'var(--color-fg-muted)', lineHeight: 1.65 }}>{item.body}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
