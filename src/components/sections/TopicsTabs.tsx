'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tiers = [
  {
    label: 'Foundation',
    description: 'Getting started with AI tools and agent thinking',
    topics: [
      'Intro to Claude Cowork',
      'Identifying repetitive tasks and setting priorities',
      'Which processes to convert to an AI agent',
      'Autonomous agent, agent with subagent, human in the loop — what\'s best?',
      'Connecting tools',
      'Agents, subagents, skills, commands, hooks',
      'Token management',
    ],
    accent: 'var(--color-accent-yellow)',
    shadow: 'var(--shadow-offset-yellow)',
  },
  {
    label: 'Intermediate',
    description: 'Building shared systems and managing knowledge',
    topics: [
      'Building a knowledge base: shared team workspace and conventions',
      'Knowledge base, memory, RAG',
      'CLAUDE.md file',
      'Context management',
      'Governance and responsibility',
      'Difference between Claude Cowork and Claude Code',
      'Plan and execute modes',
    ],
    accent: 'var(--color-accent-blue)',
    shadow: 'var(--shadow-offset-blue)',
  },
  {
    label: 'Advanced',
    description: 'Scaling robust agent systems across your organisation',
    topics: [
      'How to build a robust system of agents from scratch',
      'Shared guardrails and policies across organisation',
      'Maintenance',
      'Self-testing and self-improving agents',
      'Metrics — does AI actually help? — visual dashboard',
      'Connecting your workspace to GitHub',
      'Backend of the project',
    ],
    accent: 'var(--color-accent-yellow)',
    shadow: 'var(--shadow-offset-yellow)',
  },
];

export default function TopicsTabs() {
  const [active, setActive] = useState(0);
  const tier = tiers[active];

  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-8) var(--space-5)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            font: 'var(--text-h2)',
            letterSpacing: 'var(--letter-spacing-tight)',
            marginBottom: 'var(--space-6)',
          }}
        >
          Examples of topics
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            border: 'var(--border-width) solid var(--color-fg)',
            borderRadius: 6,
            boxShadow: tier.shadow,
            background: 'var(--color-bg)',
            display: 'flex',
            minHeight: 340,
            overflow: 'hidden',
            transition: 'box-shadow 0.25s',
          }}
        >
          {/* Left: tab list */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRight: 'var(--border-width) solid var(--color-border-soft)',
              flexShrink: 0,
              width: 240,
              background: '#f2f2ee',
            }}
          >
            {tiers.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 4,
                  padding: 'var(--space-5) var(--space-4)',
                  border: 'none',
                  borderBottom: i < tiers.length - 1 ? 'var(--border-width) solid var(--color-border-soft)' : 'none',
                  borderLeft: active === i ? `4px solid ${t.accent}` : '4px solid transparent',
                  background: active === i ? 'var(--color-bg)' : 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.18s, border-color 0.18s',
                }}
              >
                <span
                  style={{
                    font: 'var(--text-h4)',
                    fontFamily: 'var(--font-display)',
                    color: active === i ? 'var(--color-fg)' : 'var(--color-fg-muted)',
                    transition: 'color 0.18s',
                  }}
                >
                  {t.label}
                </span>
                {active === i && (
                  <span
                    style={{
                      font: 'var(--text-body-sm)',
                      color: 'var(--color-fg-faint)',
                      lineHeight: 1.4,
                    }}
                  >
                    {t.description}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right: topic list */}
          <div style={{ flex: 1, padding: 'var(--space-6) var(--space-6)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.18 }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-3) var(--space-6)',
                  }}
                >
                  {tier.topics.map((topic) => (
                    <li
                      key={topic}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        font: 'var(--text-body-md)',
                        color: 'var(--color-fg-muted)',
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: tier.accent,
                          flexShrink: 0,
                          marginTop: 5,
                        }}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
