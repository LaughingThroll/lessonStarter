import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

const renderApp = () => {
  const appElement = document.getElementById("appRoot");

  const currentDate = new Date();
  let month = new Date().getMonth();
  console.log(month);
  // 0 - jan
  // 1 - feb
  // 2 - march
  // 3 - april
  // 4 - may
  // 5 - june
  // 6 - july
  // 7 - august
  // 8 - september
  // 9 - october
  // 10 - november
  // 11 - december 
  const minusMonth = () => {
    if (month > 0) {
      month--;
      currentDate.setMonth(month);
      update();
    }
  };

  const plusMonth = () => {
    if (month < 11) {
      month++;
      currentDate.setMonth(month);
      update();
    } 
  };

  const render = () => {
    renderBar({ appElement, currentDate, minusMonth, plusMonth });
    renderCalendar({ appElement, currentDate });
  };

  const update = () => {
    appElement.innerHTML = '';
    render();
  };

  render();

};

export default renderApp;
