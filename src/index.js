import { getItemTemplate } from './getItemTemplate.js';
import { items as importedItems } from './items.js';

const modal = basicLightbox.create(`
  <div class="modal">
    <p class="modal-text"></p>
    <button>Close</button>
  </div>
`);

let items = importedItems;

const refs = {
  list: document.querySelector('.list'),
  form: document.querySelector('.form'),
  modalText: modal.element().querySelector('.modal-text'),
  modalButton: modal.element().querySelector('button'),
};

const render = () => {
  const lis = items.map(getItemTemplate);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', lis.join(''));
};

const addItem = (text) => {
  const payload = {
    id: uuid.v4(),
    text,
    isDone: false,
    created: new Date(),
  };

  items.push(payload);
};

const handleSubmit = (e) => {
  // const value = e.target.elements.text.value;
  const { value } = e.target.elements.text;

  e.preventDefault();
  addItem(value);
  render();
  refs.form.reset();
};

const toggleItem = (id) => {
  items = items.map((item) =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item
  );
};

const viewItem = (id) => {
  const { created } = items.find((item) => item.id === id);

  refs.modalText.textContent = created;
  modal.show();
};

const deleteItem = (id) => {
  items = items.filter((item) => item.id !== id);
  render();
};

const handleListClick = (e) => {
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

// run
render();

// add event listeners
refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleListClick);
refs.modalButton.addEventListener('click', modal.close);
