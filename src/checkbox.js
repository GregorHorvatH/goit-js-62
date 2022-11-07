const refs = {
  checkbox: document.querySelector('.checkbox'),
  value: document.querySelector('.value'),
};

const render = () => {
  refs.value.textContent = refs.checkbox.attributes.checked ? 'X' : 'O';
};

const toggle = () => {
  if (refs.checkbox.attributes.checked) {
    refs.checkbox.removeAttribute('checked');
  } else {
    refs.checkbox.setAttribute('checked', true);
  }
  render();
};

render();

refs.checkbox.addEventListener('click', toggle);
