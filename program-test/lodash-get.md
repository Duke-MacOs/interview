# 对象提取
模拟 lodash get 函数实现

## 测试用例
```javascript
var obj = {
  	selector: {
  		to: {
  			toutiao: 'FE coder'
  		},
  	},
  	target: [
  			1,
  			2,
  			{
  				name: 'byted'
  			}
  		]
  };

  get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name');
```

## 代码实现
```javascript
  var get = function(obj) {
  	const params = [...arguments].slice(1);
  	const result = [];

  	params.forEach((s, idx) => {
  		const keys = s.replace(/(\[|\])+/g, '.').split('.').filter(i => i !== '');
  		let _r = obj;
  		for(let i = 0; i < keys.length; i++) {
  			const key = keys[i];
  			_r = _r[key];
  			if(!_r) break;
  		}
  		result.push(_r);
  	});

  	return result;
  }
```