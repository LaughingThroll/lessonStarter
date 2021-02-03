import iconUsers from '@icons/users.svg';
import iconArrowUp from '@icons/arrow--up.svg';

import buttonArrow from '../renderButtons/buttonArrow';
import teamBodyCell from '../teamBodyCell';

import { formatDayInBinaryString } from '@utils/date';

const renderCalendarBody = ({ currentDate, allDaysInMonth, commands }) => {
  const calendarBody = document.createElement("tbody");
  calendarBody.classList.add('calendar__body', 'malibu-theme');

  const teamBody = `<tr class="team-body" style="grid-template-columns: 260px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="calendar__border team team--common team-body__cell">
      <span class="team__name">Front-end</span>
      <div class="team__other">
        <div class="team__users users">
          <img class="users__svg" src=${iconUsers} alt="">  
          <span class="users__count">5</span>
        </div>
        <div class="team__weekend-percent weekend-percent">8%</div>
        ${buttonArrow(['team__arrow', 'btn-arrow-up'], iconArrowUp)}
      </div>
    </td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="calendar__border team-body__cell cell-gray">4</td>
    </tr>`;
    calendarBody.insertAdjacentHTML('afterbegin', teamBody);
  return calendarBody;
};

export default renderCalendarBody;
