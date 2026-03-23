import { type ColumnsConfig } from './types';

function validateColumnsConfig(
  config: ColumnsConfig,
  breakpoint: string,
): void {
  if (!config.ratios) return;

  const columns = config.columns ?? 1;

  if (config.ratios.length !== columns) {
    throw new Error(
      `SectionGrid: \`${breakpoint}.ratios\` length must match \`${breakpoint}.columns\` (${columns}). Received ${config.ratios.length} ratio(s).`,
    );
  }

  const invalidRatios = config.ratios.filter(
    (n) => !Number.isFinite(n) || n <= 0,
  );
  if (invalidRatios.length > 0) {
    throw new Error(
      `SectionGrid: \`${breakpoint}.ratios\` contains invalid values: [${invalidRatios.join(', ')}]. Each ratio must be a positive finite number.`,
    );
  }
}

function toGridCols({ columns = 1, ratios }: ColumnsConfig): string {
  if (columns === 1) return '1fr';

  const hasValidLength = ratios?.length === columns;
  const hasValidValues =
    hasValidLength && ratios.every((n) => Number.isFinite(n) && n > 0);

  if (import.meta.env.DEV) {
    if (ratios && !hasValidLength) {
      // eslint-disable-next-line no-console
      console.warn(
        `SectionGrid: \`ratios\` length (${ratios.length}) does not match \`columns\` (${columns}). Falling back to equal distribution.`,
      );
    } else if (hasValidLength && !hasValidValues) {
      const invalidRatios = ratios.filter((n) => !Number.isFinite(n) || n <= 0);
      // eslint-disable-next-line no-console
      console.warn(
        `SectionGrid: \`ratios\` contains invalid values: [${invalidRatios.join(', ')}]. Falling back to equal distribution.`,
      );
    }
  }

  const resolvedRatios = hasValidValues
    ? ratios
    : Array<number>(columns).fill(1);
  return resolvedRatios.map((n) => `${n}fr`).join(' ');
}

export { validateColumnsConfig, toGridCols };
