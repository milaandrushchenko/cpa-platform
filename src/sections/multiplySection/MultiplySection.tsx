import clsx from 'clsx';

import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/Button';
import { ArrowIcon } from '@/components/ui/icons';
import { PageLayout } from '@/layouts/PageLayout';
import SectionGrid from '@/layouts/SectionGrid/SectionGrid';
import type { MultiplyItem, MultiplyResponse } from '@/types/api';
import { formatTitle } from '@/utils/format';

import styles from './MultiplySection.module.scss';

type MultiplySectionProps = {
  data: MultiplyResponse;
};

export default function MultiplySection({ data }: MultiplySectionProps) {
  const [activeList, setActiveList] = useState<MultiplyItem>(data[0]);
  const { t } = useTranslation();

  return (
    <PageLayout
      id="multiply"
      fullHeight
      className={clsx(styles.bg, styles.section)}
    >
      <SectionGrid
        desktop={{ columns: 2, gap: '18px', ratios: [1, 1.3] }}
        mobile={{ gap: '20px' }}
      >
        <div className={styles.buttonList}>
          {data.map((multiply) => (
            <Button
              key={multiply.title}
              shape="pill"
              onClick={() => setActiveList(multiply)}
              isActive={multiply.title === activeList.title}
            >
              {formatTitle(multiply.title)}
            </Button>
          ))}
        </div>
        <div className={styles.stepList}>
          {Object.values(activeList.steps).map((step, i, arr) => (
            <Fragment key={step}>
              <div>{step}</div>
              <ArrowIcon direction="down" className={styles.arrow} />
              {i === arr.length - 1 && (
                <Button>{t(`multiply.buttons.${activeList.title}`)}</Button>
              )}
            </Fragment>
          ))}
        </div>
      </SectionGrid>
      <h2 className={styles.sectionLabel}> {t('multiply.sectionName')}</h2>
    </PageLayout>
  );
}
