import BaseLogoIcon from '@assets/icons/logo.svg?react';
import clsx from 'clsx';

import type { SVGProps } from 'react';

import styles from './LogoIcon.module.scss';

type LogoIconProps = SVGProps<SVGSVGElement> & {
  size?: 'sm' | 'md';
};

export const LogoIcon = ({
  size = 'sm',
  className,
  ...props
}: LogoIconProps) => {
  return (
    <BaseLogoIcon
      className={clsx(styles.logo, styles[`logo--${size}`], className)}
      {...props}
    />
  );
};
