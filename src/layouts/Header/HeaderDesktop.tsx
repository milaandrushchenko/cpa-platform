import { LogoIcon } from '@components/ui/icons/LogoIcon';

import { BurgerMenu } from '@/components/BurgerMenu';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavLinks } from '@/components/NavLinks';

import { PageContainer } from '../PageContainer';
import style from './Header.module.scss';

const HeaderDesktop = () => {
  return (
    <PageContainer>
      <div className={style.headerContainer}>
        <LogoIcon />
        <div className={style.navActions}>
          <NavLinks variant="row" />
          <LanguageSwitcher />
        </div>
        <BurgerMenu />
      </div>
    </PageContainer>
  );
};

export default HeaderDesktop;
