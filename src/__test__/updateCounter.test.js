/**
 * @jest-environment jsdom
 */

import updateCounter from '../comments.js';

jest.mock('../comments.js');

describe('Testing updateCounter function', () => {
  test('Check that the number of elements added is one', () => {
    const result = updateCounter();
    expect(result).toBe(1);
  });

  test('Check that the function returns value different from null', () => {
    const result = updateCounter();
    expect(result).not.toBeNull();
  });
});