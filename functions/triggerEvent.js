/**
 * Create and trigger programmatically created event (also known as 'synthetic event').
 * We throw an error when the type is missing, to avoid failing silently.
 */
const triggerEvent = (node, type, options = {}) => {
  if (!type) {
    throw new Error('Missing event type name in triggerEvent.');
  }
  const e = new Event(type, {
    bubbles: true,
    cancelable: true,
    isTrusted: false,
    ...options,
  });
  return node.dispatchEvent(e);
};

export default triggerEvent;
