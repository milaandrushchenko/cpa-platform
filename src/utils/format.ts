import { capitalizeEveryWord } from './capitalize';

export const formatTitle = (value: string): string => {
  return capitalizeEveryWord(value?.trim().toLowerCase().replace(/_/g, ' '));
};
