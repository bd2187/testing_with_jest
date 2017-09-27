import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  // toBe utilizes "==="
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('object assignment', () => {
  // use toEqual when testing arrays/objects
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toBe({ one: 1, two: 2 });
});
