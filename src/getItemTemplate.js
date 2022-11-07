export const getItemTemplate = ({
  id,
  isDone,
  text,
}) => `<li class="item" data-id="${id}">
  <div>
    <input
      data-action="toggle"
      type="checkbox"
      ${isDone ? 'checked' : ''}
    />
    <span>${text}</span>
  </div>
  <div class="buttons">
    <button data-action="view" class="btn" type="button">view</button>
    <button data-action="delete" class="btn danger" type="button">x</button>
  </div>
</li>`;
