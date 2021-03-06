const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const formatDayInBinaryString = (date, day) => {
  return new Date(date.getFullYear(), date.getMonth(), day).toLocaleString("en-US", { weekday: "short" }).slice(0, 2);
};

export { daysInMonth, formatDayInBinaryString };
