import recycleNode from './core/recycleNode';
import updateNode from './updateNode';

const renderDOM = (nextVNode, node) => {
  const vNode = node.virtual || recycleNode(node);

  node = updateNode(node, vNode, nextVNode);

  node.virtual = nextVNode;
  return node;
};

export default renderDOM;