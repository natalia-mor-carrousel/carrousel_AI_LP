'use client';

import { motion } from 'framer-motion';

const items = [
  {
    title: 'Graveyard of agents',
    body: 'Most teams jump in, spin up a bunch of agents — and six months later, half of them are dead. A graveyard nobody visits. Why: bad output, something broke and nobody fixed it, or the process never should\'ve been automated in the first place.',
  },
  {
    title: 'Seemingly easy, but not easy',
    body: 'AI lowered the bar, it didn\'t remove it. There\'s still no shortcut up there — you actually have to learn this stuff.',
  },
  {
    title: 'Most use cases are generic',
    body: 'The use cases on YouTube are generic on purpose — built to fit everyone, which means they fit no one exactly. Your business and your process have their own quirks, and generic templates don\'t stretch that far.',
  },
  {
    title: 'AI creates new bottlenecks',
    body: 'Spinning up an agent takes five minutes. But most AI agents create new bottlenecks — tool sprawl, review overhead, fragmented processes, maintenance. Teams lose a full workday a week to this. The trick is making AI run smooth — like a carrousel ;)',
  },
  {
    title: 'Data is messy',
    body: 'Data is king, knowledge base is close behind. If it\'s messy, duplicated, outdated, or contradicting itself (happens more than you\'d think), your agent has nowhere solid to pull from. Garbage in, garbage out.',
  },
  {
    title: 'Overusing or underusing autonomous agents',
    body: 'Most of the time we don\'t even want to hand over the decision — in those cases, autonomous agents are a terrible idea. Build a smooth human-in-the-loop process instead. But the flip side happens too: teams double-check everything the agent does. A little trust issue. And with zero trust, you save zero time.',
  },
  {
    title: 'Unclear responsibility',
    body: 'Who owns this? Who approves a new agent? Who\'s on the hook when it messes up? Who updates it, who kills it once it\'s not needed? And if leadership never turns this into a real strategy with real resources behind it... oups.',
  },
  {
    title: 'Token burn',
    body: 'AI isn\'t free, and tokens disappear faster than you\'d think. There are ways to burn less — you just have to know them and actually use them.',
  },
];

export default function BottlenecksNoNum() {
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
          Where teams get stuck
        </p>
        <h2
          style={{
            font: 'var(--text-h2)',
            letterSpacing: 'var(--letter-spacing-tight)',
          }}
        >
          Why AI adoption fails
        </h2>
      </motion.div>

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
          {items.map((item, i) => (
            <motion.div
              key={item.title}
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
