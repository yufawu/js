//首页报价查询数据
const searchListMock = [{
    fabbreviatedname: "域禾国际物流", //DHL代理价
    fbasepriceid: "0", //string
    fcalculationmethod: 3,
    fcarryweight: 0.5, //续重
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "DHL代理价",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 1, //折扣 1-无折扣
    fenddate: 1585670100000,
    fendneedtime: 5, //时效结束--天
    fendweight: 2, //结束重量
    ffirstprice: 0, //首重价
    fhawbtype: "WPX",
    fisduty: 1, //是否含税，0是
    fisfuel: 1, //是否含有燃油 0是
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 0, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 3,
    fstartweight: 2,
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 102.66
},
{
    fabbreviatedname: "域禾国际物流", //香港DH代理价
    fbasepriceid: "0", //string
    fcalculationmethod: 3,
    fcarryweight: 0.5, //续重
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "香港DH代理价",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 1, //折扣 1-无折扣
    fenddate: 1585670100000,
    fendneedtime: 5, //时效结束--天
    fendweight: 2, //结束重量
    ffirstprice: 0, //首重价
    fhawbtype: "WPX",
    fisduty: 1, //是否含税，0是
    fisfuel: 1, //是否含有燃油 0是
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 0, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 3,
    fstartweight: 2,
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 112.66
},
{
    fabbreviatedname: "域禾国际物流", //专线
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.5,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "美国专线",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.9,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 1, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 2,
    fstartweight: 3, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 162.66
},
{
    
    fabbreviatedname: "域禾国际物流", //专线
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.5,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "日本专线",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.9,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 1, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 2,
    fstartweight: 3, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 172.66
},
{
    fabbreviatedname: "域禾国际物流", //专线
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.5,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "欧洲专线专线",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.9,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 1, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 2,
    fstartweight: 3, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 178.66
},
{ 
    fabbreviatedname: "域禾国际物流", //专线
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.5,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "专线--德国",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.9,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 1, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 2,
    fstartweight: 3, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 179.66
},
{
    fabbreviatedname: "域禾国际物流", //香港DHL标准价
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.5,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "TNT标准价",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.9,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 1, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 2,
    fstartweight: 3, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 166.66
},
{
    fabbreviatedname: "域禾国际物流", //香港DHL标准价
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.5,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "美国TNT",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.9,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 1, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 2,
    fstartweight: 3, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 133.66
},
{
    fabbreviatedname: "域禾国际物流", //香港DHL标准价
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.5,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "德国TNT标准价",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.9,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 1, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 2,
    fstartweight: 3, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 145.66
},
{
    fabbreviatedname: "域禾国际物流", //香港DHL标准价
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.5,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "香港TNT",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.9,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 142.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 1, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 2,
    fstartweight: 3, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 167.66
},
{
    fabbreviatedname: "域禾国际物流", //HKDHL-含油电子烟/电池杆
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.3,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "UPS美红WE包税",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.87,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 0,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 152.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 3, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 4,
    fstartweight: 5, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 182.66
},
{
    fabbreviatedname: "域禾国际物流", //HKDHL-含油电子烟/电池杆
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.3,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "美国UPSWE包税",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.87,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 0,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 152.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 3, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 4,
    fstartweight: 5, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 153.66
},
{
    fabbreviatedname: "域禾国际物流", //大陆联邦电子烟IE
    fbasepriceid: "0",
    fcalculationmethod: 3,
    fcarryweight: 1,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "日本UPS包税",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.67,
    fenddate: 1585670100000,
    fendneedtime: 10,
    fendweight: 2,
    ffirstprice: 4,
    fhawbtype: "WPX",
    fisduty: 0,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 162.33,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 3, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 4,
    fstartweight: 0, //首重费
    fuel: 18.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 102.65
},
{
    fabbreviatedname: "域禾国际物流", //HKDHL-含油电子烟/电池杆
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.3,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "欧洲UPS包税",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.87,
    fenddate: 1585670100000,
    fendneedtime: 6,
    fendweight: 2,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 0,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 152.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 3, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 4,
    fstartweight: 5, //首重费
    fuel: 17.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 142.66
},
{
    fabbreviatedname: "域禾国际物流",
    fbasepriceid: "0",
    fcalculationmethod: 2,
    fcarryweight: 0.4,
    fchannelid: "6372763f534b41b1a0fe4c5ae3d15627",
    fchannelname: "日本FEDEX",
    fcompanyid: "ebf420bdb9ee4c22abe8e7ad8aefd53f",
    fdiscount: 0.8,
    fenddate: 1585670100000,
    fendneedtime: 12,
    fendweight: 4,
    ffirstprice: 3,
    fhawbtype: "WPX",
    fisduty: 1,
    fisfuel: 0,
    fname: "香港DHL代理-直客1127",
    fparentid: "d5cd53abf7df4896b4daa377767cd483",
    fplcode: "YOHO-HD01",
    fprice: 152.66,
    fpricebillid: "18cfd9553a8b42d39a76c998f952687c",
    fregistrationfee: 10, //挂号费
    fremark: "",
    fstartdate: 1577202900000,
    fstartneedtime: 3,
    fstartweight: 5, //首重费
    fuel: 16.75,
    fzonebillid: "3f492fafb8ed45e08796ba96e78bf74a",
    fzoneentityid: "4625fa6bbeef4e42a9ef099e387ee646",
    fzonenumber: "29",
    totalPrice: 125.88
}
]
    //首页轮播图
const bannerListMock = [{
            fid: "98419d034d794d548b1de4e3368c9d8a",
            imgurl: "https://api-sys.xfx361.com/img//static/login/images/2020022402583197623.jpg"
        },
        {
            fid: "98419d034d794d548b1de4e3368c9d8b",
            imgurl: "http://erp.xfx361.com/FileManager/ImageBanner/935396977267576832/20191230102730.jpg"
        },
        {
            fid: "98419d034d794d548b1de4e3368c9d8c",
            imgurl: "http://erp.xfx361.com/FileManager/ImageBanner/935396977267576832/20191230102744.jpg"
        },
        {
            fid: "98419d034d794d548b1de4e3368c9d8d",
            imgurl: "http://erp.xfx361.com/FileManager/ImageBanner/935396977267576832/20191230102758.jpg"
        }
    ]
    // 报价详情--渠道详情--解析HTML，
const remarkMock = '<p>而除了提供传统的快递、小包发货服务以外，小飞匣还<strong>自建了高性价比的美国、欧洲、马来西亚、印尼、日本等电子烟物流专线，</strong>同时还能够依托自主研发的供应链管理系统为厂商们（品牌商）提供<strong>全球仓储、物流管理、进出口代采代销、退税等服务，增强弹性管理能力，</strong>并以中间商的身份为厂商降低风险和成本、提高效益。</p><p>√ 时效较快、精准，当天寄，当天到；<br>√ 快件超时送达，客户可申请抵免运费；<br>√ 当您寄递的快件发生损坏或遗失时，一经核实即可按照实际损失赔付，损坏最高可赔付200元，遗失最高可赔付500元；<br>√ 顺丰所有增值服务均支持。</p>'

//查轨迹--轨迹详情

//用户列表--我的分享数
const userListMock = [{
        fwxname: 'https://wx.qlogo.cn/mmopen/vi_32/1sia364kdgzmASd4hKibowNlglNov6FWp6q1STM9781OYzRNO49m0FAVBUKkdpZNUtjs1uZHygia1ProLN9nRibjUg/132',
        fimgurl: '小飞匣 柯柯',
        fcreatetime: '1583732408000'
    },
    {
        fwxname: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKyvmThQGORXpxPJYy8gLcLE6icf8YXxlMo9GiaFfiaEkpvUn00zC4LIzeGBtGSl81CVZUTvUyhOqcnw/132',
        fimgurl: '小飞匣--汤斌斌',
        fcreatetime: '1584073201000'
    },

]

//公司简介
const companyIntroduce = '<p>--我们的理念--</p><p>　　服务承诺：老三区范围内，2小时到服务现场，遵守职业道德、保守商业秘密</p><p>　　服务宗旨：及时、专业、高效</p><p>　　服务理念：诚信、规范、创新</p><p>　　业务作风：我们每天都以热心和微笑对待每一位客户</p><p>　　企业价值：以先进的技术和满意的服务换取最大的生存价值</p><p>　　--我们的优势--</p><p>　　为您节约开支</p><p>　　对大部分企业来讲，计算机数量不多，雇佣专职人员来维护需要支付相应的工资、福利和保险等费用，而维护工作量又不大，因而请专人来维护成本过高。采用我公司的电脑维护服务，可以大大降低因电脑维护而造成的相关费用，为您及您的企业节约开支!</p><p>　　我们的经验丰富</p><p>　　我们为企业提供功能强大的服务。包括建立系统设备档案、系统维护记录、系统维护记录分析等项目。我们的专业工程师不仅经验丰富，而且随时能获得公司强大的软、硬件技术支持，保障用户系统正常持续运行!</p>'


const getContactaddreMock = {
    companyname: 'EC电子烟智慧物流',
    addreList: [{
            faddress: "测试公司地址1测试公司地址1测试公司地址1测试公司地址1",
            fname: "F RQWE R",
            fphone: "QWER QW",
            ftype: "CA"
        },
        {
            faddress: "测试仓库地址1测试仓库地址1测试仓库地址1测试仓库地址1测试仓库地址1测试仓库地址1",
            fname: "234234",
            fphone: "234234",
            ftype: "WH"
        },
        {
            faddress: "测试公司地址2测试公司地址2测试公司地址2测试公司地址2",
            fname: "F RQWE R",
            fphone: "QWER QW",
            ftype: "CA"
        },
        {
            faddress: "测试仓库地址2",
            fname: "234234",
            fphone: "234234",
            ftype: "WH"
        },
    ]
}
const getLogoMock = [ //公司logo
    {
        fid: "fd2f379cdbbe42f3867517dd4deeb775",
        imgurl: "https://api-sys.xfx361.com/img//static/login/images/2020031410240275110.png"
    }
]

const  msgListmock =[ 
    {title:'1、第一条公告',url:'www.baidu.com',fid: "be0af687fdcc4a5c954dabd1f7bc523a"}, 
    {title:'2、深圳小飞匣现代物流科技有限公司深圳小飞匣现代物流科技有限公司深圳小飞匣现代物流科技有限公司',url:'www.xfx361.com',fid: "be0af687fdcc4a5c954dabd1f7bc523a"}, 
    {title:'3、第三条公告',url:'www.xfx361.com',fid: "be0af687fdcc4a5c954dabd1f7bc523a"} 
  ] 
module.exports = {
    searchListMock: searchListMock, //首页报价查询数据
    remarkMock: remarkMock, // 报价详情--渠道详情--解析HTML，
    bannerListMock: bannerListMock, //轮播图
    userListMock: userListMock, //分享客户数
    companyIntroduce: companyIntroduce, // 公司简介
    getContactaddreMock: getContactaddreMock, //公司联系地址
    getLogoMock: getLogoMock, //公司logo
    msgListmock:msgListmock,//公告 

}