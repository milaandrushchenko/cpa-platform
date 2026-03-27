import { type CSSProperties } from 'react';

export type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnsConfig = {
  columns?: ColumnCount; // defaults to 1
  /* Proportional width ratios per column (maps to `fr` units).
   * Defaults to equal distribution. Must match `columns` count.
   */
  ratios?: number[];
  /* Column gap. Defaults to 8px. */
  gap?: CSSProperties['gap'];
};

export type SectionGridProps = {
  children: React.ReactNode;
  mobile?: ColumnsConfig;
  /* Inherits from `mobile` when omitted. */
  desktop?: ColumnsConfig;
  /* Inherits from desktop when omitted. */
  desktopLg?: ColumnsConfig;
};
