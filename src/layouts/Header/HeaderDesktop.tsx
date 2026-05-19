import { LogoIcon } from '@components/ui/icons/LogoIcon';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavLinks } from '@/components/NavLinks';

import style from './Header.module.scss';

const HeaderDesktop = () => {
  return (
    <div className={style.headerDesktopContainer}>
      <LogoIcon />
      <NavLinks variant="row" />
      <LanguageSwitcher />
    </div>
  );
};

export default HeaderDesktop;
