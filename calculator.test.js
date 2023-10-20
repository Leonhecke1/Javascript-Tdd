const {
  additionCalculator,
  subCalculator,
  divCalculator,
} = require("./calculator"); 

describe("additionCalculator's test cases", () => {
  test("additionCalculator returns value", () => {
    expect(additionCalculator).toBeDefined();
  });

  test("addition of 4 and 6 to equal 10", () => {
    expect(additionCalculator(4, 6)).toBe(10);
  });

  test("addition of 100, 50, 20, 45 and 30 to equal 245", () => {
    expect(additionCalculator(100, 50, 20, 45, 30)).toBe(245);
  });

  test("addition of 7 to equal 7", () => {
    expect(additionCalculator(7)).toBe(7);
  });

  test("addition of no argument provided to equal 0", () => {
    expect(additionCalculator()).toBe(0);
  });
});

describe("subCalculator's test cases", () => {
  test("subCalculator returns value", () => {
    expect(subCalculator).toBeDefined();
  });
  test("sub of 6 and 4 to equal 2", () => {
    expect(subCalculator(6, 4)).toBe(2);
  });
  test("sub of 6,4,8,42 to equal -48", () => {
    expect(subCalculator(6, 4, 8, 42)).toBe(-48);
  });
  test("sub of 6 to equal -6", () => {
    expect(subCalculator(0, 6)).toBe(-6);
  });
  test("sub of no argument provided to equal 0", () => {
    expect(subCalculator()).toBe(0);
  });
});

describe("divCalculator's test cases", () => {
  test("divCalculator returns value", () => {
    expect(divCalculator).toBeDefined();
  });

  test("div of 6 and 4 to equal 1.5", () => {
    expect(divCalculator(6, 4)).toBe(1.5);
  });
  test("sub of 6,4,8 to equal 0.1875", () => {
    expect(divCalculator(6, 4, 8)).toBe(0.1875);
  });
  test("div of 6 equal infinity ", () => {
    expect(divCalculator(6, 0)).toBe(Infinity);
  });
  test("div of -6 equal -infinity ", () => {
    expect(divCalculator(-6, 0)).toBe(-Infinity);
  });
  test("div of 0 and 6 equal 0 ", () => {
    expect(divCalculator(0, 6)).toBe(0);
  });
  test("div of no argument provided to equal 0", () => {
    expect(divCalculator()).toBe(0);
  });
});
