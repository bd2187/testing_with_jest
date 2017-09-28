const bar = function(n, cb) {
  setTimeout(function() {
    cb(n);
  }, 1000);
};

test('bar', function() {
  bar(7, function(n) {
    expect(n).toBe(7);
  });
});
