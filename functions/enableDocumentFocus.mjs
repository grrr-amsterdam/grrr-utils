/* eslint-disable no-param-reassign */

/**
 * Re-enable focus for nodes disabled by disableDocumentFocus.
 */
const enableDocumentFocus = () => {
  const nodes = [...document.querySelectorAll(`[tabindex="-1"]`)]
    .filter(node => node.hasCustomFocusDisabled);
  nodes.forEach(node => {
    node.removeAttribute('tabindex');
    delete node.hasCustomFocusDisabled;
  });
};

export default enableDocumentFocus;
