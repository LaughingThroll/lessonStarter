class Button {
  constructor(classNames = [], path, plus = true){
    this.classNames = classNames;
    this.path = path;
    this.plus = plus;
  }
  
  render() {
    return `<button class="button ${this.classNames.join(' ')}">
    ${this.plus ? `<img class="button__svg" src="${this.path}" alt="">` : ''} 
    Add Vacation
    </button>`;
  }
};

export default Button;