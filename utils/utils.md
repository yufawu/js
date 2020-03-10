### 1.从对象数组中提取某一属性值组成新数组
``` js
let objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
``` 
例如，提取上面中foo的值为][1,3,5]

#### 方法1
``` js
function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]
```

#### 方法2
使用函数映射的方式处理
``` js
var result = objArray.map(a => a.foo); //return [1,3,5]
```
对应es5的写法 Array.prototype.map
``` js
var result = ObjArray.map(function (a) {
    retrun a.foo
})
```