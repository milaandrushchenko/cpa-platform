export const handleSettledResult = <T>(
  result: PromiseSettledResult<T>,
  label: string,
): T | null => {
  if (result.status === 'fulfilled') {
    return result.value;
  }

  // eslint-disable-next-line no-console
  console.error(`[getPageData] ${label}:`, result.reason);
  return null;
};
