import renderCalendarHead from './renderCalendarHead';
import { daysInMonth } from '@utils/date';
import  getDataServer  from '@utils/getDataServer';
import buttonArrow from "../renderButtons/buttonArrow";
import teamBodyCell from "../teamBodyCell";

import { FIRST_COLUMN_WIDTH } from '@constant';
import iconUsers from '@icons/users.svg';
import iconArrowUp from '@icons/arrow--up.svg';


import { formatDayInBinaryString } from '@utils/date';


const renderCalendar = ({ appElement, currentDate }) => {
  getDataServer().then(({ teams }) => {
    console.log(teams);
    const calendarContainer = document.createElement("table");
    const allDaysInMonth = daysInMonth(currentDate);
    const calendarBody = document.createElement("tbody");
    calendarContainer.classList.add("calendar__table", "calendar-table");
    calendarBody.classList.add("calendar-table__body", "table-body");

    calendarContainer.prepend(renderCalendarHead({ currentDate, allDaysInMonth })); // This element must contain tr > th*monthLength > <span> DayName </span> + <span>DayNum</span>

    const teamMemberRowMaker = (team) => {
      return team.members.map((member) => `<tr class="team-body  ${team.name === "Frontend Team" ? "melrose-theme" : null} ${team.name === "Backend Team" ? "malibu-theme" : null}" style="grid-template-columns: ${FIRST_COLUMN_WIDTH}px repeat(${allDaysInMonth + 1}, 1fr);">
    <td class="team team--member team-body__cell calendar__border"><span class="team__name">${member.name}</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(""))}
    <td class="team-body__cell cell-gray calendar__border">4</td>
    </tr>`).join("");
    };

    const teamSectionMaker = (teams) => {
      return (teams.map((team) => ` <tr class="team-body team-body--header ${team.name === "Frontend Team" ? "melrose-theme melrose-theme--background" : null} ${team.name === "Backend Team" ? "malibu-theme malibu-theme--background" : null}" style="grid-template-columns: ${FIRST_COLUMN_WIDTH}px repeat(${allDaysInMonth + 1}, 1fr);">
      <td class="team team--common team-body__cell calendar__border">
        <span class="team__name">${team.name}</span>
      <div class="team__other">
        <div class="team__users users">
          <img class="users__svg" src=${iconUsers} alt="">
          <span class="users__count">${team.members.length}</span>
        </div>
        <div class="team__weekend-percent weekend-percent">${team.percentageOfAbsent[currentDate.getMonth()]}</div>
        ${buttonArrow(["team__arrow", "btn-arrow-up"], iconArrowUp)}
      </div>
    </td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(""))}
    <td class="team-body__cell cell-gray calendar__border"></td>
    </tr>${teamMemberRowMaker(team)}`).join(""));
    };


    calendarBody.innerHTML = teamSectionMaker(teams);
    calendarContainer.append(calendarBody);
    appElement.append(calendarContainer);
  });
};

export default renderCalendar;



