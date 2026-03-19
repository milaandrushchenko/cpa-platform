import ArrowIcon from '@assets/icons/arrow.svg?react';
import clsx from 'clsx';

import type { PropsWithChildren, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<{
  shape?: 'default' | 'pill';
  icon?: ReactNode;
}>;

export const Button = ({ children, icon, shape = 'default' }: ButtonProps) => {
  const resolvedIcon = icon ?? (shape === 'pill' ? <ArrowIcon /> : null);

  return (
    <button
      type="button"
      className={clsx(styles.button, styles[`button--${shape}`])}
    >
      <span>{children}</span>
      {resolvedIcon && <span className={styles.icon}>{resolvedIcon}</span>}
    </button>
  );
};
