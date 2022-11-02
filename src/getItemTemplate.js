export const getItemTemplate = ({ isDone, text }) => `<li class="item">
  <div>
    <input
      type="checkbox"
      ${isDone ? 'checked' : ''}
    />
    <span>${text}</span>
  </div>
  <button type="button">x</button>
</li>`;
