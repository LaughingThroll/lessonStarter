import listener from './listener';

const updateProp = (node, key, value, nextValue) => {
  if (key.startsWith('on')) {
    const eventName = key.slice(2).toLowerCase();
    
    node[eventName] = nextValue;

    if (!nextValue) {
      node.removeEventListener(eventName, listener);
    } else if (!value) {
      node.addEventListener(eventName, listener);
    }
    return;
  }
  
  if (!nextValue) {
    node.removeAttribute(key);
    return;
  }
  if (key === 'classNames') key = 'class';
  node.setAttribute(key, nextValue);
};

export default updateProp;