import { createVNode } from '@utils/VDOM';
import TeamSection from './TeamSection';

class CalendarBody {  
  constructor( currentDate, allDaysInMonth, teams ) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.teams = teams;
  }

  render() {
    return (
      createVNode('tbody', { classNames: 'table-body calendar-table__body' },
      ...this.teams.map((team, i) => new TeamSection(this.currentDate, this.allDaysInMonth, team, i).render())
      )
    );
  }
};

export default CalendarBody;
