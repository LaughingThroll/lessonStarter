import { createVNode } from '@utils/VDOM';

import iconUsers from '@icons/users.svg';
import iconArrowUp from '@icons/arrow--up.svg';

import { ButtonArrow } from '../../Buttons';
import TeamBodyCell from './TeamBodyCell';
import TeamMember from './TeamMember';

import { formatDayInBinaryString } from '@utils/date';
import { THEMES } from '@constant';

class TeamSection {
  constructor(currentDate, allDaysInMonth, team, i) {
    this.currentDate = currentDate;
    this.allDaysInMonth = allDaysInMonth;
    this.team = team;
    this.themeIndex = i;
  }

  render() {
    const { name, members, percentageOfAbsent } = this.team;

    return (
      createVNode('', {},
        createVNode('tr', { classNames: `team-body calendar-table--indentation ${THEMES[this.themeIndex % THEMES.length][0]} ${THEMES[this.themeIndex % THEMES.length][1]}` },
          createVNode('td', { classNames: 'team team--common team-body__cell' },
            createVNode('span', { classNames: 'team__name' }, `${name}`),
            createVNode('div', { classNames: 'team__other' },
              createVNode('div', { classNames: 'team__users users' },
                createVNode('img', { classNames: 'users__svg', src: `${iconUsers}`, alt: '' }),
                createVNode('span', { classNames: 'users__count' }, `${members.length}`)
              ),
              createVNode('div', { classNames: 'team__weekend-percent weekend-percent' }, `${percentageOfAbsent[this.currentDate.getMonth()]}`),
                new ButtonArrow(["team__arrow", "btn-arrow-up"], iconArrowUp).render()
              )
          ),
          ...new Array(this.allDaysInMonth).fill(0).map((_, day) => new TeamBodyCell(formatDayInBinaryString(this.currentDate, day + 1)).render()),
          createVNode('td', { classNames: 'team-body__cell cell-gray' })
        ),
        ...members.map(member => new TeamMember(this.currentDate, this.allDaysInMonth, member, THEMES[this.themeIndex % THEMES.length][0]).render())
      ));
  }
}

export default TeamSection;