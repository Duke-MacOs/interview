# 数组树形化
将扁平的数组结构按一定要求树形化

# 测试用例
```javascript
var userList = [
 
{name:'user1',age:18,province:'四川',city:'成都',district:'高新区'},
 
{name:'user2',age:19,province:'四川',city:'成都',district:'天府新区'},
 
{name:'user3',age:20,province:'四川',city:'南充',district:'顺庆区'},
 
{name:'user4',age:22,province:'江苏',city:'南京',district:'鼓楼区'},
 
{name:'user5',age:21,province:'江苏',city:'南京',district:'玄武区'},
 
{name:'user6',age:21,province:'江苏',city:'镇江',district:'京口区'}
 
]

 
var userTree = list2tree(userList, 'province/city/district');
```

# 代码实现
```javascript
function list2tree(list, path) {
    const tree = [];
    path = path.split('/');

    list.forEach(item => {
        let curLevel = tree;

        for(let i = 0; i < path.length; i++) {
            const key = path[i];

            let target = curLevel.find(i => i[key] === item[key]);
            if(target === undefined) {
                target = {
                    [key]: item[key],
                    children: []
                };
                curLevel.push(target);
            }
            curLevel = target.children;

            delete item[key];
        }
        curLevel.push(item);
    });

    return tree;
}
```