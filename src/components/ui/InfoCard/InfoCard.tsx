import clsx from 'clsx';

import styles from './InfoCard.module.scss';

type InfoCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function InfoCard({ children, className }: InfoCardProps) {
  return <div className={clsx(styles.card, className)}>{children}</div>;
}
