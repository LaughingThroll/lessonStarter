import { createVNode } from '@utils/VDOM';

import iconArrowLeft from '@icons/arrow--left.svg';
import iconArrowRight from '@icons/arrow--right.svg';

import { ButtonArrow } from '../Buttons';

class Bar {
  constructor(currentDate, prevMonth, nextMonth) {
    this.currentDate = currentDate;
    this.prevMonth = prevMonth;
    this.nextMonth = nextMonth;
  }

  render() {
    const mainClassButton = 'month-navigate__button';

    const buttonClassLeft = [mainClassButton, 'month-navigate__button--left'];
    const buttonClassRight = [mainClassButton, 'month-navigate__button--right'];

    return (
      createVNode('div', { classNames: 'calendar__bar' },
        createVNode('div', { classNames: 'month-navigate' },
          new ButtonArrow(buttonClassLeft, iconArrowLeft, this.prevMonth).render(),
          createVNode('div', { classNames: 'month-navigate__text' }, `${this.currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}`),
          new ButtonArrow(buttonClassRight, iconArrowRight, this.nextMonth).render()
        ))
    );
  }

};

export default Bar;
