import { cars } from './cars.js';

// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = (cars) => cars.map((car) => car.model);
// console.table(getModels(cars));

// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({
//     model: car.model,
//     price: car.price,
//     priceWithDicsount: car.price - car.price * discount,
//   }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, carType) =>
//   cars.filter(({ type }) => type === carType);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// Example 6 - Метод find

// const getCarByModel = (cars, carModel) =>
//   cars.find(({ model }) => model === carModel);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// const fn = () => ({ name: 'Bobby' });

// console.log(fn());

// --- sort ---
// const numbers = [2, 5, 200, 9, 21, 3, 8, 1, 0, 4, 6, 10, 7, 20];

// // numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => {
//   if (a < b) return -1; // a - b = -3
//   if (a > b) return 1; // a - b = 191

//   return 0; // a - b = 0
// });

// console.log(numbers);

// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// const sortByAscendingAmount = (cars) =>
//   cars.sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = (cars) => cars.sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) => {
//   if (order === 'asc') {
//     return cars.sort((a, b) => a.model.localeCompare(b.model));
//   } else if (order === 'desc') {
//     return cars.sort((a, b) => b.model.localeCompare(a.model));
//   }
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = (cars) => {
//   let sum = 0;

//   for (const car of cars) {
//     sum += car.amount;
//   }

//   return sum;
// };

// const getTotalAmount = (cars) => cars.reduce((sum, car) => sum + car.amount, 0);

// console.log(getTotalAmount(cars));

// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));

// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

// --- reduce vs map ---
// const getModelsMAP = (cars) => cars.map((car) => car.model);

// const getModelsReduce = (cars) =>
//   cars.reduce((acc, car) => [...acc, car.model], []);

// console.table(getModelsMAP(cars));
// console.table(getModelsReduce(cars));
