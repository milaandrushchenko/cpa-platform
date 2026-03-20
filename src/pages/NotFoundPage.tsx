import { PageLayout } from '@layouts/PageLayout';

import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <h1>{t('notFound.message')}</h1>
    </PageLayout>
  );
}
