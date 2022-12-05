import axios from 'axios';

axios.defaults.baseURL = 'https://638506994ce192ac606aac6a.mockapi.io';

export const createTodo = payload =>
  axios
    .post('/todos', payload)
    .then(({ data }) => data);

export const readTodos = () =>
  axios
    .get('/todos')
    .then(({ data }) => data)
    .catch(() => []);

export const updateTodo = (id, payload) =>
  axios
    .put(`/todos/${id}`, payload)
    .then(({ data }) => data);

export const deleteTodo = id =>
  axios
    .delete(`/todos/${id}`)
    .then(({ data }) => data)
    .catch(() => []);
