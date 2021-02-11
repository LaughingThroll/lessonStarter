import { createVNode } from '@utils/VDOM';

class ButtonArrow {
  constructor(classNames /* Array[string] */, path/* string */, fnClick = (() => {})) {
    this.classNames = classNames;
    this.path = path;
    this.fnClick = fnClick;
  }
  
  render() {
    return (
      createVNode('button', { onClick: this.fnClick,  classNames: `${this.classNames.join(' ')}` }, 
        createVNode('img', {classNames: 'arrow', src: `${this.path}`, alt: '' })
      )
    );
  }
};

export default ButtonArrow;

