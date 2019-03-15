/**
 * Convert HTML string to DOM element.
 */
const htmlToElement = html => {
  const placeholder = document.createElement('div');
  placeholder.innerHTML = html;
  return placeholder.children.length ? placeholder.firstElementChild : undefined;
};

export default htmlToElement;
