import clsx from 'clsx';

import type { PropsWithChildren, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<{
  shape?: 'default' | 'pill';
  icon?: ReactNode;
}>;

export const Button = ({ children, icon, shape = 'default' }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.button, styles[`button--${shape}`])}
    >
      {children}
      {icon}
    </button>
  );
};
