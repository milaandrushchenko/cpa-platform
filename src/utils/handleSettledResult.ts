export const handleSettledResult = <T>(
  result: PromiseSettledResult<T>,
  label: string,
): T | null => {
  if (result.status === 'fulfilled') {
    const value = result.value;
    if (typeof value === 'string') {
      // eslint-disable-next-line no-console
      console.error(`[getPageData] ${label}: received string instead of JSON`);
      return null;
    }
    return value;
  }

  // eslint-disable-next-line no-console
  console.error(`[getPageData] ${label}:`, result.reason);
  return null;
};
