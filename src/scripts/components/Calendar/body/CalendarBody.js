import TeamSection from "./TeamSection";

class CalendarBody {
  constructor(currentDate, allDaysInMonth, teams) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.teams = teams;
  }

  render() {
    const calendarBody = document.createElement("tbody");
    calendarBody.classList.add("calendar-table__body", "table-body");

    const teamsSections = `
      ${this.teams
        .map((team, index) => new TeamSection(this.currentDate, this.allDaysInMonth, team, index).render())
        .join("")}
    `;

    calendarBody.insertAdjacentHTML("afterbegin", teamsSections);

    return calendarBody;
  }
}

export default CalendarBody;
