# 实现 Array.reduce
模拟实现 Array.prototype.reduce 函数

# 测试用例
```javascript
var arr = [1,2,3,'4',5]
arr.myReduce((res, cur) => res += cur); // 16
```

# 代码实现
```javascript
Array.prototype.myReduce = function(fn, initial) {
	if(typeof fn !== 'function') {
		console.log('参数不是函数');
	}

	const arr = this;
	let res = initial ?? arr[0];

	for(let i = 1; i < arr.length; i++) {
		res += fn(res, arr[i]);
	}

	return res;
}
```