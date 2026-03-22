import { type CSSProperties } from 'react';

import styles from './SectionGrid.module.scss';

type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnsConfig = {
  columns?: ColumnCount; // defaults to 1
  /* Proportional width ratios per column (maps to `fr` units).
   * Defaults to equal distribution. Must match `columns` count.
   */
  ratios?: number[];
  /* Column gap. Defaults to 8px. */
  gap?: CSSProperties['gap'];
};

type SectionGridProps = {
  children: React.ReactNode;
  mobile?: ColumnsConfig;
  /* Inherits from `mobile` when omitted. */
  desktop?: ColumnsConfig;
  /* Inherits from desktop when omitted. */
  desktopLg?: ColumnsConfig;
};

function toGridCols({ columns = 1, ratios }: ColumnsConfig): string {
  if (columns === 1) return '1fr';

  const hasValidRatios = ratios?.length === columns;

  if (import.meta.env.DEV && ratios && !hasValidRatios) {
    console.warn(
      `SectionGrid: \`ratios\` length (${ratios.length}) does not match \`columns\` (${columns}). Falling back to equal distribution.`,
    );
  }

  const resolvedRatios = hasValidRatios
    ? ratios
    : Array<number>(columns).fill(1);
  return resolvedRatios.map((n) => `${n}fr`).join(' ');
}

export default function SectionGrid({
  children,
  mobile = {},
  desktop,
  desktopLg,
}: SectionGridProps) {
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
