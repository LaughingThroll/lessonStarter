const monthHeaderCell = (dayString, dayNumber) => {
  return `<th class="calendar__border month-header__cell ${dayString === 'Sa' ||dayString === 'Su' ? 'cell-gray' : ''}">
    <span class="month-header__day">${dayString}</span> <span class="month-header__number">${dayNumber}</span>
  </th>`;
};

export default monthHeaderCell;