const capitalize = (word: string): string =>
  word ? word.charAt(0).toUpperCase() + word.slice(1) : word;

export const capitalizeFirstChar = (value: string): string => {
  if (!value) return value;
  return capitalize(value);
};

export const capitalizeEveryWord = (value: string): string => {
  if (!value) return value;
  return value.split(' ').map(capitalize).join(' ');
};
