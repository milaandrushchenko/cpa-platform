import { PageLayout } from '@layouts/PageLayout';

import { useTranslation } from 'react-i18next';

import SectionGrid from '@/layouts/SectionGrid/SectionGrid';

import styles from './BenefitsSection.module.scss';

export default function BenefitsSection() {
  const { t } = useTranslation();
  return (
    <PageLayout id="benefits" fullHeight className={styles.bg}>
      <h2 className={styles.sectionLabel}>{t('benefits.sectionName')}</h2>
      <SectionGrid desktop={{ columns: 2, gap: '30px', ratios: [1.3, 1] }}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis
          facere aut deserunt officiis, consequuntur suscipit! Labore excepturi
          tempora, veniam rerum numquam porro officia omnis facilis et! Natus,
          delectus dolorem?
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
