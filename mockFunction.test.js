function forEach(items, cbFn) {
    for (let i = 0; i < items.length; i++) {
        let currentItem = items[i];
        cbFn(currentItem);
    }
}

const mockCb = jest.fn(function(x) {
    return 30 * x;
});

forEach([0, 1, 2], mockCb);

// The mock function is called 3 times
expect(mockCb.mock.calls.length).toBe(3);

expect(mockCb.mock.calls[0][0]).toBe(0);
expect(mockCb.mock.calls[1][0]).toBe(1);
expect(mockCb.mock.results[0].value).toBe(0);
