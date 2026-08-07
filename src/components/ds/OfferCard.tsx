import React from 'react';

interface OfferCardProps {
  kicker: string;
  name: string;
  price: string;
  desc: React.ReactNode;
  cta: string;
  ctaHref?: string;
  ctaTarget?: string;
  learnMoreHref?: string;
  accent?: string;
  onCta?: () => void;
}

export default function OfferCard({
  kicker,
  name,
  price,
  desc,
  cta,
  ctaHref,
  ctaTarget,
  learnMoreHref,
  accent = 'var(--color-accent-yellow)',
  onCta,
}: OfferCardProps) {
  return (
    <div
      style={{
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 360,
        fontFamily: 'var(--font-body)',
      }}
    >
      <div
        style={{
          width: 30,
          height: 6,
          borderRadius: 3,
          background: accent,
          marginBottom: 16,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          font: 'var(--text-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: 'var(--color-fg-faint)',
          marginBottom: 14,
        }}
      >
        {kicker}
      </div>
      <h3
        style={{
          font: 'var(--text-h3)',
          fontFamily: 'var(--font-display)',
          margin: '0 0 14px',
        }}
      >
        {name}
      </h3>
      <div
        style={{
          font: 'var(--text-body-md)',
          color: 'var(--color-fg-muted)',
          flex: 1,
          marginBottom: 20,
          lineHeight: 1.6,
        }}
      >
        {desc}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 18,
          fontFamily: 'var(--font-display)',
        }}
      >
        {price}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
        {ctaHref ? (
          <a
            href={ctaHref}
            target={ctaTarget}
            rel={ctaTarget === '_blank' ? 'noopener noreferrer' : undefined}
            style={{
              fontWeight: 600,
              fontSize: 14,
              padding: '12px 20px',
              background: 'transparent',
              color: 'var(--color-fg)',
              border: 'var(--border-width) solid var(--color-fg)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              boxShadow: `3px 3px 0 ${accent}`,
              fontFamily: 'var(--font-body)',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            {cta}
          </a>
        ) : (
          <button
            onClick={onCta}
            style={{
              fontWeight: 600,
              fontSize: 14,
              padding: '12px 20px',
              background: 'transparent',
              color: 'var(--color-fg)',
              border: 'var(--border-width) solid var(--color-fg)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              boxShadow: `3px 3px 0 ${accent}`,
              fontFamily: 'var(--font-body)',
            }}
          >
            {cta}
          </button>
        )}
        {learnMoreHref && (
          <a
            href={learnMoreHref}
            style={{
              font: 'var(--text-body-sm)',
              fontFamily: 'var(--font-body)',
              color: 'var(--color-fg-muted)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-fg-muted)',
              paddingBottom: 1,
            }}
          >
            Learn more
          </a>
        )}
      </div>
    </div>
  );
}
