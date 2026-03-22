import BaseLogoIcon from '@assets/icons/logo.svg?react';
import clsx from 'clsx';

import type { SVGProps } from 'react';

import styles from './LogoIcon.module.scss';

type LogoIconProps = SVGProps<SVGSVGElement>;
export const LogoIcon = ({ className, ...props }: LogoIconProps) => {
  return <BaseLogoIcon className={clsx(styles.logo, className)} {...props} />;
};
