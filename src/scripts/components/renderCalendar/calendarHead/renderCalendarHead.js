import iconPlus from '@icons/plus.svg';

import button from '../../renderButtons/button';
import MonthHeaderCell from './monthHeaderCell';

import { formatDayInBinaryString } from '@utils/date';

class RenderCalendarHead{
  constructor({currentDate, allDaysInMonth}) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
  }
  
  render(){
    const calendarHead = document.createElement("thead");
    calendarHead.classList.add('calendar-table__header');

    const monthHeaderHTML = `<tr class="month-header">
    <th class="month-header__cell">${button([], iconPlus)}</th>
    ${(new Array(this.allDaysInMonth).fill(0).map((_, day) => {
      return new MonthHeaderCell(formatDayInBinaryString(this.currentDate, day + 1), day + 1).renderDayOfWeek();
    }).join(''))}
    <th class="month-header__cell cell-gray"> Sum </th>
    </tr>`;

    calendarHead.insertAdjacentHTML('afterbegin', monthHeaderHTML);

    return calendarHead;
  }
};

export default RenderCalendarHead;