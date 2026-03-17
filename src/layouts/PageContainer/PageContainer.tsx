import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

import styles from './PageContainer.module.scss';

type PageContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
