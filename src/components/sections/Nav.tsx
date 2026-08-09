'use client';

import { useState } from 'react';
import Button from '../ds/Button';
import { CAL_LINK } from '@/lib/constants';

const navLinks = [
  { label: 'The approach', href: '/the-approach' },
  { label: 'Who Am I', href: '/who-am-i' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--color-bg)',
        borderBottom: 'var(--border-width) solid var(--color-border-soft)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 var(--space-5)',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <img src="/logos/logo.svg" alt="Carrousel.ai" style={{ height: 32, width: 'auto' }} />
        </a>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ gap: 'var(--space-4)', alignItems: 'center', marginLeft: 'auto' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                font: 'var(--text-body-sm)',
                fontFamily: 'var(--font-body)',
                color: 'var(--color-fg-muted)',
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block" style={{ flexShrink: 0 }}>
          <Button
            as="a"
            href={CAL_LINK}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, padding: '10px 20px' }}
          >
            Book an intro
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              background: 'var(--color-fg)',
              transition: 'transform 0.2s',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              background: 'var(--color-fg)',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              background: 'var(--color-fg)',
              transition: 'transform 0.2s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: 'var(--border-width) solid var(--color-border-soft)',
            padding: 'var(--space-4) var(--space-5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 'var(--space-3)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                font: 'var(--text-body-md)',
                fontFamily: 'var(--font-body)',
                color: 'var(--color-fg)',
                padding: '6px 0',
                textAlign: 'right',
              }}
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href={CAL_LINK} variant="primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}>
            Book an intro
          </Button>
        </div>
      )}
    </nav>
  );
}
