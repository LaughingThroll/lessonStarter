import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

import getDataServer from '@utils/getDataServer';
import { TEAMS_URL } from '@constant';



export class Component {
  constructor(parentSelector, tagName = "div") {
    if (typeof parentSelector === "string") {
      this.parent = document.querySelector(parentSelector);
    } else {
      this.parent = parentSelector;
    }
    this.component = document.createElement(tagName);
  }

  render() {
    this.parent.append(this.component);
    return this.component;
  }
}

const renderApp = () => {
  const appElement = document.getElementById("appRoot");

  const currentDate = new Date();
  let month = new Date().getMonth();
  let teams = [];

  const prevMonth = () => {
    currentDate.setMonth(--month);
    update();
    if (month < 0) month = 11;
  };

  const nextMonth = () => {
    currentDate.setMonth(++month);
    update();
    if (month > 11) month = 0;
  };

  const likeComponentDidMount = () => {
    return getDataServer(TEAMS_URL).then(({ teams: teamsResponse }) => teams = teamsResponse);
  };
  

  const update = () => {
    appElement.innerHTML = '';

    renderBar({ appElement, currentDate, prevMonth, nextMonth });
    renderCalendar({ appElement, currentDate, teams });
  };

  const render = () => {
    likeComponentDidMount().then(() => {
      renderBar({ appElement, currentDate, prevMonth, nextMonth });
      renderCalendar({ appElement, currentDate, teams });
    });
  };


  render();
};

export default renderApp;
