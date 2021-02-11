import updateProps from './props/updateProps';

const createDOMNode = vNode => {
  if (typeof vNode === 'string') return document.createTextNode(vNode);

  const { tagName, props, children } = vNode;

  const node = tagName === '' ?  document.createDocumentFragment() : document.createElement(tagName);

  updateProps(node, {}, props);
  
  children.forEach(child => node.appendChild(createDOMNode(child)));

  return node;
};

export default createDOMNode;