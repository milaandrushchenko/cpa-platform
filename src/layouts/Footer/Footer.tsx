import clsx from 'clsx';

import { useTranslation } from 'react-i18next';

import { Link } from '@/components/ui/Link';
import { ArrowIcon } from '@/components/ui/icons';
import type { ContactWidgetDetails } from '@/types/general';

import styles from './Footer.module.scss';

type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps) => {
  const { t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const contactWidgets = t('social.links', {
    returnObjects: true,
  }) as Array<ContactWidgetDetails>;

  return (
    <footer className={className}>
      <div className={styles.footerContainer}>
        <ul className={clsx(styles.contactList)}>
          {contactWidgets.map((item) => (
            <li key={item.url}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button
          className={styles.scrollTop}
          onClick={handleScrollToTop}
          type="button"
        >
          {t('globalCtas.scrollToTop')}
          <ArrowIcon direction="up" className={styles.arrow} />
        </button>
      </div>
    </footer>
  );
};
