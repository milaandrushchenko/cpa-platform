import { PageLayout } from '@layouts/PageLayout';

import { useTranslation } from 'react-i18next';

import styles from './BenefitsSection.module.scss';

export default function BenefitsSection() {
  const { t } = useTranslation();
  return (
    <PageLayout id="benefits" fullHeight className={styles.bg}>
      {t('benefits.sectionName')}
    </PageLayout>
  );
}
