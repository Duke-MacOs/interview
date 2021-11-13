# 进制转换
二进制 -> 十进制
十进制 -> 二进制

# 测试用例
```javascript
to2(10) // '10100'

to10('0100') // 4
```

# 代码实现
```javascript
function to2(num) {
	return num.toString(2);	
}

function to10(num) {
	return parseInt(num, 2);
}
```
