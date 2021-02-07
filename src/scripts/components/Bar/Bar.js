import iconArrowLeft from '@icons/arrow--left.svg';
import iconArrowRight from '@icons/arrow--right.svg';

import { ButtonArrow } from '../Buttons';

class Bar {
  constructor(appElement, currentDate, prevMonth, nextMonth) {
    this.appElement = appElement;
    this.currentDate = currentDate;
    this.prevMonth = prevMonth;
    this.nextMonth = nextMonth;
  }

  render() {
    const calendarToolbar = document.createElement("div");
    calendarToolbar.classList.add("calendar__bar");
    const mainClassButton = 'month-navigate__button';

    const buttonClassLeft = [mainClassButton, 'month-navigate__button--left'];
    const buttonClassRight = [mainClassButton, 'month-navigate__button--right'];

    const bar = `<div class="month-navigate">
      ${new ButtonArrow(buttonClassLeft, iconArrowLeft).render()}
      <div class="month-navigate__text">${this.currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</div>
      ${new ButtonArrow(buttonClassRight, iconArrowRight).render()}
    </div>`;

    calendarToolbar.insertAdjacentHTML('afterbegin', bar);
    this.appElement.prepend(calendarToolbar);


    calendarToolbar.addEventListener('click', ({ path }) => {
      const buttonLeft = document.querySelector(`.${mainClassButton}--left`);
      const buttonRight = document.querySelector(`.${mainClassButton}--right`);

      if (path.includes(buttonLeft)) this.prevMonth();
      if (path.includes(buttonRight)) this.nextMonth();
    });
  }

};

export default Bar;
