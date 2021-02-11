import createVNode from './createVNode';
import { TEXT_NODE_TYPE } from './constants';

const recycleNode = node => {
  if (node.nodeType === TEXT_NODE_TYPE) {
    return node.nodeValue;
  }
  const tagName = node.nodeName.toLowerCase();
  const children = [].map.call(node.childNodes, recycleNode);

  return createVNode(tagName, {}, ...children);
};

export default recycleNode;