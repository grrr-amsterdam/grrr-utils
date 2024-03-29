import curry from './curry.mjs';

/**
 * Generic function for traversing a DOM, returning the first element
 * matching the predicate function.
 */
const closest = curry((predicate, node) =>
  !node || node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE
    ? undefined
    : predicate(node)
      ? node
      : closest(predicate, node.parentNode));

export default closest;
