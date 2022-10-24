// const num = ~~(Math.random() * 7 + 1);
// let day = '';

// switch (num) {
//   case 1:
//     day = 'понеділок';
//     break;

//   case 2:
//     day = 'вівторок';
//     break;

//   case 3:
//     day = 'середа';
//     break;

//   case 4:
//     day = 'четвер';
//     break;

//   case 5:
//     day = "пят'ниця";
//     break;

//   case 6:
//     day = 'субота';
//     break;

//   case 7:
//     day = 'неділя';
//     break;
// }

// if (num === 1) {
//   day = 'понеділок';
// } else if (num === 2) {
//   day = 'вівторок';
// } else if (num === 3) {
//   day = 'середа';
// } else if (num === 4) {
//   day = 'четвер';
// } else if (num === 5) {
//   day = "пят'ниця";
// } else if (num === 6) {
//   day = 'субота';
// } else if (num === 7) {
//   day = 'неділя';
// }

// console.log(day);

// --- querySelector / querySelectorAll ---
// const ul = document.querySelector('ul');
// console.log(ul);

// const lis = document.querySelectorAll('li');
// console.log(lis);

// lis.forEach((li, idx) => {
//   li.style.fontSize = `${(idx + 1) * 10}px`;
// });

// --- random image loading ---
// const imageTemplate = (id) => `<li>
//   <img class="image" data-id=${id} src="https://picsum.photos/400/200?random=${id}" />
// </li>`;

// const refs = {
//   button: document.querySelector('.btn'),
//   list: document.querySelector('.list'),
//   form: document.querySelector('form'),
// };
// let id = 1;

// const addImage = () => {
//   refs.list.insertAdjacentHTML('beforeend', imageTemplate(id++));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const { login, password } = e.target.elements;
//   const payload = { login: login.value, password: password.value };

//   console.log(payload);
// };

// refs.button.addEventListener('click', addImage);
// // refs.button.removeEventListener('click', addImage);
// refs.form.addEventListener('submit', handleSubmit);

// --- callback ---
// function fn1(name) {
//   console.log('Hello', name);
// }

// function fn2(name) {
//   // .... name

//   fn1(name);
// }

// fn2('Bobby');

// --- spread, rest ---
// const obj = { name: 'Bobby', age: 15 };
// const obj2 = { ...obj, eyes: 'brown' }; // spread

// const numbers = [1, 2, 3];
// console.log(Math.min(...numbers)); // spread

// function fn({ age, ...rest }) {
//   return rest;
// }

// console.log(fn({ name: 'Bobby', age: 15, eyes: 'blue' }));
// console.log(fn({ name: 'Peter', age: 15, phone: '555-555-333' }));
// console.log(fn({ name: 'Chris', age: 15, hair: 'blonde' }));

// --- question ---
// const inputEl = document.querySelector('#validation-input');
// const dataLength = 6;

// inputEl.addEventListener('blur', onInputBlur);

// function toggle(class1, class2) {
//   inputEl.classList.toggle(class1);
//   inputEl.classList.replace(class2, class1);
// }

// function onInputBlur(event) {
//   if (event.currentTarget.value.length === dataLength) {
//     toggle('valid', 'invalid');
//   } else {
//     toggle('invalid', 'valid');
//   }
// }

// --- map ---
// const str = ['<li>google</li>', '<li>amazon</li>', 'facebook'];

// console.log(str.join(''));

// --- question ---
// є задачка:
// Напишіть функцію, яка глибоко знаходить перетин об'єктів і повертає об'єкт перетинів.
// Очікуваний результат: intersectionDeep({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
//@param {Object} firstObj - об'єкт будь-яких значень
//@param {Object} secondObj - об'єкт будь-яких значень
//@повертає {Object}

// Моє рішення:
// const intersectionDeep = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);

//   return firstObjKeys.reduce((acc, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       acc = {
//         ...acc,
//         [key]: firstObj[key],
//       };
//     } else if (
//       typeof firstObj[key] === 'object' &&
//       typeof secondObj[key] === 'object'
//     ) {
//       const fnIntersectionDeep = intersectionDeep(
//         firstObj[key],
//         secondObj[key]
//       );

//       if (Object.keys(fnIntersectionDeep).length !== 0) {
//         acc = {
//           ...acc,
//           [key]: fnIntersectionDeep,
//         };
//       }
//     }
//     return acc;
//   }, {});
// };
// console.log(intersectionDeep({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }));

// Рішення, яке пропонують:
// const intersectionDeep = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);

//   return firstObjKeys.reduce((acc = {}, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       acc = {
//         ...acc,
//         [key]: firstObj[key],
//       };
//     }

//     if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
//       const isEqualArrays = intersectionDeep(firstObj[key], secondObj[key]);

//       if (isEqualArrays) {
//         acc = {
//           ...acc,
//           [key]: firstObj[key],
//         };
//       }
//     } else if (
//       typeof firstObj[key] === 'object' &&
//       typeof secondObj[key] === 'object'
//     ) {
//       const hasIntersection = intersectionDeep(firstObj[key], secondObj[key]);

//       if (Object.keys(hasIntersection).length !== 0) {
//         acc = {
//           ...acc,
//           [key]: hasIntersection,
//         };
//       }
//     }
//     return acc;
//   }, {});
// };

// console.log(intersectionDeep({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }));
// console.log(intersectionDeep({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } }));
// console.log(intersectionDeep({ a: 1, b: [1, 2, 3] }, { a: 1, b: [1, 2, 4] }));

// Не розумію саме цю перевірку:
// if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
//       const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);

//       if (isEqualArrays) {
//         acc = {
//           ...acc,
//           [key]: firstObj[key],
//         };
//       }
// Поясніть, будь-ласка
