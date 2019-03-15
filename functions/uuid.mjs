/* eslint-disable space-infix-ops, no-bitwise, no-mixed-operators */

/**
 * Generate RFC4122 v4 compliant UUID.
 * See: https://stackoverflow.com/a/2117523
 */
const uuid = () => {
  const crypto = window.crypto || window.msCrypto;
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
};

export default uuid;
