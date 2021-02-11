import { createVNode } from '@utils/VDOM';

class Button {
  constructor(classNames = [], path, plus = true) {
    this.classNames = classNames;
    this.path = path;
    this.plus = plus;
  }

  render() {
    return (
      createVNode('button', { classNames: `button ${this.classNames.join(' ')}` },
        this.plus
          ? createVNode('img', { classNames: 'button__svg', src: `${this.path}`, alt: '' })
          : null,
        'Add Vacation'
      ));
    // return `<button class="button ${this.classNames.join(' ')}">
    // ${this.plus ? `<img class="button__svg" src="${this.path}" alt="">` : ''} 
    // Add Vacation
    // </button>`;
  }
};

export default Button;