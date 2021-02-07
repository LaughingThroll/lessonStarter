import renderCalendarHead from './calendarHead/renderCalendarHead';
import renderCalendarBody from './calendarBody/renderCalendarBody';

import { daysInMonth } from '@utils/date';

const renderCalendar = ({ appElement, currentDate, teams }) => {
  const calendarContainer = document.createElement("table");
  calendarContainer.classList.add('calendar__table', 'calendar-table');
  const allDaysInMonth = daysInMonth(currentDate);
  
  calendarContainer.prepend(renderCalendarHead({ currentDate, allDaysInMonth })); 
  calendarContainer.append(renderCalendarBody({ currentDate, allDaysInMonth, teams }));

  appElement.append(calendarContainer);
};

export default renderCalendar;