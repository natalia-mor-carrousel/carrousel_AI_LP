'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Tag from '../ds/Tag';
import Button from '../ds/Button';
import { CAL_LINK } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero.heading;

  return (
    <section className="hero-section" style={{ maxWidth: 1200, margin: '0 auto', overflow: 'hidden' }}>
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
            <Tag accent>
              <span className="md:hidden">{t.hero.tagMobile}</span>
              <span className="hidden md:inline">{t.hero.tagDesktop}</span>
            </Tag>
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
            {h.before}
            {h.breakBeforeUnderline && <br />}
            {h.beforeUnderlined}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              {h.underlined}
              <svg
                aria-hidden="true"
                style={{ position: 'absolute', bottom: -6, left: '-2%', width: '104%', height: 10, overflow: 'visible', pointerEvents: 'none' }}
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M 1,3 C 30,8 70,8 99,3" stroke="var(--color-accent-yellow)" strokeWidth="3.2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            {h.afterSameLine}
            <br />
            <span className="md:hidden">
              {h.line2Mobile1}
              <br />
              {h.line2Mobile2}
            </span>
            <span className="hidden md:inline">
              {h.line2Desktop1}
              {h.line2Desktop2 && <><br />{h.line2Desktop2}</>}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)', maxWidth: 520 }}
          >
            {t.hero.body}
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Button as="a" href={CAL_LINK} variant="primary" target="_blank" rel="noopener noreferrer">
              {t.hero.cta}
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
            <div className="hero-photo-container">
              <Image
                src="/images/natalia-hero.png"
                alt="Natalia Morozova"
                width={280}
                height={380}
                priority
                className="hero-photo-img"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
