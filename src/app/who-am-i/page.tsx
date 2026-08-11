'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import FinalCta from '@/components/sections/FinalCta';
import Button from '@/components/ds/Button';
import { CAL_LINK } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function AISparkleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="grad-ai-sparkle" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD966" />
          <stop offset="100%" stopColor="#37474F" />
        </linearGradient>
      </defs>
      <path d="M22 9 L25.9 18.1 L35 22 L25.9 25.9 L22 35 L18.1 25.9 L9 22 L18.1 18.1 Z" fill="url(#grad-ai-sparkle)" />
      <path d="M33 5.5 L34.4 8.6 L37.5 10 L34.4 11.4 L33 14.5 L31.6 11.4 L28.5 10 L31.6 8.6 Z" fill="url(#grad-ai-sparkle)" opacity="0.65" />
      <circle cx="9" cy="35" r="2.2" fill="url(#grad-ai-sparkle)" opacity="0.4" />
    </svg>
  );
}

function OSNetworkIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="grad-os-network" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4DA6D2" />
          <stop offset="100%" stopColor="#37474F" />
        </linearGradient>
      </defs>
      <line x1="22" y1="14" x2="12" y2="28" stroke="url(#grad-os-network)" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="14" x2="32" y2="28" stroke="url(#grad-os-network)" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="33" x2="30" y2="33" stroke="url(#grad-os-network)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="9" r="5" fill="url(#grad-os-network)" />
      <circle cx="9" cy="33" r="5" fill="url(#grad-os-network)" />
      <circle cx="35" cy="33" r="5" fill="url(#grad-os-network)" />
      <circle cx="22" cy="24" r="2" fill="url(#grad-os-network)" opacity="0.5" />
    </svg>
  );
}

export default function WhoAmIPage() {
  const { t } = useLanguage();
  const wa = t.whoAmI;

  return (
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Nav />

      {/* Hero — with photo */}
      <section className="who-am-i-hero-section">
        <div
          style={{ gridTemplateColumns: '1fr auto', gap: 'var(--space-6)', alignItems: 'center' }}
          className="flex flex-col-reverse md:grid"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ maxWidth: 780 }}
          >
            <motion.p
              variants={fadeUp}
              style={{
                font: 'var(--text-eyebrow)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'var(--color-fg-faint)',
                marginBottom: 'var(--space-3)',
              }}
            >
              {wa.hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="hero-heading"
              style={{
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                color: 'var(--color-fg)',
                marginBottom: 'var(--space-4)',
              }}
            >
              {wa.hero.heading.before}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                {wa.hero.heading.underlined}
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
              style={{
                font: 'var(--text-body-lg)',
                color: 'var(--color-fg-muted)',
                maxWidth: 620,
              }}
            >
              {wa.hero.body.split('Noorish').map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a
                      href="https://getnoorish.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ borderBottom: '1.5px solid var(--color-accent-yellow)', paddingBottom: 1 }}
                    >
                      Noorish
                    </a>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </motion.p>
          </motion.div>

          {/* Photo — head and shoulders */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flexShrink: 0 }}
            className="w-full md:w-auto flex justify-center md:block"
          >
            <div
              style={{ filter: 'drop-shadow(0px 6px 24px rgba(55,71,79,0.13))' }}
              className="w-full md:w-[240px]"
            >
              <div className="whoami-photo-container">
                <div className="whoami-photo-wide">
                  <Image
                    src="/images/natalia-ymm.png"
                    alt="Natalia Morozova"
                    fill
                    sizes="(max-width: 767px) 100vw, 240px"
                    priority
                    quality={90}
                    style={{ objectFit: 'cover', objectPosition: '65% 0%' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Noorish */}
      <section
        style={{
          borderTop: 'var(--border-width) solid var(--color-border-soft)',
          padding: 'var(--space-8) var(--space-5)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 'var(--space-7)', alignItems: 'start' }}
          >
            {/* Left: description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
            >
              <h2 style={{ font: 'var(--text-h2)', color: 'var(--color-fg)' }}>{wa.noorish.heading}</h2>
              <p style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)' }}>
                {wa.noorish.body1}
              </p>
              <p style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)' }}>
                {wa.noorish.body2}
              </p>
              <div>
                <Button
                  as="a"
                  href="https://getnoorish.com"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 14, padding: '10px 20px' }}
                >
                  {wa.noorish.visitButton}
                </Button>
              </div>
            </motion.div>

            {/* Right: AI-native cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}
            >
              <p
                style={{
                  font: 'var(--text-eyebrow)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--color-fg-faint)',
                }}
              >
                {wa.noorish.aiNativeEyebrow}
              </p>

              <div
                style={{
                  border: 'var(--border-width) solid var(--color-fg)',
                  borderRadius: 6,
                  boxShadow: 'var(--shadow-offset-yellow)',
                  background: 'var(--color-bg)',
                  padding: 'var(--space-4)',
                  display: 'flex',
                  gap: 'var(--space-3)',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <AISparkleIcon />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h4 style={{ font: 'var(--text-h4)', color: 'var(--color-fg)' }}>
                    {wa.noorish.card1Heading}
                  </h4>
                  <p style={{ font: 'var(--text-body-md)', color: 'var(--color-fg-muted)' }}>
                    {wa.noorish.card1Body}
                  </p>
                </div>
              </div>

              <div
                style={{
                  border: 'var(--border-width) solid var(--color-fg)',
                  borderRadius: 6,
                  boxShadow: 'var(--shadow-offset-blue)',
                  background: 'var(--color-bg)',
                  padding: 'var(--space-4)',
                  display: 'flex',
                  gap: 'var(--space-3)',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <OSNetworkIcon />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h4 style={{ font: 'var(--text-h4)', color: 'var(--color-fg)' }}>
                    {wa.noorish.card2Heading}
                  </h4>
                  <p style={{ font: 'var(--text-body-md)', color: 'var(--color-fg-muted)' }}>
                    {wa.noorish.card2Body}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark quote section */}
      <section style={{ background: 'var(--color-surface-dark)', padding: '64px var(--space-5)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 760,
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              font: '700 30px/1.35 var(--font-display)',
              color: 'var(--color-surface-dark-fg)',
            }}
          >
            {wa.quote.prefix}{' '}
            <span style={{ color: 'var(--color-accent-yellow)' }}>
              {wa.quote.highlight}
            </span>{' '}
            🤯
          </p>
          <p style={{ font: 'var(--text-body-lg)', color: 'rgba(250,250,247,0.7)' }}>
            {wa.quote.subtext}
          </p>
          <div style={{ marginTop: 'var(--space-2)' }}>
            <Button
              as="a"
              href={CAL_LINK}
              variant="inverted"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 14, padding: '10px 20px' }}
            >
              {wa.quote.cta}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Background / who is Natalia */}
      <section
        style={{
          borderTop: 'var(--border-width) solid var(--color-border-soft)',
          padding: 'var(--space-8) var(--space-5)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'var(--color-bg)',
              border: 'var(--border-width) solid var(--color-fg)',
              borderRadius: 6,
              boxShadow: 'var(--shadow-offset-yellow)',
              padding: 'var(--space-6)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
            }}
          >
            <p
              style={{
                font: 'var(--text-eyebrow)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'var(--color-fg-faint)',
              }}
            >
              {wa.background.eyebrow}
            </p>
            <p style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)' }}>
              {wa.background.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats — tilted variant (comparison) */}
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
            style={{ marginBottom: 'var(--space-6)' }}
          >
            <p
              style={{
                font: 'var(--text-eyebrow)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'var(--color-fg-faint)',
                marginBottom: 'var(--space-2)',
              }}
            >
              {wa.stats.eyebrow}
            </p>
            <h2 style={{ font: 'var(--text-h2)', color: 'var(--color-fg)' }}>{wa.stats.heading}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--space-5)', paddingBottom: 12 }}>
            {wa.stats.items.map((stat, i) => {
              const tilts = [-2.5, 1.5, -1.5, 2, -1, 2.5];
              return (
                <div
                  key={i}
                  style={{ transform: `rotate(${tilts[i]}deg) scale(0.88)` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    style={{
                      border: 'var(--border-width) solid var(--color-fg)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: i % 2 === 0 ? 'var(--shadow-offset-yellow)' : 'var(--shadow-offset-blue)',
                      background: 'var(--color-bg)',
                      padding: 'var(--space-4)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-2)',
                    }}
                  >
                    <p style={{ font: 'var(--text-stat)', color: 'var(--color-fg)' }}>{stat.withAgents}</p>
                    <p style={{ font: 'var(--text-body-md)', color: 'var(--color-fg-muted)', flex: 1 }}>
                      {stat.metric}
                    </p>
                    <div
                      style={{
                        paddingTop: 'var(--space-2)',
                        borderTop: 'var(--border-width) solid var(--color-border-soft)',
                        marginTop: 'auto',
                      }}
                    >
                      <p style={{ font: 'var(--text-body-sm)', color: 'var(--color-fg-faint)' }}>
                        {wa.stats.withoutAgentsLabel}{' '}
                        <span style={{ fontWeight: 500 }}>{stat.withoutAgents}</span>
                        {stat.multiplier && (
                          <span style={{ marginLeft: 6 }}>· {stat.multiplier} {wa.stats.lessLabel}</span>
                        )}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agent capabilities */}
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
            style={{ marginBottom: 'var(--space-6)' }}
          >
            <p
              style={{
                font: 'var(--text-eyebrow)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'var(--color-fg-faint)',
                marginBottom: 'var(--space-2)',
              }}
            >
              {wa.agents.eyebrow}
            </p>
            <h2 style={{ font: 'var(--text-h2)', color: 'var(--color-fg)' }}>
              {wa.agents.heading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--space-3)' }}>
            {wa.agents.items.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  border: 'var(--border-width) solid var(--color-fg)',
                  borderRadius: 6,
                  boxShadow: '4px 4px 0 #D8DBDC',
                  background: 'var(--color-bg)',
                  padding: 'var(--space-4)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)',
                }}
              >
                <h3 style={{ font: 'var(--text-h3)', color: 'var(--color-fg)' }}>{agent.title}</h3>
                <p style={{ font: 'var(--text-body-md)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
                  {agent.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
