# 模拟 lodash _.get 函数
实现一个 pipe 函数，将需要嵌套执行的函数平铺。

## 测试用例
```javascript
const add = x => x + 3;
const square = x => x * 2;
const sub = x => x - 1;

const calc = pipe(sub, square, add);

console.log(calc(2)); // 执行并打印结果：5
```

## 代码实现
```javascript
const pipe = (...args) => {
  const queue = args;

  return (x) => {
    while(queue.length !== 0) {
      const fn = queue.shift();

      Promise.resolve(fn(x)).then(res => {
        x = res;
      });
    }

    return x;
  }
}
```