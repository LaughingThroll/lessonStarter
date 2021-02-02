const buttonArrow = (classNames /* Array[string] */, path/* string */) => {
  return `<button class="${classNames.join(' ')}">
    <img class="arrow" src="${path}" alt="">
  </button>`;
};

export default buttonArrow;

