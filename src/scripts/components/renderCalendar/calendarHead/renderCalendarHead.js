import iconPlus from '@icons/plus.svg';

import button from '../../renderButtons/button';
import monthHeaderCell from './monthHeaderCell';

import { formatDayInBinaryString } from '@utils/date';

const renderCalendarHead = ({ currentDate, allDaysInMonth }) => {
  const calendarHead = document.createElement("thead");
  calendarHead.classList.add('calendar-table__header');

  const monthHeaderHTML = `<tr class="month-header">
  <th class="month-header__cell">${button([], iconPlus)}</th>
  ${(new Array(allDaysInMonth).fill(0).map((_, day) => {
    return monthHeaderCell(formatDayInBinaryString(currentDate, day + 1), day + 1);
  }).join(''))}
  <th class="month-header__cell cell-gray"> Sum </th>
  </tr>`;

  calendarHead.insertAdjacentHTML('afterbegin', monthHeaderHTML);
  return calendarHead;
};

export default renderCalendarHead;