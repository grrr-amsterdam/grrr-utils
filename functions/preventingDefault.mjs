import compose from './compose';
import preventDefault from './preventDefault';
import tap from './tap';

/**
 * Function decorator to create event listeners from common functions.
 * Avoids having to specify e.preventDefault() in functions, thus allowing the author to use them
 * outside an event listener context.
 */
export default f => compose(f, tap(preventDefault));
