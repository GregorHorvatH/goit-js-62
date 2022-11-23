// --- new Promise ---
// const timerWithPromise = delay => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('hello from the timer');

//       resolve('hurray! :)');
//       // reject('error happened :(');
//     }, delay);
//   });
// };

// console.log('start');

// timerWithPromise(500)
//   .then(data => {
//     console.log('success:', data);

//     return 123;
//   })
//   .then(data => {
//     console.log('after success:', data);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('end');
//   });

// --- Promise.resolve ---
// function fn() {
//   console.log('Hello');

//   return Promise.resolve('hurray! :)');
// }

// console.log('start');

// fn().then(data => {
//   console.log('end:', data);
// });

// --- Promise.reject ---
// function fn() {
//   console.log('Hello');

//   return Promise.reject('Error happened :(');
// }

// console.log('start');

// fn()
//   .then(data => {
//     console.log('end:', data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// --- Promise.all ---
// const asyncFn1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log('fn 1');

//       resolve('fn 1');
//     }, 700);
//   });
// };

// const asyncFn2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log('fn 2');

//       resolve('fn 2');
//       // reject('error happened in fn2');
//     }, 400);
//   });
// };

// Promise.all([asyncFn1(), asyncFn2()])
//   .then(([resp1, resp2]) => {
//     console.log('--- response ---');
//     console.log(resp1);
//     console.log(resp2);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Promise.allSettled([asyncFn1(), asyncFn2()])
//   .then(([resp1, resp2]) => {
//     console.log('--- response ---');
//     console.log(resp1);
//     console.log(resp2);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Promise.race([asyncFn1(), asyncFn2()])
//   .then(resp => {
//     console.log('--- response ---');
//     console.log(resp);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// function fn() {
//   return new Promise(resolve => {
//     resolve('promise');
//   });
// }

// console.log('start');

// setTimeout(function timeout() {
//   console.log('timer');
// }, 0);

// fn().then(function (data) {
//   console.log(data);
// });

// console.log('end');

// --- Promise.resolve ---
// const fn = () => {
//   console.log('start');

//   return Promise.resolve();
// };

// fn().then(() => {
//   console.log('end');
// });
