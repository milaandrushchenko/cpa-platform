import CloseIcon from '@assets/icons/close.svg?react';
import clsx from 'clsx';

import type { ButtonHTMLAttributes } from 'react';

import styles from './CloseButton.module.scss';

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const CloseButton = ({ className, ...props }: CloseButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Close"
      className={clsx(styles.button, className)}
      {...props}
    >
      <CloseIcon />
    </button>
  );
};
