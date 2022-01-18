# 模拟 lodash _.get 函数
用原生代码实现一个红绿灯的网页

## 代码实现
```html
!<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>红绿灯</title>

	<style>
		#light {
			width: 100px;
			height: 100px;
			border-radius: 100px;
			border: 1px solid black;
		}
	</style>
</head>
<body>
	<div id="light"></div>	
</body>

<script>
	const LIGHT = {
		'RED': {
			val: 'red',
			time: 2000,
			next: 'GREEN'
		},
		'GREEN': {
			val: 'green',
			time: 3000,
			next: 'YELLOW'
		},
		'YELLOW': {
			val: 'yellow',
			time: 1000,
			next: 'RED'
		}
	}

	let timer;
	let currentColor = LIGHT.RED;

	const changeDOM = () => {
		const dom = document.getElementById('light');
		console.log(dom)
		dom.style.backgroundColor = currentColor.val;
		
	}

	const exe = () => {
		changeDOM();
		timer = setTimeout(() => {
			currentColor = LIGHT[currentColor.next];
			exe();
		}, currentColor.time);
	}

	exe();
</script>
</html>
```