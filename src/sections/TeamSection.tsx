import SectionGrid from '@layouts/SectionGrid/SectionGrid';
import clsx from 'clsx';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getTasks } from '@/api/endpoints/tasks';
import { LogoIcon } from '@/assets/icons';
import { InfoCard } from '@/components/ui/InfoCard';
import { useLocale } from '@/hooks/useLocale';
import { PageLayout } from '@/layouts/PageLayout';
import type { TasksResponse } from '@/types/api';

import styles from './TeamSection.module.scss';

export default function TeamSection() {
  const { t } = useTranslation();
  const locale = useLocale();

  const [pageData, setPageData] = useState<TasksResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTasks(locale);

        setPageData(result);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    void fetchData();
  }, [locale]);

  const tiles = pageData?.tiles || [];

  const COLUMNS_TILE_CONFIG = {
    secondColumn: tiles.length > 0 ? tiles.slice(0, 2) : [],
    thirdColumn: tiles.length > 2 ? tiles.slice(2) : [],
  };

  return (
    <PageLayout screenHeight className={styles.teamSection}>
      <LogoIcon className={`mobileOnly ${styles.logo}`} />
      <p className={styles.sectionName}>{t('tasks.sectionName')}</p>

      <article className={styles.teamSectionContainer}>
        <SectionGrid
          mobile={{ columns: 1, gap: '20px' }}
          desktop={{ columns: 3, ratios: [41, 27, 27], gap: '20px' }}
        >
          <div className={styles.column}>
            <InfoCard className={clsx(styles.tile, styles[`tile--first`])}>
              <h2 className={clsx(styles.title, styles[`title--page`])}>
                {pageData?.description || ''}
              </h2>
            </InfoCard>
          </div>

          <ul className={styles.column}>
            {COLUMNS_TILE_CONFIG.secondColumn.map((tile, i) => (
              <li className={styles.tile} key={`${i}-${tile.title}`}>
                <InfoCard className={clsx(styles[`tile--default`])}>
                  <h3 className={clsx(styles.title, styles[`title--tile`])}>
                    {tile.title}
                  </h3>
                  <p className={styles.tileText}>{tile.text}</p>
                </InfoCard>
              </li>
            ))}
          </ul>

          <ul className={styles.column}>
            {COLUMNS_TILE_CONFIG.thirdColumn.map((tile, i) => (
              <li className={styles.tile} key={`${i}-${tile.title}`}>
                <InfoCard className={clsx(styles[`tile--default`])}>
                  <h3 className={clsx(styles.title, styles[`title--tile`])}>
                    {tile.title}
                  </h3>
                  <p className={styles.tileText}>{tile.text}</p>
                </InfoCard>
              </li>
            ))}
          </ul>
        </SectionGrid>
      </article>
    </PageLayout>
  );
}
