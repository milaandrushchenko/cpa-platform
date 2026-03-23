import { type CSSProperties } from 'react';

import styles from './SectionGrid.module.scss';
import { type SectionGridProps } from './types';
import { toGridCols, validateColumnsConfig } from './utils';

export default function SectionGrid({
  children,
  mobile = {},
  desktop,
  desktopLg,
}: SectionGridProps) {
  validateColumnsConfig(mobile, 'mobile');
  if (desktop) validateColumnsConfig(desktop, 'desktop');
  if (desktopLg) validateColumnsConfig(desktopLg, 'desktopLg');

  const resolvedCssVars = {
    '--grid-mobile': toGridCols(mobile),
    '--gap-mobile': mobile.gap ?? '8px',
    '--grid-desktop': desktop ? toGridCols(desktop) : 'var(--grid-mobile)',
    '--gap-desktop': desktop?.gap ?? 'var(--gap-mobile)',
    '--grid-desktop-lg': desktopLg
      ? toGridCols(desktopLg)
      : 'var(--grid-desktop)',
    '--gap-desktop-lg': desktopLg?.gap ?? 'var(--gap-desktop)',
  } as CSSProperties;

  return (
    <div className={styles.gridWrapper} style={resolvedCssVars}>
      {children}
    </div>
  );
}
