const { getMonthName } = require('.');

const mocks = [
  [1, 'Январь'],
  [2, 'Февраль'],
  [3, 'Март'],
  [4, 'Апрель'],
  [5, 'Май'],
  [6, 'Июнь'],
  [7, 'Июль'],
  [8, 'Август'],
  [9, 'Сентябрь'],
  [10, 'Октябрь'],
  [11, 'Ноябрь'],
  [12, 'Декабрь'],
  [13, 'Такого месяца нет'],
  [0, 'Такого месяца нет'],
  [-1, 'Такого месяца нет'],
  [-234, 'Такого месяца нет'],
  [123, 'Такого месяца нет'],
];

describe('Проверка getMonthName', () => {
  it('Правильно умножает все переданные числа', () => {
    mocks.forEach(([monthIndex, result]) => {
      expect(getMonthName(monthIndex)).toEqual(result);
    });
  });
});
