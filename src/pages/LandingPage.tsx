import ContactModal from '@components/ApplicationForm/ContactModal';
import { Button } from '@components/ui/Button';
import { useScrollToHash } from '@hooks/useScrollToHash';
import { PageLayout } from '@layouts/PageLayout';
import HeroSection from '@sections/HeroSection';
import BenefitsSection from '@sections/benefitsSection/BenefitsSection';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation();
  useScrollToHash();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <HeroSection />
      <Button onClick={openModal}>Open modal</Button>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <PageLayout id="tasks" fullHeight>
        {t('tasks.sectionName')}
        <Button shape="pill">{t('tasks.sectionName')}</Button>
      </PageLayout>
      <BenefitsSection />
      <PageLayout id="multiply" fullHeight>
        {t('multiply.sectionName')}
      </PageLayout>
    </main>
  );
}
