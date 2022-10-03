// --- deep copy ---
// const a = [{ x: 1 }, { y: 2 }, { n: 3 }];
// const b = [];

// for (const obj of a) {
//   b.push({ ...obj });
// }

// console.log(a);
// console.log(b);

// b[0].x = 123;

// console.log(a);
// console.log(b);

// const isDeepEqual = (object1, object2) => {
//   const objKeys1 = Object.keys(object1);
//   const objKeys2 = Object.keys(object2);

//   if (objKeys1.length !== objKeys2.length) return false;

//   for (var key of objKeys1) {
//     const value1 = object1[key];
//     const value2 = object2[key];

//     const isObjects = isObject(value1) && isObject(value2);

//     if (
//       (isObjects && !isDeepEqual(value1, value2)) ||
//       (!isObjects && value1 !== value2)
//     ) {
//       return false;
//     }
//   }
//   return true;
// };

// const isObject = (object) => {
//   return object != null && typeof object === 'object';
// };

// --- deep compare ---
// const a = [{ x: 1 }, { y: 2 }, { n: 3 }];
// const b = [{ x: 1 }, { y: 22 }, { n: 3 }];

// const obj1 = { x: 1, a: 2 };
// const obj2 = { a: 2, x: 1 };

// console.log(isDeepEqual(obj1, obj2));

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// // console.log(animal); // {name: 'Манго'}
// // console.log(dog); // {name: 'Манго'}

// console.log(dog.legs); // 4
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

// const obj = {
//   name: 'Bobby',
//   sum: function (a, b) {
//     return a + b;
//   },
// };

// console.log(obj.sum(1, 1));

// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение
// используя Object.keys() и for...of
// Код

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user['mood'] = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const sdfgsd of keys) {
//   console.log(`${sdfgsd}: ${user[sdfgsd]}`);
// }

// console.log(user);

// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
// Код

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const values = Object.values(salaries);
// let sum = 0;

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
// Код

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     const { name, price, quantity } = stone;
//     // const name = stone.name;
//     // const price = stone.price;
//     // const quantity = stone.quantity;

//     if (name === stoneName) {
//       return price * quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'Изумруд')); // 5200
// console.log(calcTotalPrice(stones, 'Бриллиант')); // 8100
// console.log(calcTotalPrice(stones, 'Сапфир')); // 2800
// console.log(calcTotalPrice(stones, 'Щебень')); // 400

// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type, message = 'ok') {
    const transaction = {
      id: this.transactions.length,
      amount,
      type,
      date: new Date(),
      message,
    };

    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      this.createTransaction(
        amount,
        Transaction.WITHDRAW,
        'sorry, not enough...'
      );
      console.log('sorry, not enough...');
      return;
    }

    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const tr of this.transactions) {
      if (tr.id === id) {
        return tr;
      }
    }

    return 'Transaction not found';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;

    for (const tr of this.transactions) {
      if (tr.type === type) {
        sum += tr.amount;
      }
    }

    return sum;
  },
};

// console.log(account.balance);

// account.deposit(10);
// account.deposit(90);
// account.deposit(50);
// account.deposit(40);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(60);
// account.withdraw(60);
// account.withdraw(60);
// console.log(account.getBalance());

// account.withdraw(20);
// console.log(account.transactions);

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(20));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// --- question ---
// const a = 1;
// const b = 1;
// const c = a + b;

// const obj = { a, b, c };

// console.log(obj);

// --- for in ---
// const a = 1;
// const b = 1;
// const c = a + b;

// const obj = { a, b, c };

// // Object.keys(...)
// for (const adffasdf in obj) {
//   console.log(adffasdf);
// }

// --- this ---

// const user = {
//   name: 'Bobby',
//   age: 15,

//   logSomething() {
//     console.log(`Hello, my name is ${this.name}`);
//   },

//   sayHello() {
//     this.logSomething();
//   },
// };

// user.sayHello();

// --- on click ---
const button = document.querySelector('button');

const user = {
  name: 'Bobby',
  age: 15,
};

function handleClick(e) {
  console.log(e.target);
  console.log(this);
}

button.addEventListener('click', handleClick.bind(user));
