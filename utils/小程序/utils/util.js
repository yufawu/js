const md5 = require('../utils/md5.js');


const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/**
 * 判断一个对象是否为空
 * null undefined {}
 */
function isObjNull(obj = {}) {
    if (!obj) return true
    return Object.keys(obj).length === 0
}

/**
 * 拼接 URL 参数
 */
function appendParam(obj = {}) {
    if (isObjNull(obj)) return ''
    let str = '?'
    for (let key in obj) {
        if (typeof obj[key] == 'undefined') {
            continue
        }
        if (str == '?') {
            str += key + '=' + obj[key]
        } else {
            str += '&' + key + '=' + obj[key]
        }
    }
    return str
}
/**
 * 获取日期格式为2020-01-01
 */
function getNowFormatDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) { //对月份进行处理，1-9月在前面添加一个“0”
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) { //对天数进行处理，1-9月在前面添加一个“0”
        strDate = '0' + strDate;
    }
    // let currentdate = year + '-' + month + '-' + strDate; //2020-01-01
    let currentdate = year + month + strDate; //20200101
    return currentdate;
}
/**
 * 将时间戳转化为对应的日期
 * timeStamp-- 时间戳
 * fmt --想要返回的格式 yyyy-MM-dd (返回的是2020-01-01) yy-MM-dd hh:mm(返回2020-01-01:13:10)  --注意MM必须是大写的，否则会转换错乱 
 * 如果传入格式为 yyyy MM dd 则返回值是2020 01 01  - 相当于是分隔符，
 *                  
 */
function formatDate(timeStamp, fmt) {
    let date = new Date(timeStamp) //将时间戳先转换为标准时间
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };

    // 遍历这个对象
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            // console.log(`${k}`)
            // console.log(RegExp.$1)
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

/**
 * 对象排序，按照首字母
 */
function objSort(data) {
    let newData = {};
    Object.keys(data).sort().map(key => {
        newData[key] = data[key]
    })
    return newData
}



/**
 * fkey加密,传入要加密的参数（要排序），然后添加fkey作为一个新的对象返回
 */
function getFkey(obj) {
    let currentdate = getNowFormatDate(); //获取当前时间
    let obj_sort = objSort(obj); //进行排序
    let json_obj = JSON.stringify(obj_sort);
    let fkey_obj = md5.hexMD5(json_obj + currentdate + "SZXFX361"); //生成fkey
    obj.fkey = fkey_obj; //将生成的fkey值添加到之前的obj中，作为请求参数
    return obj;
}
/**
 * 页面之间的传值
 */
function pageData() {
    let pages = getCurrentPages();
    if (pages.length > 1) {
        var prevPage = pages[pages.length - 2];
        // prevPage.changeData();
        prevPage.setData({
            selectedCountry: e.currentTarget.dataset
        });
    }
}
/**
 * 对象形式的数组排序，传入对象数组、需要排序的属性 ,从低到高（顺序+1),从高到低（逆序-1）,两个一起使用会有干扰
 */
function sortKey(array, key) {
    return array.sort(function(a, b) {
        let x = a[key]
        let y = b[key]
        return x - y
    })
}

function sortKeyReverse(array, key) {
    return array.sort(function(a, b) {
        let x = a[key]
        let y = b[key]
        return y - x
    })
}
/**
 * 计算含燃油的总运费
 */
function totalPrice(totalPrice, fuel) {
    return totalPrice * (1 + fuel / 100)
}

/**
 * 判断两个对象的值是否相等
 */
function isEqual(a, b) {
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
/**
 * 判断手机号是否正确
 */
function isPhone(value) {
    let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    return reg.test(value)
}

function costCount(currentLevel, upLevel) {
    let costList = [0, 1999, 7999, 11999, 49999]
        // let costList = [0, 0.01, 0.02, 0.03, 0.04]
    let needCost = costList[upLevel] - costList[currentLevel]
    if (needCost < 0) {
        return 0
    } else {
        return needCost
    }
}


module.exports = {
    formatTime: formatTime,
    appendParam: appendParam,
    getNowFormatDate: getNowFormatDate,
    getFkey: getFkey,
    pageData: pageData,
    sortKey: sortKey, //顺序
    sortKeyReverse: sortKeyReverse, //逆序
    totalPrice: totalPrice,
    isEqual: isEqual, //判断值是否相等
    formatDate: formatDate, //时间戳转化
    isPhone,
    isPhone, //判断是否是正确的手机号
    costCount,
    costCount, //会员注册时计算费用
}