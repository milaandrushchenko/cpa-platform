import { BurgerMenu } from '@/components/BurgerMenu';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavLinks } from '@/components/NavLinks';
import { LogoIcon } from '@/components/ui/icons/LogoIcon';
import { PageLayout } from '@/layouts/PageLayout';

import style from './Header.module.scss';

const HeaderDesktop = () => {
  return (
    <header className={style.headerWrapper}>
      <PageLayout as="div">
        <div className={style.headerContainer}>
          <LogoIcon />
          <div className={style.navActions}>
            <NavLinks variant="row" />
            <LanguageSwitcher />
          </div>
          <BurgerMenu />
        </div>
      </PageLayout>
    </header>
  );
};

export default HeaderDesktop;
