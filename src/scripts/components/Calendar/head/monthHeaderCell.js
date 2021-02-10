class MonthHeaderCell {
  constructor(dayString, dayNumber) {
    this.dayString = dayString;
    this.dayNumber = dayNumber;
  }
  renderDayOfWeek() {
    return `<th class="month-header__cell ${this.dayString === 'Sa' || this.dayString === 'Su' ? 'cell-gray' : ''}">
    <span class="item-day month-header__day">${this.dayString}</span> <span class="month-header__number">${this.dayNumber}</span>
  </th>`;
  }
};

export default MonthHeaderCell;