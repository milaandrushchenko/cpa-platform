import { z } from 'zod';

import { contactMethods } from '../contactMethods';
import { phoneSchema } from './phoneSchema';

const nameRegex = /^[\p{L}'\-\s]+$/u;
const telegramRegex = /^[a-z0-9_]{5,}$/i;

export const contactFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .refine(
        (value) => value === '' || nameRegex.test(value),
        'Please enter your name without numbers',
      )
      .optional(),

    method: z.enum(contactMethods),

    contact: z.string().trim().min(1, 'Contact is required'),
  })
  .superRefine((data, ctx) => {
    if (data.method === 'email') {
      const emailValidation = z.string().email().safeParse(data.contact);

      if (!emailValidation.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['contact'],
          message: 'Please enter a valid email address',
        });
      }
    }

    if (data.method === 'telegram' && !telegramRegex.test(data.contact)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['contact'],
        message:
          'Telegram username must be at least 5 characters and contain only letters, numbers, and underscores',
      });
    }

    if (data.method === 'whatsapp') {
      const result = phoneSchema.safeParse(data.contact);

      if (!result.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['contact'],
          message:
            'Enter phone number in international format (e.g. +1234567890)',
        });
      }
    }
  })
  .transform((data) => ({
    ...data,
    contact:
      data.method === 'email' ? data.contact.toLowerCase() : data.contact,
  }));
