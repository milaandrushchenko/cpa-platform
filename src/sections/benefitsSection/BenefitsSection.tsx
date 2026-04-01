import { PageLayout } from '@layouts/PageLayout';

import { useTranslation } from 'react-i18next';

import SectionGrid from '@/layouts/SectionGrid/SectionGrid';
import type { BenefitsResponse } from '@/types/api';

import styles from './BenefitsSection.module.scss';

type BenefitsSectionProps = {
  data: BenefitsResponse;
};

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  const { t } = useTranslation();

  console.log('benefits', data);

  return (
    <PageLayout id="benefits" fullHeight className={styles.bg}>
      <h2 className={styles.sectionLabel}>{t('benefits.sectionName')}</h2>
      <SectionGrid desktop={{ columns: 2, gap: '30px', ratios: [1.3, 1] }}>
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam
          eos accusantium, alias repellendus, odio fugit vero magni
          reprehenderit in quod ex voluptate, laborum quis. Consequuntur
          praesentium distinctio voluptatum doloribus.
        </div>
      </SectionGrid>
    </PageLayout>
  );
}
