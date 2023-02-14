# Promise

## Promise 介绍
Promise 是语言标准层面的异步解决方案。

Promise 实例一共有三种状态：**pending(进行中)、fulfilled(已成功)、rejected(已失败)。**

Promise 的两个特性：
1. 状态只受异步结果影响。外部无法改变 Promise 的状态，只有拿到了异步结果，才能决定修改为那种状态。
2. 状态固定。Promise 的状态一旦发生改变，状态就凝固不再发生改变，这时就称为 **resolved(已定型)**。

Promise 的三个缺点：
1. 无法取消。Promise 一旦新建就会立即执行，并且无法取消。
2. 无法捕获错误。如果不设置 .catch 回调，Promise 发生的错误无法被外部捕获。
3. 进度不可知。无法得知异步执行到了哪一程度，是刚开始还是即将结束。

## Promise.then()
Promise.then 本身也返回一个 Promise（与上一个 Promise 无关），因此可以链式调用。

如果 .then 没有明确返回值，就会返回一个 Promise.resolve(undefined)。

它接受两个参数 .then(handleResolved, handleRejected)。

## Promise.catch()
Promise.catch 用于捕获处理 rejected 的信息，通常放在 .then 后面，其本身也返回一个 Promise。

如果 .catch 放在中间，后面 .then 内的错误将无法捕获。

## Promise.finally()
无论 Promise 的状态变为 fulfilled 还是 rejected，都会执行 .finally 的回调函数，为 Promise 无论是否成功都需要执行的代码提供一种方式，避免 .then 和 .catch 各写一次的情况。

## Promise.resolve()
Promise.resolve(value) 返回一个 Promise 对象。如果 value 是一个 promise，那么将返回这个 promise，其它值则会立即将 promise 状态改为 fulfilled, 值为 value。

## Promise.reject()
立即返回一个状态为 rejected 的 Promise 对象。

## 其它方法
* Promise.all()：所有 promise 状态都改为 fulfilled 后返回，如果其中一个 promise 变为 rejected 那么整个 Promise.all 就会变为 rejected。
* Promise.any()：只要有一个 promise 成功，Promise.any 就成功。
* Promise.race()：只要有一个 promise 改变，Promise.race 就改变。
* Promise.allSettled()：所有 promise 状态都改变后，Promise.allSettled 才会改变。