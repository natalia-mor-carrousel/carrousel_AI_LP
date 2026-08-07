'use client';

import { motion } from 'framer-motion';
import Tag from '../ds/Tag';
import Button from '../ds/Button';
import { CAL_LINK } from '@/lib/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-5)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'var(--space-7)',
          alignItems: 'center',
        }}
        className="flex flex-col-reverse md:grid"
      >
        {/* Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Tag accent>AI partner for small and medium teams</Tag>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            style={{
              font: 'var(--text-hero)',
              letterSpacing: 'var(--letter-spacing-tight)',
              color: 'var(--color-fg)',
              maxWidth: 640,
            }}
          >
            AI transition happens through{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              training
              <svg
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: -6,
                  left: '-2%',
                  width: '104%',
                  height: 10,
                  overflow: 'visible',
                  pointerEvents: 'none',
                }}
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M 1,3 C 30,8 70,8 99,3"
                  stroke="var(--color-accent-yellow)"
                  strokeWidth="3.2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            style={{
              font: 'var(--text-body-lg)',
              color: 'var(--color-fg-muted)',
              maxWidth: 520,
            }}
          >
            I&apos;m Natalia, I built a company alone in six months using AI. Now I sit with your leadership and business teams and do the same thing inside yours.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Button as="a" href={CAL_LINK} variant="primary" target="_blank" rel="noopener noreferrer">
              Book an intro
            </Button>
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ flexShrink: 0 }}
          className="flex justify-center md:block"
        >
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: '50%',
              border: 'var(--border-width) solid var(--color-fg)',
              boxShadow: 'var(--shadow-offset-lg) var(--color-accent-yellow)',
              overflow: 'hidden',
              background: 'var(--color-border-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                font: 'var(--text-body-sm)',
                color: 'var(--color-fg-faint)',
                fontFamily: 'monospace',
                fontSize: 11,
                textAlign: 'center',
                padding: '0 24px',
              }}
            >
              photo placeholder
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
