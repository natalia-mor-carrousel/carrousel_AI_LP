'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const tierStyles = [
  { accent: 'var(--color-accent-yellow)', shadow: 'var(--shadow-offset-yellow)', shadowSm: 'var(--shadow-offset-yellow-sm)' },
  { accent: 'var(--color-accent-blue)',   shadow: 'var(--shadow-offset-blue)',   shadowSm: 'var(--shadow-offset-blue-sm)'   },
  { accent: 'var(--color-accent-yellow)', shadow: 'var(--shadow-offset-yellow)', shadowSm: 'var(--shadow-offset-yellow-sm)' },
];

export default function TopicsColumns() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const tiers = t.topics.tiers;
  const tier = tiers[active];
  const style = tierStyles[active];

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
          className="topics-columns-card"
          style={{
            border: 'var(--border-width) solid var(--color-fg)',
            borderRadius: 6,
            boxShadow: style.shadow,
            background: 'var(--color-bg)',
            transition: 'box-shadow 0.25s',
          }}
        >
          {/* Left: title + tabs */}
          <div
            className="topics-columns-left"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h2
              style={{
                font: 'var(--text-h2)',
                letterSpacing: 'var(--letter-spacing-tight)',
                marginBottom: 'var(--space-3)',
              }}
            >
              {t.topics.heading}
            </h2>
            <p
              style={{
                font: 'var(--text-body-md)',
                color: 'var(--color-fg-muted)',
                marginBottom: 'var(--space-6)',
              }}
            >
              {t.topics.subheading}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {tiers.map((tier, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="topics-tab-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px var(--space-4)',
                    border: 'var(--border-width) solid',
                    borderColor: active === i ? 'var(--color-fg)' : 'var(--color-border-soft)',
                    borderRadius: 'var(--radius-pill)',
                    background: active === i ? tierStyles[i].accent : 'transparent',
                    boxShadow: active === i ? tierStyles[i].shadowSm : 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.18s, border-color 0.18s, box-shadow 0.18s',
                  }}
                >
                  <span
                    className="topics-tab-label"
                    style={{
                      font: 'var(--text-h4)',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-fg)',
                    }}
                  >
                    {tier.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: inner content card */}
          <div
            className="topics-columns-right"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="topics-columns-content"
                style={{
                  flex: 1,
                  border: 'var(--border-width) solid var(--color-fg)',
                  borderRadius: 6,
                  boxShadow: 'none',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {tier.topics.map((topic, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        font: 'var(--text-body-md)',
                        color: 'var(--color-fg-muted)',
                        padding: '7px 0',
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: '50%',
                          background: style.accent,
                          flexShrink: 0,
                        }}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    font: 'var(--text-body-sm)',
                    color: 'var(--color-fg-faint)',
                    fontStyle: 'italic',
                    marginTop: 'var(--space-3)',
                    paddingTop: 'var(--space-3)',
                    borderTop: 'var(--border-width) solid var(--color-border-soft)',
                  }}
                >
                  {t.topics.footer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
