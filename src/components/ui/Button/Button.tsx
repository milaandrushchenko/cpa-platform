import clsx from 'clsx';

import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import { ArrowIcon } from '../icons';
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<
  {
    shape?: 'default' | 'pill';
    icon?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button = ({
  children,
  icon,
  shape = 'default',
  ...props
}: ButtonProps) => {
  const resolvedIcon =
    icon ?? (shape === 'pill' ? <ArrowIcon direction="right" /> : null);

  return (
    <button
      type="button"
      className={clsx(styles.button, styles[`button--${shape}`])}
      {...props}
    >
      <span className={styles.label}>{children}</span>

      {resolvedIcon && <span className={styles.icon}>{resolvedIcon}</span>}
    </button>
  );
};
