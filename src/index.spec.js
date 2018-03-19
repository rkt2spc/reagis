// Imports
import registry, { Registry } from './index';

// [TEST] require('reagis')
describe("require('reagis')", () => {
  it('shoud return an instance of Registry', () => {
    expect(registry).toBeInstanceOf(Registry);
  });
});
