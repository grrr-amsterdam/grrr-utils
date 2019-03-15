/**
 * Unescapes HTML.
 */
const unescapeHtml = html => {
  const text = document.createElement('textarea');
  text.innerHTML = html;
  return text.value;
};

export default unescapeHtml;
