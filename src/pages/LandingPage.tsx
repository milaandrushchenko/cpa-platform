import { useScrollToHash } from '@hooks/useScrollToHash';
import { PageLayout } from '@layouts/PageLayout';
import HeroSection from '@sections/HeroSection';
import TeamSection from '@sections/TeamSection';

import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation();
  useScrollToHash();

  return (
    <main>
      <HeroSection />
      <TeamSection />
      <PageLayout id="benefits" fullHeight>
        {t('benefits.sectionName')}
      </PageLayout>
      <PageLayout id="multiply" fullHeight>
        {t('multiply.sectionName')}
      </PageLayout>
    </main>
  );
}
