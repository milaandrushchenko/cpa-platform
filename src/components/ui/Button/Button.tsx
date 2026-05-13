import clsx from 'clsx';

import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import { ArrowIcon } from '../icons';
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<
  {
    shape?: 'featured' | 'pill' | 'primary';
    icon?: ReactNode;
    isActive?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button = ({
  children,
  icon,
  shape = 'featured',
  className,
  isActive,
  ...props
}: ButtonProps) => {
  const resolvedIcon =
    icon ?? (shape === 'pill' ? <ArrowIcon direction="right" /> : null);

  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        styles[`button--${shape}`],
        isActive && styles['button--active'],
        className,
      )}
      {...props}
    >
      <span className={styles.label}>{children}</span>

      {resolvedIcon && <span className={styles.icon}>{resolvedIcon}</span>}
    </button>
  );
};
