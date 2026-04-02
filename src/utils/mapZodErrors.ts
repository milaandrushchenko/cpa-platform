export const mapZodErrors = <T extends Record<string, unknown>>(
  fieldErrors: Partial<Record<keyof T, string[] | undefined>>,
): Partial<Record<keyof T, string>> => {
  const result: Partial<Record<keyof T, string>> = {};

  (Object.keys(fieldErrors) as Array<keyof T>).forEach((key) => {
    const error = fieldErrors[key];
    if (error?.length) {
      result[key] = error[0];
    }
  });

  return result;
};
