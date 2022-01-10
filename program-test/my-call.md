# 实现 call
模拟 call 的实现

## 代码实现
```javascript
Function.prototype.myCall = function(context) {
	context = context || window;
	const params = Array.prototype.slice.call(arguments, 1);
	
	context.fn = this;

	const result = context.fn(...params);
	delete context.fn;

	return result;
}
```