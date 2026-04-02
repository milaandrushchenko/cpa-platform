import { capitalize } from './capitalize';

export const formatTitle = (value: string): string => {
  return capitalize(value?.trim().toLowerCase().replace(/_/g, ' '));
};
