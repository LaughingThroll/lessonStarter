import createDOMNode from './core/createDOMNode';
import updateProps from './core/props/updateProps';
import updateChildren from './updateChildren';

const updateNode = (rootNode, currentVNode, nextVNode) => {
  if (nextVNode === null || nextVNode === false || nextVNode === undefined) {
    rootNode.remove();
    return;
  } 

  if (typeof currentVNode === 'string' || typeof nextVNode === 'string') {
    if (currentVNode !== nextVNode) {
      const nextNode = createDOMNode(nextVNode);
      rootNode.replaceWith(nextNode);
      return nextNode;
    };
    return rootNode;
  }

  
  if (currentVNode.tagName !== nextVNode.tagName) {
    const nextNode = createDOMNode(nextVNode);
    rootNode.innerHTML = '';
    rootNode.appendChild(nextNode);
    return nextNode;
  }
  
  updateProps(rootNode, currentVNode.props, nextVNode.props);
  updateChildren(rootNode, currentVNode.children, nextVNode.children);
  
  return rootNode;
};

export default updateNode;