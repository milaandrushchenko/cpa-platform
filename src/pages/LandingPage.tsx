import { getPageData } from '@api/endpoints/getPageData';
import { useLocale } from '@hooks/useLocale';
import { useScrollToHash } from '@hooks/useScrollToHash';
import BenefitsSection from '@sections/benefitsSection/BenefitsSection';

import { useEffect, useState } from 'react';

import HeroSection from '@/sections/heroSection/HeroSection';
import MultiplySection from '@/sections/multiplySection/MultiplySection';
import TeamSection from '@/sections/teamSection/TeamSection';

export default function LandingPage() {
  const { locale } = useLocale();
  useScrollToHash();

  const [data, setData] = useState<Awaited<
    ReturnType<typeof getPageData>
  > | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

      {data?.benefits && <TeamSection />}
      {data?.benefits && <BenefitsSection data={data.benefits} />}
      {data?.multiply && <MultiplySection data={data.multiply} />}

      {isLoading && <div>Loading...</div>}
    </main>
  );
}
