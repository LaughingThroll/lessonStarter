import { createVNode } from '@utils/VDOM';

class TeamBodyCell {
  constructor(dayString){
    this.dayString = dayString;
  }
  
  render() {
    return createVNode('td', { classNames: `team-body__cell ${this.dayString === 'Sa' || this.dayString === 'Su' ? 'cell-gray' : ''}`});
  };
}

export default TeamBodyCell;