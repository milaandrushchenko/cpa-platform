import BaseArrowIcon from '@assets/icons/arrow.svg?react';
import clsx from 'clsx';

import styles from './ArrowIcon.module.scss';

type Direction = 'right' | 'left' | 'up' | 'down';

type ArrowIconProps = {
  direction?: Direction;
  className?: string;
};

export const ArrowIcon = ({
  direction = 'right',
  className,
}: ArrowIconProps) => {
  return (
    <BaseArrowIcon
      className={clsx(styles.icon, styles[direction], className)}
    />
  );
};
