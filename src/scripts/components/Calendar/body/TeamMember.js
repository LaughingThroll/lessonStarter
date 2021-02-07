import TeamBodyCell from './TeamBodyCell';

import { formatDayInBinaryString } from '@utils/date';

class TeamMember {
  constructor(currentDate, allDaysInMonth, member){
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.member = member;
  }
  
  render() {

    const { name } = this.member;
    
    return `<tr class="team-body ">
        <td class="team team--member team-body__cell "><span class="team__name">${ name }</span></td>
        ${(new Array(this.allDaysInMonth).fill(0).map((_, day) => new TeamBodyCell(formatDayInBinaryString(this.currentDate, day + 1)).render()).join(""))}
        <td class="team-body__cell cell-gray">4</td>
      </tr>`;
    };
};

export default TeamMember;