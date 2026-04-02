import clsx from 'clsx';

import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/Button';
import { PageLayout } from '@/layouts/PageLayout';
import SectionGrid from '@/layouts/SectionGrid/SectionGrid';
import type { MultiplyResponse } from '@/types/api';
import { formatTitle } from '@/utils/format';

import styles from './MultiplySection.module.scss';

type MultiplySectionProps = {
  data: MultiplyResponse;
};

export default function MultiplySection({ data }: MultiplySectionProps) {
  const { t } = useTranslation();

  return (
    <PageLayout
      id="multiply"
      fullHeight
      className={clsx(styles.bg, styles.section)}
    >
      <SectionGrid desktop={{ columns: 2, gap: '18px', ratios: [1, 1.3] }}>
        <div className={styles.buttonList}>
          {data.map((multiply) => (
            <Button key={multiply.title} shape="pill">
              {formatTitle(multiply.title)}
            </Button>
          ))}
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe
          molestias fugit ex aspernatur molestiae eum blanditiis in,
          reprehenderit quos tenetur libero repellendus natus vero illum dolor
          provident, dignissimos nisi.
        </div>
      </SectionGrid>
      <h2 className={styles.sectionLabel}> {t('multiply.sectionName')}</h2>
    </PageLayout>
  );
}
