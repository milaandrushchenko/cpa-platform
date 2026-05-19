import { LogoIcon } from '@components/ui/icons/LogoIcon';

import { NavLinks } from '@/components/NavLinks';

import style from './Header.module.scss';

const HeaderDesktop = () => {
  return (
    <div className={style.headerDesktopContainer}>
      <LogoIcon />
      <NavLinks variant="row" />
    </div>
  );
};

export default HeaderDesktop;
