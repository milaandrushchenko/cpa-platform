import { z } from 'zod';

export const serverValidationIssueSchema = z.object({
  code: z.string(),
  path: z.array(z.union([z.string(), z.number()])),
  message: z.string(),
});

export const serverValidationIssuesSchema = z.array(
  serverValidationIssueSchema,
);

export type ServerValidationIssue = z.infer<typeof serverValidationIssueSchema>;
