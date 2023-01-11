/** 题目一 */
// const fn1 = async () => {
//   console.log('fn1 start');
//   await fn2();
//   console.log('fn1 end');
// };

// const fn2 = async () => {
//   console.log('fn2 start');
//   setTimeout(() => {
//     console.log('fn2 timer');
//   });
// };

// console.log('start');
// fn1();
// setTimeout(() => {
//   console.log('timer');
// });
// console.log('end');

/** 题目二 */
const fn1 = async () => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    });
    resolve(fn2());
  }).then((res) => {
    console.log(res);
  });
};

const fn2 = async () => {
  console.log(3);
  Promise.resolve(4).then((res) => {
    console.log(res);
  });
};
console.log('start');
fn1();
console.log('end');

// start
// 3
// end
// 4
// undefined
