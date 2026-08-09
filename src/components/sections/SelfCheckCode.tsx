'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ds/Button';
import { supabase } from '@/lib/supabase';

const questions = [
  {
    q: 'Does your team use ChatGPT or Claude?',
    options: [
      { label: 'Not really.', score: 0 },
      { label: 'Yes, a few people use it here and there.', score: 1 },
      { label: "It's part of how most teams work day to day.", score: 2 },
    ],
  },
  {
    q: 'Have you set up any AI agents for tasks such as content creation, cold outreach, knowledge management — or similar?',
    options: [
      { label: "No, we haven't set anything like that up.", score: 0 },
      { label: "We've tried one or two, but they're not really running on their own — someone still babysits them.", score: 1 },
      { label: 'Yes, a few agents handle real tasks with light supervision.', score: 2 },
      { label: 'Yes, several agents run end-to-end and we barely touch them.', score: 3 },
    ],
  },
  {
    q: 'Are your agents plugged into your company knowledge base (documentation and data)?',
    options: [
      { label: "We don't have a consolidated knowledge base.", score: 0 },
      { label: "We have one, but our AI tools aren't connected to it.", score: 1 },
      { label: 'Yes, our agents pull directly from it.', score: 2 },
      { label: "We've set up RAG.", score: 3 },
    ],
  },
  {
    q: 'When AI gets something wrong, what happens?',
    options: [
      { label: 'Someone catches it eventually, ad hoc.', score: 0 },
      { label: "A human checks every single output — that's the review step.", score: 1 },
      { label: 'The system flags what looks off. People only step in for the real judgment calls.', score: 2 },
    ],
  },
  {
    q: 'Who owns AI at your company?',
    options: [
      { label: "No one, really — people just use whatever tools they like.", score: 0 },
      { label: "A few teams have their own setups, but they don't talk to each other.", score: 1 },
      { label: 'Each team owns their piece, with shared guidelines and documentation.', score: 2 },
      { label: 'A dedicated role.', score: 3 },
    ],
  },
];

const results = {
  assisted: {
    label: 'Assisted',
    description: 'People use AI tools here and there, one-off, disconnected from the last time. Nothing carries over.',
  },
  integrated: {
    label: 'Integrated',
    description: "AI shows up at several points in a workflow, but someone's still manually running each step and passing the work between them.",
  },
  native: {
    label: 'Native',
    description: "Steps hand off to each other on their own. People design the system and step in where judgment is needed — they're not operating every step by hand.",
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

export default function SelfCheckCode() {
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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sizeOpen, setSizeOpen] = useState(false);
  const sizeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sizeRef.current && !sizeRef.current.contains(e.target as Node)) {
        setSizeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalQuestions = questions.length;
  const currentQ = questions[questionIndex];

  function handleBack() {
    if (questionIndex === 0) return;
    const prev = answers.slice(0, -1);
    setAnswers(prev);
    setSelected(answers[questionIndex - 1]);
    setQuestionIndex(questionIndex - 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const total = answers.reduce((sum, s) => sum + s, 0);
    const result = getResult(total);

    try {
      // Try to insert the lead; if email already exists, fetch the existing row
      const { data: inserted, error: insertError } = await supabase
        .from('leads')
        .insert({
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role || null,
          size: form.size || null,
          industry: form.industry || null,
        })
        .select('id')
        .single();

      let leadId: string;

      if (insertError) {
        // 23505 = unique_violation (email already exists)
        if (insertError.code !== '23505') throw insertError;

        const { data: existing, error: fetchError } = await supabase
          .from('leads')
          .select('id')
          .eq('email', form.email)
          .single();

        if (fetchError) throw fetchError;
        leadId = existing.id;
      } else {
        leadId = inserted.id;
      }

      // Insert quiz submission linked to lead
      const { error: submissionError } = await supabase
        .from('quiz_submissions')
        .insert({
          lead_id: leadId,
          answers,
          total_score: total,
          result,
        });

      if (submissionError) throw submissionError;

      setResultKey(result);
      setStep('result');
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-8) var(--space-5)',
        background: 'var(--color-bg)',
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
            borderRadius: '6px',
            background: 'var(--color-bg)',
            boxShadow: 'var(--shadow-offset-blue)',
          }}
        >
          <div
            style={{
              padding: 'var(--space-4) var(--space-5) 0',
            }}
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
            <p
              style={{
                font: 'var(--text-body-lg)',
                color: 'var(--color-fg-muted)',
              }}
            >
              Five questions and you get a clear picture of where your company stands.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === 'quiz' && (
              <motion.div
                key={`q-${questionIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ padding: 'var(--space-5)' }}>
                  {/* Progress */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    <span
                      style={{
                        font: 'var(--text-eyebrow)',
                        color: 'var(--color-fg-faint)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
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
                          background: 'var(--color-accent-blue)',
                          transition: 'width 0.3s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <p
                    style={{
                      font: 'var(--text-h3)',
                      fontFamily: 'var(--font-display)',
                      marginBottom: 'var(--space-4)',
                      color: 'var(--color-fg)',
                    }}
                  >
                    {currentQ.q}
                  </p>

                  {/* Pills — clicking auto-advances */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    {currentQ.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelected(i);
                          setTimeout(() => {
                            const score = opt.score;
                            const newAnswers = [...answers, score];
                            if (questionIndex < totalQuestions - 1) {
                              setAnswers(newAnswers);
                              setQuestionIndex(questionIndex + 1);
                              setSelected(null);
                            } else {
                              setAnswers(newAnswers);
                              setStep('form');
                            }
                          }, 180);
                        }}
                        style={{
                          padding: '8px 16px',
                          borderRadius: 'var(--radius-pill)',
                          border: `var(--border-width) solid ${selected === i ? 'var(--color-fg)' : 'var(--color-border-soft)'}`,
                          background: selected === i ? 'var(--color-accent-yellow)' : 'transparent',
                          font: 'var(--text-body-sm)',
                          fontFamily: 'var(--font-body)',
                          color: 'var(--color-fg)',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          textAlign: 'left',
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {/* Back */}
                  {questionIndex > 0 && (
                    <button
                      onClick={handleBack}
                      style={{
                        background: 'transparent',
                        border: 'var(--border-width) solid var(--color-border-soft)',
                        borderRadius: 'var(--radius-pill)',
                        padding: '6px 14px',
                        cursor: 'pointer',
                        font: 'var(--text-eyebrow)',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-fg-faint)',
                        letterSpacing: '0.02em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      ← Back
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {step === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  style={{
                    borderBottom: 'var(--border-width) solid var(--color-border-soft)',
                    padding: 'var(--space-3) var(--space-4)',
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
                    Almost there — where should we send your result?
                  </span>
                </div>

                <div style={{ padding: 'var(--space-5)' }}>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--space-3)' }}>
                      {(
                        [
                          { key: 'name', label: 'Full name', type: 'text', required: true },
                          { key: 'company', label: 'Company name', type: 'text', required: true },
                          { key: 'email', label: 'Email', type: 'email', required: true },
                          { key: 'role', label: 'Your role', type: 'text', required: false },
                        ] as const
                      ).map((field) => (
                        <div key={field.key} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <label
                            htmlFor={`code-${field.key}`}
                            style={{
                              font: 'var(--text-eyebrow)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              color: 'var(--color-fg-faint)',
                            }}
                          >
                            {field.label}
                            {field.required && <span style={{ color: 'var(--color-fg-faint)', marginLeft: 4 }}>*</span>}
                          </label>
                          <input
                            id={`code-${field.key}`}
                            type={field.type}
                            required={field.required}
                            value={form[field.key]}
                            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                            style={{
                              padding: '10px var(--space-3)',
                              border: 'var(--border-width) solid var(--color-border-soft)',
                              borderRadius: 'var(--radius-sm)',
                              font: 'var(--text-body-md)',
                              fontFamily: 'var(--font-body)',
                              color: 'var(--color-fg)',
                              background: 'var(--color-bg)',
                              outline: 'none',
                              width: '100%',
                            }}
                          />
                        </div>
                      ))}

                      {/* Company size — custom dropdown */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <span
                          style={{
                            font: 'var(--text-eyebrow)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            color: 'var(--color-fg-faint)',
                          }}
                        >
                          Company size
                        </span>
                        <div ref={sizeRef} style={{ position: 'relative' }}>
                          <button
                            type="button"
                            onClick={() => setSizeOpen(!sizeOpen)}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '100%',
                              padding: '10px var(--space-3)',
                              border: 'var(--border-width) solid var(--color-border-soft)',
                              borderBottom: sizeOpen ? 'none' : 'var(--border-width) solid var(--color-border-soft)',
                              borderRadius: sizeOpen ? 'var(--radius-sm) var(--radius-sm) 0 0' : 'var(--radius-sm)',
                              font: 'var(--text-body-md)',
                              fontFamily: 'var(--font-body)',
                              color: form.size ? 'var(--color-fg)' : 'var(--color-fg-faint)',
                              background: 'var(--color-bg)',
                              cursor: 'pointer',
                              textAlign: 'left',
                            }}
                          >
                            <span>{form.size || 'Select…'}</span>
                            <span style={{ fontSize: 11, color: 'var(--color-fg-faint)', marginLeft: 8 }}>
                              {sizeOpen ? '▴' : '▾'}
                            </span>
                          </button>

                          {sizeOpen && (
                            <div style={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              right: 0,
                              zIndex: 10,
                              border: 'var(--border-width) solid var(--color-border-soft)',
                              borderTop: 'none',
                              borderRadius: '0 0 var(--radius-sm) var(--radius-sm)',
                              background: 'var(--color-bg)',
                              overflow: 'hidden',
                            }}>
                              {['0 to 20', '20 to 50', '50 to 100', '100 to 500', 'More than 500'].map((option, i, arr) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => { setForm({ ...form, size: option }); setSizeOpen(false); }}
                                  style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '10px var(--space-3)',
                                    border: 'none',
                                    borderBottom: i < arr.length - 1 ? 'var(--border-width) solid var(--color-border-soft)' : 'none',
                                    background: form.size === option ? 'var(--color-accent-yellow)' : 'transparent',
                                    font: 'var(--text-body-md)',
                                    fontFamily: 'var(--font-body)',
                                    color: 'var(--color-fg)',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                  }}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Industry — free text */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label
                          htmlFor="code-industry"
                          style={{
                            font: 'var(--text-eyebrow)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            color: 'var(--color-fg-faint)',
                          }}
                        >
                          Industry
                        </label>
                        <input
                          id="code-industry"
                          type="text"
                          value={form.industry}
                          onChange={(e) => setForm({ ...form, industry: e.target.value })}
                          style={{
                            padding: '10px var(--space-3)',
                            border: 'var(--border-width) solid var(--color-border-soft)',
                            borderRadius: 'var(--radius-sm)',
                            font: 'var(--text-body-md)',
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-fg)',
                            background: 'var(--color-bg)',
                            outline: 'none',
                            width: '100%',
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, marginTop: 'var(--space-2)' }}>
                      {submitError && (
                        <p style={{ font: 'var(--text-body-sm)', color: 'red', margin: 0 }}>
                          {submitError}
                        </p>
                      )}
                      <Button type="submit" variant="primary" disabled={submitting}>
                        {submitting ? 'Submitting…' : 'See my result'}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {step === 'result' && resultKey && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Result label as pill */}
                <div
                  style={{
                    borderBottom: 'var(--border-width) solid var(--color-border-soft)',
                    padding: 'var(--space-3) var(--space-4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      padding: '8px 20px',
                      borderRadius: 'var(--radius-pill)',
                      border: 'var(--border-width) solid var(--color-fg)',
                      background: 'var(--color-accent-yellow)',
                      font: 'var(--text-eyebrow)',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-fg)',
                      fontWeight: 600,
                    }}
                  >
                    {results[resultKey].label}
                  </span>
                  <span style={{ font: 'var(--text-eyebrow)', color: 'var(--color-fg-faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Your result
                  </span>
                </div>

                <div style={{ padding: 'var(--space-5)' }}>
                  <p
                    style={{
                      font: 'var(--text-body-lg)',
                      color: 'var(--color-fg-muted)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    {results[resultKey].description}
                  </p>

                  <div
                    style={{
                      padding: 'var(--space-4)',
                      border: 'var(--border-width) solid var(--color-border-soft)',
                      background: 'var(--color-bg)',
                      marginBottom: 'var(--space-4)',
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
                      setSubmitError(null);
                      setForm({ name: '', company: '', email: '', size: '', industry: '', role: '' });
                    }}
                    style={{
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
