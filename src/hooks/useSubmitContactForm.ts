import { useState } from 'react';

import { submitContactForm } from '@/api/endpoints/contact';
import {
  type ContactFormPayload,
  type ContactFormResponse,
  contactFormResponseSchema,
} from '@/types/api';
import { getReadableServerError } from '@/utils/formErrors';

import { useLocale } from './useLocale';

type SubmitResult =
  | {
      success: true;
      data: ContactFormResponse;
    }
  | {
      success: false;
      error: string;
    };

export const useSubmitContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { locale } = useLocale();

  const submit = async (payload: ContactFormPayload): Promise<SubmitResult> => {
    setIsLoading(true);
    setError(null);

    try {
      const rawResponse = await submitContactForm(locale, payload);

      const parsedResponse = contactFormResponseSchema.safeParse(rawResponse);

      if (!parsedResponse.success) {
        // eslint-disable-next-line no-console
        console.error(
          'Invalid contact form response:',
          parsedResponse.error.format(),
        );

        return {
          success: false,
          error: 'Server returned an unexpected response format',
        };
      }

      return {
        success: true,
        data: parsedResponse.data,
      };
    } catch (err) {
      const rawMessage =
        err instanceof Error ? err.message : 'Something went wrong';

      const readableMessage = getReadableServerError(rawMessage);

      setError(readableMessage);

      return {
        success: false,
        error: readableMessage,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, error };
};
