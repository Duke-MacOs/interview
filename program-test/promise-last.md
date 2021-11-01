# 打印最新的 Promise 结果
要求打印最后一个 Promise

## 测试用例
```javascript
var count = 1;
// 这是一个函数，返回promise
var promiseFunction = () =>
    new Promise(rs =>
        setTimeout(() => {
            rs(count++);
        })
    );

var lastFn = lastPromise(promiseFunction);

lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 3
```

## 代码实现
```javascript
function lastPromise(fn) {
    let timer;
    return () => {
        return new Promise((resolve, reject) => {
            const p = Promise.resolve(fn());
            if(timer) clearTimeout(timer);

            timer = setTimeout(() => {
                p.then((res) => {
                    resolve(res);
                }).catch((e) => {
                    reject(e);
                })
            })
        });
    }
}
```