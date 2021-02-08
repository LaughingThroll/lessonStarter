class TeamBodyCell {
  constructor(dayString){
    this.dayString = dayString;
  }
  
  render() {
    return `<td class=" team-body__cell ${this.dayString === 'Sa' || this.dayString === 'Su' ? 'cell-gray' : ''} "></td>`;
  };
}

export default TeamBodyCell;