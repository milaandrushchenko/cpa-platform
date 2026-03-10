export async function request<T>(promise: Promise<{ data: T }>): Promise<T> {
  try {
    const { data } = await promise;
    return data;
  } catch {
    throw new Error('Request failed');
  }
}
