/**
 * Simple deep-copy function for cloning objects.
 */
const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    const value = obj[key];
    copy[key] = deepCopy(value);
  }
  return copy;
};

export default deepCopy;
