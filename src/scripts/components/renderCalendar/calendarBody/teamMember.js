import teamBodyCell from './teamBodyCell';

import { formatDayInBinaryString } from '@utils/date';

const teamMember = (currentDate, allDaysInMonth, team) => {
  return team.members.map((member) => `<tr class="team-body ${team.name === "Frontend Team" ? "melrose-theme" : team.name === "Backend Team" ? "malibu-theme" : ''}">
    <td class="team team--member team-body__cell malibu-theme"><span class="team__name">${member.name}</span></td>
    ${(new Array(allDaysInMonth).fill(0).map((_, day) => teamBodyCell(formatDayInBinaryString(currentDate, day + 1))).join(""))}
    <td class="team-body__cell cell-gray">4</td>
  </tr>`).join("");
};


export default teamMember;