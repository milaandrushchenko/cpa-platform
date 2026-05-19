import clsx from 'clsx';

import style from './Link.module.scss';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ href, children, className }: LinkProps) => {
  return (
    <a href={href} className={clsx(style.link, className)}>
      {children}
    </a>
  );
};
