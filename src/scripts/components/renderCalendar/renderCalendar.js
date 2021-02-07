import RenderCalendarHead from './calendarHead/renderCalendarHead';
import RenderCalendarBody from './calendarBody/renderCalendarBody';

import { daysInMonth } from '@utils/date';

const renderCalendar = ({ appElement, currentDate, teams }) => {
  
  const calendarContainer = document.createElement("table");
  calendarContainer.classList.add('calendar__table', 'calendar-table');
  const allDaysInMonth = daysInMonth(currentDate);
  
  calendarContainer.prepend(new RenderCalendarHead({currentDate, allDaysInMonth}).render()); 
  
  calendarContainer.append(new RenderCalendarBody({ currentDate, allDaysInMonth, teams }).render());

  appElement.append(calendarContainer);
};


export default renderCalendar;



