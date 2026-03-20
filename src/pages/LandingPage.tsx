import { Button } from '@components/Button';
import { useScrollToHash } from '@hooks/useScrollToHash';
import { PageLayout } from '@layouts/PageLayout';

import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation();
  useScrollToHash();

  return (
    <main>
      <PageLayout id="hero" fullHeight>
        {t('hero.sectionName')}
      </PageLayout>
      <PageLayout id="tasks" fullHeight>
        {t('tasks.sectionName')}
        <Button shape="pill">{t('tasks.sectionName')}</Button>
      </PageLayout>
      <PageLayout id="benefits" fullHeight>
        {t('benefits.sectionName')}
      </PageLayout>
      <PageLayout id="multiply" fullHeight>
        {t('multiply.sectionName')}
      </PageLayout>
    </main>
  );
}
