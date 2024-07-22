const crtelm = (tag, innerHTML = "", attributes = {}) => {
    const element = document.createElement(tag);
    element.innerHTML = innerHTML;
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    return element;
  };
  const getelm = (id) => {
    return document.getElementById(id);
  };
  export { crtelm, getelm};