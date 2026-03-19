import { useLocale } from '@hooks/useLocale';
import { useScrollToHash } from '@hooks/useScrollToHash';
import { PageLayout } from '@layouts/PageLayout';

export default function LandingPage() {
  const locale = useLocale();
  useScrollToHash();

  return (
    <main>
      <PageLayout id="hero" fullHeight>
        Hero — {locale}
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
    </main>
  );
}
