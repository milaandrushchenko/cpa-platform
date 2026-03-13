import type { Locale } from '@config/locales';

import type { BenefitsResponse } from '@/types/api';

import { apiClient } from '../client';
import { request } from '../request';

export function getBenefits(locale: Locale) {
  return request<BenefitsResponse>(apiClient.get(`/${locale}/benefits`));
}
