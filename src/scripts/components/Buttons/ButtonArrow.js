class ButtonArrow {
  constructor(classNames /* Array[string] */, path/* string */) {
    this.classNames = classNames;
    this.path = path;
  }
  
  render() {
    return `<button class="${this.classNames.join(' ')}">
    <img class="arrow" src="${this.path}" alt="">
    </button>`;
  }
};

export default ButtonArrow;

