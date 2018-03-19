/**
 * Representing a key-value registry
 *
 * @example
 * // CommonJS modules
 * const Registry = require('registry/registry');
 * const { Registry } = require('registry');
 *
 * // ES2015 modules
 * import { Registry } from 'registry';
 *
 * // Instantiate
 * const registry = new Registry();
 *
 * @class
 */
class Registry {
  /**
   * Creates a new instance of Registry
   *
   * @constructor
   * @returns {Registry} The created Registry instance
   */
  constructor() {
    /**
     * Internal registry instance
     *
     * @private
     * @type {Map}
     */
    this._registry = new Map();

    return this;
  }

  /**
   * Wipe out all entries in the registry
   *
   * @public
   * @returns {undefined} nothing
   */
  clear() {
    this._registry.clear();
  }

  /**
   * Delete an entry.
   *
   * @public
   * @param {any} key The key used to identify the entry
   * @returns {boolean} true if the entry exists and got deleted, false otherwise
   */
  delete(key) {
    return this._registry.delete(key);
  }

  /**
   * Retrieve an entry value
   *
   * @public
   * @param {any} key The key used to identify the entry
   * @returns {any} The entry value if it exists, undefined otherwise
   */
  get(key) {
    return this._registry.get(key);
  }

  /**
   * Set an entry value
   *
   * @public
   * @param {any} key The key used to identify the entry
   * @param {any} value The value that will be set to the entry
   * @returns {Registry} The calling Registry instance
   */
  set(key, value) {
    this._registry.set(key, value);
    return this;
  }

  /**
   * Load an entire key-value object as entries
   *
   * @public
   * @param {any} obj A key-value object
   * @returns The calling Registry instance
   */
  load(obj) {
    Object.keys(obj).forEach((key) => this.set(key, obj[key]));
    return this;
  }

  /**
   * Check whether or not an entry exists
   *
   * @public
   * @param {any} key The key used to identify the entry
   * @returns {boolean} true if such entry exists, false otherwise
   */
  has(key) {
    return this._registry.has(key);
  }

  /**
   * Retrieve all existing entry keys
   *
   * @public
   * @returns {array} Return an array of all existing keys in insertion order
   */
  keys() {
    return Array.from(this._registry.keys());
  }

  /**
   * Retrieve all existing entry values
   *
   * @public
   * @returns {array} Return an array of all existing values in insertion order
   */
  values() {
    return Array.from(this._registry.values());
  }

  /**
   * Retrieve all existing entries
   *
   * @public
   * @returns {array} Return an array of all existing entries in insertion order with the structure { key, value }
   */
  entries() {
    return Array.from(this._registry.entries()).map((entry) => ({ key: entry[0], value: entry[1] }));
  }
}

/** Exports */
export default Registry;

