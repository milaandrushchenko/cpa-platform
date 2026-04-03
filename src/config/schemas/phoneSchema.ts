import { z } from 'zod';

const phoneRegex = /^\+[1-9]\d{7,14}$/;

export const phoneSchema = z
  .string()
  .trim()
  .transform((value) => value.replace(/[\s\-()]/g, ''))
  .refine((value) => phoneRegex.test(value), {
    message: 'Please enter a valid phone number in international format',
  });
