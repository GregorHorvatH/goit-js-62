'use strict';

// const fn = () => {
//   console.log(this);
// };

// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello(name) {
//     console.log(this);
//     console.log(`Hello ${name}`);
//     // fn(); // undefined
//   },
// };

// obj.sayHello(); // { name: 'Bobby' ... }

// const fn = function sayHello() {
//   console.log(this);
// };

// const fn = obj.sayHello;
// fn(); // undefined

// setTimeout(obj.sayHello, 2000);

// obj.sayHello();
// const fn = obj.sayHello;
// fn.call(obj); // undefined
// fn.apply(obj); // undefined

// const fn = obj.sayHello.bind(obj);
// fn();

// setTimeout(obj.sayHello.bind(obj), 2000);

// --- own bind ---
// function bind(callback, context) {
//   return function (...args) {
//     callback.apply(context, args);
//   };
// }

// const fn = bind(obj.sayHello, obj); // function () {...}
// fn('Bobby');

// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       (item) => item.name === stoneName
//     );

//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.contacts);

// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 5);
// console.log(calculator);

// console.log(calculator.add()); // 10
// console.log(calculator.mult()); // 25

// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//   { name: 'Poly', score: 59, courses: ['informatics', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'informatics'] },
// ];

// const array = students.reduce((acc, { courses }) => {
//   return [...acc, ...courses];
// }, []);

// console.log(array);

class Hero {
  #name;

  constructor(name = 'hero') {
    this.#name = name;
    this._xp = 0;
  }

  get name() {
    return this.#name;
  }

  set name(exp) {
    this.#name = exp;
  }

  get xp() {
    return this._xp;
  }

  set xp(exp) {
    this._xp += exp;
  }
}

class Warrior extends Hero {
  constructor(config) {
    super(config);

    (this.hp = 1500),
      (this.fury = 100),
      (this.skills = [
        {
          skill: 'Attack',
          dmg: 200,
          furyCost: 1,
        },
      ]);
  }
}

const firstHero = new Warrior('besha2vox');

console.log(firstHero);
console.log(firstHero.xp);
console.log(firstHero.name);

firstHero.xp = 10;
console.log(firstHero.xp);

firstHero._xp = 100;
console.log(firstHero.xp);

// firstHero.#name = 'sdfgsdgf';
firstHero.name = 'asffs';
console.log(firstHero.name);
