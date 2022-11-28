import axios from 'axios';

axios.defaults.baseURL = 'https://638506994ce192ac606aac6a.mockapi.io';

// const URL = 'https://638506994ce192ac606aac6a.mockapi.io';

// export const createTodo = payload => {
//   return fetch(`${URL}/todos`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   }).then(resp => resp.json());
// };

export const createTodo = payload =>
  axios.post(`/todos`, payload).then(({ data }) => data);

// export const fetchTodos = () => {
//   return fetch(`${URL}/todos`)
//     .then(resp => resp.json())
//     .catch(() => []);
// };

export const fetchTodos = () =>
  axios
    .get(`/todos`)
    .then(({ data }) => data)
    .catch(() => []);

// export const updateTodo = (id, payload) => {
//   return fetch(`${URL}/todos/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   }).then(resp => resp.json());
// };

export const updateTodo = (id, payload) =>
  axios.put(`/todos/${id}`, payload).then(({ data }) => data);

// export const deleteTodo = id => {
//   return fetch(`${URL}/todos/${id}`, {
//     method: 'DELETE',
//   })
//     .then(resp => resp.json())
//     .catch(() => []);
// };

export const deleteTodo = id =>
  axios
    .delete(`/todos/${id}`)
    .then(({ data }) => data)
    .catch(() => []);
