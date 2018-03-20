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
 * const registry = require('reagis');
 *
 * // ES2015 modules
 * import registry from 'reagis';
 *
 * @constant
 * @type {Registry}
 */
const registry = new Registry();

/** Exports */
export {
  Registry,
  registry as default,
};
