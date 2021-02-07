import Bar from "./Bar";
import Calendar from "./Calendar";

import getDataServer from '@utils/getDataServer';

import { TEAMS_URL } from '@constant';

class App {
  constructor(rootElement) {
    this.appElement = rootElement;
    this.currentDate = new Date();
    this.month = new Date().getMonth();
    this.teams = [];
  }

  likeComponentDidMount = () => {
    return getDataServer(TEAMS_URL).then(({ teams: teamsResponse }) => this.teams = teamsResponse);
  }


  prevMonth = () => {
    this.currentDate.setMonth(--this.month);
    this.update();
    if (this.month < 0) this.month = 11;
  }

  
  nextMonth = () => {
    this.currentDate.setMonth(++this.month);
    this.update();
    if (this.month > 11) this.month = 0;
  };

  update = () => {
    this.appElement.innerHTML = '';

    new Bar( this.appElement, this.currentDate, this.prevMonth, this.nextMonth ).render();
    new Calendar( this.appElement, this.currentDate, this.teams ).render();
  };

  render = () => {
    this.likeComponentDidMount().then(() => {
      new Bar(this.appElement, this.currentDate, this.prevMonth, this.nextMonth ).render();
      new Calendar( this.appElement, this.currentDate, this.teams ).render();
    });
  };

}
export default App;
