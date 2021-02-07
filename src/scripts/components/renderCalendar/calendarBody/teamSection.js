import iconUsers from '@icons/users.svg';
import iconArrowUp from '@icons/arrow--up.svg';

import ButtonArrow from '../../renderButtons/buttonArrow';
import TeamBodyCell from './teamBodyCell';
import TeamMember from './teamMember';

import { formatDayInBinaryString } from '@utils/date';

import { THEMES } from '@constant';

class TeamSection {
  constructor(currentDate, allDaysInMonth, teams) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.teams = teams;
  }

  render() {
    return (this.teams.map((team, i) => ` <tr class="team-body calendar-table--indentation ${ THEMES[i % THEMES.length][0] } ${ THEMES[i % THEMES.length][1] } " >
      <td class="team team--common team-body__cell">
        <span class="team__name">${team.name}</span>
        <div class="team__other">
          <div class="team__users users">
            <img class="users__svg" src=${iconUsers} alt="">
            <span class="users__count">${team.members.length}</span>
          </div>
          <div class="team__weekend-percent weekend-percent">${team.percentageOfAbsent[this.currentDate.getMonth()]}</div>
          ${new ButtonArrow(["team__arrow", "btn-arrow-up"], iconArrowUp).render()}
        </div>
      </td>
      ${(new Array(this.allDaysInMonth).fill(0).map((_, day) => new TeamBodyCell(formatDayInBinaryString(this.currentDate, day + 1)).render()).join(""))}
      <td class="team-body__cell cell-gray"></td>
      </tr>${new TeamMember(this.currentDate, this.allDaysInMonth, team, i).render()}`).join(""));
  }
}

export default TeamSection;