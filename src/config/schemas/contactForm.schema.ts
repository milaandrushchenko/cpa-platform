import { z } from 'zod';

import { contactMethods } from '../contactMethods';

export const contactFormSchema = z
  .object({
    name: z.string().trim().optional(),
    method: z.enum(contactMethods),
    contact: z.string().trim(),
  })
  .superRefine((data, ctx) => {
    if (!data.contact) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['contact'],
        message: 'Contact is required',
      });
    }

    if (data.method === 'email' && data.contact) {
      const emailValidation = z.string().email().safeParse(data.contact);

      if (!emailValidation.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['contact'],
          message: 'Please enter a valid email address',
        });
      }
    }
  });
