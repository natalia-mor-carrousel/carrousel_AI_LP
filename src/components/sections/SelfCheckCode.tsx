'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ds/Button';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type ResultKey = 'assisted' | 'integrated' | 'native';
type Step = 'quiz' | 'form' | 'result';

interface FormData {
  name: string;
  company: string;
  email: string;
  size: string;
  industry: string;
  role: string;
}

function getResult(score: number): ResultKey {
  if (score <= 4) return 'assisted';
  if (score <= 9) return 'integrated';
  return 'native';
}

export default function SelfCheckCode() {
  const { t } = useLanguage();
  const quiz = t.quiz;

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
  const [resultKey, setResultKey] = useState<ResultKey | null>(null);
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

  const totalQuestions = quiz.questions.length;
  const currentQ = quiz.questions[questionIndex];

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
      if (!supabase) {
        setResultKey(result);
        setStep('result');
        return;
      }

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
      setSubmitError(quiz.form.error);
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
              {quiz.heading}
            </h2>
            <p
              style={{
                font: 'var(--text-body-lg)',
                color: 'var(--color-fg-muted)',
              }}
            >
              {quiz.subheading}
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
                      {quiz.questionOf(questionIndex + 1, totalQuestions)}
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
                      {quiz.back}
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
                    {quiz.almostThere}
                  </span>
                </div>

                <div style={{ padding: 'var(--space-5)' }}>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--space-3)' }}>
                      {(
                        [
                          { key: 'name', label: quiz.form.name, type: 'text', required: true },
                          { key: 'company', label: quiz.form.company, type: 'text', required: true },
                          { key: 'email', label: quiz.form.email, type: 'email', required: true },
                          { key: 'role', label: quiz.form.role, type: 'text', required: false },
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
                          {quiz.form.size}
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
                            <span>{form.size || quiz.form.sizePlaceholder}</span>
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
                              {quiz.form.sizeOptions.map((option, i, arr) => (
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
                          {quiz.form.industry}
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
                        {submitting ? quiz.form.submitting : quiz.form.submit}
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
                    {quiz.results[resultKey].label}
                  </span>
                  <span style={{ font: 'var(--text-eyebrow)', color: 'var(--color-fg-faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {quiz.yourResult}
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
                    {quiz.results[resultKey].description}
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
                      {quiz.deeperDig}
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
                    {quiz.startOver}
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
