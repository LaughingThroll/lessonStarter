const createVNode = (tagName, props = {}, ...children) => ({ tagName, props, children });

export default createVNode;