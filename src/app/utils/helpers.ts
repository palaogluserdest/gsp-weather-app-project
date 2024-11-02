export const formatDate = (dateString: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [year, month, day] = dateString.split('-');
  const monthName = months[parseInt(month, 10) - 1];

  return `${parseInt(day, 10)} ${monthName} ${year}`;
};
