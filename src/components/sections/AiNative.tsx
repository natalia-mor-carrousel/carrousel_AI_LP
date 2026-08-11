'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ds/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AiNative() {
  const [answer, setAnswer] = useState<'yes' | 'no' | null>(null);
  const { t } = useLanguage();

  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-6) var(--space-5)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: 960,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-5)',
        }}
      >
        <h2
          className="ai-native-heading"
          style={{
            font: '700 28px/1.2 var(--font-display)',
            letterSpacing: 'var(--letter-spacing-tight)',
          }}
        >
          {t.aiNative.heading}
        </h2>

        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Button
            variant={answer === 'yes' ? 'primary' : 'secondary'}
            onClick={() => setAnswer('yes')}
            style={answer !== 'yes' ? { boxShadow: '4px 4px 0 #D8DBDC' } : undefined}
          >
            {t.aiNative.yes}
          </Button>
          <Button
            variant={answer === 'no' ? 'primary' : 'secondary'}
            onClick={() => setAnswer('no')}
            style={answer !== 'no' ? { boxShadow: '4px 4px 0 #D8DBDC' } : undefined}
          >
            {t.aiNative.no}
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {answer && (
            <motion.p
              key={answer}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                font: 'var(--text-body-lg)',
                color: 'var(--color-fg-muted)',
                padding: 'var(--space-4) var(--space-5)',
                border: 'var(--border-width) solid var(--color-border-soft)',
                borderRadius: 6,
                background: 'var(--surface-card)',
              }}
            >
              {t.aiNative.messages[answer]}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
