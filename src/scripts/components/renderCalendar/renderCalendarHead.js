import iconPlus from '@icons/plus.svg';

import button from '../renderButtons/button';
import monthHeaderCell from '../monthHeaderCell';

import { formatDayInBinaryString } from '@utils/date';
import { WIDTH_BORDER_LEFT } from '@constant';

const renderCalendarHead = ({ currentDate, allDaysInMonth }) => {
  const calendarHead = document.createElement("thead");
  calendarHead.classList.add('calendar-table__header');

  const monthHeaderHTML = `<tr class="month-header" style="grid-template-columns: 26${WIDTH_BORDER_LEFT}px repeat(${allDaysInMonth + 1}, 1fr);">
  <th class="calendar__border month-header__cell">${button([], iconPlus)}</th>
  ${(new Array(allDaysInMonth).fill(0).map((_, day) => {
    return monthHeaderCell(formatDayInBinaryString(currentDate, day + 1), day + 1);
  }).join(''))}
  <th class="calendar__border month-header__cell cell-gray"> Sum </th>
  </tr>`;

  calendarHead.insertAdjacentHTML('afterbegin', monthHeaderHTML);
  return calendarHead;
};

export default renderCalendarHead;