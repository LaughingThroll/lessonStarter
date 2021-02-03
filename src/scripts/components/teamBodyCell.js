const teamBodyCell = dayString => {
  return `<td class="calendar__border team-body__cell ${dayString === 'Sa' ||dayString === 'Su' ? 'cell-gray' : ''} "></td>`;
};

export default teamBodyCell;