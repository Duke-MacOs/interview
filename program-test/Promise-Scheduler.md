# Promise 限制并发数
保证同时运⾏的任务最多有两个。完善代码中 Scheduler类，使得以下程序能正确输出

output: 2 3 1 4 

⼀开始，1、2两个任务进⼊队列 

500ms时，2完成，输出2，任务3进队 

800ms时，3完成，输出3，任务4进队 

1000ms时，1完成，输出1 

1200ms时，4完成，输出4

## 测试用例
```javascript
var timeout = time => new Promise((resolve) => {
  setTimeout(resolve, time);
})

var scheduler = new Scheduler();

var addTask = (time, order) => {
  scheduler.add(() => {
    return timeout(time);
  }).then(() => {
    console.log(order);
  })
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
```

## 代码实现
```javascript
class Scheduler {
    constructor(max = 2) {
        this.max = max;
        this.pendingQueue = [];
        this.currentCount = 0;
    }

    add(fn) {
        return new Promise((resolve, reject) => {
            const _fn = () => {
                return Promise.resolve(fn()).then((res) => {
                    resolve(res);
                }).catch((e) => {
                    reject(e);
                })
            }
            this.pendingQueue.push(_fn);
            this.run();
        });
    }

    run() {
        while(
            this.pendingQueue.length !== 0 && 
            this.currentCount < this.max
        ) {
            this.currentCount++;
            const fn = this.pendingQueue.shift();
            fn().then(this.complete.bind(this)).catch(this.complete.bind(this));
        }
    }

    complete() {
        this.currentCount--;
        this.run();
    }
}
```