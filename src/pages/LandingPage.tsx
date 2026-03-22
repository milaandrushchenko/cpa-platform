import { Button } from '@components/ui/Button';
import { useScrollToHash } from '@hooks/useScrollToHash';
import { PageLayout } from '@layouts/PageLayout';
import HeroSection from '@sections/HeroSection';

import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation();
  useScrollToHash();

  return (
    <main>
      <HeroSection />

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
