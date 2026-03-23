import type { ContactFormPayload, ContactFormResponse } from '@/types/api';

import { apiClient } from '../client';
import { request } from '../request';

export function submitContactForm(payload: ContactFormPayload) {
  return request<ContactFormResponse>(apiClient.post('/form', payload));
}
