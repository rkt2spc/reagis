// Imports
import Registry from './registry';

// [TEST] Registry
describe('Registry', () => {
  /**
   * Registry APIs:
   * #clear
   * #delete
   * #get
   * #set
   * #load
   * #has
   * #keys
   * #values
   * #entries
   */

  // [TEST] Registry#clear
  describe('Registry#clear', () => {
    it('should not throw', () => expect(() => (new Registry()).clear()).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.load({ foo: 1, bar: 2 });
      registry.clear();

      expect(registry.get('foo')).toBeUndefined();
      expect(registry.get('bar')).toBeUndefined();
    });
  });

  // [TEST] Registry#delete
  describe('Registry#delete', () => {
    it('should not throw', () => expect(() => (new Registry()).delete('foo')).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.load({ foo: 1 });

      expect(registry.delete('foo')).toBe(true);
      expect(registry.delete('bar')).toBe(false);
      expect(registry.get('foo')).toBeUndefined();
    });
  });

  // [TEST] Registry#get
  describe('Registry#get', () => {
    it('should not throw', () => expect(() => (new Registry()).get('foo')).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.load({ foo: 1, bar: 2 });

      expect(registry.get('foo')).toBe(1);
      expect(registry.get('bar')).toBe(2);
    });
  });

  // [TEST] Registry#set
  describe('Registry#set', () => {
    it('should not throw', () => expect(() => (new Registry()).set('foo', 1)).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.set('foo', 1);

      expect(registry.get('foo')).toBe(1);
    });
  });

  // [TEST] Registry#load
  describe('Registry#load', () => {
    it('should not throw', () => expect(() => (new Registry()).load({ foo: 1 })).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.load({ foo: 1, bar: 2 });

      expect(registry.get('foo')).toBe(1);
      expect(registry.get('bar')).toBe(2);
    });
  });

  // [TEST] Registry#has
  describe('Registry#has', () => {
    it('should not throw', () => expect(() => (new Registry()).has('foo')).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.set('foo', 1);

      expect(registry.has('foo')).toBe(true);
      expect(registry.has('bar')).toBe(false);
    });
  });

  // [TEST] Registry#keys
  describe('Registry#keys', () => {
    it('should not throw', () => expect(() => (new Registry()).keys()).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.load({ foo: 1, bar: 2 });

      expect(registry.keys()).toEqual(['foo', 'bar']);
    });
  });

  // [TEST] Registry#values
  describe('Registry#values', () => {
    it('should not throw', () => expect(() => (new Registry()).values()).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.load({ foo: 1, bar: 2 });

      expect(registry.values()).toEqual([1, 2]);
    });
  });

  // [TEST] Registry#entries
  describe('Registry#entries', () => {
    it('should not throw', () => expect(() => (new Registry()).entries()).not.toThrow());

    it('should work', () => {
      const registry = new Registry();
      registry.load({ foo: 1, bar: 2 });

      expect(registry.entries()).toEqual([{ key: 'foo', value: 1 }, { key: 'bar', value: 2 }]);
    });
  });
});
