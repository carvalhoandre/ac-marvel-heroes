export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("pt-BR").format(date);
};
