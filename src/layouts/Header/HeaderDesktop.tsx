import { LogoIcon } from '@components/ui/icons/LogoIcon';

import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavLinks } from '@/components/NavLinks';

import style from './Header.module.scss';

const HeaderDesktop = () => {
  return (
    <div className={style.headerDesktopContainer}>
      <LogoIcon />
      <div className={style.navActions}>
        <NavLinks variant="row" />
        <LanguageSwitcher />
      </div>
      <BurgerMenu />
    </div>
  );
};

export default HeaderDesktop;
