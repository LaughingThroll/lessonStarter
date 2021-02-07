import teamSection from './teamSection';

class RenderCalendarBody{
  constructor({ currentDate, allDaysInMonth, teams }){
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.teams = teams;
  }

  render(){
    const calendarBody = document.createElement("tbody");
  calendarBody.classList.add('calendar-table__body', 'table-body');

  calendarBody.insertAdjacentHTML('afterbegin', teamSection(this.currentDate, this.allDaysInMonth, this.teams));

  return calendarBody;
  }
};

export default RenderCalendarBody;
