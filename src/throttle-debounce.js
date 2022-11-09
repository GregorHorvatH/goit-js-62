const refs = {
  input1: document.querySelector('.input1'),
  button: document.querySelector('button'),
};

const handleInput = (e) => {
  const { value } = e.target;

  console.log('input:', value);
};

const handleClick = () => {
  console.log('click...');
};

refs.button.addEventListener('click', handleClick);

refs.input1.focus();
refs.button.click();

// refs.input1.addEventListener('input', _.debounce(handleInput, 300));

function throttle(callback, delay) {
  let id = 0;

  return function (e) {
    if (id) return;

    id = setTimeout(() => {
      callback(e);
      clearTimeout(id);
      id = 0;
    }, delay);
  };
}

function debounce(callback, delay) {
  let id = 0;

  return function (e) {
    if (id) {
      clearTimeout(id);
      id = 0;
    }

    id = setTimeout(() => {
      callback(e);
      clearTimeout(id);
      id = 0;
    }, delay);
  };
}

// refs.input1.addEventListener('input', throttle(handleInput, 300));
refs.input1.addEventListener('input', debounce(handleInput, 300));
