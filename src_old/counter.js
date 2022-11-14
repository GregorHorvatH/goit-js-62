const refs = {
  step: document.querySelector('.step'),
  value: document.querySelector('.value'),
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
};

let count = 23;
let step = 10;

const render = () => {
  refs.step.value = step;
  refs.value.textContent = count;
};

const handleDecrement = () => {
  count -= step;
  render();
};

const handleIncrement = () => {
  count += step;
  render();
};

const handleStepChange = (event) => {
  step = Number(event.target.value);
  refs.value.style.fontSize = `${step}px`;
};

render();

refs.decrement.addEventListener('click', handleDecrement);
refs.increment.addEventListener('click', handleIncrement);
refs.step.addEventListener('change', handleStepChange);
