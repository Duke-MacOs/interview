# 树形结构扁平化
树形结构扁平化

# 测试用例
```javascript
var userTree = [
    {
        "province": "四川",
        "children": [
            {
                "city": "成都",
                "children": [
                    {
                        "district": "高新区",
                        "children": [
                            {
                                "name": "user1",
                                "age": 18
                            }
                        ]
                    },
                    {
                        "district": "天府新区",
                        "children": [
                            {
                                "name": "user2",
                                "age": 19
                            }
                        ]
                    }
                ]
            },
            {
                "city": "南充",
                "children": [
                    {
                        "district": "顺庆区",
                        "children": [
                            {
                                "name": "user3",
                                "age": 20
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "province": "江苏",
        "children": [
            {
                "city": "南京",
                "children": [
                    {
                        "district": "鼓楼区",
                        "children": [
                            {
                                "name": "user4",
                                "age": 22
                            }
                        ]
                    },
                    {
                        "district": "玄武区",
                        "children": [
                            {
                                "name": "user5",
                                "age": 21
                            }
                        ]
                    }
                ]
            },
            {
                "city": "镇江",
                "children": [
                    {
                        "district": "京口区",
                        "children": [
                            {
                                "name": "user6",
                                "age": 21
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
var userList = tree2list(userTree, 'province/city/district');
```

# 代码实现
```javascript
function tree2list(tree, path) {
    path = path.split('/');
    const list = [];

    const dps = (target, result, keyIdx) => {
        target.forEach(item => {
            if(item.children) {
                const key = path[keyIdx];
                if(key === undefined) return;
                result[key] = item[key];
                dps(item.children, {...result}, keyIdx + 1);
            }else {
                list.push({...result, ...item});
            }
        })
    }
    dps(tree, {}, 0);
    return list;
}

```