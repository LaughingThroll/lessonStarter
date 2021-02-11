import iconPlus from "@icons/plus.svg";

import { formatDayInBinaryString } from "@utils/date";
import { Button } from "../../Buttons";
import MonthHeaderCell from "./monthHeaderCell";

class CalendarHead {
  constructor(currentDate, allDaysInMonth) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
  }

  render() {
    const calendarHead = document.createElement("thead");
    calendarHead.classList.add("calendar-table__header");

    const monthHeaderHTML = `<tr class="month-header">
    <th class="month-header__cell">${new Button([], iconPlus).render()}</th>
    ${new Array(this.allDaysInMonth)
      .fill(0)
      .map((_, day) => {
        return new MonthHeaderCell(formatDayInBinaryString(this.currentDate, day + 1), day + 1).renderDayOfWeek();
      })
      .join("")}
    <th class="month-header__cell cell-gray"> Sum </th>
    </tr>`;

    calendarHead.insertAdjacentHTML("afterbegin", monthHeaderHTML);

    return calendarHead;
  }
}

export default CalendarHead;
