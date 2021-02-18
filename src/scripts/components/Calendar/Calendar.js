import { daysInMonth } from "../../utils/date";
import { CalendarHead } from "./head";
import { CalendarBody } from "./body";

class Calendar {
  constructor(appElement, currentDate, teams) {
    this.appElement = appElement;
    this.currentDate = currentDate;
    this.teams = teams;
    this.allDaysInMonth = daysInMonth(currentDate);
  }

  render() {
    const calendarContainer = document.createElement("table");
    calendarContainer.classList.add("calendar__table", "calendar-table");

    calendarContainer.prepend(new CalendarHead(this.currentDate, this.allDaysInMonth).render());

    calendarContainer.append(new CalendarBody(this.currentDate, this.allDaysInMonth, this.teams).render());

    this.appElement.append(calendarContainer);
  }
}

export default Calendar;
