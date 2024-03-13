export const getDaysOfMonth = (year: number, month: number) => {
  const days = new Date(year, month, 0).getDate();
  return Array.from({ length: days }, (_, i) => i + 1);
};
