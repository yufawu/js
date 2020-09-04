// 请求地址
// const ApiRootUrl = 'http://api-sys.xfx361.com/appMiniPro/v1'; // http
const ApiRootUrl = 'https://api-sys.xfx361.com/appMiniPro/v1'; //https--线上
// const ApiRootUrl = 'http://192.168.2.243/appMiniPro/v1'; //本地测试

module.exports = {
  WechatLogin: ApiRootUrl + '/wechatLogin', //注册登录
  WechatRefreshLogin: ApiRootUrl + '/wechatRefreshLogin', //刷新登录状态
  // FindBanner: ApiRootUrl + '/findBanner', //首页轮播
  FindBanner: ApiRootUrl + '/initCompany',// 初始化公司信息 
  CheckCode: ApiRootUrl + '/checkCode', //验证邀请码
  GetVerifyCode: ApiRootUrl + '/getVerifyCode', //获取验证码
  BindPhone: ApiRootUrl + '/bindPhone', //验证验证码
  SearchQuotation: ApiRootUrl + '/search/quotation', //报价查询
  SearchTrack: ApiRootUrl + '/search/track',//轨迹查询
  SearchContent: ApiRootUrl + '/search/content',//渠道详情
  GetSgin: ApiRootUrl + '/getSgin', //获取二维码scene数据
  Getwxacodeunlimit: ApiRootUrl + '/getwxacodeunlimit',//获取带scene的二维码
  BindInviteCode: ApiRootUrl + '/bindInviteCode',//绑定邀请码
  GetCompanyPreface: ApiRootUrl + '/getCompanyPreface', //查看公司介绍
  GetContactaddre: ApiRootUrl + '/getContactaddre', //查看公司联系地址
  FindPartake: ApiRootUrl + '/findPartake',//分享用户
  SearchLogo: ApiRootUrl + '/logo',// logo图查询
  GetNews: ApiRootUrl + '/news',// 获取新闻列表 
  GetNewsData: ApiRootUrl + '/newsdata',// 获取新闻详情 
  GetPort: ApiRootUrl + '/port',// 包机运力 
  GetBlackList: ApiRootUrl + '/blackCompany',// 黑名单查询 

  GetArticletype:ApiRootUrl + '/bbs/articletype',//发帖类型
  GetFindArticle: ApiRootUrl + '/bbs/findArticle',// 发帖列表 
  GetApost: ApiRootUrl + '/bbs/apost',// 用户发帖 
  GeArticle: ApiRootUrl + '/bbs/getArticle ',// 查看帖子详情
  GetComment: ApiRootUrl + '/bbs/comment',// 评论
  GetFindComment: ApiRootUrl + '/bbs/findComment',// 查看评论
  GetDeletCcomment: ApiRootUrl + '/bbs/deletCcomment',// 删除评论
  GetViewCount: ApiRootUrl + '/bbs/viewCount',// 浏览量统计
  GetLikenum: ApiRootUrl + '/bbs/likenum',// 点赞
  GetApply: ApiRootUrl + '/bbs/apply',// 报名
  GeToPay: ApiRootUrl + '/payment/toPay',// 支付

}