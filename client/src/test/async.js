/**
 * 1초 뒤에 결과값을 반환하는 function
 * @returns {number}
 */
function delay() { // Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(123)
    }, 2000)
  });
}
function delay2() { // Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('abc')
    }, 2000)
  });
}
// try {
//   delay().then(res => console.log('delay res', res))
//     .catch(err => {})
//     .finally(() => {})
//   // 2초 이상 걸리는 코드가 있어
//
//   console.log(123)
//
// } catch(e) {
//
// }
// console.log(456)
// const d1 = delay() //.then(res => console.log('delay res', res))
// const d2 = delay2() //.then(res => console.log('delay2 res', res))

async function abc() {
  try {
    const a = await delay();
    const b = await delay2();
  } catch (e) {
  }
  console.log('직접호출', a, b)
}
// abc();

async function def() {
  const apple = delay(); // 0
  const banana = delay2(); // 0
  const c = await apple; // 2
  const d = await banana; // 2
  console.log(c, d)
}
// def();

// Promise.all([d1, d2]).then(([res1, res2]) => console.log('all done res1, res2', res1, res2))
// console.log('123123123123123123123')
// delay().then((res1) => {
//   delay2().then((res2) => {
//     delay2().then((res2) => {
//       delay2().then((res2) => console.log('res1 + res2', res1, res2))
//     })
//   })
// });

// delay().then((res) => console.log(res));
// const myPromise = delay();
// myPromise.then((res) => console.log(res));



function add(a, b) {
  return a / b;
}

// try {
//   console.log(null.charAt(2))
// } catch (e) {
//   console.log('에러났어!!!!!!!!!!!!!!!!!!!')
// }
// console.log('wow~~~~~~')
// const num = add(1, 2)
// console.log(num);
// console.log(add(5, 6));


const url = 'http://localhost:3002/product';

// $.ajax({
//   url: url,
//   success: function (response) {
//   }
// });

// fetch(url).then(function (response) {
// });


let a = 1;
let b = a * 2;
console.log('a, b', a, b)

a = 10;
console.log('a, b', a, b)
