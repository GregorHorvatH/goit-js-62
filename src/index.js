// --- question ---
// const total = 55;

// console.log('total:', total);

// --- question ---
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit); // true|false

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// --- question ---
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message);

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.shift());
// console.log(genres);

// genres.unshift('Country', 'Reggae');
// console.log(genres);

// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
// const arr = values.split(' ');
// const [width, height] = arr;

// // const width = arr[0];
// // const height = arr[1];

// const area = Number(width) * Number(height);

// console.log(area);

// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const arr = string.split(' ');

// arr.shift();
// arr.pop();

// console.log(arr.join(' '));

// --- question ---
// function bar() {
//   console.log('bar'); // 2
// }

// function baz() {
//   console.log('baz'); // 3
// }

// function foo() {
//   console.log('foo'); // 1

//   bar(); // 2
//   baz(); // 3
// }

// foo(); // 1

// --- Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// --- v. 1 ---
// const string = 'Welcome to the future';
// const arr = string.split('');
// const reversedArr = arr.reverse();
// const reversedString = reversedArr.join('');

// console.log(reversedString);

// --- v. 2 ---
// const string = 'Welcome to the future';
// const reversedString = string.split('').reverse().join('');

// console.log(reversedString);

// --- v. 3 ---
// const string = 'Welcome to the future';
// let reversedString = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reversedString += string[i];
// }

// console.log(reversedString);

// --- v. 4 ---
// const string = 'Welcome to the future';
// const words = string.split(' ');

// for (let i = 0; i < words.length; i += 1) {
//   words[i] = words[i].split('').reverse().join('');
// }

// console.log(words.join(' '));

// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
//   if (number > max) {
//     max = number;
//   }
// }

// console.log(min); // 1
// console.log(max); // 94

// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length - 1; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     const word1 = langs[i];
//     const word2 = langs[j];

//     if (word1[0] > word2[0]) {
//       langs[i] = word2;
//       langs[j] = word1;
//     }
//   }
// }

// console.log(langs);

// --- quick sort ---
// function quicksort(arr) {
//   if (arr.length < 2) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i += 1) {
//     arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//   }

//   return quicksort(left).concat(pivot, quicksort(right));
// }

// console.log(quicksort([2, 5, 3, 0, 6, 1, 4]));
