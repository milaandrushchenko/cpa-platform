import { useLocale } from '@hooks/useLocale';
import { useScrollToHash } from '@hooks/useScrollToHash';
import { PageLayout } from '@layouts/PageLayout';

import { Button } from '@/components/Button';

export default function LandingPage() {
  const locale = useLocale();
  useScrollToHash();

  return (
    <div>
      <PageLayout id="hero" fullHeight>
        Hero — {locale}
        <Button variant="outline" shape="default">
          For Media Buyers
        </Button>
      </PageLayout>
      <PageLayout id="benefits" fullHeight>
        Benefits
      </PageLayout>
      <PageLayout id="promo" fullHeight>
        Promo
      </PageLayout>
      <PageLayout id="join" fullHeight>
        Join
      </PageLayout>
    </div>
  );
}
