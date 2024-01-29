const { arr, getUpdatedArr } = require('.');

const originalArr = [1, 5, -1, 3, 0, -3, 7, -8, 115, 42];
const mocks = [
  {
    arr: [1, 5, -1, 3, 0, -3, 7, -8, 115, 42],
    result: [0, 4, 2, 2, -1, 0, 6, -9, 118, 41],
  },
  {
    arr: [4, 8, 15, 16, 23, 42, -300, 0, 21],
    result: [3, 7, 18, 15, 22, 45, -301, -1, 24],
  },
];

describe('Проверка getUpdatedArr', () => {
  it('Правильно изменяет элементы массива', () => {
    mocks.forEach(({ arr, result }) => {
      expect(getUpdatedArr(arr)).toEqual(result);
    });
  });

  it('Исходный массив не изменён', () => {
    expect(originalArr).toEqual(arr);
  });
});
