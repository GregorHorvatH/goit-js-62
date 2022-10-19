// class Cat {
//   constructor(name) {
//     this.name = name;
//     this.legs = 4;
//     this.age = 1;
//   }

//   sayHello() {
//     console.log(`meow name is ${this.name}`);
//   }

//   birthday() {
//     console.log('Happy birthday!');
//     this.age += 1;
//   }
// }

// const barsik = new Cat('Barsik');
// const murka = new Cat('Murka');

// console.log(barsik);
// console.log(murka);

// barsik.sayHello();
// barsik.birthday();
// console.log(barsik);

// barsik.age = 15;
// console.log(barsik);

// ---- private ----
// class Account {
//   #balance;

//   constructor(balance) {
//     this.#balance = balance;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   set balance(amount) {
//     this.#balance = amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }

//   setBalance(amount) {
//     this.#balance = amount;
//   }

//   withdraw(amount) {
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//     } else {
//       console.log('not enough money');
//     }
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }
// }

// const account1 = new Account(100);
// console.log(account1);

// account1.deposit(100);
// console.log(account1);

// account1.withdraw(50);
// console.log(account1);

// account1.withdraw(250);

// // account1.#balance = 10000000;
// // console.log(account1.#balance);

// account1.setBalance(500);
// console.log(account1);

// account1.balance = 600;
// console.log(account1);

// console.log(account1.getBalance());
// console.log(account1.balance);

// --- inheritance ---
// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Doctor extends Human {
//   healing() {
//     console.log('I can heal');
//   }

//   // override
//   sayHello() {
//     console.log(`Hello, my name is dr.${this.name}`);
//   }

//   sum(a, b) {
//     console.log(a + b);
//   }
// }

// const bobby = new Human('Bobby');
// console.log(bobby);
// bobby.sayHello();

// const house = new Doctor('House');
// console.log(house);
// house.sayHello();
// house.healing();

// house.sum(2, 2); // number
// house.sum('Hello', ' word'); // string

// --- static ---
// class Utils {
//   static PI = 3.14;

//   static sum(a, b) {
//     return a + b;
//   }

//   static sayHello() {
//     console.log('Hello');
//   }
// }

// console.log(Utils.PI);
// console.log(Utils.sum(2, 2));

// --- super ---
// class Human {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Doctor extends Human {
//   constructor({ experience = 0, ...rest }) {
//     super(rest);
//     this.experience = experience;
//   }

//   healing() {
//     console.log('I can heal');
//   }
// }

// const bobby = new Human({ name: 'Bobby', age: 15 });
// const house = new Doctor({ name: 'House', age: 60, experience: 20 });

// console.log(house);

// Example 1 - Блоггер
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.

// Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.

// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// Example 2 - Хранилище
// Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(value) {
//     this.items = this.items.filter((item) => item !== value);
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши класс User который создаёт объект со свойствами login и email. Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   set login(value) {
//     this.#login = value;
//   }

//   get login() {
//     return this.#login;
//   }

//   set email(value) {
//     this.#email = value;
//   }

//   get email() {
//     return this.#email;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// Example 4 - Заметки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(item) {
//     this.items.push(item);
//   }

//   removeNote(noteText) {
//     this.items = this.items.filter(({ text }) => text !== noteText);
//   }

//   updateNote(text, priority) {
//     this.items = this.items.map((item) =>
//       item.text === text ? { ...item, priority } : item
//     );
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true/false). По умолчанию значение свойства on должно быть false.

// class Toggle {
//   constructor({ on = false } = {}) {
//     this.on = on;
//   }

//   toggle() {
//     this.on = !this.on; // this.on = this.on === true ? false : true;
//   }
// }

// const firstToggle = new Toggle({ on: true });

// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// --- question ---
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);

// console.log(animal); // тут в объекте 1 свойство
// console.log('dog:', dog); // в прототипе 2 свойства. Почему, если в объект второе свойство добавляем ниже?

// animal.ddd = 5; // только тут добавляем в объект второе свойство

// console.log(animal.isPrototypeOf(dog));
