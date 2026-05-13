import { PageLayout } from '@layouts/PageLayout';
import clsx from 'clsx';

import { useTranslation } from 'react-i18next';

import SectionGrid from '@/layouts/SectionGrid/SectionGrid';
import type { BenefitsResponse } from '@/types/api';

import styles from './BenefitsSection.module.scss';

type BenefitsSectionProps = {
  data: BenefitsResponse;
};

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  const { t } = useTranslation();
  const accentText = t('benefits.accent');
  const hasAccent = data.title.includes(accentText);
  const parts = hasAccent ? data.title.split(accentText) : [];

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
                <span className={styles.accent}>{accentText}</span>
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
