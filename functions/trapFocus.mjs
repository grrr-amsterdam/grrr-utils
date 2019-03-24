const CANDIDATES = `
  a, button, input, select, textarea, area, iframe, object, embed,
  [tabindex], [contenteditable]
`;

/**
 * Trap focus in a specific DOM node.
 */
const trapFocus = (focusNode, rootNode = document) => {
  const nodes = [...rootNode.querySelectorAll(CANDIDATES)]
    .filter(node => !focusNode.contains(node) && node.getAttribute('tabindex') !== '-1');

  const activate = () => nodes.forEach(node => node.setAttribute('tabindex', '-1'));
  const deactivate = () => nodes.forEach(node => node.removeAttribute('tabindex'));

  return {
    nodes,
    activate,
    deactivate,
  };
};

export default trapFocus;
