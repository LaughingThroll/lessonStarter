import { renderDOM, createVNode } from '@utils/VDOM';

import Bar from "./Bar";
import Calendar from "./Calendar";

import getDataServer from '@utils/getDataServer';

import { TEAMS_URL } from '@constant';

class App {
  constructor(rootElement) {

    this.rootElement = rootElement;
    this.currentDate = new Date();
    this.month = new Date().getMonth();
    this.teams = [];

    this.currentRender = renderDOM(this.render(), this.rootElement);
    this.likeComponentDidMount();
  }

  likeComponentDidMount = () => {
    return getDataServer(TEAMS_URL).then(({ teams: teamsResponse }) => {
      this.teams = teamsResponse;
      this.updateDOM();
    });
  }


  prevMonth = () => {
    this.currentDate.setMonth(--this.month);
    this.updateDOM();
    if (this.month < 0) this.month = 11;
  }


  nextMonth = () => {
    this.currentDate.setMonth(++this.month);
    this.updateDOM();
    if (this.month > 11) this.month = 0;
  };

  updateDOM = () => {
    // если с rootElement работает все нормально только нету частичного обновления, то есть он полностью все пересоздает
    // renderDOM(this.render(), this.rootElement);
    // если все это записывать в currentRender то есть обновления правда работает немного некоректно
    // посмотрите пожалуйста может что то кому в голову прийдет у меня уже не сильно соображает 
    //  
    this.currentRender = renderDOM(this.render(), this.currentRender);
  }

  
  render = () => {
    return createVNode('div', { classNames: 'container' },
      new Bar(this.currentDate, this.prevMonth, this.nextMonth).render(),
      new Calendar(this.currentDate, this.teams).render()
    );
  };
}

export default App;
