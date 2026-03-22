import styles from './InfoCard.module.scss';

export default function InfoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${styles.card} ${className || ''}`}>{children}</div>;
}
