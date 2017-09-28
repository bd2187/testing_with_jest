const bar = (n, cb) => setTimeout(() => cb(n), 2000);

test('bar', done => {
  bar(7, function(n) {
    expect(n).toBe(7);
    done();
  });
});
