import { createVNode } from '@utils/VDOM';

class MonthHeaderCell {
  constructor(dayString, dayNumber) {
    this.dayString = dayString;
    this.dayNumber = dayNumber;
  }
  render() {
    return (
      createVNode('th', { classNames: `month-header__cell ${this.dayString === 'Sa' || this.dayString === 'Su' ? 'cell-gray' : ''}` },
        createVNode('span', { classNames: 'month-header__day' }, `${this.dayString}`),
        createVNode('span', { classNames: 'month-header__number' }, `${this.dayNumber}`)
      )
    );
  }
};

export default MonthHeaderCell;