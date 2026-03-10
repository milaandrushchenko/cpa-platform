import type { SubmitFormPayload, SubmitFormResponse } from '@/types/api';

import { apiClient } from '../client';
import { request } from '../request';

export function submitContactForm(payload: SubmitFormPayload) {
  return request<SubmitFormResponse>(apiClient.post('/form', payload));
}
