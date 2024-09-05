export const truncateString = (string: string, maxLength: number): string => {
  if (!string) return "";

  return string.length > 200 ? `${string.substring(0, maxLength)}...` : string;
};
