# setTimeout 实现 setInterval
使用 setTimeout 实现 setInterval

# 测试用例
```javascript
var fn = (text) => {
    console.log(Date.now(), text);
}
mockInterval(fn, 2000, 'test');
```

# 代码实现
```javascript
let timer;

function mockInterval(fn, time, ...args) {
    if(typeof fn !== 'function') return;
	if(!time) return;

	const exe = () => {
		if(timer) clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
			clearTimeout(timer);
			exe();
		}, time);
	}

	exe();
}
```