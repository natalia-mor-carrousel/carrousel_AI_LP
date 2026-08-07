'use client';

import { motion } from 'framer-motion';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import TopicsColumns from '@/components/sections/TopicsColumns';
import Button from '@/components/ds/Button';
import { CAL_LINK } from '@/lib/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Step = {
  number: string;
  title: string;
  accent: string;
  shadow: string;
  subtitle: string | null;
  bullets: string[];
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Intro call',
    accent: 'var(--color-accent-yellow)',
    shadow: 'var(--shadow-offset-yellow)',
    subtitle: null,
    bullets: [
      'Goal: customize the training to you',
      'Where you are now and how you currently use AI',
      'Who it is for — team or leadership, what level, their processes and bottlenecks',
      'We define the learning goals together',
      'You get the program outline right after',
    ],
  },
  {
    number: '02',
    title: 'Training',
    accent: 'var(--color-accent-blue)',
    shadow: 'var(--shadow-offset-blue)',
    subtitle: null,
    bullets: [
      'I get to know your team and how they work, where they lose time, where the bottlenecks are',
      'We fill the gaps with the concepts they are missing',
      '__LINK__',
    ],
  },
  {
    number: '03',
    title: 'What you walk away with',
    accent: 'var(--color-accent-yellow)',
    shadow: 'var(--shadow-offset-yellow)',
    subtitle: 'Depending on the training goals',
    bullets: [
      'A Claude Cowork workspace and knowledge base',
      'A set of skills and scheduled tasks',
      'A governance map — who is responsible for what',
      'Shared guardrails and policies',
      'A metrics dashboard',
      'An action plan with next steps (key processes to automate, key decisions to make)',
    ],
  },
];

function BulletDot({ accent }: { accent: string }) {
  return (
    <span
      style={{
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: accent,
        flexShrink: 0,
        marginTop: 7,
        display: 'inline-block',
      }}
    />
  );
}

export default function TheApproachPage() {
  return (
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--space-8) var(--space-5)' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
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
            The approach
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              font: 'var(--text-hero)',
              letterSpacing: '-0.02em',
              color: 'var(--color-fg)',
              lineHeight: 1.08,
            }}
          >
            AI opened the door. You still have to{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              walk through.
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
        </motion.div>
      </section>

      {/* How it works */}
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
            How it works
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  border: 'var(--border-width) solid var(--color-fg)',
                  borderRadius: 6,
                  boxShadow: step.shadow,
                  background: 'var(--color-bg)',
                  padding: 'var(--space-6)',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 'var(--space-5)',
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    font: '700 52px/1 var(--font-display)',
                    color: step.accent,
                    letterSpacing: '-0.03em',
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </div>

                <div>
                  <h3
                    style={{
                      font: 'var(--text-h3)',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-fg)',
                      marginBottom: step.subtitle ? 'var(--space-1)' : 'var(--space-3)',
                    }}
                  >
                    {step.title}
                  </h3>

                  {step.subtitle && (
                    <p
                      style={{
                        font: 'var(--text-body-sm)',
                        color: 'var(--color-fg-faint)',
                        fontStyle: 'italic',
                        marginBottom: 'var(--space-3)',
                      }}
                    >
                      {step.subtitle}
                    </p>
                  )}

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {step.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex',
                          gap: 12,
                          font: 'var(--text-body-md)',
                          color: 'var(--color-fg-muted)',
                        }}
                      >
                        <BulletDot accent={step.accent} />
                        {bullet === '__LINK__' ? (
                          <span>
                            We build what fits your goals: a knowledge base, an agent, governance guardrails, etc.{' '}
                            <a
                              href="#examples"
                              style={{
                                color: 'var(--color-fg-muted)',
                                borderBottom: '1.5px solid var(--color-accent-blue)',
                                paddingBottom: 1,
                              }}
                            >
                              See examples below
                            </a>
                          </span>
                        ) : (
                          bullet
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fractional AI Partner */}
      <section
        style={{
          borderTop: 'var(--border-width) solid var(--color-border-soft)',
          padding: 'var(--space-8) var(--space-5)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              border: 'var(--border-width) solid var(--color-fg)',
              borderRadius: 6,
              boxShadow: 'var(--shadow-offset-blue)',
              background: 'var(--color-bg)',
            }}
          >
            <div style={{ padding: 'var(--space-5) var(--space-5) 0' }}>
              <p
                style={{
                  font: 'var(--text-eyebrow)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--color-fg-faint)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                One day a week, six months
              </p>
              <h2
                style={{
                  font: 'var(--text-h2)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Fractional AI Partner
              </h2>
            </div>

            <div style={{ padding: 'var(--space-5)' }}>
              <p
                style={{
                  font: 'var(--text-body-lg)',
                  color: 'var(--color-fg-muted)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Weekly calls with your team, going deep into how they actually work. We restructure workflows end to end, install and connect tools. Building and learning happen at the same time — key concepts get covered as we go, so the knowledge stays with the team. You end up as an AI-native company.
              </p>

              <div>
                <Button
                  as="a"
                  href={CAL_LINK}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 14, padding: '10px 20px' }}
                >
                  Book an intro call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Examples — duplicated from main page */}
      <div id="examples">
        <TopicsColumns />
      </div>

      <Footer />
    </main>
  );
}
