import iconUsers from '@icons/users.svg';
import iconArrowUp from '@icons/arrow--up.svg';

import buttonArrow from '../renderButtons/buttonArrow';
import teamBodyCell from '../teamBodyCell';

import { formatDayInBinaryString } from '@utils/date';

import { FIRST_COLUMN_WIDTH } from '@constant';

const renderCalendarBody = ({ currentDate, allDaysInMonth }) => {
  const calendarBody = document.createElement("tbody");
  calendarBody.classList.add('calendar-table__body', 'table-body');

  const teamBody = `
  <tr class="team-body malibu-theme malibu-theme--background" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--common team-body__cell calendar__border">
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
    <td class="team-body__cell cell-gray calendar__border"></td>
    </tr>

    <tr class="team-body malibu-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    <tr class="team-body malibu-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    <tr class="team-body malibu-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    <tr class="team-body malibu-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    <tr class="team-body team-body--intendent melrose-theme melrose-theme--background" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--common team-body__cell calendar__border">
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
    <td class="team-body__cell cell-gray calendar__border"></td>
    </tr>

    <tr class="team-body melrose-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    <tr class="team-body melrose-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    <tr class="team-body melrose-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    <tr class="team-body melrose-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>
    
    <tr class="team-body team-body--intendent mona-lisa-theme mona-lisa-theme--background" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--common team-body__cell calendar__border">
      <span class="team__name">deisgners</span>
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
    <td class="team-body__cell cell-gray calendar__border"></td>
    </tr>

    <tr class="team-body mona-lisa-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    <tr class="team-body mona-lisa-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>


    <tr class="team-body mona-lisa-theme" style="grid-template-columns: ${ FIRST_COLUMN_WIDTH }px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">Nick</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(''))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>

    `;

  calendarBody.insertAdjacentHTML('afterbegin', teamBody);

  return calendarBody;
};

export default renderCalendarBody;
