import clsx from 'clsx';

import type { PropsWithChildren, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<{
  variant?: 'primary' | 'outline';
  shape?: 'default' | 'pill';
  icon?: ReactNode;
}>;

export const Button = ({
  children,
  icon,
  shape = 'default',
  variant = 'primary',
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        styles[`button--${shape}`],
        styles[`button--${variant}`],
      )}
    >
      {children}
      {icon}
    </button>
  );
};
