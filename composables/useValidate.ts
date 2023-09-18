export const useValidate = (re: RegExp, value: string): boolean => {
  return !re.test(value);
};
