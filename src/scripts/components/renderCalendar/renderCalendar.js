import renderCalendarHead from './renderCalendarHead';

const renderCalendar = ({ appElement, currentDate }) => {
  const calendarContainer = document.createElement("table");
  calendarContainer.classList.add('calendar__table', 'calendar-table');
  
  // const calendarBody = document.createElement("tbody");
  calendarContainer.prepend(renderCalendarHead({ currentDate })); // This element must contain tr > th*monthLength > <span> DayName </span> + <span>DayNum</span>
  // calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength

  appElement.append(calendarContainer);

  // let currentDate = new Date();
};

export default renderCalendar;
