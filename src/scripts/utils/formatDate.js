const daysInMonth = (date) => {
  const nonExistentDay = 33;
  return nonExistentDay - new Date(date.getFullYear(), date.getMonth(), nonExistentDay).getDate();
};

const formatDayInString = (date, day) => {
  return new Date(date.getFullYear(), date.getMonth(), day).toLocaleString('en-US', { weekday: 'short' }).substring(-1, 2);
};

export { daysInMonth, formatDayInString };