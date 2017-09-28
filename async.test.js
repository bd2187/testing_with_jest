/*
callbacks
*/

const bar = (n, cb) => setTimeout(() => cb(n), 1000);

test('bar', function(done) {
  bar(7, function(n) {
    expect(n).toBe(7);
    done();
  });
});

/*
promises
*/

test('promise', done => {
  Promise.resolve(7)
    .then(n => {
      expect(n).toBe(7);
    })
    .then(done)
    .catch(done.fail);
});

test('another promise', () => {
  // rather than using 'done' argument, you can return the Promise

  expect.assertions(1);
  return Promise.resolve('peanut butter').then(data => {
    expect(data).toBe('peanut butter');
  });
});
