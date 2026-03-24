import { serverValidationIssuesSchema } from '@/config/schemas/serverValidation.schema';

export const getReadableServerError = (message: string): string => {
  try {
    const parsed: unknown = JSON.parse(message);

    const validationResult = serverValidationIssuesSchema.safeParse(parsed);

    if (!validationResult.success) {
      return message;
    }

    return validationResult.data
      .map((issue) => {
        const field = issue.path[0];

        if (typeof field === 'string') {
          return `${field.charAt(0).toUpperCase() + field.slice(1)}: ${issue.message}`;
        }

        return issue.message;
      })
      .join('\n');
  } catch {
    return message;
  }
};
