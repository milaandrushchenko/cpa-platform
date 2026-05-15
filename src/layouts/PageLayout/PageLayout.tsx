import { PageContainer } from '@layouts/PageContainer';
import clsx from 'clsx';

import type { JSX, PropsWithChildren, ReactNode } from 'react';

import styles from './PageLayout.module.scss';

type PageLayoutProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
  fullHeight?: boolean;
  screenHeight?: boolean;
  as?: keyof JSX.IntrinsicElements;
  background?: ReactNode;
}>;

export const PageLayout = ({
  id,
  children,
  className,
  containerClassName,
  fullHeight = false,
  screenHeight = false,
  as: Component = 'section',
  background,
}: PageLayoutProps) => {
  return (
    <Component
      id={id}
      className={clsx(
        styles.section,
        fullHeight && styles.fullHeight,
        screenHeight && styles.screenHeight,
        className,
      )}
    >
      {background ? (
        <div className={styles.background}>{background}</div>
      ) : null}

      <PageContainer className={clsx(styles.container, containerClassName)}>
        {children}
      </PageContainer>
    </Component>
  );
};
