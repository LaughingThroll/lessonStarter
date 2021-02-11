import { createVNode } from '@utils/VDOM';

import { CalendarHead } from './head';
import { CalendarBody } from './body';

import { daysInMonth } from '@utils/date';


class Calendar {
  constructor(currentDate, teams) {
    this.currentDate = currentDate;
    this.teams = teams;
    this.allDaysInMonth = daysInMonth(currentDate);
  }

  render() {
    return (
      createVNode('table', { classNames: 'calendar__table calendar-table' },
        new CalendarHead(this.currentDate, this.allDaysInMonth).render(),
        new CalendarBody(this.currentDate, this.allDaysInMonth, this.teams).render()
      )
    );
  };
};

export default Calendar;