const button = (classNames = [], path, plus = true) => {
  return `<button class="button ${classNames.join(' ')}">
  ${plus ? `<img class="button__svg" src="${path}" alt="">` : ''} 
  Add Vacation
  </button>`;
};

export default button;