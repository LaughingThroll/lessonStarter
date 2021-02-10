import { CalendarHead } from './head';
import { CalendarBody} from './body';

import { daysInMonth, formatDayInBinaryString } from '@utils/date';

class Calendar {
  constructor(appElement, currentDate) {
    this.appElement = appElement;
    this.currentDate = currentDate;
    this.allDaysInMonth = daysInMonth(currentDate);
  }

  render(teams) {
    const calendarContainer = document.createElement("table");
    calendarContainer.classList.add('calendar__table', 'calendar-table');

    calendarContainer.prepend(new CalendarHead( this.currentDate, this.allDaysInMonth ).render());

    calendarContainer.append(new CalendarBody( this.currentDate, this.allDaysInMonth, teams).render());

    this.appElement.append(calendarContainer);
  }

  update() {
    let itemsNumber = document.getElementsByClassName('item-day');

    for(let i = 1; i <= itemsNumber.length; ++i){
      console.log(itemsNumber[i-1].innerHTML)
      itemsNumber[i-1].innerHTML = formatDayInBinaryString(this.currentDate, i);
    }
  }
}


export default Calendar;