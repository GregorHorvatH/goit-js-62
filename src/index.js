import { getItemTemplate } from './getItemTemplate.js';
import { items } from './items.js';

const refs = {
  list: document.querySelector('.list'),
  form: document.querySelector('.form'),
};

const render = () => {
  const lis = items.map(getItemTemplate);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', lis.join(''));
};

const addItem = (text) => {
  const payload = {
    text,
    isDone: false,
  };

  items.push(payload);
};

const handleSubmit = (e) => {
  const { value } = e.target.elements.text;

  e.preventDefault();
  addItem(value);
  render();
  refs.form.reset();
};

// run
render();

// add event listeners
refs.form.addEventListener('submit', handleSubmit);
