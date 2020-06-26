/**
 * Simple deep-copy function for cloning objects.
 */
const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  return Object.keys(obj).reduce(
    (acc, key) => {
      const value = obj[key];
      acc[key] = deepCopy(value);
      return acc;
    },
    Array.isArray(obj) ? [] : {}
  );
};

export default deepCopy;
