'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Hook() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        background: 'var(--color-surface-dark)',
        padding: '56px var(--space-5)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 760,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            font: '700 28px/1.35 var(--font-display)',
            color: 'var(--color-surface-dark-fg)',
          }}
        >
          {t.hook.prefix}{' '}
          <span style={{ color: 'var(--color-accent-yellow)' }}>
            {t.hook.highlight}
          </span>{' '}
          {t.hook.suffix}
        </p>
      </motion.div>
    </section>
  );
}
