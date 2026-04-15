import { getPageData } from '@api/endpoints/getPageData';
import ContactModal from '@components/ApplicationForm/ContactModal';
import { Button } from '@components/ui/Button';
import { useLocale } from '@hooks/useLocale';
import { useScrollToHash } from '@hooks/useScrollToHash';
import { PageLayout } from '@layouts/PageLayout';
import HeroSection from '@sections/HeroSection';
import BenefitsSection from '@sections/benefitsSection/BenefitsSection';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation();
  const locale = useLocale();
  useScrollToHash();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState<Awaited<
    ReturnType<typeof getPageData>
  > | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setIsLoading(true);

        const pageData = await getPageData(locale);

        if (!isMounted) return;
        setData(pageData);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    void loadData();

    return () => {
      isMounted = false;
    };
  }, [locale]);

  return (
    <main>
      <HeroSection />
      <Button onClick={openModal}>Open modal</Button>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <PageLayout id="tasks" fullHeight>
        {t('tasks.sectionName')}
        <Button shape="pill">{t('tasks.sectionName')}</Button>
      </PageLayout>
      {data?.benefits && <BenefitsSection data={data.benefits} />}
      <PageLayout id="multiply" fullHeight>
        {t('multiply.sectionName')}
      </PageLayout>

      {isLoading && <div>Loading...</div>}
    </main>
  );
}
