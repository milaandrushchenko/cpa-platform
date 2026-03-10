import { useLocale } from '@/hooks/useLocale';

export default function LandingPage() {
  const locale = useLocale();

  return (
    <div>
      Locale: {locale}
      <section id="hero" style={{ height: '500px' }}>
        Hero
      </section>
      <section id="benefits" style={{ height: '500px' }}>
        Benefits
      </section>
      <section id="promo" style={{ height: '500px' }}>
        Promo
      </section>
      <section id="join" style={{ height: '500px' }}>
        Join
      </section>
    </div>
  );
}
