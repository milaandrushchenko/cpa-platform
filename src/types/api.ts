import { z } from 'zod';

import type { contactMethods } from '@/config/contactMethods';
import { contactFormSchema } from '@/config/schemas/contactForm.schema';
import type { serverValidationIssueSchema } from '@/config/schemas/serverValidation.schema';

export interface BenefitsResponse {
  title: string;
  description: string;
  benefits: string[];
}

export interface MultiplyItem {
  title: string;
  steps: Record<string, string>;
}

export type MultiplyResponse = MultiplyItem[];

export interface TasksResponseRaw {
  description?: string;
  'description:'?: string;
  tiles: TaskTile[];
}

export interface TaskTile {
  title: string;
  text: string;
}

export interface TasksResponse {
  description: string;
  tiles: TaskTile[];
}

export type ContactMethod = (typeof contactMethods)[number];

export interface ContactFormPayload {
  name?: string;
  method: ContactMethod;
  contact: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormPayload, string>
>;

export const contactFormResponseSchema = z.object({
  message: z.string(),
  data: contactFormSchema.optional(),
});

export type ContactFormResponse = z.infer<typeof contactFormResponseSchema>;
export type ServerValidationIssue = z.infer<typeof serverValidationIssueSchema>;
