'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import FinalCta from '@/components/sections/FinalCta';
import Button from '@/components/ds/Button';
import { CAL_LINK } from '@/lib/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Stat = {
  metric: string;
  withAgents: number;
  withoutAgents: number | string;
  multiplier: string | null;
};

const stats: Stat[] = [
  { metric: 'Gut health action plans generated', withAgents: 22, withoutAgents: 2, multiplier: '11×' },
  { metric: 'Instagram posts published', withAgents: 63, withoutAgents: 30, multiplier: '2×' },
  { metric: 'Blog articles published', withAgents: 17, withoutAgents: '0 (yeah)', multiplier: null },
  { metric: 'Nutritionists contacted', withAgents: 145, withoutAgents: 50, multiplier: '3×' },
  { metric: 'Collab calls booked', withAgents: 18, withoutAgents: 6, multiplier: '3×' },
  { metric: 'App features shipped', withAgents: 12, withoutAgents: 2, multiplier: '6×' },
];

const agents = [
  {
    title: 'Cold outreach',
    body: "It searches for qualified practitioner leads, drafts personalized messages, sends follow-ups, and handles my CRM. I only step in when someone replies — you know, to chat a bit, 'cause I want some human connection too.",
  },
  {
    title: 'Video content publishing',
    body: "Recording is the fun part. Editing, writing captions, organizing files, publishing, grabbing links, tracking it all in Notion... too much. My agent handles all that boring work for me.",
  },
  {
    title: 'Blog posts',
    body: "I hate blogs. But Noorish users love them, and SEO loves them even more. My agent searches for keyword gaps, builds outlines, writes drafts, fact-checks, humanizes the text, generates images, and publishes. Yeah, agent labor exploitation.",
  },
  {
    title: 'Daily progress',
    body: "Useful for OS memory so it stays up to date — but also for you, on those days you wonder if you actually did anything useful last month. Just ask your agent.",
  },
  {
    title: 'Clean my folders',
    body: "My agent robovac goes through folders and files, finds the obsolete ones, and hands me a list to confirm before deleting. I hate cleaning. Even digital cleaning.",
  },
  {
    title: 'Manage emails',
    body: "It sorts emails by the rules I've set. Some get replied to right away. Some need a draft and my review. The ones not worth my time get archived.",
  },
];

function AISparkleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="grad-ai-sparkle" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD966" />
          <stop offset="100%" stopColor="#37474F" />
        </linearGradient>
      </defs>
      {/* Large 4-pointed star */}
      <path
        d="M22 9 L25.9 18.1 L35 22 L25.9 25.9 L22 35 L18.1 25.9 L9 22 L18.1 18.1 Z"
        fill="url(#grad-ai-sparkle)"
      />
      {/* Small 4-pointed star top-right */}
      <path
        d="M33 5.5 L34.4 8.6 L37.5 10 L34.4 11.4 L33 14.5 L31.6 11.4 L28.5 10 L31.6 8.6 Z"
        fill="url(#grad-ai-sparkle)"
        opacity="0.65"
      />
      {/* Tiny dot bottom-left */}
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
      {/* Connecting lines (behind nodes) */}
      <line x1="22" y1="14" x2="12" y2="28" stroke="url(#grad-os-network)" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="14" x2="32" y2="28" stroke="url(#grad-os-network)" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="33" x2="30" y2="33" stroke="url(#grad-os-network)" strokeWidth="2" strokeLinecap="round" />
      {/* Top node */}
      <circle cx="22" cy="9" r="5" fill="url(#grad-os-network)" />
      {/* Bottom-left node */}
      <circle cx="9" cy="33" r="5" fill="url(#grad-os-network)" />
      {/* Bottom-right node */}
      <circle cx="35" cy="33" r="5" fill="url(#grad-os-network)" />
      {/* Small center pulse dot */}
      <circle cx="22" cy="24" r="2" fill="url(#grad-os-network)" opacity="0.5" />
    </svg>
  );
}

export default function WhoAmIPage() {
  return (
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Nav />

      {/* Hero — with photo */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--space-8) var(--space-5)' }}>
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
              My story
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
              Six months, one person, and a pile of{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                AI agents.
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
              That&apos;s how{' '}
              <a
                href="https://getnoorish.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderBottom: '1.5px solid var(--color-accent-yellow)', paddingBottom: 1 }}
              >
                Noorish
              </a>{' '}
              happened. I&apos;m Natalia — I built it solo, fast, and had a blast doing it.
            </motion.p>
          </motion.div>

          {/* Photo — head and shoulders */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flexShrink: 0 }}
            className="flex justify-center md:block"
          >
            <div
              style={{ filter: 'drop-shadow(0px 6px 24px rgba(55,71,79,0.13))' }}
              className="w-[180px] md:w-[240px]"
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: 280,
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                }}
              >
                <Image
                  src="/images/natalia-ymm.png"
                  alt="Natalia Morozova"
                  width={240}
                  height={340}
                  priority
                  style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 'auto' }}
                />
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
              <h2 style={{ font: 'var(--text-h2)', color: 'var(--color-fg)' }}>What is Noorish?</h2>
              <p style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)' }}>
                A gut-health app that helps people with IBS figure out what works for them. Using AI, of course.
              </p>
              <p style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)' }}>
                It&apos;s not just an app. It&apos;s a whole business — with a client base, customer support,
                marketing channels, content, collabs with practitioners, competitor research, staying current
                in the nutrition field.
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
                  Visit getnoorish.com ↗
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
                AI-native from the ground up
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
                    The product itself runs on AI
                  </h4>
                  <p style={{ font: 'var(--text-body-md)', color: 'var(--color-fg-muted)' }}>
                    I&apos;m not a nutritionist — AI does the research, checks the findings, and makes sure
                    it&apos;s all backed by science.
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
                    The whole business runs on the Noorish OS
                  </h4>
                  <p style={{ font: 'var(--text-body-md)', color: 'var(--color-fg-muted)' }}>
                    A combo of knowledge base, skills, agents, subagents, databases, webhooks, and scheduled
                    tasks.
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
            If I could build a whole company in 6 months, solo,{' '}
            <span style={{ color: 'var(--color-accent-yellow)' }}>
              imagine what you could do with a team
            </span>{' '}
            🤯
          </p>
          <p style={{ font: 'var(--text-body-lg)', color: 'rgba(250,250,247,0.7)' }}>
            You just need a trained team. A team of pro users, not just amateurs.
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
              Book an intro
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
              A bit of background
            </p>
            <p style={{ font: 'var(--text-body-lg)', color: 'var(--color-fg-muted)' }}>
              In the past I was a learning designer, building fun and engaging trainings on tech stuff. Now
              it&apos;s AI&apos;s turn. Not a developer, but I&apos;ve always been a tech enthusiast. With AI,
              tech got easier — but somehow it&apos;s also not easy at all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          borderTop: 'var(--border-width) solid var(--color-border-soft)',
          padding: 'var(--space-8) var(--space-5)',
          display: 'none',
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
              Thanks to my agents...
            </p>
            <h2 style={{ font: 'var(--text-h2)', color: 'var(--color-fg)' }}>In the last month</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--space-3)' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.metric}
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
                    Without agents: <span style={{ fontWeight: 500 }}>{stat.withoutAgents}</span>
                    {stat.multiplier && (
                      <span style={{ marginLeft: 6 }}>· {stat.multiplier} less</span>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Thanks to my agents...
            </p>
            <h2 style={{ font: 'var(--text-h2)', color: 'var(--color-fg)' }}>In the last month</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--space-5)', paddingBottom: 12 }}>
            {stats.map((stat, i) => {
              const tilts = [-2.5, 1.5, -1.5, 2, -1, 2.5];
              return (
                <div
                  key={stat.metric + '-tilted'}
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
                        Without agents: <span style={{ fontWeight: 500 }}>{stat.withoutAgents}</span>
                        {stat.multiplier && (
                          <span style={{ marginLeft: 6 }}>· {stat.multiplier} less</span>
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
              Under the hood
            </p>
            <h2 style={{ font: 'var(--text-h2)', color: 'var(--color-fg)' }}>
              Some of what Noorish agents do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--space-3)' }}>
            {agents.map((agent, i) => (
              <motion.div
                key={agent.title}
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
