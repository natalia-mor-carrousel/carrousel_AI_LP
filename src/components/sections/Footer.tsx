import { CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: 'var(--border-width) solid var(--color-border-soft)',
        padding: 'var(--space-5) var(--space-5)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
        }}
      >
        <img src="/logos/logo.svg" alt="Carrousel.ai" style={{ height: 24, width: 'auto' }} />

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              font: 'var(--text-body-sm)',
              color: 'var(--color-fg-muted)',
            }}
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              font: 'var(--text-body-sm)',
              color: 'var(--color-fg-muted)',
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
