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

### 2.对象排序，按照首字母
```js
function objSort (data) {
  let newData = {};
  Object.keys(data).sort().map(key =>{
    newData[key] = data[key]
  })
  return newData
}
```

### 3.获取当前时间 
根据不同场景的需要，进行相应拼接，返回对应的值
``` js
function getNowFormatDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) { //对月份进行处理，1-9月在前面添加一个“0”
      month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {//对天数进行处理，1-9月在前面添加一个“0”
      strDate = '0' + strDate;
  }
  // let currentdate = year + '-' + month + '-' + strDate; //2020-01-01
  let currentdate = year + month  + strDate; //20200101
  return currentdate;
}
```

### 4.对象形式的数组排序
传入对象数组、需要排序的属性，从低到高（顺序），从高到低（逆序）存在问题：两个一起使用会有干扰
``` js
function sortKey(array,key) {  //从低到高
    return array.sort(function(a,b){
      let x = a[key]
      let y = b[key]
      return x-y
    })
}
function sortKeyReverse(array,key) { //从高到低
  return array.sort(function(a,b){
    let x = a[key]
    let y = b[key]
    return y-x
  })
}
```