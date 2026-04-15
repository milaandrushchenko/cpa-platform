import clsx from 'clsx';

import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ContactModal from '@/components/ApplicationForm/ContactModal';
import { Button } from '@/components/ui/Button';
import { ArrowIcon } from '@/components/ui/icons';
import { PageLayout } from '@/layouts/PageLayout';
import SectionGrid from '@/layouts/SectionGrid/SectionGrid';
import type { MultiplyResponse } from '@/types/api';
import { formatTitle } from '@/utils/format';

import styles from './MultiplySection.module.scss';

// Translation keys that correspond to the API response order
const MULTIPLY_TRANSLATION_KEYS = [
  'for_media_buyers',
  'for_businesses',
  'for_partners',
] as const;

type MultiplySectionProps = {
  data: MultiplyResponse;
};

export default function MultiplySection({ data }: MultiplySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeList = data[activeIndex];
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          {data.map((item, index) => (
            <Button
              key={item.title}
              shape="pill"
              onClick={() => setActiveIndex(index)}
              isActive={index === activeIndex}
            >
              {formatTitle(item.title)}
            </Button>
          ))}
        </div>
        <div className={styles.stepList}>
          {Object.values(activeList.steps).map((step, i, arr) => (
            <Fragment key={step}>
              <div>{step}</div>
              <ArrowIcon direction="down" className={styles.arrow} />
              {i === arr.length - 1 && (
                <Button onClick={openModal}>
                  {t(
                    `multiply.buttons.${MULTIPLY_TRANSLATION_KEYS[activeIndex]}`,
                  )}
                </Button>
              )}
            </Fragment>
          ))}
        </div>
      </SectionGrid>
      <h2 className={styles.sectionLabel}> {t('multiply.sectionName')}</h2>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </PageLayout>
  );
}
