'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const pillarStyles = [
  { accent: 'var(--color-accent-yellow)', shadow: 'var(--shadow-offset-yellow)' },
  { accent: 'var(--color-accent-blue)',   shadow: 'var(--shadow-offset-blue)'   },
  { accent: 'var(--color-accent-yellow)', shadow: 'var(--shadow-offset-yellow)' },
];

export default function ApproachAlt2() {
  const { t } = useLanguage();

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
        className="grid-cols-1 md:grid-cols-2"
        style={{
          display: 'grid',
          gap: 'var(--space-7)',
          alignItems: 'start',
        }}
      >
        {/* Left: sticky heading block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:sticky md:top-20"
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
            {t.approach.eyebrow}
          </p>
          <h2
            style={{
              font: 'var(--text-h2)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--space-4)',
            }}
          >
            {t.approach.heading}
          </h2>
          <p
            style={{
              font: 'var(--text-body-lg)',
              color: 'var(--color-fg-muted)',
            }}
          >
            {t.approach.subheading}
          </p>
        </motion.div>

        {/* Right: stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {t.approach.pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: '6px',
                boxShadow: pillarStyles[i].shadow,
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
                  background: pillarStyles[i].accent,
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
