import { Button } from '@components/ui/Button';
import { useScrollToHash } from '@hooks/useScrollToHash';
import { PageLayout } from '@layouts/PageLayout';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ApplicationForm } from '@/components/ApplicationForm/ApplicationForm';
import { Modal } from '@/components/ui/Modal';

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
      <PageLayout id="hero" fullHeight>
        {t('hero.sectionName')}
        <Button onClick={openModal}>Open modal</Button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ApplicationForm />
        </Modal>
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
