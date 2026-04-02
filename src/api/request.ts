import axios from 'axios';

import { extractServerMessage } from '@/utils/extractServerMessage';

export async function request<T>(promise: Promise<{ data: T }>): Promise<T> {
  try {
    const { data } = await promise;
    return data;
  } catch (error) {
    const isAxios = axios.isAxiosError(error);

    if (isAxios) {
      const data: unknown = error.response?.data;
      const serverMessage = extractServerMessage(data);

      if (serverMessage) {
        throw new Error(serverMessage);
      }
    }

    throw new Error(
      isAxios ? error.message || 'Request failed' : 'Request failed',
    );
  }
}
