const utils = require('../utils/util.js')

// loading配置，请求次数统计
function startLoading() {
  wx.showToast({
    title: '加载中',
    icon: 'loading',
    mask: true,
    duration:20000
  });
}
function endLoading() {
  wx.hideToast();
}
// 声明一个对象用于存储请求个数
var needLoadingRequestCount = 0;
function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
};
function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
};

/**
 * GET请求封装
 */
function get(url, data = {}) {
  return request(url, data, 'GET')
}

/**
 * POST请求封装
 */
function post(url, data = {}) {
  // let oldData
  // console.log(data,oldData,utils.isEqual(data,oldData),'判断参数')
  // if (!utils.isEqual(data,oldData)){
  // return request(url, data, 'POST')
  // }
  // oldData = JSON.parse(JSON.stringify(data))
  return request(url, data, 'POST')
}

/**
 * 微信的request
 */
function request(url, data = {}, method = "GET") {
  var contentType = 'application/json'
  wx.showNavigationBarLoading();
  showFullScreenLoading();
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': contentType,
        // 'Authorization': 'Bearer ' + getDataByKey('token')
        // 'Authorization': 'f256d3c8e421cea0b7a4da950fa19f46'

      },
      success: function (res) {
        if (res.statusCode == 200) {
          //请求正常200
          console.log('res', res.data)
          if(res.data.status === false && res.data.msg === 'openid错误'){  
             console.log('请重新登录')
             wx.showToast({
              title: '查询失败，请重新注册/登录',
              icon: 'none'
          })
             wx.navigateTo({ //跳转到登录页面
              url: '../bindPhone/bindPhone',
            })
          }else{
            resolve(res)
            tryHideFullScreenLoading();
          }
      

        } else if (res.statusCode == 401) {
          //此处验证了token的登录失效，如果不需要，可以去掉。
          //未登录，跳转登录界面
          reject("登录已过期")
          wx.showModal({
            title: '提示',
            content: '登录已过期，请立即登录，否则无法正常使用',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.navigateTo({
                  url: '/pages/login/login?toPageUrl=401',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        } else {
          //请求失败
          reject("请求失败：" + res.statusCode),
          reject(res)
          tryHideFullScreenLoading(); //关闭弹出框的加载按钮
          wx.hideNavigationBarLoading(); //关闭顶部的加载按钮
          wx.showToast({ //提示404请求失败情况，3s后自动关闭
            title: '网络异常,请检查网络再试',
            icon: 'none',
            mask: true,
            duration:3000,
          });
          setTimeout(function () {
            wx.hideToast()
          }, 3000)
        }
      },
      fail: function (err) {
        reject("服务器连接异常，请检查网络再试")
        tryHideFullScreenLoading(); //关闭之前的提示框
        wx.hideNavigationBarLoading();//关闭顶部的加载按钮
        wx.showToast({ //弹出请求失败，3秒后自动关闭
          title: '网络出小差了,请检查网络再试',
          icon: 'none',
          mask: true,
          duration:3000,
        });
        setTimeout(function () {
          wx.hideToast()
        }, 3000)

      },
      complete() {
        tryHideFullScreenLoading();
        wx.hideNavigationBarLoading(); //请求结束后，关闭顶部导航图标
      }
    })
  });
}

/**
 * 微信登录接口
 */
function wxLogin(){
  return new Promise((resovle,reject) =>{
    wx.login({
      success(res){
        if (res.code){
          resovle(res)
        }else{
          reject({message:'登录失败'})
        }
      },
      fail(err){
        reject(err)
      }
    })
  })
}

/**
 * 微信获取用户信息
 */
function wxGetUserInfo () {
  return new Promise ((resolve,reject) =>{
    wx.getUserInfo({
     success(res){
      resolve(res)
     },
     faai(err){
       reject(err)
     }
    })
  })
}


module.exports = {
  request,
  get,
  post,
  wxLogin,
  wxGetUserInfo
}
