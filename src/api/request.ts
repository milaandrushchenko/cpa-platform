import axios from 'axios';

export async function request<T>(promise: Promise<{ data: T }>): Promise<T> {
  try {
    const { data } = await promise;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const data: unknown = error.response?.data;

      if (
        typeof data === 'object' &&
        data !== null &&
        'message' in data &&
        typeof (data as { message: unknown }).message === 'string'
      ) {
        const serverMessage = (data as { message: string }).message;
        throw new Error(serverMessage);
      }
    }

    throw new Error('Request failed');
  }
}
