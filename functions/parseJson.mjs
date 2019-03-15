/* eslint-disable no-console */

import defined from './defined';

/**
 * Parse JSON in a safe way.
 */
const parseJson = json => {
  try {
    return JSON.parse(json);
  } catch (e) {
    if (defined(console)) {
      console.warn(e);
    }
    return undefined;
  }
};

export default parseJson;
