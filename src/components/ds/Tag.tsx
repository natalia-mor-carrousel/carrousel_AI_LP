import React from 'react';

interface TagProps {
  children: React.ReactNode;
  filled?: boolean;
  accent?: boolean;
}

export default function Tag({ children, filled = false, accent = false }: TagProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.01em',
        borderRadius: 'var(--radius-pill)',
        padding: '7px 16px',
        border: filled ? 'none' : `var(--border-width) solid ${accent ? 'var(--color-accent-blue)' : 'var(--color-fg)'}`,
        background: filled ? 'var(--color-accent-yellow)' : 'transparent',
        color: accent ? 'var(--color-accent-blue-text)' : 'var(--color-fg)',
      }}
    >
      {children}
    </span>
  );
}
