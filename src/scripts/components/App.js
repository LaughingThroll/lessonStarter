import Bar from "./Bar";
import Calendar from "./Calendar";

import getDataServer from '@utils/getDataServer';

import CalendarHead from './Calendar/head/CalendarHead'

import { TEAMS_URL } from '@constant';

class App {
  constructor(rootElement) {
    this.appElement = rootElement;
    this.currentDate = new Date();
    this.month = new Date().getMonth();
    this.teams = [];
    this.barTemplate = new Bar(this.appElement, this.currentDate, this.prevMonth, this.nextMonth );
    this.calendarTemplate = new Calendar( this.appElement, this.currentDate, this.teams );
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
    // this.appElement.innerHTML = '';

    this.barTemplate.update(this.currentDate);
    this.calendarTemplate.update(this.currentDate);
  };

  render = () => {
    this.likeComponentDidMount().then(() => {
      this.barTemplate.render();
      this.calendarTemplate.render(this.teams);
    });
  };

}
export default App;
