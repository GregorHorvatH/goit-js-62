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

// --- async/await ---
const asyncFn1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('fn 1');
      resolve('fn 1 result');
    }, 700);
  });
};

const asyncFn2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('fn 2');
      resolve('fn 2 result');
    }, 400);
  });
};

const asyncFn3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn 3');
      // resolve('fn 3 result');
      reject('error happened');
    }, 200);
  });
};

// function runAll1() {
// asyncFn1().then(() => {
//   asyncFn2().then(() => {
//     asyncFn3();
//   });
// });

// asyncFn1()
//   .then(() => asyncFn2())
//   .then(() => asyncFn3())
//   .then(() => {});
// }

// runAll1();

// async function runAll2() {
//   await asyncFn1();
//   await asyncFn2();
//   await asyncFn3();
// }

// const runAll2 = async () => {
//   await asyncFn1();
//   await asyncFn2();
//   await asyncFn3();
// };

// console.log('start');
// runAll2();
// console.log('end');

// const fetchTest = async () => {
//   console.log('start');

//   try {
//     const resp = await fetch(
//       'https://638506994ce192ac606aac6a.mockapi.ioo/todos',
//     );
//     const data = await resp.json();

//     console.log(data);
//   } catch (error) {
//     console.log('ERROR:', error.message);
//   }

//   console.log('end');
// };

// fetchTest();

// --- Promise.all ---

// long version
// const ver1 = async () => {
//   const res1 = await asyncFn1();
//   const res2 = await asyncFn2();
//   const res3 = await asyncFn3();

//   console.log(res1, res2, res3);
// };

// ver1();

// short version
// const ver2 = async () => {
//   const [res1, res2, res3] = await Promise.allSettled([
//     asyncFn1(),
//     asyncFn2(),
//     asyncFn3(),
//   ]);

//   console.log(res1, res2, res3);
// };

// ver2();
