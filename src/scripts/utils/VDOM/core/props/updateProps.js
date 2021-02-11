import updateProp from './updateProp';

const updateProps = (rootNode, currentProps, nextProps) => {
  const mergedProps = { ...currentProps, ...nextProps };
  Object.keys(mergedProps).forEach(key => {
    if (currentProps[key] !== nextProps[key]) {
      updateProp(rootNode, key, currentProps[key], nextProps[key]);
    }
  });
};

export default updateProps;