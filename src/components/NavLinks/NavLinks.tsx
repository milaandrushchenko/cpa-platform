import clsx from 'clsx';

import { useTranslation } from 'react-i18next';

import { Link } from '../ui/Link';
import styles from './NavLinks.module.scss';

interface NavItem {
  label: string;
  href: string;
}

interface NavLinksProps {
  variant: 'row' | 'column';
}

export const NavLinks = ({ variant }: NavLinksProps) => {
  const { t } = useTranslation();

  const baseItems = [
    t('navigation.team', { returnObjects: true }),
    t('navigation.benefits', { returnObjects: true }),
    t('navigation.collectForm', { returnObjects: true }),
  ] as NavItem[];

  const menuItems =
    variant === 'column'
      ? [t('navigation.main', { returnObjects: true }) as NavItem, ...baseItems]
      : baseItems;

  return (
    <ul className={clsx(styles.list, styles[`list-${variant}`])}>
      {menuItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
