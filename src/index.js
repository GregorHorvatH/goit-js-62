// function fn({ name: userName = 'Nemo' } = {}) {
//   console.log(userName);
//   console.log(userName);
//   console.log(userName);
//   console.log(userName);
//   console.log(userName);
//   console.log(userName);
//   console.log(userName);
//   console.log(userName);
//   console.log(userName);
//   console.log(userName);
// }

// fn();

// function cutUserData({ birthDate, phone, ...rest }) {
//   const newUser = { ...rest };

//   console.log(newUser);
// }

// cutUserData({
//   name: 'Bobby',
//   birthDate: '01.01.2000', // -
//   eyes: 'blue',
// });

// cutUserData({
//   name: 'Peter',
//   hobby: [],
//   phone: '555-555-567', // -
// });

// cutUserData({
//   name: 'Chris',
//   hobby: [],
//   phone: '555-555-567', // -
//   birthDate: '01.01.2000', // -
//   eyes: 'brown',
// });

// const obj = {};
// const obj2 = { ...obj };

// -------------------------------------
// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-06/ru.md
// -------------------------------------

// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(calcBMI({ weight: '88,3', height: '1.75' }));

// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function printContactsInfo({ names = '', phones = '' }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName и stock и выводила репорт о количестве товаров на складе любой компании.

// Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;

//   for (const key in stock) {
//     total += stock[key];
//   }

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.

// Решение
// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date(),
//     list: 'default',
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

// Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// --- question ---
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(apartment);

// --- question ---
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   removePotion(potionName) {
//     // this.potions = this.potions.filter((potion) => potion.name !== potionName);
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         return this.potions.splice(i, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
// };

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Tuzik';

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.hasOwnProperty('name')); // name

// function fn({ a, ...rest }) {
//   return rest;
// }

// const obj1 = { a: 1, b: 2, c: 3, innerObj: { name: 'Bobby' } };
// const obj2 = fn(obj1);
// obj2.c = 5;
// obj2.innerObj.name = 'Peter';

// console.log(obj1);
// console.log(obj2);
