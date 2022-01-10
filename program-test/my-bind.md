# 实现 bind
模拟 bind 的实现

## 代码实现
```javascript
Function.prototype.myBind = function(context) {
	const fn = this;

	const params = Array.prototype.slice.call(arguments, 1);

	const _fn = function() {
		const _params = [...params, ...Array.prototype.slice.call(arguments, 1)];
		fn.apply(context ?? window, params);
	}

	return _fn;
} 

```