import { serverValidationIssuesSchema } from '@/config/schemas/serverValidation.schema';

import { capitalize } from './capitalize';

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
          return `${capitalize(field)}: ${issue.message}`;
        }

        return issue.message;
      })
      .join('\n');
  } catch {
    return message;
  }
};
