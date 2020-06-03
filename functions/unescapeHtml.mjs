/**
 * Unescapes HTML.
 */
const unescapeHtml = html => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = html;
  return textarea.textContent;
};

export default unescapeHtml;
