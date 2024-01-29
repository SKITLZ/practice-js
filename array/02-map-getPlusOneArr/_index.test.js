const { arr, getPlusOneArr } = require('.');

const originalArr = [1, 5, -1, 3, 0, - 3, 7];
const mocks = [
  {
    arr: [1, 5, -1, 3, 0, -3, 7],
    result: [2, 6, 0, 4, 1, -2, 8],
  },
  {
    arr: [4, 8, 15, 16, 23, 42, -300, 0, 21],
    result: [5, 9, 16, 17, 24, 43, -299, 1, 22],
  },
];

describe('Проверка getPlusOneArr', () => {
  it('Правильно добавляет единицу', () => {
    mocks.forEach(({ arr, result }) => {
      expect(getPlusOneArr(arr)).toEqual(result);
    });
  });

  it('Исходный массив не изменён', () => {
    expect(originalArr).toEqual(arr);
  });
});
