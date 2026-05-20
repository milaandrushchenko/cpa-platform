import { LogoIcon } from '@components/ui/icons/LogoIcon';
import clsx from 'clsx';

import { type MouseEvent, type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CloseButton } from '../CloseButton';
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
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={clsx(styles.modal, className)}
        role="dialog"
        aria-modal="true"
      >
        <CloseButton onClick={onClose} className={styles.closeButton} />
        <LogoIcon className={styles.logo} />
        {children}
      </div>
    </div>,
    document.body,
  );
};
