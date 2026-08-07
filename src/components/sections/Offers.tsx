'use client';

import { motion } from 'framer-motion';
import OfferCard from '../ds/OfferCard';
import Button from '../ds/Button';
import { CAL_LINK } from '@/lib/constants';

const offers = [
  {
    id: 'boost',
    kicker: 'One-day workshop',
    name: 'Boost',
    price: '€3,500',
    desc: (
      <>
        One focused day together, hands-on, on whatever will move the needle most for you or your team.
        <br /><br />
        <em style={{ color: 'var(--color-fg-faint)', fontStyle: 'italic' }}>
          in person or remote · teams up to 8
        </em>
      </>
    ),
    cta: 'Book an intro call',
    accent: 'var(--color-accent-yellow)',
  },
  {
    id: 'immersion',
    kicker: 'Two weeks, two hours a day',
    name: 'Immersion',
    price: '€7,000',
    desc: (
      <>
        Two weeks gives you room to breathe — try things between sessions, sleep on it, come back with thoughtful questions. That space means we cover more ground, and it actually sticks.
        <br /><br />
        <em style={{ color: 'var(--color-fg-faint)', fontStyle: 'italic' }}>
          remote · teams up to 10
        </em>
      </>
    ),
    cta: 'Book an intro call',
    accent: 'var(--color-accent-blue)',
  },
  {
    id: 'fractional',
    kicker: 'One day a week, six months',
    name: 'Fractional AI Partner',
    price: '€9,000/month',
    desc: (
      <>
        I get to know how your business runs and work alongside your team every week, until using AI becomes how you work. More time, stronger adoption.
        <br /><br />
        <em style={{ color: 'var(--color-fg-faint)', fontStyle: 'italic' }}>
          remote
        </em>
      </>
    ),
    cta: 'Book an intro call',
    accent: 'var(--color-accent-yellow)',
  },
];

export default function Offers() {
  return (
    <section
      style={{
        background: 'var(--color-bg)',
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
          Choose your format
        </motion.h2>
        <div className="offers-grid">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              id={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <OfferCard
                kicker={offer.kicker}
                name={offer.name}
                price={offer.price}
                desc={offer.desc}
                cta={offer.cta}
                ctaHref={CAL_LINK}
                ctaTarget="_blank"
                learnMoreHref="/the-approach"
                accent={offer.accent}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: 'var(--space-6)',
            padding: 'var(--space-5)',
            border: 'var(--border-width) solid var(--color-border-soft)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-5)',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              font: 'var(--text-body-md)',
              color: 'var(--color-fg-muted)',
              flex: 1,
              minWidth: 240,
            }}
          >
            Need something different — a two-day offsite, a different rhythm? Tell me what you&apos;re working with and we&apos;ll figure out a shape that fits.
          </p>
          <Button as="a" href={CAL_LINK} variant="secondary" target="_blank" rel="noopener noreferrer">
            Contact
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
