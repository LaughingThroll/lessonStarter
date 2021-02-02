import plus from '../../../assets/images/icons/plus.svg';

import button from '../renderButtons/button';
import monthHeaderCell from '../monthHeaderCell';

import { daysInMonth, formatDayInString } from '../../utils/formatDate';

const renderCalendarHead = ({ currentDate }) => {
  const calendarHead = document.createElement("thead");
  calendarHead.classList.add('calendar-table__header');
  const lastDay = daysInMonth(currentDate);

  const html = `<tr class="month-header" style="grid-template-columns: 260px repeat(${lastDay + 1}, 1fr);">
  <th class="month-header__cell">${button([], plus)}</th>
  ${(new Array(lastDay).fill(0).map((_, day) => {
    return monthHeaderCell(formatDayInString(currentDate, day + 1), day + 1);
  }).join(''))}
  <th class="calendar__border month-header__cell cell-gray"> Sum </th>
  </tr>`;

  calendarHead.insertAdjacentHTML('afterbegin', html);
  return calendarHead;
};

export default renderCalendarHead;