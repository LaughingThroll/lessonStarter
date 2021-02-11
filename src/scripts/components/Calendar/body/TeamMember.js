import { createVNode } from '@utils/VDOM';

import TeamBodyCell from './TeamBodyCell';

import { formatDayInBinaryString } from '@utils/date';

class TeamMember {
  constructor(currentDate, allDaysInMonth, member, theme) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.member = member;
    this.theme = theme;
  }

  render() {
    const { name } = this.member;

    return (
      createVNode('tr', { classNames: `team-body ${this.theme}` },
        createVNode('td', { classNames: 'team team--member team-body__cell' }, createVNode('span', { classNames: 'team__name' }, `${name}`)),
        ...new Array(this.allDaysInMonth).fill(0).map((_, day) => new TeamBodyCell(formatDayInBinaryString(this.currentDate, day + 1)).render()),
        createVNode('td', { classNames: 'team-body__cell cell-gray' }, '4')
      )
    );
  };
};

export default TeamMember;