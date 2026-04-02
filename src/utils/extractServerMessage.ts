export const extractServerMessage = (data: unknown): string | null => {
  if (typeof data !== 'object' || data === null || !('message' in data)) {
    return null;
  }

  const { message } = data as { message: unknown };

  return typeof message === 'string' ? message : null;
};
