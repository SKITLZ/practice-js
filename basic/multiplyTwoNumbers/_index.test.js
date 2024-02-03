const { multiplyTwoNumbers } = require('.');

const mocks = [
  {
    a: 0,
    b: 1,
    result: 0,
  },
  {
    a: 3,
    b: 5,
    result: 15,
  },
  {
    a: -3,
    b: -2,
    result: 6,
  },
  {
    a: 18,
    b: -24,
    result: -432,
  },
  {
    a: 7,
    b: 12,
    result: 84,
  },
];

describe('Проверка multiplyTwoNumbers', () => {
  it('Правильно умножает числа', () => {
    mocks.forEach(({ a, b, result }) => {
      expect(multiplyTwoNumbers(a, b)).toEqual(result);
    });
  });
});
