import type { Locale } from '@constants/locales';

import type { MultiplyResponse } from '@/types/api';

import { apiClient } from '../client';
import { request } from '../request';

export function getMultiply(locale: Locale) {
  return request<MultiplyResponse>(apiClient.get(`/${locale}/multiply`));
}
