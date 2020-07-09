window.jquery = function (selector) {
  const elements = document.querySelectorAll(selector);
  console.log(elements);
  const api = {
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        console.log(typeof elements);
        console.log(elements[i]);
        element = elements[i];
        elements[i].classList.add(className);
      }
      return null;
    },
  };
  return api;
};
