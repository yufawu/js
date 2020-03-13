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

### 5.fkey加密，传入要加密的参数，然后添加fkey作为一个新的对象返回
传入的参数可不排序，该方法中会先进行排序，然后追加一个fkey值后返回，
```js
function getFkey (obj){
  let currentdate = getNowFormatDate();//获取当前时间
  let obj_sort = objSort(obj);//进行排序
  let json_obj = JSON.stringify(obj_sort);
  let fkey_obj = md5.hexMD5(json_obj+currentdate+"自定义值");//生成fkey
  obj.fkey = fkey_obj; //将生成的fkey值添加到之前的obj中，作为请求参数
  return obj;
}
```

### 6.判断两个对象的值是否相等
``` js
function isEqual (a, b) {
  const classNameA = toString.call(a)
  const classNameB = toString.call(b)
  // 如果数据类型不相等，则返回false
  if (classNameA !== classNameB) {
    return false
  } else {
    // 如果数据类型相等，再根据不同数据类型分别判断
    if (classNameA === '[object Object]') {
      for (let key in a) {
        if (!isEqual(a[key], b[key])) return false
      }
      for (let key in b) {
        if (!isEqual(a[key], b[key])) return false
      }
      return true
    } else if (classNameA === '[object Array]') {
      if (a.length !== b.length) {
        return false
      } else {
        for (let i = 0, len = a.length; i < len; i++) {
          if (!isEqual(a[i], b[i])) return false
        }
        return true
      }
    } else if (classNameA === '[object Function]') {
      return a.toString() === b.toString()
    } else {
      return Object.is(a, b)
    }
  }
}
```
使用 传入a,b两个值，如果相等则返回true,不等则返回false
场景：可用于判断每次请求参数的值是否相等，如果相等就不请求接口，这样做可以避免重复点击导致的接口请求