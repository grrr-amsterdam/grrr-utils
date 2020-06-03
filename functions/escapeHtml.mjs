/**
 * Escapes HTML, used for sanitizing user input.
 * Normally the preferred way to do so is by assigning those values with native
 * JavaScript methods like `input.value` or `node.textContent`. However, when a
 * complete template is set via `innerHTML` or a similar method, user input needs
 * to be escaped.
 */
const escapeHtml = (html, { quotes = true } = {}) => {
  const textarea = document.createElement('textarea');
  textarea.textContent = html;
  return quotes
    ? textarea.innerHTML
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`/g, "&grave;")
    : textarea.innerHTML;
};

export default escapeHtml;
