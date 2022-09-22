// --- guess a number ---
// const x = Math.round(Math.random() * 100 + 1); // 1-100
// let userInput;

// do {
//   userInput = Number(prompt('Enter a number (1-100)'));

//   if (x > userInput) {
//     console.log('x >', userInput);
//   } else if (x < userInput) {
//     console.log('x <', userInput);
//   }
// } while (x !== userInput);

// console.log('You won!');

// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const userInput = prompt('');

// if (userInput === 'ECMAScript') {
//   console.log('Hurray!');
// } else {
//   console.log('No :(');
// }

// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const userInput = Number(prompt('Введите число'));

// if (userInput < 0) {
//   console.log('Это отрицательное число');
// } else if (userInput > 0) {
//   console.log('Это положительное число');
// } else {
//   console.log('Это ноль');
// }

// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
//   // console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.

// id       0                       15
// let link = 'https://my-site.com/about';
// // length: 16

// // if (!link.endsWith('/')) {
// if (link[link.length - 1] !== '/') {
//   link += '/';
// }

// console.log(link);

// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.

// let link = 'https://somesite.com/about';
// // Пиши код ниже этой строки

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// // Пиши код выше этой строки
// console.log(link);

// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 5 используя тернарный оператор.

// let link = 'https://somesite.com/about';

// link += !link.endsWith('/') ? '/' : '';

// console.log(link);

// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.
// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 10;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня');
//     break;

//   case 1:
//     console.log('Завтра');
//     break;

//   case 2:
//     console.log('Послезавтра');
//     break;

//   default:
//     console.log('Дата в будущем');
// }

// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// + Если посетитель вводит "Админ", то prompt запрашивает пароль
// + Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// + В противном случае вывести строку "Я вас не знаю"

// Пароль проверять так:
// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('enter login');

// if (login !== null) {
//   if (login === 'admin') {
//     const password = 'admin'; // prompt('Enter password');

//     if (password === 'admin') {
//       console.log('welcome!');
//     } else {
//       console.log('Bye!');
//     }
//   } else {
//     console.log('I dont know you');
//   }
// } else {
//   console.log('Canceled by user');
// }
