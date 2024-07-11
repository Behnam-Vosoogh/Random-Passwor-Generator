const { generatePassword, getRandomNumber } = require("script.js"); // Correct path to the script

jest.spyOn(global.Math, "random").mockReturnValue(0.5); // Mock Math.random for predictable output

describe("passwordGenerator", () => {
  test("generates a password of the correct length", () => {
    const password = generatePassword();
    expect(password.length).toBe(length);
  });

  test("password includes uppercase, lowercase, numbers, and symbols (mocked)", () => {
    const password = generatePassword();
    expect(password).toMatch(/[A-Z]/);
    expect(password).toMatch(/[a-z]/);
    expect(password).toMatch(/[0-9]/);
    expect(password).toMatch(/[!@#$%^&*()_+\-=[\]{}/?<>,.~`]/); // Note escaping special characters
  });

  test("getRandomNumber returns values within specified range", () => {
    for (let i = 0; i < 100; i++) {
      const randomValue = getRandomNumber(5, 10);
      expect(randomValue).toBeGreaterThanOrEqual(5);
      expect(randomValue).toBeLessThanOrEqual(10);
    }
  });
});
