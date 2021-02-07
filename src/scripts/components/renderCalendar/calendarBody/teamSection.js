import iconUsers from '@icons/users.svg';
import iconArrowUp from '@icons/arrow--up.svg';

import buttonArrow from '../../renderButtons/buttonArrow';
import TeamBodyCell from './teamBodyCell';
import TeamMember from './teamMember';

import { formatDayInBinaryString } from '@utils/date';

const teamSection = (currentDate, allDaysInMonth, teams) => {
  return (teams.map((team) => ` <tr class="team-body row-header ${team.name === "Frontend Team" ? "melrose-theme melrose-theme--background" : team.name === "Backend Team" ? "malibu-theme malibu-theme--background" : ''}" >
  <td class="team team--common team-body__cell">
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
${(new Array(allDaysInMonth).fill(0).map((_, day) => new TeamBodyCell(formatDayInBinaryString(currentDate, day + 1)).render()).join(""))}
<td class="team-body__cell cell-gray"></td>
</tr>${new TeamMember(currentDate, allDaysInMonth, team).render()}`).join(""));
};


export default teamSection;