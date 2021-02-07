import RenderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

import getDataServer from '@utils/getDataServer';
import { TEAMS_URL } from '@constant';

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

    new RenderBar({ appElement, currentDate, prevMonth, nextMonth }).render();
    renderCalendar({ appElement, currentDate, teams });
  };

  const render = () => {
    likeComponentDidMount().then(() => {
      new RenderBar({ appElement, currentDate, prevMonth, nextMonth }).render();
      renderCalendar({ appElement, currentDate, teams });
    });
  };

  render();
};

export default renderApp;
