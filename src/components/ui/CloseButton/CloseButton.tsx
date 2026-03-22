import CloseIcon from '@assets/icons/close.svg?react';
import clsx from 'clsx';

import type { ButtonHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './CloseButton.module.scss';

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const CloseButton = ({
  className,
  'aria-label': ariaLabel,
  ...props
}: CloseButtonProps) => {
  const { t } = useTranslation();

  const label = ariaLabel ?? t('globalCtas.close');

  return (
    <button
      type="button"
      aria-label={label}
      className={clsx(styles.button, className)}
      {...props}
    >
      <CloseIcon />
    </button>
  );
};
