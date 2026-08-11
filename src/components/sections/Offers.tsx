'use client';

import { motion } from 'framer-motion';
import OfferCard from '../ds/OfferCard';
import Button from '../ds/Button';
import { CAL_LINK } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const offerAccents = [
  'var(--color-accent-yellow)',
  'var(--color-accent-blue)',
  'var(--color-accent-yellow)',
];

export default function Offers() {
  const { t } = useLanguage();

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
          {t.offers.heading}
        </motion.h2>
        <div className="offers-grid">
          {t.offers.items.map((offer, i) => (
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
                desc={
                  <>
                    {offer.desc}
                    <br /><br />
                    <em style={{ color: 'var(--color-fg-faint)', fontStyle: 'italic' }}>
                      {offer.note}
                    </em>
                  </>
                }
                cta={offer.cta}
                ctaHref={CAL_LINK}
                ctaTarget="_blank"
                learnMoreHref="/the-approach"
                learnMoreLabel={t.offers.learnMore}
                accent={offerAccents[i]}
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
            {t.offers.custom.text}
          </p>
          <Button as="a" href={CAL_LINK} variant="secondary" target="_blank" rel="noopener noreferrer">
            {t.offers.custom.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
