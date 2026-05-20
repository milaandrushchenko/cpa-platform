import CloseButton from '@assets/icons/close.svg?react';
import { LogoIcon } from '@components/ui/icons/LogoIcon';
import gsap from 'gsap';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

import type { ContactWidgetDetails } from '@/types/general';

import { ContactWidgets } from '../ContactWidgets';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { NavLinks } from '../NavLinks/NavLinks';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const menuRef = useRef<HTMLDivElement>(null);

  const contactWidgets = t('social.links', {
    returnObjects: true,
  }) as Array<ContactWidgetDetails>;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      gsap.to(menu, {
        y: '0%',
        duration: 0.5,
        ease: 'power4.out',
      });
    } else {
      document.body.style.overflow = '';

      gsap.to(menu, {
        y: '-100%',
        duration: 0.4,
        ease: 'power4.in',
      });
    }
  }, [isOpen]);

  return (
    <>
      <button
        className={styles.burgerTrigger}
        onClick={toggleMenu}
        type="button"
      >
        {t('navigation.menu')}
      </button>
      {createPortal(
        <div ref={menuRef} className={styles.menuOverlay}>
          <div className={styles.header}>
            <LogoIcon className={styles.logo} />
            <button
              className={styles.closeBtn}
              onClick={closeMenu}
              type="button"
            >
              <CloseButton className={styles.closeIcon} />
            </button>
          </div>

          <nav className={styles.navigation} onClick={closeMenu}>
            <NavLinks variant="column" />
          </nav>

          <div className={styles.footer}>
            <ContactWidgets widgets={contactWidgets} />
            <div className={styles.langWrapper}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};
