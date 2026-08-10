import Image from 'next/image';
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
        className="flex flex-col items-center gap-4 md:flex-row md:justify-between"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <Image src="/logos/logo.svg" alt="Carrousel.ai" height={24} width={100} style={{ height: 24, width: 'auto' }} />

        <div
          className="flex flex-col items-center gap-2 md:flex-row md:gap-6"
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
