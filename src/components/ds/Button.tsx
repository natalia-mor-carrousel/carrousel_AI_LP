'use client';

import React from 'react';

type Variant = 'primary' | 'secondary' | 'inverted';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: 'var(--color-fg)',
    color: 'var(--color-bg)',
    border: 'var(--border-width) solid var(--color-fg)',
    boxShadow: 'var(--shadow-offset-yellow)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-fg)',
    border: 'var(--border-width) solid var(--color-fg)',
    boxShadow: 'var(--shadow-offset-blue-sm)',
  },
  inverted: {
    background: 'var(--surface-card)',
    color: 'var(--color-cta-fg)',
    border: 'var(--border-width) solid var(--surface-card)',
    boxShadow: 'var(--shadow-offset-yellow)',
  },
};

export default function Button({ children, variant = 'primary', as, href, target, rel, style, ...props }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: 16,
    padding: '15px 28px',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    transition: 'transform 0.1s ease, box-shadow 0.1s ease',
    ...variantStyles[variant],
    ...style,
  };

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} style={baseStyle}>
        {children}
      </a>
    );
  }

  return (
    <button style={baseStyle} {...props}>
      {children}
    </button>
  );
}
