'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tiers = [
  {
    label: 'Foundation',
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
  },
  {
    label: 'Intermediate',
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
  },
  {
    label: 'Advanced',
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
  },
];

function AccordionPanel({
  tier,
  isOpen,
  onToggle,
}: {
  tier: (typeof tiers)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ border: 'var(--border-width) solid var(--color-border-soft)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-4) var(--space-5)',
          background: isOpen ? 'var(--surface-card)' : 'var(--color-bg)',
          border: 'none',
          cursor: 'pointer',
          gap: 'var(--space-3)',
          borderBottom: isOpen ? 'var(--border-width) solid var(--color-border-soft)' : 'none',
          transition: 'background 0.2s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: tier.accent,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              font: 'var(--text-h4)',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-fg)',
            }}
          >
            {tier.label}
          </span>
        </div>
        <span
          style={{
            color: 'var(--color-fg-faint)',
            fontSize: 20,
            lineHeight: 1,
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(45deg)' : 'none',
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <ul
              style={{
                padding: 'var(--space-4) var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
                background: 'var(--surface-card)',
              }}
            >
              {tier.topics.map((topic) => (
                <li
                  key={topic}
                  style={{
                    font: 'var(--text-body-md)',
                    color: 'var(--color-fg-muted)',
                    paddingLeft: 'var(--space-3)',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--color-fg-faint)',
                    }}
                  >
                    –
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Topics() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-8) var(--space-5)',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
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
          What we can work on
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
        >
          {tiers.map((tier, i) => (
            <AccordionPanel
              key={tier.label}
              tier={tier}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
