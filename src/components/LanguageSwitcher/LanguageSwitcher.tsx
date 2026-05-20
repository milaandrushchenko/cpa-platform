import clsx from 'clsx';

import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { LOCALE_LABELS, SUPPORTED_LOCALES } from '@/config/locales';
import { useLocale } from '@/hooks/useLocale';

import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { locale: currentLocale, getLocalizedPath } = useLocale();

  return (
    <div className={styles.container}>
      {SUPPORTED_LOCALES.map((code, i) => {
        const isActive = currentLocale === code;

        return (
          <Fragment key={code}>
            {isActive ? (
              <span className={clsx(styles.button, styles.active)}>
                {LOCALE_LABELS[code]}
              </span>
            ) : (
              <Link to={getLocalizedPath(code)} className={styles.button}>
                {LOCALE_LABELS[code]}
              </Link>
            )}

            {i < SUPPORTED_LOCALES.length - 1 && (
              <span className={styles.divider}>/</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
