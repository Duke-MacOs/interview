# 实现 async/await
实现一个 async/await 函数，这个函数接受一个 Generator 函数，返回一个自动执行状态机。

# 测试用例
```javascript
function a() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Function A');
		}, 2000);
	})
}

function b() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Function B');
		}, 1000);
	})
}

function* test() {
	const valA = yield a();
	console.log(valA);
	const valB = yield b();
	console.log('valA: ', valA);
	console.log('valB: ', valB);
}

var fn = myAsync(test);
fn().then((res) => {
    console.log(res);
})
```

# 代码实现
```javascript
function myAsync(generatorFun) {
	return function(...args) {
		var gen = generatorFun.apply(this, args);
		return new Promise((resolve, reject) => {
			const step = function(key, arg) {
				let generatorResult;
				try{
					generatorResult = gen[key](arg);
				}catch(e) {
                    return reject(e);
                };

				const {value, done} = generatorResult;

				if(done) {
					return resolve(value);
				} else {
					return Promise.resolve(value).then((val) => {
						step('next', val);
					}).catch((e) => {
						step('throw', e);
					})
				}
			}
			step('next');
		});
		
	}
}
```