/**
 * registry
 * @license MIT
 * @copyright Tuan Nguyen 2018
 * @author Tuan Nguyen <nmtuan.dev@gmail.com>
 */

/** Imports */
import Registry from './registry';

/**
 * Default exported registry instance
 *
 * @example
 * // CommonJS modules
 * const registry = require('registry');
 *
 * // ES2015 modules
 * import registry from 'registry';
 *
 * @constant
 * @type {Registry}
 */
const registry = new Registry();

const hihi = 1;

/** Exports */
export {
  Registry as Reagis,
  hihi,
  registry as default,
};
