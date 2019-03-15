/* eslint-disable no-param-reassign */

/**
 * Disable focus for nodes other than specified.
 */
const disableDocumentFocus = focusNode => {
  const nodes = [...document.querySelectorAll(`:not([tabindex="-1"])`)]
    .filter(node => !focusNode.contains(node));
  nodes.forEach(node => {
    node.setAttribute('tabindex', '-1');
    node.hasCustomFocusDisabled = true;
  });
};

export default disableDocumentFocus;
