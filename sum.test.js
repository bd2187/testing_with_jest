import sum from "./sum";

// toBe() tests exact equality
test("adds 1 to 3 to equal 4", function() {
    expect(sum(1, 3)).toBe(4);
});

// toEqual() tests the value of an object
test("object assignment", function() {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// test opposite of a matcher
test("adding positive numbers is not zero", function() {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

// truthiness
test("null", function() {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

// numbers
test("two plus two", function() {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(2);
    expect(value).toBeGreaterThanOrEqual(3.9);
    expect(value).toBeLessThan(19);
});

// floating point numbers
test("adding floating point numbers", function() {
    const value = 0.3 + 0.3;
    expect(value).toBeCloseTo(0.6);
});

// strings
test("there is no I in team", function() {
    expect("team").not.toMatch(/I/);
});

test('but there is a "brand" in brandon', function() {
    expect("brandon").toMatch(/brand/);
});

// arrays and iterables
const star_wars_films = [
    "a new hope",
    "the empire strikes back",
    "return of the jedi",
    "the phantom menace",
    "attack of the clones",
    "revenge of the sith",
    "the force awakens",
    "the last jedi",
    "the rise of skywalker"
];

test("star wars array has the empire strikes back", function() {
    expect(star_wars_films).toContain("the empire strikes back");
    expect(new Set(star_wars_films)).toContain("the empire strikes back");
});
