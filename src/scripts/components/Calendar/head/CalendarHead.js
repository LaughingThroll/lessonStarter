import { createVNode } from '@utils/VDOM';

import iconPlus from '@icons/plus.svg';

import { Button } from '../../Buttons';
import MonthHeaderCell from './monthHeaderCell';

import { formatDayInBinaryString } from '@utils/date';

class CalendarHead {
  constructor(currentDate, allDaysInMonth) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
  }

  render() {
    return (
      createVNode('thead', { classNames: 'calendar-table__header' },
        createVNode('tr', { classNames: 'month-header' },
          createVNode('th', { classNames: 'month-header__cell' }, new Button([], iconPlus).render()),
          // render more th on all Days
          ...new Array(this.allDaysInMonth).fill(0).map((_, day) => {
            return new MonthHeaderCell(formatDayInBinaryString(this.currentDate, day + 1), day + 1).render();
          }),

          createVNode('th', { classNames: 'month-header__cell cell-gray' }, 'Sum')
        )
      )
    );
  }
};

export default CalendarHead;