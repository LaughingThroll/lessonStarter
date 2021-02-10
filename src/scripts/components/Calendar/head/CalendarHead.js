import iconPlus from '@icons/plus.svg';

import { Button } from '../../Buttons';
import MonthHeaderCell from './monthHeaderCell';

import { formatDayInBinaryString } from '@utils/date';

class CalendarHead {
  constructor(currentDate, allDaysInMonth) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
  }
  
  days =  Array.from({ length: 31 }, (_, i) => i + 1);

  render(){
    const calendarHead = document.createElement("thead");
    calendarHead.classList.add('calendar-table__header');

    const monthHeaderHTML = `<tr class="month-header">
    <th class="month-header__cell">${new Button([], iconPlus).render()}</th>
    ${(this.days.map((day) => {
      return new MonthHeaderCell(formatDayInBinaryString(this.currentDate, day), day).renderDayOfWeek();
    }).join(''))}
    <th class="month-header__cell cell-gray"> Sum </th>
    </tr>`;

    calendarHead.insertAdjacentHTML('afterbegin', monthHeaderHTML);

    return calendarHead;
  }

};

export default CalendarHead;