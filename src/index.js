// function fn1(name) {
//   console.log('Hello', name);
// }

// function fn2(name) {
//   console.log('Bye', name);
// }

// function saySomething(callback) {
//   callback('Bobby');
// }

// saySomething(fn1);
// saySomething(fn2);

// --- map ---
// const numbers = [1, 2, 3, 4, 5];

// const x2 = (number) => number * 2;
// const x3 = (number) => number * 3;

// const map = (items, callback) => {
//   const result = [];

//   for (const item of items) {
//     result.push(callback(item));
//   }

//   return result;
// };

// console.log(map(numbers, x2)); // [2,4,6,8,10]
// console.log(map(numbers, x3)); // [3,6,9,12,15]
// console.log(map(numbers, (number) => number * 4));

// const names = ['google', 'amazon', 'facebook'];
// // <a href="www.google.com">google</a>

// console.log(map(names, (name) => `<a href="www.${name}.com">${name}</a>`));

// --- filter ---
// const numbers = [1, 2, 3, 4, 5];

// const filter = (items, callback) => {
//   const result = [];

//   items.forEach((item) => {
//     if (callback(item)) {
//       result.push(item);
//     }
//   });

//   return result;
// };

// console.log(filter(numbers, (item) => item < 4)); // < 4 --> [1,2,3]
// console.log(filter(numbers, (item) => item > 3)); // > 3 --> [4,5]

// console.log(
//   filter(['google', 'amazon', 'facebook'], (name) => name.includes('e'))
// );

// --- find ---
// const users = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 20 },
//   { name: 'Chris', age: 25 },
// ];

// const find = (items, callback) => {
//   for (const item of items) {
//     if (callback(item)) {
//       return item;
//     }
//   }
// };

// console.log(find(users, (item) => item.name === 'Peter')); // name === Peter
// console.log(find(users, (item) => item.age === 25)); // age === 25

// console.log(
//   find(users, function fn(item) {
//     return item.age === 25;
//   })
// ); // age === 25

// console.log(find(users, (item) => item.age === 250)); // age === 25

// console.log(!+[] + !![] + !![] + !![] + ![] + !![] + !![] + !![] + !![]);

// Example 1 - Коллбек функции
// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль
// Решение
// function createProduct(partialProduct, callback) {
//   const newObject = {
//     ...partialProduct,
//     id: 123,
//   };

//   callback(newObject);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct); //
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice); // 100

// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.
// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.
// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

// Решение
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 3 - Коллбек функции
// Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// Решение
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const createProduct = (partialProduct, callback) =>
//   callback({ id: Date.now(), ...partialProduct });

// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 6 - Инлайн стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const logItems = (items) => {
//   items.forEach((item, i) => {
//     console.log(`${i + 1} - ${item}`);
//   });
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function calсulateAverage(...args) {
//   let total = 0;
//   args.forEach((item) => (total += item));
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-07/ru.md

//               0  1  2  3  4  5  6  7  8  ...
// const numbers = [1, 2, 3, 4, 5, 3, 2, 1, 1, 2, 3, 3, 3, 2, 6];
//               0  1  2  3  4  2  1  0  0  ...

// const uniqueItems = numbers
//   .filter((item) => item < 4)
//   .filter((item, idx, array) => array.indexOf(item) === idx);

// console.log(uniqueItems);

// --- closures ---
// lexical environment
// let x = 5;
// function fn(x) {
//   console.log(x);
// }

// let x = 10;
// function Counter(x = 0) {
//   return function () {
//     console.log(x++);
//   };
// }

// const counter1 = Counter(10); // function () { console.log(x++); };
// const counter2 = Counter(30); // function () { console.log(x++); };

// counter1();
// counter1();
// counter1();
// counter1();
// counter1();

// counter2();
// counter2();
// counter2();
// counter2();
// counter2();

// --- reduce ---
// const users = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 20 },
//   { name: 'Chris', age: 25 },
// ];

// let total = 0;

// for (const user of users) {
//   total += user.age;
// }

// console.log(total);

// const total = users.reduce((acc, { age }) => acc + age, 0);
// console.log(total);

// --- reduce ---
// const str = 'lorem ipsum dolor'.split('');

// const obj = {
//   l: 2,
//   o: 3,
//   r: 2,
//   e: 1,
//   m: 2,
//   ' ': 2,
//   // ...
// };

// const res = {};

// for (const letter of str) {
//   res[letter] = res[letter] ? res[letter] + 1 : 1;
// }

// const res = str.reduce((res, letter) => {
//   res[letter] = res[letter] ? res[letter] + 1 : 1;

//   return res;
// }, {});

// console.log(res);
