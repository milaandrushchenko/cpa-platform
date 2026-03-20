import clsx from 'clsx';

import { type MouseEvent, type PropsWithChildren, useEffect } from 'react';

import { CloseButton } from '../CloseButton';
import { LogoIcon } from '../icons/LogoIcon';
import styles from './Modal.module.scss';

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}>;

export const Modal = ({ isOpen, onClose, className, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={clsx(styles.modal, className)}>
        <CloseButton onClick={onClose} className={styles.closeButton} />
        <LogoIcon size="md" className={styles.logo} />
        {children}
      </div>
    </div>
  );
};
