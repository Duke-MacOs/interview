# 实现 apply
模拟 apply 的实现

## 代码实现
```javascript
Function.prototype.myApply = function(context) {
	context = context ?? window;
	context.fn = this;
	const params = [...arguments][1];

	const result = context.fn(...params);
	delete context.fn;

	return result;
}
```