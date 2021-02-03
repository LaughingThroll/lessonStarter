import renderCalendarHead from './renderCalendarHead';
import renderCalendarBody from './renderCalendarBody';

import { daysInMonth } from '@utils/date'; 

const renderCalendar = ({ appElement, currentDate }) => {
  const calendarContainer = document.createElement("table");
  calendarContainer.classList.add('calendar__table', 'calendar-table');
  const allDaysInMonth = daysInMonth(currentDate);

  const commands = [
    {
      name: 'Front-end',
      themes: 'malibu-theme',
      members: ['Georgiy', 'Mike', 'Hell', 'Kristy']
    },
    {
      name: 'Designers',
      themes: 'melrose-theme',
      members: ['Fantastic', 'Like', 'Holy', 'May']
    }
  ];
  
  calendarContainer.prepend(renderCalendarHead({ currentDate, allDaysInMonth })); // This element must contain tr > th*monthLength > <span> DayName </span> + <span>DayNum</span>
  calendarContainer.append(renderCalendarBody({ currentDate, allDaysInMonth, commands })); // This element must contain tr > td*monthLength

  appElement.append(calendarContainer);
};

export default renderCalendar;
