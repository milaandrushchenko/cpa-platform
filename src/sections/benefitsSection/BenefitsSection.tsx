import { PageLayout } from '@layouts/PageLayout';
import clsx from 'clsx';

import { useTranslation } from 'react-i18next';

import SectionGrid from '@/layouts/SectionGrid/SectionGrid';
import type { BenefitsResponse } from '@/types/api';

import styles from './BenefitsSection.module.scss';

type BenefitsSectionProps = {
  data: BenefitsResponse;
};

const ACCENT_TEXT = 'guaranteed';

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  const { t } = useTranslation();

  const hasAccent = data.title.includes(ACCENT_TEXT);
  const parts = hasAccent ? data.title.split(ACCENT_TEXT) : [];

  return (
    <PageLayout
      id="benefits"
      fullHeight
      className={clsx(styles.bg, styles.section)}
    >
      <h2 className={styles.sectionLabel}>{t('benefits.sectionName')}</h2>
      <SectionGrid desktop={{ columns: 2, gap: '30px', ratios: [1.3, 1] }}>
        <div className={styles.firstColumn}>
          <h3 className={styles.title}>
            {hasAccent ? (
              <>
                {parts[0]}
                <span className={styles.accent}>{ACCENT_TEXT}</span>
                {parts[1]}
              </>
            ) : (
              data.title
            )}
          </h3>
          <p className={styles.description}>{data.description}</p>
        </div>
        <div className={styles.benefitsList}>
          {data.benefits.map((benefit) => (
            <div className={styles.benefitsItem} key={benefit}>
              {benefit}
            </div>
          ))}
        </div>
      </SectionGrid>
    </PageLayout>
  );
}
