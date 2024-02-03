const { multiplyRest } = require('.');

const mocks = [
  {
    rest: [3],
    result: 3,
  },
  {
    rest: [3, 15],
    result: 45,
  },
  {
    rest: [3, 4, 5],
    result: 60,
  },
  {
    rest: [2, 3, 4, 5],
    result: 120,
  },
  {
    rest: [2, 3, 4, 5, 6, 10],
    result: 7200,
  },

  {
    rest: [2, 3, 4, -5, 6, 10],
    result: -7200,
  },
];

describe('Проверка multiplyRest', () => {
  it('Правильно умножает все переданные числа', () => {
    mocks.forEach(({ rest, result }) => {
      expect(multiplyRest(...rest)).toEqual(result);
    });
  });
});
