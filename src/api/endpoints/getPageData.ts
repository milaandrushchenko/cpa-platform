import type { Locale } from '@/config/locales';
import { handleSettledResult } from '@/utils/handleSettledResult';

import { getBenefits } from './benefits';
import { getMultiply } from './multiply';
import { getTasks } from './tasks';

export const getPageData = async (locale: Locale) => {
  const [benefitsRes, tasksRes, multiplyRes] = await Promise.allSettled([
    getBenefits(locale),
    getTasks(locale),
    getMultiply(locale),
  ]);

  return {
    benefits: handleSettledResult(benefitsRes, 'benefits failed'),
    tasks: handleSettledResult(tasksRes, 'tasks failed'),
    multiply: handleSettledResult(multiplyRes, 'multiply failed'),
  };
};
