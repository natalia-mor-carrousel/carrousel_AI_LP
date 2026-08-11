'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function WhoFor() {
  const { t } = useLanguage();

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
            {t.whoFor.heading}
          </h2>
          <p
            style={{
              font: 'var(--text-body-lg)',
              color: 'var(--color-fg-muted)',
              maxWidth: 560,
            }}
          >
            {t.whoFor.subheading}
          </p>
        </motion.div>

        <div
          style={{ display: 'grid', gap: 'var(--space-4)' }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {t.whoFor.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                border: 'var(--border-width) solid var(--color-fg)',
                borderRadius: 6,
                padding: 'var(--space-6)',
                boxShadow: '4px 4px 0 #D8DBDC',
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 6,
                  borderRadius: 3,
                  background: '#D8DBDC',
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
