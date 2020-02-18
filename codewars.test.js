const larryFight = require("./codewars");

// Test components

test("Larry fights", () => {
  expect(larryFight(170, 2.5)).toBe("use escape");
});

test("Larry fights", () => {
  expect(larryFight(162, 0.6)).toBe("use escape");
});

test("Larry fights", () => {
  expect(larryFight(168, 0.9)).toBe("finish them");
});

// michael(170, 2.5)
// louise(162, 0.6)
// Kanin (168, 0.9)
