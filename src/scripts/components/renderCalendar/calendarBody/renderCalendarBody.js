import teamSection from './teamSection';

const renderCalendarBody = ({ currentDate, allDaysInMonth, teams }) => {
  const calendarBody = document.createElement("tbody");
  calendarBody.classList.add('calendar-table__body', 'table-body');

  calendarBody.insertAdjacentHTML('afterbegin', teamSection(currentDate, allDaysInMonth, teams));

  return calendarBody;
};

export default renderCalendarBody;
