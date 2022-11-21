const getTimerTemplate = () => `<div class="timer">
  <span class="value">yyyy-mm-dd hh:mm:ss</span>
  <button data-action="start">start</button>
  <button data-action="stop" disabled>stop</button>
</div>`;

export class Timer {
  constructor({ selector, value = 1 }) {
    this.value = value;
    this.parent = document.querySelector(selector);
    this.parent.insertAdjacentHTML('beforeend', getTimerTemplate());

    this.valueSpan = this.parent.querySelector('.value');
    this.startButton = this.parent.querySelector('[data-action="start"]');
    this.stopButton = this.parent.querySelector('[data-action="stop"]');

    this.startButton.addEventListener('click', this.start.bind(this));
    this.stopButton.addEventListener('click', this.stop.bind(this));

    this.render();
  }

  render() {
    this.valueSpan.textContent = this.value;
    this.value += 1;
  }

  start() {
    this.timerId = setInterval(this.render.bind(this), 250);
    this.startButton.setAttribute('disabled', true);
    this.stopButton.removeAttribute('disabled');
  }

  stop() {
    clearInterval(this.timerId);
    this.startButton.removeAttribute('disabled');
    this.stopButton.setAttribute('disabled', true);
  }
}
