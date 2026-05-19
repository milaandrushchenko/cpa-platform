import { LogoIcon } from '@assets/icons';
import ContactWidgets from '@components/ContactWidgets/ContactWidgets';
import { Button } from '@components/ui/Button';
import SectionGrid from '@layouts/SectionGrid/SectionGrid';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '@/layouts/Header';
import { PageLayout } from '@/layouts/PageLayout';
import { type ContactWidgetDetails } from '@/types/general';

import styles from './HeroSection.module.scss';

const BUSINESS_VALUES = ['profit', 'growth'] as const;

export default function HeroSection() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % BUSINESS_VALUES.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const contactWidgets = t('social.links', {
    returnObjects: true,
  }) as Array<ContactWidgetDetails>;

  return (
    <PageLayout id="hero" fullHeight className={styles.bg}>
      <article className={styles.heroSection}>
        <Header />

        <SectionGrid desktop={{ singleColumnWidth: '54%' }}>
          <h1 className={styles.title}>
            {t('hero.title')}{' '}
            <span className={styles.businessValues}>
              {BUSINESS_VALUES.map((key, i) => (
                <span
                  key={key}
                  className={styles.businessValue}
                  aria-hidden={i !== index}
                  data-visible={i === index}
                >
                  {t(`hero.businessValues.${key}`)}
                </span>
              ))}
            </span>
          </h1>

          <h2 className={styles.subtitle}>{t('hero.description')}</h2>
          <Button>{t('globalCtas.contact')}</Button>
          <div className={`desktopOnly ${styles.widgets}`}>
            <ContactWidgets widgets={contactWidgets} />
          </div>
        </SectionGrid>
      </article>
    </PageLayout>
  );
}
