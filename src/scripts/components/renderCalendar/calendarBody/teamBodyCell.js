const teamBodyCell = dayString => {
  return `<td class=" team-body__cell ${dayString === 'Sa' ||dayString === 'Su' ? 'cell-gray' : ''} "></td>`;
};

export default teamBodyCell;