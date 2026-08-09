'use client';

import Image from 'next/image';
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
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--space-8) var(--space-5)', overflow: 'hidden' }}>
      <div
        style={{ gridTemplateColumns: '1fr auto', gap: 'var(--space-6)', alignItems: 'center' }}
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
            className="hero-heading"
            style={{
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
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
                style={{ position: 'absolute', bottom: -6, left: '-2%', width: '104%', height: 10, overflow: 'visible', pointerEvents: 'none' }}
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M 1,3 C 30,8 70,8 99,3" stroke="var(--color-accent-yellow)" strokeWidth="3.2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)', maxWidth: 520 }}
          >
            I&apos;m Natalia, I built a company alone in six months using AI. Now I sit with your leadership and business teams and do the same thing inside yours.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Button as="a" href={CAL_LINK} variant="primary" target="_blank" rel="noopener noreferrer">
              Book an intro
            </Button>
          </motion.div>
        </motion.div>

        {/* Photo with concentric rings behind */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ flexShrink: 0, position: 'relative' }}
          className="flex justify-center md:block"
        >
          {/* Concentric rings — centered on upper photo, fading outward */}
          <svg
            aria-hidden="true"
            style={{ position: 'absolute', top: -40, left: -80, width: 460, height: 640, pointerEvents: 'none', zIndex: 0 }}
          >
            {[
              { r: 60,  opacity: 0.18 },
              { r: 115, opacity: 0.14 },
              { r: 172, opacity: 0.11 },
              { r: 232, opacity: 0.08 },
              { r: 295, opacity: 0.05 },
              { r: 362, opacity: 0.03 },
            ].map(({ r, opacity }, i) => (
              <circle key={i} cx={230} cy={200} r={r} stroke="var(--color-fg)" strokeWidth="1" fill="none" opacity={opacity} />
            ))}
          </svg>

          {/* Photo */}
          <div
            style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0px 6px 24px rgba(55,71,79,0.13))' }}
            className="w-[220px] md:w-[300px]"
          >
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              height: 544,
              maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            }}>
              <Image
                src="/images/829b8b582d1236ce95821632cee86988.png"
                alt="Natalia Morozova"
                width={280}
                height={380}
                priority
                style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
