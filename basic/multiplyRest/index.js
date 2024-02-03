/**
 * Функция multiplyRest должна возвращать результат умножения всех целых чисел, переданных в неё в качестве аргументов.
 * Кол-во аргументов не огранично: их может быть как 2, так и 100.
 * При передаче только одного аргумента, умножаем его на единицу.
 *
 * Задача на оператор rest.
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/rest_parameters
 * https://learn.javascript.ru/rest-parameters-spread-operator
 * */

const multiplyRest = (...numbers) => {
};

// multiplyRest(3); // Возвращает 3
// multiplyRest(2, 3, 4, 5); // Возвращает 120

module.exports = { multiplyRest };
