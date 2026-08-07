'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ds/Button';

const questions = [
  {
    q: 'Does your team use ChatGPT or Claude?',
    options: [
      { label: 'A', text: 'Not really.', score: 0 },
      { label: 'B', text: 'Yes, a few people use it here and there.', score: 1 },
      { label: 'C', text: "It's part of how most teams work day to day.", score: 2 },
    ],
  },
  {
    q: 'Have you set up any AI agents for tasks such as content creation, cold outreach, knowledge management — or similar?',
    options: [
      { label: 'A', text: "No, we haven't set anything like that up.", score: 0 },
      { label: 'B', text: "We've tried one or two, but they're not really running on their own — someone still babysits them.", score: 1 },
      { label: 'C', text: 'Yes, a few agents handle real tasks with light supervision.', score: 2 },
      { label: 'D', text: 'Yes, several agents run end-to-end and we barely touch them.', score: 3 },
    ],
  },
  {
    q: 'Are your agents plugged into your company knowledge base (documentation and data)?',
    options: [
      { label: 'A', text: "We don't have a consolidated knowledge base.", score: 0 },
      { label: 'B', text: "We have one, but our AI tools aren't connected to it.", score: 1 },
      { label: 'C', text: 'Yes, our agents pull directly from it.', score: 2 },
      { label: 'D', text: "We've set up RAG.", score: 3 },
    ],
  },
  {
    q: 'When AI gets something wrong, what happens?',
    options: [
      { label: 'A', text: 'Someone catches it eventually, ad hoc.', score: 0 },
      { label: 'B', text: 'A human checks every single output — that\'s the review step.', score: 1 },
      { label: 'C', text: 'The system flags what looks off. People only step in for the real judgment calls.', score: 2 },
    ],
  },
  {
    q: 'Who owns AI at your company?',
    options: [
      { label: 'A', text: 'No one, really — people just use whatever tools they like.', score: 0 },
      { label: 'B', text: "A few teams have their own setups, but they don't talk to each other.", score: 1 },
      { label: 'C', text: 'Each team owns their piece, with shared guidelines and documentation.', score: 2 },
      { label: 'D', text: 'A dedicated role.', score: 3 },
    ],
  },
];

const results = {
  assisted: {
    label: 'Assisted',
    description:
      'People use AI tools here and there, one-off, disconnected from the last time. Nothing carries over.',
  },
  integrated: {
    label: 'Integrated',
    description:
      "AI shows up at several points in a workflow, but someone's still manually running each step and passing the work between them.",
  },
  native: {
    label: 'Native',
    description:
      "Steps hand off to each other on their own. People design the system and step in where judgment is needed — they're not operating every step by hand.",
  },
};

const deeperDig =
  "Most companies think they're further along than they are. 90% of employees already use AI tools on their own, unofficially — and it still doesn't add up to real value. Even fully-resourced AI projects fail most of the time: 95% of enterprise AI pilots don't deliver a return, not because the AI doesn't work, but because it gets bolted onto an old way of working. Outside help roughly doubles the success rate of internal-only attempts — knowing your own job well isn't the same as knowing how to restructure it.";

type Step = 'quiz' | 'form' | 'result';

interface FormData {
  name: string;
  company: string;
  email: string;
  size: string;
  industry: string;
  role: string;
}

function getResult(score: number): keyof typeof results {
  if (score <= 4) return 'assisted';
  if (score <= 9) return 'integrated';
  return 'native';
}

export default function SelfCheck() {
  const [step, setStep] = useState<Step>('quiz');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    size: '',
    industry: '',
    role: '',
  });
  const [resultKey, setResultKey] = useState<keyof typeof results | null>(null);

  const totalQuestions = questions.length;
  const currentQ = questions[questionIndex];

  function handleNext() {
    if (selected === null) return;
    const score = currentQ.options[selected].score;
    const newAnswers = [...answers, score];
    if (questionIndex < totalQuestions - 1) {
      setAnswers(newAnswers);
      setQuestionIndex(questionIndex + 1);
      setSelected(null);
    } else {
      setAnswers(newAnswers);
      setStep('form');
    }
  }

  function handleBack() {
    if (questionIndex === 0) return;
    const prev = answers.slice(0, -1);
    setAnswers(prev);
    setSelected(answers[questionIndex - 1]);
    setQuestionIndex(questionIndex - 1);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const total = answers.reduce((sum, s) => sum + s, 0);
    setResultKey(getResult(total));
    setStep('result');
  }

  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-8) var(--space-5)',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 'var(--space-7)' }}
        >
          <h2
            style={{
              font: 'var(--text-h2)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--space-2)',
            }}
          >
            Is your business AI-native, or just AI-assisted?
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === 'quiz' && (
            <motion.div
              key={`q-${questionIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Progress */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                <span
                  style={{
                    font: 'var(--text-eyebrow)',
                    color: 'var(--color-fg-faint)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Question {questionIndex + 1} of {totalQuestions}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    background: 'var(--color-border-soft)',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: `${((questionIndex + 1) / totalQuestions) * 100}%`,
                      background: 'var(--color-accent-yellow)',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              </div>

              <p
                style={{
                  font: 'var(--text-h3)',
                  fontFamily: 'var(--font-display)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                {currentQ.q}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {currentQ.options.map((opt, i) => (
                  <label
                    key={opt.label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                      padding: 'var(--space-3) var(--space-4)',
                      border: `var(--border-width) solid ${selected === i ? 'var(--color-fg)' : 'var(--color-border-soft)'}`,
                      cursor: 'pointer',
                      background: 'var(--surface-card)',
                      transition: 'border-color 0.15s',
                    }}
                  >
                    <input
                      type="radio"
                      name={`q-${questionIndex}`}
                      value={i}
                      checked={selected === i}
                      onChange={() => setSelected(i)}
                      style={{ marginTop: 3, accentColor: 'var(--color-fg)', flexShrink: 0 }}
                    />
                    <span style={{ font: 'var(--text-body-md)', color: 'var(--color-fg-muted)' }}>
                      <strong style={{ color: 'var(--color-fg)', marginRight: 6 }}>{opt.label}.</strong>
                      {opt.text}
                    </span>
                  </label>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 'var(--space-5)',
                }}
              >
                <Button
                  variant="secondary"
                  onClick={handleBack}
                  disabled={questionIndex === 0}
                  style={{ opacity: questionIndex === 0 ? 0.4 : 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={selected === null}
                  style={{ opacity: selected === null ? 0.4 : 1 }}
                >
                  {questionIndex < totalQuestions - 1 ? 'Next' : 'Continue'}
                </Button>
              </div>
            </motion.div>
          )}

          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p
                style={{
                  font: 'var(--text-body-md)',
                  color: 'var(--color-fg-muted)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                You&apos;ll receive a copy of your results by email.
              </p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {(
                  [
                    { key: 'name', label: 'Full name', type: 'text', required: true },
                    { key: 'company', label: 'Company name', type: 'text', required: true },
                    { key: 'email', label: 'Email', type: 'email', required: true },
                    { key: 'size', label: 'How big is your company?', type: 'text', required: false },
                    { key: 'industry', label: 'What industry are you in?', type: 'text', required: false },
                    { key: 'role', label: 'Your role', type: 'text', required: false },
                  ] as const
                ).map((field) => (
                  <div key={field.key} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label
                      htmlFor={field.key}
                      style={{
                        font: 'var(--text-eyebrow)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: 'var(--color-fg-faint)',
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.key}
                      type={field.type}
                      required={field.required}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        padding: '12px var(--space-3)',
                        border: 'var(--border-width) solid var(--color-border-soft)',
                        borderRadius: 'var(--radius-sm)',
                        font: 'var(--text-body-md)',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-fg)',
                        background: 'var(--surface-card)',
                        outline: 'none',
                        width: '100%',
                      }}
                    />
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-2)' }}>
                  <Button type="submit" variant="primary">
                    See my result
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 'result' && resultKey && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}
            >
              <div
                style={{
                  border: 'var(--border-width) solid var(--color-fg)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-offset-yellow)',
                }}
              >
                <div
                  style={{
                    font: 'var(--text-eyebrow)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--color-fg-faint)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Your result
                </div>
                <h3
                  style={{
                    font: 'var(--text-stat)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--color-fg)',
                  }}
                >
                  {results[resultKey].label}
                </h3>
                <p
                  style={{
                    font: 'var(--text-body-lg)',
                    color: 'var(--color-fg-muted)',
                  }}
                >
                  {results[resultKey].description}
                </p>
              </div>

              <div
                style={{
                  padding: 'var(--space-5)',
                  border: 'var(--border-width) solid var(--color-border-soft)',
                  background: 'var(--color-bg)',
                }}
              >
                <p
                  style={{
                    font: 'var(--text-body-md)',
                    color: 'var(--color-fg-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  {deeperDig}
                </p>
              </div>

              <button
                onClick={() => {
                  setStep('quiz');
                  setQuestionIndex(0);
                  setAnswers([]);
                  setSelected(null);
                  setResultKey(null);
                  setForm({ name: '', company: '', email: '', size: '', industry: '', role: '' });
                }}
                style={{
                  alignSelf: 'flex-start',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  font: 'var(--text-body-sm)',
                  color: 'var(--color-fg-faint)',
                  textDecoration: 'underline',
                  padding: 0,
                  fontFamily: 'var(--font-body)',
                }}
              >
                Start over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
