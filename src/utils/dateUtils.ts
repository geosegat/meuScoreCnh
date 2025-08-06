export const parseFineDate = (dateString: string): Date => {
  const [datePart] = dateString.split(' - ');
  const [day, month, year] = datePart.split('/');
  return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
};

export const formatFineDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getDaysDifference = (date1: Date, date2: Date): number => {
  return Math.floor((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));
};
