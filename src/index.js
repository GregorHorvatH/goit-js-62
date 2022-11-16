import * as basicLightbox from 'basiclightbox';
import toastr from 'toastr';
import { v4 } from 'uuid';

import { getItemTemplate } from './getItemTemplate';
import { createTodo, fetchTodos, updateTodo, deleteTodo } from './todosApi';

import './configToastr';
import 'toastr/build/toastr.min.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import './style.css';

const modal = basicLightbox.create(`
  <div class="modal">
    <p class="modal-text"></p>
    <button>Close</button>
  </div>
`);

let items = [];

const refs = {
  list: document.querySelector('.list'),
  form: document.querySelector('.my-form'),
  modalText: modal.element().querySelector('.modal-text'),
  modalButton: modal.element().querySelector('button'),
};

const render = () => {
  const list = items.map(getItemTemplate);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', list.join(''));
};

const handleSubmit = e => {
  const { value } = e.target.elements.text;
  const payload = {
    id: v4(),
    text: value,
    isDone: false,
    created: new Date(),
  };

  e.preventDefault();
  createTodo(items);
  items.push(payload);
  render();
  refs.form.reset();
  // toastr.success('Todo created successfully');
};

const toggleItem = id => {
  items = items.map(item =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item,
  );
  updateTodo(items);
};

const viewItem = id => {
  const { created } = items.find(item => item.id === id);

  refs.modalText.textContent = created;
  modal.show();
};

const deleteItem = id => {
  items = items.filter(item => item.id !== id);
  deleteTodo(items);
  render();
  toastr.success('Todo deleted successfully');
};

const handleListClick = e => {
  if (e.target === e.currentTarget) return;

  const { action } = e.target.dataset;
  const parent = e.target.closest('li');
  const { id } = parent.dataset;

  switch (action) {
    case 'toggle':
      toggleItem(id);
      break;

    case 'view':
      viewItem(id);
      break;

    case 'delete':
      deleteItem(id);
      break;
  }
};

const handleKeyPress = ({ code }) => {
  if (code === 'Escape' && modal.visible()) {
    modal.close();
  }
};

const loadData = () => {
  items = fetchTodos();
};

// run
loadData();
render();

// add event listeners
refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleListClick);
refs.modalButton.addEventListener('click', modal.close);

window.addEventListener('keydown', handleKeyPress);
