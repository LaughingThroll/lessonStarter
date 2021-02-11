import iconUsers from "@icons/users.svg";
import iconArrowUp from "@icons/arrow--up.svg";

import { formatDayInBinaryString } from "@utils/date";
import { THEMES } from "@constant";
import { ButtonArrow } from "../../Buttons";
import TeamBodyCell from "./TeamBodyCell";
import TeamMember from "./TeamMember";

class TeamSection {
  constructor(currentDate, allDaysInMonth, team, index) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.team = team;
    this.themeIndex = index;
  }

  render() {
    const { name, members, percentageOfAbsent } = this.team;

    return `<tr class="team-body calendar-table--indentation ${THEMES[this.themeIndex % THEMES.length][0]} ${
      THEMES[this.themeIndex % THEMES.length][1]
    }" >
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
      ${new Array(this.allDaysInMonth)
        .fill(0)
        .map((_, day) => new TeamBodyCell(formatDayInBinaryString(this.currentDate, day + 1)).render())
        .join("")}
      <td class="team-body__cell cell-gray"></td>
      </tr>
      ${members
        .map((member) => new TeamMember(this.currentDate, this.allDaysInMonth, member, this.themeIndex).render())
        .join("")}`;
  }
}

export default TeamSection;
