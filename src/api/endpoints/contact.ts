import type { Locale } from '@/config/locales';
import type { ContactFormPayload, ContactFormResponse } from '@/types/api';

import { apiClient } from '../client';
import { request } from '../request';

export function submitContactForm(locale: Locale, payload: ContactFormPayload) {
  return request<ContactFormResponse>(
    apiClient.post(`/${locale}/form/`, payload),
  );
}
