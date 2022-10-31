// import { Item } from './Item.js';
// import { items } from './items.js';

// const refs = {
//   list: document.querySelector('.list'),
//   form: document.querySelector('.form'),
// };

// const render = () => {
//   const lis = items.map(Item);

//   refs.list.innerHTML = '';
//   refs.list.insertAdjacentHTML('beforeend', lis.join(''));
// };

// const addItem = (e) => {
//   e.preventDefault();

//   const { value } = e.target.elements.text;
//   const payload = {
//     text: value,
//     isDone: false,
//   };

//   items.push(payload);
//   render();

//   refs.form.reset();
// };

// // run
// render();

// // add event listeners
// refs.form.addEventListener('submit', addItem);

// --- append ---
// <a class="link" href="https://google.com">Google</a>

const link = document.createElement('a');
link.href = 'https://google.com';
link.textContent = 'Google';
link.classList.add('link');
link.id = 123;
link.type = 'qwerty';

link.setAttribute('wertyui', 'true');

// const body = document.querySelector('body');
// body.appendChild(link);

console.log(link.outerHTML);

// link.click();

// --- formData ---
// const data = new FormData();
// data.append('name', 'Bobby');
// data.append('age', '15');
// data.append('eyes', 'blue');

// console.log(Object.fromEntries(data));
