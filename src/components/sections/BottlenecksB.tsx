'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const itemStyles = [
  { shadow: 'var(--shadow-offset-yellow)', accent: 'var(--color-accent-yellow)' },
  { shadow: 'var(--shadow-offset-blue)',   accent: 'var(--color-accent-blue)'   },
  { shadow: 'var(--shadow-offset-yellow)', accent: 'var(--color-accent-yellow)' },
];

export default function BottlenecksB() {
  const { t } = useLanguage();

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
            {t.bottlenecks.heading}
          </h2>
          <p
            style={{
              font: 'var(--text-body-lg)',
              color: 'var(--color-fg-muted)',
            }}
          >
            {t.bottlenecks.subheading}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid-cols-1 md:grid-cols-3"
          style={{
            display: 'grid',
            gap: 'var(--space-5)',
            alignItems: 'stretch',
          }}
        >
          {t.bottlenecks.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: 6,
                boxShadow: itemStyles[i].shadow,
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
                    background: itemStyles[i].accent,
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
                  background: itemStyles[i].accent,
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
