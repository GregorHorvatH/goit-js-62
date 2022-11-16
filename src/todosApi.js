import toastr from 'toastr';

export const createTodo = payload => {
  localStorage.setItem('todos', JSON.stringify(payload));
};

export const fetchTodos = () => {
  try {
    toastr.success('Todos loaded successfully');
    return JSON.parse(localStorage.getItem('todos')) || [];
  } catch (error) {
    toastr.error("can't load todos");
    return [];
  }
};

export const updateTodo = payload => {
  localStorage.setItem('todos', JSON.stringify(payload));
};

export const deleteTodo = payload => {
  localStorage.setItem('todos', JSON.stringify(payload));
};
