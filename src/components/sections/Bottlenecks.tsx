'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Bottlenecks() {
  const { t } = useLanguage();
  const bf = t.bottlenecksFull;

  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-8) 0',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          paddingLeft: 'var(--space-5)',
          marginBottom: 'var(--space-7)',
        }}
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
          {bf.eyebrow}
        </p>
        <h2
          style={{
            font: 'var(--text-h2)',
            letterSpacing: 'var(--letter-spacing-tight)',
          }}
        >
          {bf.heading}
        </h2>
      </motion.div>

      {/* scroll track */}
      <div
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 'var(--space-5)',
          paddingRight: 'var(--space-5)',
          paddingBottom: '6px',
        }}
        className="hide-scrollbar"
      >
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            width: 'max-content',
          }}
        >
          {bf.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                width: 300,
                flexShrink: 0,
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: 6,
                boxShadow: 'var(--shadow-offset-gray)',
                background: 'var(--color-bg)',
                padding: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              <span
                style={{
                  font: 'var(--text-eyebrow)',
                  color: 'var(--color-fg-faint)',
                  letterSpacing: '0.04em',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                style={{
                  font: 'var(--text-h4)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  font: 'var(--text-body-md)',
                  color: 'var(--color-fg-muted)',
                  marginTop: 'var(--space-1)',
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
