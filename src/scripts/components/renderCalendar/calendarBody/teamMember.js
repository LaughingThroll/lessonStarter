import TeamBodyCell from './teamBodyCell';

import { formatDayInBinaryString } from '@utils/date';

class TeamMember {
  constructor(currentDate, allDaysInMonth, team){
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.team = team;
  }
  
  render(){
    return this.team.members.map((member) => `<tr class="team-body ${this.team.name === "Frontend Team" ? "melrose-theme" : this.team.name === "Backend Team" ? "malibu-theme" : ''}">
      <td class="team team--member team-body__cell malibu-theme"><span class="team__name">${member.name}</span></td>
      ${(new Array(this.allDaysInMonth).fill(0).map((_, day) => new TeamBodyCell(formatDayInBinaryString(this.currentDate, day + 1)).render()).join(""))}
      <td class="team-body__cell cell-gray">4</td>
      </tr>`).join("");
    }
};


export default TeamMember;