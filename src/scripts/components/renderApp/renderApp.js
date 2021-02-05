import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

import getDataServer from '@utils/getDataServer';
import { TEAMS_URL } from '@constant';

const renderApp = () => {
  const appElement = document.getElementById("appRoot");

  const currentDate = new Date();
  let month = new Date().getMonth();

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

  
  const update = () => {
    appElement.innerHTML = '';
    renderBar({ appElement, currentDate, prevMonth, nextMonth });
    getDataServer(TEAMS_URL).then(({ teams }) => renderCalendar({ appElement, currentDate, teams }));
  };

  const render = () => {
    renderBar({ appElement, currentDate, prevMonth, nextMonth });
    getDataServer(TEAMS_URL).then(({ teams }) => renderCalendar({ appElement, currentDate, teams }));
  };


  render();
};

export default renderApp;
