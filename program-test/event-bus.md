# 发布订阅

## 测试用例
```javascript
const event = new EventEmitter();

const handleBuy = () => {
    console.log('handleBuy');
}

const hanldeSale = () => {
    console.log('handleSale');
}

event.on('buy', handleBuy);
event.emit('buy');
event.once('sale', hanldeSale);
event.emit('sale');
event.emit('sale');
event.off('buy', handleBuy);
```

## 代码实现
```javascript
class EventEmitter {
constructor() {
		this.events = {};
	}

	on(event, cb) {
		if(this.events[event]) {
			this.events[event].push(cb);
		}else {
			this.events[event] = [cb];
		}
		return this;
	}

	off(event, cb) {
		if(!this.events[event]) {
			console.log('事件名称不存在')
		}
		if(!cb) {
			this.events[event] = null;
		}else {
			this.events[event] = this.events.filter(f => f !== cb);
		}

		return this;
	}

	emit(event, ...args) {
		const cbs = this.events[event];
		if(!cbs) {
			console.log('事件名称不存在');
		}else {
			cbs.forEach(cb => cb.apply(this, args))
		}
		return this;
	}

	once(event, cb) {
		const fn = function(...args) {
			this.off(event, fn);
			cb.apply(this, args);
		}
		this.emit(event, fn);

		return this;
	}
}
```