import arrowLeft from '../../../assets/images/icons/arrow--left.svg';
import arrowRight from '../../../assets/images/icons/arrow--right.svg';

import buttonArrow from '../renderButtons/buttonArrow';

const renderBar = ({ appElement, currentDate, minusMonth, plusMonth }) => {

  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendar__bar");
  const mainClassButton = 'month-navigate__button';
  
  const buttonClassLeft = [mainClassButton, 'month-navigate__button--left'];
  const buttonClassRight = [mainClassButton, 'month-navigate__button--right'];
  
  const bar = `<div class="month-navigate">
    ${buttonArrow(buttonClassLeft, arrowLeft)}
    <div class="month-navigate__text">${currentDate.toLocaleString('en-US', {month: 'long', year: 'numeric'})}</div>
    ${buttonArrow(buttonClassRight, arrowRight)}
  </div>`;

  calendarToolbar.insertAdjacentHTML('afterbegin', bar);
  appElement.prepend(calendarToolbar);


  calendarToolbar.addEventListener('click', ({ path }) => {
    const buttonLeft = document.querySelector(`.${mainClassButton}--left`);
    const buttonRight = document.querySelector(`.${mainClassButton}--right`);
      
    if (path.includes(buttonLeft)) minusMonth();
    if (path.includes(buttonRight)) plusMonth();
  });


};

export default renderBar;
