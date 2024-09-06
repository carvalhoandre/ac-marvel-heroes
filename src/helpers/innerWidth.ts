export const getItemsPerPage = (): number => {
  const width = window.innerWidth;
  if (width >= 1400) {
    return 12;
  } else if (width >= 1360) {
    return 8;
  } else if (width >= 768) {
    return 6;
  } else {
    return 4;
  }
};
