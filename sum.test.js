import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  // toBe utilizes "==="
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  // use toEqual when testing arrays/objects
  // toEqual recursively checks every field of an object or array.
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
  // test for opposite of matcher
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);

  expect(value).toEqual(4);
  expect(value).toBe(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});
