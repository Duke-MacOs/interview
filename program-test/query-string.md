# URL 参数拆解
url 链接参数拆解

## 测试用例
```javascript
var url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash';
queryString1(new URL(url));
queryString2(url);

// a: '1', b: '2', c: 'xx', d: '2' };
```

## 代码实现
```javascript
// 方式一
var queryString1 = function(str) {
	const s = new URLSearchParams(str.search)
	  const obj = {}
	  s.forEach((v, k) => (obj[k] = v))
	  return obj
}

// 方式二
var queryString2 = function(str) {
	const start = str.indexOf('?') === -1 ? -1 : str.indexOf('?') + 1;
	const end = str.lastIndexOf('#');

	str = str.slice(start, end).split('&');

	return str.reduce((total, cur) => {
		var [key, value] = cur.split('=');
		total[key] = value;
		return total;
	}, {});
}
```