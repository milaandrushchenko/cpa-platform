import type { Locale } from '@constants/locales';

import type { TasksResponse, TasksResponseRaw } from '@/types/api';

import { apiClient } from '../client';
import { request } from '../request';

export async function getTasks(locale: Locale): Promise<TasksResponse> {
  const data = await request<TasksResponseRaw>(
    apiClient.get(`/${locale}/tasks`),
  );

  return {
    description: data.description ?? data['description:'] ?? '',
    tiles: data.tiles,
  };
}
