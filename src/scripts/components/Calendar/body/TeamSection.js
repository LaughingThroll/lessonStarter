import iconUsers from '@icons/users.svg';
import iconArrowUp from '@icons/arrow--up.svg';

import { ButtonArrow } from '../../Buttons';
import TeamBodyCell from './TeamBodyCell';
import TeamMember from './TeamMember';

import { formatDayInBinaryString } from '@utils/date';

class TeamSection {
  constructor(currentDate, allDaysInMonth, team) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.team = team;
  }

  render() {
    const { name, members, percentageOfAbsent } = this.team;
    
    return `<tr class="team-body calendar-table--indentation ${name === "Frontend Team" ? "melrose-theme melrose-theme--background" : name === "Backend Team" ? "malibu-theme malibu-theme--background" : ''}" >
      <td class="team team--common team-body__cell">
        <span class="team__name">${name}</span>
        <div class="team__other">
          <div class="team__users users">
            <img class="users__svg" src=${iconUsers} alt="">
            <span class="users__count">${members.length}</span>
          </div>
          <div class="team__weekend-percent weekend-percent">${percentageOfAbsent[this.currentDate.getMonth()]}</div>
          ${new ButtonArrow(["team__arrow", "btn-arrow-up"], iconArrowUp).render()}
        </div>
      </td>
      ${(new Array(this.allDaysInMonth).fill(0).map((_, day) => new TeamBodyCell(formatDayInBinaryString(this.currentDate, day + 1)).render()).join(""))}
      <td class="team-body__cell cell-gray"></td>
      </tr>
      ${members.map(member => new TeamMember(this.currentDate, this.allDaysInMonth, member).render()).join('')}`;
  }
}

export default TeamSection;