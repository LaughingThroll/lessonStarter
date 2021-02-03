import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

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

  const render = () => {
    renderBar({ appElement, currentDate, prevMonth, nextMonth });
    renderCalendar({ appElement, currentDate });
  };

  const update = () => {
    appElement.innerHTML = '';
    render();
  };

  render();

};

export default renderApp;
