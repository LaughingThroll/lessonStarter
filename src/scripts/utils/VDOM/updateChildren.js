import updateNode from './updateNode';
import { createDOMNode } from './core';

const updateChildren = (parent, currentVChildren, nextVChidlren) => {
  parent.childNodes.forEach((childNode, i) => {
    updateNode(childNode, currentVChildren[i], nextVChidlren[i]);
  });

  nextVChidlren.slice(currentVChildren.length).forEach(vChild => {
    parent.appendChild(createDOMNode(vChild));
  });
};

export default updateChildren;
