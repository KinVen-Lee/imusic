import { get, post } from "./axios";

/**
 * 1. 手机登录
 * 必选参数 :
 * phone: 手机号码
 * password: 密码
 * 可选参数 :
 * countrycode: 国家码，用于国外手机号登录，例如美国传入：1
 * md5_password: md5加密后的密码,传入后 password 将失效
 * 接口地址 : /login/cellphone
 * 调用例子 : /login/cellphone?phone=xxx&password=yyy /login/cellphone?phone=xxx&md5_password=yyy
 * @param params
 */
export async function postLogin(params: { phone: string; password: String }) {
  const result = await post("/login/cellphone", params);
  return result;
}

/**
 * 刷新登录
 * 说明 : 调用此接口 , 可刷新登录状态
 */
export async function LoginRefresh() {
  const result = await get("/login/refresh");
  return result;
}
/**
 * 发送验证码
 * 说明 : 调用此接口 ,传入手机号码, 可发送验证码
 * 必选参数 : phone: 手机号码
 * 可选参数 : ctcode: 国家区号,默认86即中国
 * 接口地址 : /captcha/sent
 * 调用例子 : /captcha/sent?phone=13xxx
 * @param params
 */
export async function captchaSent(params: { phone: string; ctcode?: string }) {
  const result = await get("/captcha/sent", params);
  return result;
}
/**
 * 验证验证码
 * 说明 : 调用此接口 ,传入手机号码和验证码, 可校验验证码是否正确
 * 必选参数 :
 *     phone: 手机号码
 *     captcha: 验证码
 * 可选参数 :
 *     ctcode: 国家区号,默认86即中国
 * 接口地址 : /captcha/verify
 * 调用例子 : /captcha/verify?phone=13xxx&captcha=1597
 * @param params
 */
export async function captchaVerify(params: {
  phone: string;
  captcha: string;
  ctcode?: string;
}) {
  const result = await get("/captcha/verify", params);
  return result;
}
/**
 * 注册(修改密码)
 *  说明 : 调用此接口 ,传入手机号码和验证码,密码,昵称, 可注册网易云音乐账号(同时可修改密码)
 * 必选参数 :
 *    captcha: 验证码
 *    phone : 手机号码
 *    password: 密码
 *    nickname: 昵称
 * 接口地址 : /register/cellphone
 * 调用例子 : /register/cellphone?phone=13xxx&password=xxxxx&captcha=1234&nickname=binary1345
 * @param params
 */
export async function registerCellphone(params: {
  phone: string;
  captcha: string;
  password: string;
  nickname: string;
}) {
  const result = await post("/register/cellphone", params);
  return result;
}
/**
 * 更换绑定手机
 * 说明 : 调用此接口 ,可更换绑定手机(流程:先发送验证码到原手机号码,再发送验证码到新手机号码然后再调用此接口)
 * 必选参数 :
 *    oldcaptcha: 原手机验证码
 *    captcha: 新手机验证码
 *    phone : 手机号码
 *    ctcode : 国家区号,默认86即中国
 * 接口地址 : /rebind
 * 调用例子 : /rebind?phone=xxx&oldcaptcha=1234&captcha=5678
 * @param params
 */
export async function rebind(params: {
  oldcaptcha: string;
  captcha: string;
  phone: string;
  ctcode: string;
}) {
  const result = await post("/rebind", params);
  return result;
}
/**
 * 退出登录
 * 说明 : 调用此接口 , 可退出登录
 * 调用例子 : /logout
 */
export async function logout() {
  const result = await get("/logout");
  return result;
}

/**
 * 登录状态
 * 说明 : 调用此接口,可获取登录状态
 * 接口地址 : /login/status
 */
export async function logjinSatus() {
  const result = await get("/login/status");
  return result;
}

/**
 * banner
 * 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
 * 可选参数 :
 * type:资源类型,对应以下类型,默认为 0 即PC
 *    0: pc
 *    1: android
 *    2: iphone
 *    3: ipad
 * 接口地址 : /banner
 * 调用例子 : /banner, /banner?type=2
 */
export async function getBanner(url = "/api/banner", params = { type: 0 }) {
  const result = await get(url, params);
  return result;
}
export async function getSongListRecom(params = { limit: 30 }) {
  const result = await get("/personalized", params);
  return result.result;
}

export async function getSongRecom(url: string) {
  const result = await get(url);
  return result.result;
}

/**
 * 获取用户详情
 *说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
 *必选参数 : uid : 用户 id
 *接口地址 : /user/detail
 *调用例子 : /user/detail?uid=32953014
 */
export async function getUserDetail(url: string, params: { uid: string }) {
  const result = await get(url, params);
  return result.result;
}

/**
 * 获取账号信息
 * 说明 : 登录后调用此接口 ,可获取用户账号信息
 * 接口地址 : /user/account
 * 调用例子 : /user/account
 */
export async function getUserAccount(url: string) {
  const result = await get(url);
  return result.result;
}
/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量
 * 说明 : 登录后调用此接口 , 可以获取用户信息
 * 接口地址 : /user/subcount
 * 调用例子 : /user/subcount
 */
export async function getUserSubcount(url: string) {
  const result = await get(url);
  return result.result;
}

/**
 * 获取用户等级信息
 * 说明 : 登录后调用此接口 , 可以获取用户等级信息,包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度,对应 https://music.163.com/#/user/level
 * 接口地址 : /user/level
 * 调用例子 : /user/level
 */
export async function getUserLevel(url: string) {
  const result = await get(url);
  return result.result;
}

/**
 * 获取用户绑定信息
 * 说明 : 登录后调用此接口 , 可以获取用户绑定信息
 * 必选参数 : uid : 用户 id
 * 接口地址 : /user/binding
 * 调用例子 : /user/binding?uid=32953014
 */
export async function getUserBinding(url: string, params: { uid: string }) {
  const result = await get(url);
  return result.result;
}

/**
 * 用户绑定手机
 * 说明 : 登录后调用此接口 , 可以更换绑定手机
 * 必选参数 :
 * phone : 手机号码
 * oldcaptcha: 原手机号码的验证码
 * captcha:新手机号码的验证码
 * 可选参数 :
 * countrycode: 国家地区代码,默认86
 * 接口地址 : /user/replacephone
 * 调用例子 : /user/replacephone?phone=xxx&captcha=1234&oldcaptcha=2345
 */

/**
 * 更新用户信息
 * 说明 : 登录后调用此接口 , 传入相关信息,可以更新用户信息
 * 必选参数 :
 * gender: 性别 0:保密 1:男性 2:女性
 * birthday: 出生日期,时间戳 unix timestamp
 * nickname: 用户昵称
 * province: 省份id
 * city: 城市id
 * signature：用户签名
 * 接口地址 : /user/update
 * 调用例子 : /user/update?gender=0&signature=测试签名&city=440300&nickname=binary&birthday=1525918298004&province=440000
 */

/**
 * 更新头像
 * 说明 : 登录后调用此接口,使用'Content-Type': 'multipart/form-data'上传图片formData(name为'imgFile'),可更新头像(参考:https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/public/avatar_update.html),支持命令行调用,参考module_example目录下`avatar_upload.js`
 * 可选参数 :
 * imgSize : 图片尺寸,默认为300
 * imgX : 水平裁剪偏移,方形图片可不传,默认为0 imgY : 垂直裁剪偏移,方形图片可不传,默认为0
 * 接口地址 : /avatar/upload
 * 调用例子 : /avatar/upload?imgSize=200
 */
/**
 * 国家编码列表
 * 说明 : 调用此接口,可获取国家编码列表
 * 接口地址 : /countries/code/list
 */

/**
 * 获取用户歌单
 * 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
 * 必选参数 : uid : 用户 id
 * 可选参数 :
 * limit : 返回数量 , 默认为 30
 * offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * 接口地址 : /user/playlist
 * 调用例子 : /user/playlist?uid=32953014
 */

/**
 * 更新歌单
 * 说明 : 登录后调用此接口,可以更新用户歌单
 * 必选参数 :
 * id:歌单id
 * name:歌单名字
 * desc:歌单描述
 * tags:歌单tag ,多个用 `;` 隔开,只能用官方规定标签
 * 接口地址 : /playlist/update
 * 调用例子 : /playlist/update?id=24381616&name=新歌单&desc=描述&tags=欧美
 */

/**
 * 更新歌单描述
 * 说明 : 登录后调用此接口,可以单独更新用户歌单描述
 * 必选参数 :
 * id:歌单id
 * desc:歌单描述
 * 接口地址 : /playlist/desc/update
 * 调用例子 : /playlist/desc/update?id=24381616&desc=描述
 */

/**
 * 更新歌单名
 * 说明 : 登录后调用此接口,可以单独更新用户歌单名
 * 必选参数 :
 * id: 歌单id
 * name: 歌单名
 * 接口地址 : /playlist/name/update
 * 调用例子 : /playlist/name/update?id=24381616&name=歌单名
 */

/**
 * 更新歌单标签
 * 说明 : 登录后调用此接口,可以单独更新用户歌单标签
 * 必选参数 :
 * id: 歌单id
 * tags: 歌单标签
 * 接口地址 : /playlist/tags/update
 * 调用例子 : /playlist/tags/update?id=24381616&tags=学习
 */

/**
 * 歌单封面上传
 * 说明 : 登录后调用此接口,使用'Content-Type': 'multipart/form-data'上传图片formData(name为'imgFile'),可更新歌单封面(参考:https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/public/playlist_cover_update.html)
 * 必选参数 :
 * id: 歌单id 3143833470
 * 可选参数 :
 * imgSize : 图片尺寸,默认为300
 * imgX : 水平裁剪偏移,方形图片可不传,默认为0 imgY : 垂直裁剪偏移,方形图片可不传,默认为0
 * 接口地址 : /playlist/cover/update
 * 调用例子 : /playlist/cover/update?id=3143833470&imgSize=200
 */

/**
 * 调整歌单顺序
 * 说明 : 登录后调用此接口,可以根据歌单id顺序调整歌单顺序
 * 必选参数 :
 * ids: 歌单id列表
 * 接口地址 : /playlist/order/update
 * 调用例子 : /playlist/order/update?ids=[111,222]
 */

/**
 * 调整歌曲顺序
 * 说明 : 登录后调用此接口,可以根据歌曲id顺序调整歌曲顺序
 * 必选参数 :
 * pid: 歌单id
 * ids: 歌曲id列表
 * 接口地址 : /song/order/update
 * 调用例子 : /song/order/update?pid=2039116066&ids=[5268328,1219871]
 */

/**
 * 获取用户电台
 *  说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户电台
 * 必选参数 : uid : 用户 id
 * 接口地址 : /user/dj
 * 调用例子 : /user/dj?uid=32953014
 */

/**
  * 获取用户关注列表
说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户关注列表

必选参数 : uid : 用户 id

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 ,如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

接口地址 : /user/follows

调用例子 : /user/follows?uid=32953014
  */

/**
   * 获取用户粉丝列表
说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户粉丝列表

必选参数 : uid : 用户 id

可选参数 : limit : 返回数量 , 默认为 30

lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据

接口地址 : /user/followeds

调用例子 : /user/followeds?uid=32953014 /user/followeds?uid=416608258&time=1560152549136
   */

/**
 * 获取用户动态
说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户动态

必选参数 : uid : 用户 id

可选参数 : limit : 返回数量 , 默认为 30

lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据

接口地址 : /user/event

调用例子 : /user/event?uid=32953014 /user/event?uid=32953014&limit=1&lasttime=1558011138743

返回结果的type参数对应:

18 分享单曲
19 分享专辑
17、28 分享电台节目
22 转发
39 发布视频
35、13 分享歌单
24 分享专栏文章
41、21 分享视频
 */

/**
  * 转发用户动态
说明 : 登录后调用此接口 ,可以转发用户动态

必选参数 : uid : 用户 id

evId : 动态 id

forwards : 转发的评论

接口地址 : /event/forward

调用例子 : /event/forward?evId=6712917601&uid=32953014&forwards=测试内容
  */

/**
 * 删除用户动态
说明 : 登录后调用此接口 ,可以删除用户动态

必选参数 : evId : 动态 id

接口地址 : /event/del

调用例子 : /event/del?evId=6712917601
 */

/**
 * 分享歌曲、歌单、mv、电台、电台节目到动态
说明 : 登录后调用此接口 ,可以分享歌曲、歌单、mv、电台、电台节目到动态

必选参数 : id : 资源 id （歌曲，歌单，mv，电台，电台节目对应 id）

可选参数 : type: 资源类型，默认歌曲 song，可传 song,playlist,mv,djradio,djprogram

msg: 内容，140 字限制，支持 emoji，@用户名（/user/follows接口获取的用户名，用户名后和内容应该有空格），图片暂不支持

接口地址 : /share/resource

调用例子 : /share/resource?id=1297494209&msg=测试 /share/resource?type=djradio&id=336355127 /share/resource?type=djprogram&id=2061034798 /share/resource?type=djprogram&id=2061034798&msg=测试@binaryify 测试
 */

/**
 * 获取动态评论
说明 : 登录后调用此接口 , 可以获取动态下评论

必选参数 : threadId : 动态 id，可通过 /event，/user/event 接口获取

接口地址 : /comment/event

调用例子 : /comment/event?threadId=A_EV_2_6559519868_32953014
 */

/**
 * 关注/取消关注用户
说明 : 登录后调用此接口 , 传入用户 id, 和操作 t,可关注/取消关注用户

必选参数 :

id : 用户 id

t : 1为关注,其他为取消关注

接口地址 : /follow

调用例子 : /follow?id=32953014&t=1
 */

/**
 * 获取用户播放记录
说明 : 登录后调用此接口 , 传入用户 id, 可获取用户播放记录

必选参数 : uid : 用户 id

可选参数 : type : type=1 时只返回 weekData, type=0 时返回 allData

接口地址 : /user/record

调用例子 : /user/record?uid=32953014&type=1
 */

/**
 * 获取热门话题
说明 : 调用此接口 , 可获取热门话题

可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

接口地址 : /hot/topic

调用例子 : /hot/topic?limit=30&offset=30
 */

/**
 * 获取话题详情
说明 : 调用此接口 , 可获取话题详情

接口地址 : /topic/detail

调用例子 : /topic/detail?actid=111551188
 */

/**
 * 获取话题详情热门动态
说明 : 调用此接口 , 可获取话题详情热门动态

接口地址 : /topic/detail/event/hot

调用例子 : /topic/detail/event/hot?actid=111551188
 */

/**
 * 云村热评
说明 : 登录后调用此接口 , 可获取云村热评

接口地址 : /comment/hotwall/list

调用例子 : /comment/hotwall/list
 */
/**
 * 
心动模式/智能播放
说明 : 登录后调用此接口 , 可获取心动模式/智能播放列表 必选参数 : id : 歌曲 id

pid : 歌单 id

可选参数 : sid : 要开始播放的歌曲的 id

接口地址 : /playmode/intelligence/list

调用例子 : /playmode/intelligence/list?id=33894312&pid=24381616 , /playmode/intelligence/list?id=33894312&pid=24381616&sid=36871368
 */
/**
 * 
获取动态消息
说明 : 调用此接口 , 可获取各种动态 , 对应网页版网易云，朋友界面里的各种动态消息 ，如分享的视频，音乐，照片等！

必选参数 : pagesize : 每页数据,默认20

lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据

接口地址 : /event

调用例子 : /event?pagesize=30&lasttime=1556740526369
 */

/**
 * 歌手分类列表
 * 说明 : 调用此接口,可获取歌手分类列表
 * 可选参数 :
 * limit : 返回数量 , 默认为 30
 * offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 initial: 按首字母索引查找参数,如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传0
 * type 取值:
 *    -1:全部
 *    1:男歌手
 *    2:女歌手
 *    3:乐队
 * area 取值:
 *    -1:全部
 *    7华语
 *    96欧美
 *    8:日本
 *    16韩国
 *    0:其他
 * 接口地址 : /artist/list
 * 调用例子 : /artist/list?type=1&area=96&initial=b /artist/list?type=2&area=2&initial=b
 */
export async function getArtistList(params: {
  type?: number | string;
  area?: number | string;
  initial?: string;
  limit?: number | string;
  offset?: number | string;
}) {
  console.log(params);

  const result = await get("/api/artist/list", params);
  return result;
}
/**
 * 收藏/取消收藏歌手
说明 : 调用此接口,可收藏歌手

必选参数 :

id : 歌手 id

t:操作,1 为收藏,其他为取消收藏

接口地址 : /artist/sub

调用例子 : /artist/sub?id=6452&t=1
 */

/**
 * 歌手热门50首歌曲
说明 : 调用此接口,可获取歌手热门50首歌曲

必选参数 :

id : 歌手 id



接口地址 : /artist/top/song

调用例子 : /artist/top/song?id=6452
 */

/**
 * 歌手全部歌曲
说明 : 调用此接口,可获取歌手全部歌曲 必选参数 :

id : 歌手 id

可选参数 :

order : hot ,time 按照热门或者时间排序

limit: 取出歌单数量 , 默认为 50

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值

接口地址 : /artist/songs

调用例子 : /artist/songs?id=6452
 */

/**
 * 收藏的歌手列表
说明 : 调用此接口,可获取收藏的歌手列表

接口地址 : /artist/sublist

调用例子 : /artist/sublist
 */

/**
 * 收藏的专栏
说明 : 调用此接口,可获取收藏的专栏

可选参数 :

limit: 取出歌单数量 , 默认为 50

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值

接口地址 : /topic/sublist

调用例子 : /topic/sublist?limit=2&offset=1
 */

/**
 * 收藏视频
说明 : 调用此接口,可收藏视频

必选参数 :

id : 视频 id

t : 1 为收藏,其他为取消收藏

接口地址 : /video/sub

调用例子 : /video/sub
 */

/**
 * 收藏/取消收藏 MV
说明 : 调用此接口,可收藏/取消收藏 MV

必选参数 :

mvid : MV id

t : 1 为收藏,其他为取消收藏

接口地址 : /mv/sub

调用例子 : /mv/sub
 */

/**
  * 收藏的 MV 列表
说明 : 调用此接口,可获取收藏的 MV 列表

接口地址 : /mv/sublist

调用例子 : /mv/sublist
  */

/**
 * 歌单分类
 * 说明 : 调用此接口,可获取歌单分类,包含 category 信息
 * 接口地址 : /playlist/catlist
 * 调用例子 : /playlist/catlist
 */
export async function getPlayListCatList() {
  const result = await get("/api/playlist/catlist");
  return result;
}

/**
 * 热门歌单分类
说明 : 调用此接口,可获取歌单分类,包含 category 信息

接口地址 : /playlist/hot

调用例子 : /playlist/hot
 */

/**
 * 歌单 ( 网友精选碟 )
 * 说明 : 调用此接口 , 可获取网友精选碟歌单
 * 可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
 * cat:cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * limit: 取出歌单数量 , 默认为 50
 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 * 接口地址 : /top/playlist
 * 调用例子 : /top/playlist?limit=10&order=new
 */
export async function getTopPlayList(
  cat: string,
  offset: number,
  order: string,
  limit = 30
) {
  const result = await get("/api/top/playlist", { cat, limit, order, offset });
  return result;
}

/**
 * 精品歌单标签列表
说明 : 调用此接口 , 可获取精品歌单标签列表

接口地址 : /playlist/highquality/tags

调用例子 : /playlist/highquality/tags
 */

/**
 * 获取精品歌单
说明 : 调用此接口 , 可获取精品歌单

可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)

limit: 取出歌单数量 , 默认为 20

before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据

接口地址 : /top/playlist/highquality

调用例子 : /top/playlist/highquality?before=1503639064232&limit=3
 */

/**
 * 相关歌单推荐
说明 : 调用此接口,传入歌单 id 可获取相关歌单(对应页面 https://music.163.com/#/playlist?id=1)

必选参数 : id : 歌单 id

接口地址 : /related/playlist

调用例子 : /related/playlist?id=1
 */

/**
 * 获取歌单详情
说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)

必选参数 : id : 歌单 id

可选参数 : s : 歌单最近的 s 个收藏者,默认为8

接口地址 : /playlist/detail

调用例子 : /playlist/detail?id=24381616
 */

/**
 * 获取音乐 url
说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)

注 : 部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放

必选参数 : id : 音乐 id

可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推

接口地址 : /song/url

调用例子 : /song/url?id=33894312 /song/url?id=405998841,33894312
 */

/**
 * 音乐是否可用
说明: 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }

必选参数 : id : 歌曲 id

可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推

接口地址 : /check/music

调用例子 : /check/music?id=33894312
 */

/**
 * 搜索
说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接

必选参数 : keywords : 关键词

可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合

接口地址 : /search 或者 /cloudsearch(更全)

调用例子 : /search?keywords= 海阔天空 /cloudsearch?keywords= 海阔天空
 */

/**
 * 默认搜索关键词
说明 : 调用此接口 , 可获取默认搜索关键词

接口地址 : /search/default
 */

/**
 * 热搜列表(简略)
说明 : 调用此接口,可获取热门搜索列表

接口地址 : /search/hot

调用例子 : /search/hot
 */

/**
 * 热搜列表(详细)
说明 : 调用此接口,可获取热门搜索列表

接口地址 : /search/hot/detail

调用例子 : /search/hot/detail
 */

/**
 * 搜索建议
 * 说明 : 调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
 * 必选参数 : keywords : 关键词
 * 可选参数 : type : 如果传 'mobile' 则返回移动端数据
 * 接口地址 : /search/suggest
 * 调用例子 : /search/suggest?keywords= 海阔天空 /search/suggest?keywords= 海阔天空&type=mobile
 */
export async function getSearchSuggest(keywords: string, type?: string) {
  const result = await get("/api/search/suggest", { keywords, type });
  return result;
}
/**
 * 搜索多重匹配
说明 : 调用此接口 , 传入搜索关键词可获得搜索结果

必选参数 : keywords : 关键词

接口地址 : /search/multimatch

调用例子 : /search/multimatch?keywords= 海阔天空
 */

/**
 * 新建歌单
说明 : 调用此接口 , 传入歌单名字可新建歌单

必选参数 : name : 歌单名

可选参数 :

privacy : 是否设置为隐私歌单，默认否，传'10'则设置成隐私歌单

type : 歌单类型,默认'NORMAL',传 'VIDEO'则为视频歌单

接口地址 : /playlist/create

调用例子 : /playlist/create?name=测试歌单,/playlist/create?name=test&type=VIDEO

 */
/**
 * 删除歌单
说明 : 调用此接口 , 传入歌单id可删除歌单

必选参数 : id : 歌单id,可多个,用逗号隔开

接口地址 : /playlist/delete

调用例子 : /playlist/delete?id=2947311456 , /playlist/delete?id=5013464397,5013427772

 */
/**
 * 收藏/取消收藏歌单
说明 : 调用此接口 , 传入类型和歌单 id 可收藏歌单或者取消收藏歌单

必选参数 :

t : 类型,1:收藏,2:取消收藏 id : 歌单 id

接口地址 : /playlist/subscribe

调用例子 : /playlist/subscribe?t=1&id=106697785 /playlist/subscribe?t=2&id=106697785
 */
/**
 * 
歌单收藏者
说明 : 调用此接口 , 传入歌单 id 可获取歌单的所有收藏者
必选参数 :

id : 歌单 id

可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

接口地址 : /playlist/subscribers

调用例子 : /playlist/subscribers?id=544215255&limit=30
 */

/**
 * 对歌单添加或删除歌曲
说明 : 调用此接口 , 可以添加歌曲到歌单或者从歌单删除某首歌曲 ( 需要登录 )

必选参数 :

op: 从歌单增加单曲为 add, 删除为 del

pid: 歌单 id tracks: 歌曲 id,可多个,用逗号隔开

接口地址 : /playlist/tracks

调用例子 : /playlist/tracks?op=add&pid=24381616&tracks=347231 ( 对应把歌曲添加到 ' 我 ' 的歌单 , 测试的时候请把这里的 pid 换成你自己的, id 和 tracks 不对可能会报 502 错误)

 */
/**
 * 收藏视频到视频歌单
说明 : 调用此接口 , 可收藏视频到视频歌单 ( 需要登录 )

必选参数 :

pid : 歌单 id

ids : 视频id,支持多个,用,隔开

接口地址 : /playlist/track/add

调用例子 : /playlist/track/add?pid=5271999357&ids=186041
 */

/**
 * 删除视频歌单里的视频
说明 : 调用此接口 , 可删除视频歌单里的视频 ( 需要登录 ) 必选参数 :

pid : 歌单 id

ids : 视频id,支持多个,用,隔开

接口地址 : /playlist/track/delete

调用例子 : /playlist/track/delete?pid=5271999357&ids=186041

 */
/**
 * 最近播放的视频
说明 : 调用此接口 , 可获取最近播放的视频 ( 需要登录 )

接口地址 : /playlist/video/recent

调用例子 : /playlist/video/recent
 */

/**
 * 获取歌词
说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )

必选参数 : id: 音乐 id

接口地址 : /lyric

调用例子 : /lyric?id=33894312
 */

/**
 * 新歌速递
说明 : 调用此接口 , 可获取新歌速递

必选参数 :

type: 地区类型 id,对应以下:

全部:0

华语:7

欧美:96

日本:8

韩国:16
接口地址 : /top/song

调用例子 : /top/song?type=96
 */
export async function getTopSong(params = { type: 0 }) {
  const result = await get("/top/song", params);
  return result;
}
/**
 * 首页-发现
说明 : 调用此接口 , 可获取APP首页信息

接口地址 : /homepage/block/page

可选参数 : refresh: 是否刷新数据,默认为true
 */

/**
 * 首页-发现-圆形图标入口列表
说明 : 调用此接口 , 可获取APP首页圆形图标入口列表

接口地址 : /homepage/dragon/ball
 */

/**
 * 歌曲评论
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要登录 )

必选参数 : id: 音乐 id

可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)

接口地址 : /comment/music

调用例子 : /comment/music?id=186016&limit=1 对应晴天评论
 */

/**
 * 楼层评论
说明 : 调用此接口 , 传入资源 parentCommentId 和资源类型 type和资源id 参数, 可获得该资源的歌曲楼层评论

必选参数 :
parentCommentId: 楼层评论 id

id : 资源 id

tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型

0: 歌曲

1: mv

2: 歌单

3: 专辑

4: 电台

5: 视频
可选参数 : limit: 取出评论数量 , 默认为 20

time: 分页参数,取上一页最后一项的 time 获取下一页数据

接口地址 : /comment/floor

调用例子 : /comment/floor?parentCommentId=1438569889&id=29764564&type=0
 */

/**
 * 专辑评论
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要 登录 )

必选参数 : id: 专辑 id

可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)

接口地址 : /comment/album

调用例子 : /comment/album?id=32311
 */

/**
 * 歌单评论
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 )

必选参数 : id: 歌单 id

可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)

接口地址 : /comment/playlist

调用例子 : /comment/playlist?id=705123491
 */

/**
 * mv 评论
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 )

必选参数 : id: mv id

可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)

接口地址 : /comment/mv

调用例子 : /comment/mv?id=5436712
 */

/**
 * 电台节目评论
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 电台节目 的所有评论 ( 不需要登录 )

必选参数 : id: 电台节目的 id

可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)

接口地址 : /comment/dj

调用例子 : /comment/dj?id=794062371
 */

/**
 * 视频评论
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 视频 的所有评论 ( 不需要登录 )

必选参数 : id: 视频的 id

可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)

接口地址 : /comment/video

调用例子 : /comment/video?id=89ADDE33C0AAE8EC14B99F6750DB954D
 */

/**
 * 热门评论
说明 : 调用此接口 , 传入 type, 资源 id 可获得对应资源热门评论 ( 不需要登录 )

必选参数 :

id : 资源 id

tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型

0: 歌曲

1: mv

2: 歌单

3: 专辑

4: 电台

5: 视频
可选参数 : limit: 取出评论数量 , 默认为 20

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)

接口地址 : /comment/hot

调用例子 : /comment/hot?id=186016&type=0
 */

/**
 * 新版评论接口
说明 : 调用此接口 , 传入资源类型和资源id,以及排序方式,可获取对应资源的评论

必选参数 :
id : 资源 id, 如歌曲 id,mv id

tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型

0: 歌曲

1: mv

2: 歌单

3: 专辑

4: 电台

5: 视频

6: 动态
可选参数 :
pageNo:分页参数,第N页,默认为1

pageSize:分页参数,每页多少条数据,默认20

sortType: 排序方式,1:按推荐排序,2:按热度排序,3:按时间排序

cursor: 当sortType为3时且页数不是第一页时需传入,值为上一条数据的time

接口地址 : /comment/new

调用例子 : /comment/new?type=0&id=1407551413&sortType=3, /comment/new?type=0&id=1407551413&sortType=3&cursor=1602072870260&pageSize=20&pageNo=2

 */
/**
 * 给评论点赞
说明 : 调用此接口 , 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )

必选参数 : id : 资源 id, 如歌曲 id,mv id

cid : 评论 id

t : 是否点赞 ,1 为点赞 ,0 为取消点赞

tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型

0: 歌曲

1: mv

2: 歌单

3: 专辑

4: 电台

5: 视频

6: 动态
接口地址 : /comment/like

调用例子 : /comment/like?id=29178366&cid=12840183&t=1&type=0 对应给 https://music.163.com/#/song?id=29178366 最热门的评论点赞
注意： 动态点赞不需要传入 id 参数，需要传入动态的 threadId 参数,如：/comment/like?type=6&cid=1419532712&threadId=A_EV_2_6559519868_32953014&t=0， threadId 可通过 /event，/user/event 接口获取

 */

/**
 * 抱一抱评论
说明 : 调用此接口,可抱一抱评论

必选参数 :

uid: 用户id

cid: 评论id

sid: 资源id

接口地址 : /hug/comment

调用例子 : /hug/comment?uid=285516405&cid=1167145843&sid=863481066
 */

/**
 * 评论抱一抱列表
说明 : 调用此接口,可获取评论抱一抱列表

必选参数 :

uid: 用户id

cid: 评论id

sid: 资源id

可选参数 :

page: 页数

cursor: 上一页返回的cursor,默认-1,第一页不需要传

idCursor: 上一页返回的idCursor,默认-1,第一页不需要传

pageSize : 每页页数,默认100

接口地址 : /comment/hug/list

调用例子 : /comment/hug/list?uid=285516405&cid=1167145843&sid=863481066&pageSize=2&page=1
 */

/**
 * 发送/删除评论
说明 : 调用此接口,可发送评论或者删除评论

接口地址 : /comment

发送评论

必选参数

t:1 发送, 2 回复

tpye: 数字,资源类型,对应歌曲,mv,专辑,歌单,电台,视频对应以下类型

0: 歌曲

1: mv

2: 歌单

3: 专辑

4: 电台

5: 视频

6: 动态
id:对应资源 id

content :要发送的内容

commentId :回复的评论id (回复评论时必填)

调用例子 : /comment?t=1&type=1&id=5436712&content=test (往广岛之恋 mv 发送评论: test)

注意：如给动态发送评论，则不需要传 id，需要传动态的 threadId,如：/comment?t=1&type=6&threadId=A_EV_2_6559519868_32953014&content=test
 */

/**
 * 删除评论

必选参数

t:0 删除

tpye: 数字,资源类型,对应歌曲,mv,专辑,歌单,电台,视频对应以下类型

0: 歌曲

1: mv

2: 歌单

3: 专辑

4: 电台


5: 视频

6: 动态
id:对应资源 id content :内容 id,可通过 /comment/mv 等接口获取

调用例子 : /comment?t=0&type=1&id=5436712&commentId=1535550516319 (在广岛之恋 mv 删除评论)
注意：如给动态删除评论，则不需要传 id，需要传动态的 `threadId`,如：`/comment?t=0&type=6&threadId=A_EV_2_6559519868_32953014&commentId=1419516382`
 */

/**
 * 资源点赞( MV,电台,视频)
说明 : 调用此接口 , 可对 MV,电台,视频点赞

必选参数 :

type:资源类型,对应以下类型

1: mv

4: 电台

5: 视频

6: 动态
t: 操作,1 为点赞,其他未取消点赞

id: 资源 id

接口地址 : /resource/like

调用例子 : /resource/like?t=1&type=1&id=5436712
注意：如给动态点赞，不需要传入 id，需要传入 threadId,可通过 event,/user/event 接口获取，如： /resource/like?t=1&type=6&threadId=A_EV_2_6559519868_32953014

 */

/**
 * 获取点赞过的视频
说明 : 调用此接口, 可获取获取点赞过的视频

接口地址 : /playlist/mylike

调用例子 : /playlist/mylike
 */

/**
 * 获取歌曲详情
说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)

必选参数 : ids: 音乐 id, 如 ids=347230

接口地址 : /song/detail

调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231

 */

/**
 * 获取专辑内容
说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容

必选参数 : id: 专辑 id

接口地址 : /album

调用例子 : /album?id=32311
 */

/**
 * 专辑动态信息
说明 : 调用此接口 , 传入专辑 id, 可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数

必选参数 : id: 专辑 id

接口地址 : /album/detail/dynamic

调用例子 : /album/detail/dynamic?id=32311
 */

/**
 * 收藏/取消收藏专辑
说明 : 调用此接口,可收藏/取消收藏专辑

必选参数 :

id : 专辑 id

t : 1 为收藏,其他为取消收藏

接口地址 : /album/sub

调用例子 : /album/sub?t=1 /album/sub?t=0
 */

/**
 * 获取已收藏专辑列表
说明 : 调用此接口 , 可获得已收藏专辑列表

可选参数 :
limit: 取出数量 , 默认为 25

offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*25, 其中 25 为 limit 的值 , 默认 为 0

接口地址 : /album/sublist

调用例子 : /album/sublist ( 周杰伦 )
 */

/**
 * 获取歌手单曲
说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲

必选参数 : id: 歌手 id, 可由搜索接口获得

接口地址 : /artists

调用例子 : /artists?id=6452
 */

/**
 * 获取歌手 mv
说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 , 如 : /artist/mv?id=6452,/mv?mvid=5461064

必选参数 : id: 歌手 id, 可由搜索接口获得

接口地址 : /artist/mv

调用例子 : /artist/mv?id=6452

 */
/**
 * 获取歌手专辑
说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容

必选参数 : id: 歌手 id

可选参数 : limit: 取出数量 , 默认为 50

offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0

接口地址 : /artist/album

调用例子 : /artist/album?id=6452&limit=30 ( 周杰伦 )

返回数据如下图 : 获取专辑内容
 */

/**
 * 获取歌手描述
说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述

必选参数 : id: 歌手 id

接口地址 : /artist/desc

调用例子 : /artist/desc?id=6452 ( 周杰伦 )
 */

/**
 * 获取歌手详情
说明 : 调用此接口 , 传入歌手 id, 可获得获取歌手详情

必选参数 : id: 歌手 id

接口地址 : /artist/detail

调用例子 : /artist/detail?id=11972054 (Billie Eilish)
 */

/**
 * 获取相似歌手
说明 : 调用此接口 , 传入歌手 id, 可获得相似歌手

必选参数 : id: 歌手 id

接口地址 : /simi/artist

调用例子 : /simi/artist?id=6452 ( 对应和周杰伦相似歌手 )

 */
/**
 * 获取相似歌单
说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单

必选参数 : id: 歌曲 id

接口地址 : /simi/playlist

调用例子 : /simi/playlist?id=347230 ( 对应 ' 光辉岁月 ' 相似歌单 )
 */
/**
 * 
相似 mv
说明 : 调用此接口 , 传入 mvid 可获取相似 mv

必选参数 : mvid: mv id

接口地址 : /simi/mv

调用例子 : /simi/mv?mvid=5436712
 */

/**
 * 获取相似音乐
说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌曲

必选参数 : id: 歌曲 id

接口地址 : /simi/song

调用例子 : /simi/song?id=347230 ( 对应 ' 光辉岁月 ' 相似歌曲 )
 */

/**
 * 获取最近 5 个听了这首歌的用户
说明 : 调用此接口 , 传入歌曲 id, 最近 5 个听了这首歌的用户

必选参数 : id: 歌曲 id

接口地址 : /simi/user

调用例子 : /simi/user?id=347230 ( 对应 ' 光辉岁月 ' 相似歌曲 )
 */
/**
 * 
获取每日推荐歌单
说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )

接口地址 : /recommend/resource

调用例子 : /recommend/resource

返回数据如下图 : 每日推荐歌单
 */

/**
 * 获取每日推荐歌曲
说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )

接口地址 : /recommend/songs

调用例子 : /recommend/songs

返回数据如下图 : 每日推荐歌曲
 */

/**
 * 获取历史日推可用日期列表
说明 : 调用此接口 , 可获得历史日推可用日期列表

接口地址 : /history/recommend/songs

调用例子 : /history/recommend/songs
 */

/**
 * 获取历史日推详情数据
说明 : 调用此接口 ,传入当日日期, 可获得当日历史日推数据

必选参数 : date: 日期,通过历史日推可用日期列表接口获取,不能任意日期

接口地址 : /history/recommend/songs/detail

调用例子 : /history/recommend/songs/detail?date=2020-06-21
 */

/**
 * 私人 FM
说明 : 私人 FM( 需要登录 )

接口地址 : /personal_fm

调用例子 : /personal_fm

 */

/**
 * 签到
说明 : 调用此接口 , 传入签到类型 ( 可不传 , 默认安卓端签到 ), 可签到 ( 需要登录 ), 其中安卓端签到可获得 3 点经验 , web/PC 端签到可获得 2 点经验

可选参数 : type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到

接口地址 : /daily_signin

调用例子 : /daily_signin
 */

/**
 * 喜欢音乐
说明 : 调用此接口 , 传入音乐 id, 可喜欢该音乐

必选参数 : id: 歌曲 id

可选参数 : like: 布尔值 , 默认为 true 即喜欢 , 若传 false, 则取消喜欢

接口地址 : /like

调用例子 : /like?id=347230

 */

/**
 * 
喜欢音乐列表
说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐id列表(id数组)

必选参数 : uid: 用户 id

接口地址 : /likelist

调用例子 : /likelist?uid=32953014
 */

/**
 * 垃圾桶
说明 : 调用此接口 , 传入音乐 id, 可把该音乐从私人 FM 中移除至垃圾桶

必选参数 : id: 歌曲 id

接口地址 : /fm_trash

调用例子 : /fm_trash?id=347230

 */

/**
 * 新碟上架
说明 : 调用此接口 , 可获取新碟上架列表 , 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30

可选参数 :

limit: 取出数量 , 默认为 50

offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0

area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本

type : new:全部 hot:热门,默认为 new

year : 年,默认本年

month : 月,默认本月

接口地址 : /top/album

调用例子 : /top/album?offset=0&limit=30&year=2019&month=6
 */

/**
 * 全部新碟
说明 : 登录后调用此接口 ,可获取全部新碟

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

area : ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本

接口地址 : /album/new

调用例子 : /album/new?area=KR&limit=10
 */

/**
 * 最新专辑
说明 : 调用此接口 ，获取云音乐首页新碟上架数据

接口地址 : /album/newest

调用例子 : /album/newest
 */

/**
 * 听歌打卡
说明 : 调用此接口 , 传入音乐 id, 来源 id，歌曲时间 time，更新听歌排行数据

必选参数 : id: 歌曲 id, sourceid: 歌单或专辑 id

可选参数 : time: 歌曲播放时间,单位为秒

接口地址 : /scrobble

调用例子 : /scrobble?id=518066366&sourceid=36780169&time=291

 */
/**
 * 热门歌手
说明 : 调用此接口 , 可获取热门歌手数据

可选参数 : limit: 取出数量 , 默认为 50

offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0

接口地址 : /top/artists

调用例子 : /top/artists?offset=0&limit=30
 */

/**
 * 
全部 mv
说明 : 调用此接口 , 可获取全部 mv

可选参数 :
area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部

order: 排序,可选值为上升最快,最热,最新,不填则为上升最快

limit: 取出数量 , 默认为 30

offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0

接口地址 : /mv/all

调用例子 : /mv/all?area=港台
 */

/**
 * 最新 mv
 * 说明 : 调用此接口 , 可获取最新 mv
 * 可选参数 : area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
 * 可选参数 : limit: 取出数量 , 默认为 30
 * 接口地址 : /mv/first
 * 调用例子 : /mv/first?limit=10
 */
export async function getFirstMV(params: { area?: string; limit?: string }) {
  const result = await get("/mv/first", params);
  return result;
}
/**
 * 网易出品mv
 * 说明 : 调用此接口 , 可获取网易出品 mv
 * 可选参数 : limit: 取出数量 , 默认为 30
 * offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 * 接口地址 : /mv/exclusive/rcmd
 * 调用例子 : /mv/exclusive/rcmd?limit=10
 */

/**
 * 推荐 mv
 * 说明 : 调用此接口 , 可获取推荐 mv
 * 接口地址 : /personalized/mv
 * 调用例子 : /personalized/mv
 */
export async function getPersonalizedMV() {
  const result = await get("/api/personalized/mv");
  return result;
}
/**
 * 推荐歌单
 * 说明 : 调用此接口 , 可获取推荐歌单
 * 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
 * 接口地址 : /personalized
 * 调用例子 : /personalized?limit=1
 */
export async function getPersonalizedSongList(
  params: { limit?: number } = { limit: 30 }
) {
  const result = await get("/api/personalized", params);
  return result;
}
/**
 * 推荐新音乐
 * 说明 : 调用此接口 , 可获取推荐新音乐
 * 可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)
 * 接口地址 : /personalized/newsong
 * 调用例子 : /personalized/newsong
 */
export async function getPersonalizedNewSong(
  params: { limit?: number } = { limit: 10 }
) {
  const result = await get("/api/personalized/newsong", params);
  return result;
}
/**
 * 推荐电台
 * 说明 : 调用此接口 , 可获取推荐电台
 * 接口地址 : /personalized/djprogram
 * 调用例子 : /personalized/djprogram
 */
export async function getPersonalizedDjprogram() {
  const result = await get("/api/personalized/djprogram");
  return result;
}

/**
 * 推荐节目
说明 : 调用此接口 , 可获取推荐电台

接口地址 : /program/recommend

调用例子 : /program/recommend
 */

/**
 * 独家放送(入口列表)
说明 : 调用此接口 , 可获取独家放送

接口地址 : /personalized/privatecontent

调用例子 : /personalized/privatecontent
 */

/**
 * 独家放送列表
说明 : 调用此接口 , 可获取独家放送列表

可选参数 :

limit : 返回数量 , 默认为 60

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*60, 其中 60 为 limit 的值 , 默认为 0

接口地址 : /personalized/privatecontent/list

调用例子 : /personalized/privatecontent/list?limit=1&offset=2
 */

/**
 * mv 排行
说明 : 调用此接口 , 可获取 mv 排行

可选参数 : limit: 取出数量 , 默认为 30

area: 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部

offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0

接口地址 : /top/mv

调用例子 : /top/mv?limit=10
 */

/**
 * 获取 mv 数据
说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口

必选参数 : mvid: mv 的 id

接口地址 : /mv/detail

调用例子 : /mv/detail?mvid=5436712
 */

/**
 * mv 数据

获取 mv 点赞转发评论数数据
说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据

必选参数 : mvid: mv 的 id

接口地址 : /mv/detail/info

调用例子 : /mv/detail/info?mvid=5436712
 */

/**
 * mv 地址
说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址

必选参数 : id: mv id

可选参数 : r: 分辨率,默认1080,可从 /mv/detail 接口获取分辨率列表

接口地址 : /mv/url

调用例子 :

/mv/url?id=5436712 /mv/url?id=10896407&r=1080
 */

/**
 * 获取视频标签列表
说明 : 调用此接口 , 可获取视频标签列表

接口地址 : /video/group/list

调用例子 : /video/group/list
 */

/**
 * 获取视频分类列表
说明 : 调用此接口 , 可获取视频分类列表

接口地址 : /video/category/list

调用例子 : /video/category/list
 */

/**
 * 获取视频标签/分类下的视频
说明 : 调用此接口 , 传入标签/分类id,可获取到相关的视频,分页参数只能传入offset

必选参数 : id: videoGroup 的 id

可选参数 : offset: 默认0

接口地址 : /video/group

调用例子 : /video/group?id=9104
 */
export async function getVideoGroup(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 获取全部视频列表
说明 : 调用此接口,可获取视频分类列表,分页参数只能传入offset

可选参数 : offset: 默认0

接口地址 : /video/timeline/all

调用例子 : /video/timeline/all
 */
export async function getVideoTimeLineAll(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 获取推荐视频
说明 : 调用此接口, 可获取推荐视频,分页参数只能传入offset

必选参数 : id: videoGroup 的 id

可选参数 : offset: 默认0

接口地址 : /video/group

调用例子 : /video/timeline/recommend
 */
export async function getVideoGroupRecommend(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 相关视频
说明 : 调用此接口 , 可获取相关视频

必选参数 : id: 视频 的 id

接口地址 : /related/allvideo

调用例子 : /related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D
 */
export async function getRelatedAllVideo(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 视频详情
说明 : 调用此接口 , 可获取视频详情

必选参数 : id: 视频 的 id

接口地址 : /video/detail

调用例子 : /video/detail?id=89ADDE33C0AAE8EC14B99F6750DB954D
 */
export async function getVideoDetail(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 获取视频点赞转发评论数数据
说明 : 调用此接口 , 传入 vid ( 视频id ) , 可获取对应视频点赞转发评论数数据 必选参数 : vid: 视频id

接口地址 : /video/detail/info

调用例子 : /video/detail/info?vid=89ADDE33C0AAE8EC14B99F6750DB954D
 */
export async function getVideoDetailInfo(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 获取视频播放地址
说明 : 调用此接口 , 传入视频 id,可获取视频播放地址

必选参数 : id: 视频 的 id

接口地址 : /video/url

调用例子 : /video/url?id=89ADDE33C0AAE8EC14B99F6750DB954D
*/
export async function getVideoUrl(url: string) {
  const result = await get(url);
  return result;
}
/*
所有榜单
说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist

调用例子 : /toplist
 */
export async function getTopList() {
  const result = await get("/api/toplist");
  return result;
}
/**
 * 排行榜详情
说明: 请使用歌单详情接口,传入排行榜id获取排行榜详情数据(排行榜也是歌单的一种)

说明 : 调用此接口 , 传入榜单 id, 可获取不同排行榜数据(v3.34.0之后不再支持idx参数)

必选参数 : id: 榜单id,通过所有榜单接口获取

接口地址 : /top/list

调用例子 : /top/list?id=2809577409
 */

/**
 * 所有榜单内容摘要
 * 说明 : 调用此接口,可获取所有榜单内容摘要
 * 接口地址 : /toplist/detail
 * 调用例子 : /toplist/detail
 */
export async function getTopListDetail() {
  const result = await get("/api/toplist/detail");
  return result;
}
/**
 * 歌手榜
说明 : 调用此接口 , 可获取排行榜中的歌手榜

可选参数 :

type : 地区
1: 华语
2: 欧美
3: 韩国
4: 日本
接口地址 : /toplist/artist

调用例子 : /toplist/artist
 */
export async function getTopListArtist(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 云盘
说明 : 登录后调用此接口 , 可获取云盘数据 , 获取的数据没有对应 url, 需要再调用一 次 /song/url 获取 url

可选参数 :

limit : 返回数量 , 默认为 200

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*200, 其中 200 为 limit 的值 , 默认为 0

接口地址 : /user/cloud

调用例子 : /user/cloud
 */
export async function getUserCloud(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 云盘数据详情
说明 : 登录后调用此接口 , 传入云盘歌曲 id，可获取云盘数据详情

必选参数 : id: 歌曲id,可多个,用逗号隔开

接口地址 : /user/cloud/detail

调用例子 : /user/cloud/detail?id=5374627
 */
export async function getUserCloudDetail(url: string) {
  const result = await get(url);
  return result;
}

/**
 * 云盘歌曲删除
说明 : 登录后调用此接口 , 可删除云盘歌曲

必选参数 : id: 歌曲id,可多个,用逗号隔开

接口地址 : /user/cloud/del

调用例子 : /user/cloud/del

 */
export async function getUserCloudDel(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 云盘上传
说明 : 登录后调用此接口,使用'Content-Type': 'multipart/form-data'上传mp3 formData(name为'songFile'),可上传歌曲到云盘

参考: https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/public/cloud.html

访问地址: http://localhost:3000/qrlogin.html)

支持命令行调用,参考module_example目录下song_upload.js

接口地址 : /cloud

调用例子 : /cloud
 */
export async function getCloud(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台banner
说明 : 调用此接口,可获取电台banner

接口地址 : /dj/banner

调用例子 : /dj/banner

 */
export async function getDjBanner(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台个性推荐
说明 : 调用此接口,可获取电台个性推荐列表 可选参数 :

limit : 返回数量,默认为 6,总条数最多6条

接口地址 : /dj/personalize/recommend

调用例子 : /dj/personalize/recommend?limit=5
 */
export async function getDjPersonalizeRecommend(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台订阅者列表
说明 : 调用此接口,可获取电台订阅者列表 必选参数 : id: 电台id

可选参数 : time : 分页参数,默认-1,传入上一次返回结果的 time,将会返回下一页的数据

limit : 返回数量,默认为 20

接口地址 : /dj/subscriber

调用例子 : /dj/subscriber?id=335425050 , /dj/subscriber?id=335425050&time=1602761825390
 */
export async function getDjSubscriber(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 
用户电台
说明 : 调用此接口, 传入用户id可获取用户创建的电台

必选参数 : uid: 用户id

接口地址 : /user/audio

调用例子 : /user/audio?uid=32953014
 */
export async function getUserAudio(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 热门电台
说明 : 调用此接口,可获取热门电台

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 接口地址 : /dj/hot

调用例子 : /dj/hot
 */
export async function getDjHot(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 节目榜
说明 : 登录后调用此接口 , 可获得电台节目榜

可选参数 :

limit : 返回数量 , 默认为 100

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*100, 其中 100 为 limit 的值 , 默认为 0

接口地址 : /dj/program/toplist

调用例子 : /dj/program/toplist?limit=1
 */
export async function getDjProgramTopList(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 
电台 - 付费精品
说明 : 调用此接口,可获取付费精品电台

可选参数 :

limit : 返回数量 , 默认为 100 (不支持 offset)

接口地址 : /dj/toplist/pay

调用例子 : /dj/toplist/pay?limit=30

 */
export async function getDjTopListPay(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 24小时节目榜
说明 : 调用此接口,可获取24小时节目榜

可选参数 :

limit : 返回数量 , 默认为 100 (不支持 offset)

接口地址 : /dj/program/toplist/hours

调用例子 : /dj/program/toplist/hours?limit=1
 */
export async function getDjProgramTopListHours(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 24小时主播榜
说明 : 调用此接口,可获取24小时主播榜

可选参数 :

limit : 返回数量 , 默认为 100 (不支持 offset)

接口地址 : /dj/toplist/hours

调用例子 : /dj/toplist/hours?limit=30
 */
export async function getDjTopListHours(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 主播新人榜
说明 : 调用此接口,可获取主播新人榜

可选参数 :

limit : 返回数量 , 默认为 100 (不支持 offset)

接口地址 : /dj/toplist/newcomer

调用例子 : /dj/toplist/newcomer?limit=30
 */
export async function getDjTopListNewcomer(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 最热主播榜
说明 : 调用此接口,可获取最热主播榜

可选参数 :

limit : 返回数量 , 默认为 100 (不支持 offset)

接口地址 : /dj/toplist/popular

调用例子 : /dj/toplist/popular?limit=30

 */
export async function getDjTopListPopular(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 新晋电台榜/热门电台榜
说明 : 登录后调用此接口 , 可获得新晋电台榜/热门电台榜

可选参数 :

limit : 返回数量 , 默认为 100

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*100, 其中 100 为 limit 的值 , 默认为 0

type: 榜单类型, new 为新晋电台榜,hot为热门电台榜

接口地址 : /dj/toplist

调用例子 : /dj/toplist?type=hot /dj/toplist?type=new&limit=1

 */
export async function getDjTopList(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 类别热门电台
可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

cateId: 类别 id,可通过 /dj/category/recommend 接口获取

接口地址 : /dj/radio/hot

调用例子 : /dj/radio/hot?cateId=2001(创作|翻唱) /dj/radio/hot?cateId=10002 (3D|电子)

 */
export async function getDjRadioHot(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 推荐
说明 : 登录后调用此接口 , 可获得推荐电台

接口地址 : /dj/recommend

调用例子 : /dj/recommend

 */
export async function getDjRecommend(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 分类
说明 : 登录后调用此接口 , 可获得电台类型

接口地址 : /dj/catelist

调用例子 : /dj/catelist

 */
export async function getDjCateList(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 分类推荐
说明 : 登录后调用此接口 , 传入分类,可获得对应类型电台列表

必选参数 : type: 电台类型 , 数字 , 可通过/dj/catelist获取 , 对应关系为 id 对应 此接口的 type, name 对应类型

接口地址 : /dj/recommend/type

调用例子 : /dj/recommend/type?type=1(明星做主播) /dj/recommend/type?type=2001 (创作|翻唱)

 */
export async function getDjRecommendType(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 订阅
说明 : 登录后调用此接口 , 传入rid, 可订阅 dj,dj 的 rid 可通过搜索指定 type='1009' 获取其 id, 如/search?keywords= 代码时间 &type=1009

必选参数 : rid: 电台 的 id

接口地址 : /dj/sub

调用例子 : /dj/sub?rid=336355127&t=1 ( 对应关注 ' 代码时间 ') /dj/sub?rid=336355127&t=0 ( 对应取消关注 ' 代码时间 ')

 */
export async function getDjSub(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台的订阅列表
说明 : 登录后调用此接口 , 可获取订阅的电台列表

接口地址 : /dj/sublist

调用例子 : /dj/sublist
 */
export async function getDjSublist(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 付费精选
说明 : 可以获取付费精选的电台列表 , 传入 limit 和 offset 可以进行分页

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

接口地址 : /dj/paygift

调用例子 : /dj/paygift?limit=10&offset=20
 */
export async function getDjPaygift(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 非热门类型
说明 : 登录后调用此接口, 可获得电台非热门类型

接口地址 : /dj/category/excludehot

调用例子 : /dj/category/excludehot
 */
export async function getDjCategoryExcludehot(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 推荐类型
说明 : 登录后调用此接口, 可获得电台推荐类型

接口地址 : /dj/category/recommend

调用例子 : /dj/category/recommend
 */
export async function getDjCategoryRecommend(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 今日优选
说明 : 登录后调用此接口, 可获得电台今日优选

接口地址 : /dj/today/perfered

调用例子 : /dj/today/perfered
 */
export async function getDjTodayPerfered(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 详情
说明 : 登录后调用此接口 , 传入rid, 可获得对应电台的详情介绍

必选参数 : rid: 电台 的 id

接口地址 : /dj/detail

调用例子 : /dj/detail?rid=336355127 ( 对应 ' 代码时间 ' 的详情介绍 )
 */
export async function getDjDetail(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 节目
说明 : 登录后调用此接口 , 传入rid, 可查看对应电台的电台节目以及对应的 id, 需要 注意的是这个接口返回的 mp3Url 已经无效 , 都为 null, 但是通过调用 /song/url 这 个接口 , 传入节目 id 仍然能获取到节目音频 , 如 /song/url?id=478446370 获取代 码时间的一个节目的音频

必选参数 : rid: 电台 的 id

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

asc : 排序方式,默认为 false (新 => 老 ) 设置 true 可改为 老 => 新

接口地址 : /dj/program

调用例子 : /dj/program?rid=336355127&limit=40 ( 对应 ' 代码时间 ' 的节目列表 )
 */
export async function getDjProgram(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 电台 - 节目详情
说明 : 调用此接口传入电台节目id,可获得电台节目详情

必选参数 : id: 电台节目 的 id

接口地址 : /dj/program/detail

调用例子 : /dj/program/detail?id=1367665101
 */
export async function getDjProgramDetail(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 通知 - 私信
说明 : 登录后调用此接口 ,可获取私信

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

接口地址 : /msg/private

调用例子 : /msg/private?limit=3

 */
export async function getMsgPrivate(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 发送私信
说明 : 登录后调用此接口 , 传入用户 id 和要发送的信息, 可以发送私信,返回内容为历史私信,包含带歌单的私信信息(注:不能发送私信给自己)

必选参数 :

user_ids : 用户 id,多个需用逗号隔开

msg : 要发送的信息

接口地址 : /send/text

调用例子 : /send/text?user_ids=32953014&msg=test,/send/text?user_ids=32953014,475625142&msg=test
 */
export async function getSendText(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 发送私信音乐
说明 : 登录后调用此接口 , 传入用户 id 和要发送的信息,音乐id, 可以发送音乐私信,返回内容为历史私信

必选参数 :

user_ids : 用户 id,多个需用逗号隔开

msg : 要发送的信息

接口地址 : /send/song

调用例子 : /send/song?user_ids=1&id=351318&msg=测试
 */
export async function getSendSong(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 发送私信(带歌单)
说明 : 登录后调用此接口 , 传入用户 id 和要发送的信息和歌单 id, 可以发送带歌单的私信(注:不能发送重复的歌单)

必选参数 :

user_ids : 用户 id,多个需用逗号隔开

msg : 要发送的信息

接口地址 : /send/playlist

调用例子 : /send/playlist?msg=test&user_ids=475625142&playlist=705123491,/send/playlist?msg=test2&user_ids=475625142,32953014&playlist=705123493

 */
export async function getSendPlayList(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 最近联系人
说明 : 登录后调用此接口 ,可获取最接近联系人

接口地址 : /msg/recentcontact

调用例子 : /msg/recentcontact
 */
export async function getMsgRecentContact(url: string) {
  const result = await get(url);
  return result;
}

/**
 * 私信内容
说明 : 登录后调用此接口 , 可获取私信内容

必选参数 : uid : 用户 id

可选参数 : limit : 返回数量 , 默认为 30

before : 分页参数,取上一页最后一项的 time 获取下一页数据

接口地址 : /msg/private/history

调用例子 : /msg/private/history?uid=9003 (云音乐小秘书)
 */
export async function getMsgPrivateHistory(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 通知 - 评论
说明 : 登录后调用此接口 ,可获取评论

必选参数 : uid: 用户 的 id，只能和登录账号的 id 一致

可选参数 :

limit : 返回数量 , 默认为 30

before : 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据

接口地址 : /msg/comments

调用例子 : /msg/comments?uid=32953014
 */
export async function getMsgComments(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 通知 - @我
说明 : 登录后调用此接口 ,可获取@我数据

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

接口地址 : /msg/forwards

调用例子 : /msg/forwards?limit=3
 */
export async function getMsgForward(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 通知 - 通知
说明 : 登录后调用此接口 ,可获取通知

可选参数 :

limit : 返回数量 , 默认为 30

lasttime : 返回数据的 time ,默认-1,传入上一次返回结果的 time,将会返回下一页的数据

接口地址 : /msg/notices

调用例子 : /msg/notices?limit=3

设置
说明 : 登录后调用此接口 ,可获取用户设置

接口地址 : /setting

调用例子 : /setting
 */
export async function getSetting(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 数字专辑-新碟上架
说明 : 调用此接口 ,可获取数字专辑-新碟上架

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
接口地址 : /album/list

调用例子 : /album/list?limit=10
 */
export async function getAlbumList(url: string) {
  const result = await get(url);
  return result;
}

/**
 * 数字专辑&数字单曲-榜单
说明 : 调用此接口 ,可获取数字专辑&数字单曲-榜单

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

albumType : 为数字专辑,1为数字单曲

type : daily:日榜,week:周榜,year:年榜,total:总榜

接口地址 : /album_songsaleboard

调用例子 : /album/songsaleboard?type=year&year=2020&albumType=0
 */
export async function getAlbumSongSaleboard(url: string) {
  const result = await get(url);
  return result;
}

/**
 * 数字专辑-语种风格馆
说明 : 调用此接口 ,可获取语种风格馆数字专辑列表

可选参数 :

limit : 返回数量 , 默认为 30

offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

area 地区 Z_H:华语,E_A:欧美,KR:韩国,JP:日本

接口地址 : /album/list/style

调用例子 : /album/list/style?area=Z_H&offset=2
 */

export async function getAlbumListStyle(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 
数字专辑详情
说明 : 调用此接口 ,传入数字专辑id可获取数字专辑详情(和歌单详情有差异)

接口地址 : /album/detail

调用例子 : /album/detail?id=84547195
 */
export async function getAlbumDetail(url: string) {
  const result = await get(url);
  return result;
}

/**
 * 我的数字专辑
说明 : 登录后调用此接口 ,可获取我的数字专辑

接口地址 : /digitalAlbum/purchased

调用例子 : /digitalAlbum/purchased?limit=10
 */
export async function getDigitalAlbumPurchased(url: string) {
  const result = await get(url);
  return result;
}

/**
 * 购买数字专辑
说明 : 登录后调用此接口 ,可获取购买数字专辑的地址,把地址生成二维码后,可扫描购买专辑

必选参数 :

id : 专辑的 id

payment : 支付方式， 0 为支付宝 3 为微信

quantity : 购买的数量

接口地址 : /digitalAlbum/ordering

调用例子 : /digitalAlbum/ordering?id=86286082&payment=3&quantity=1
 */

/**
 * 音乐日历
说明 : 登录后调用此接口,传入开始和结束时间,可获取音乐日历

接口地址 : /calendar

调用例子 : /calendar?startTime=1606752000000&endTime=1609430399999

 */
export async function getCanlendar(url: string) {
  const result = await get(url);
  return result;
}
/**
 * 云贝
说明 : 登录后调用此接口可获取云贝签到信息(连续签到天数,第二天全部可获得的云贝)

接口地址 : /yunbei

调用例子 : /yunbei
 */

/**
 * 云贝今日签到信息
说明 : 登录后调用此接口可获取云贝今日签到信息(今日签到获取的云贝数)

接口地址 : /yunbei/today

调用例子 : /yunbei/today
 */

/**
 * 云贝签到
说明 : 登录后调用此接口可进行云贝签到

接口地址 : /yunbei/sign

调用例子 : /yunbei/sign
 */

/**
 * 云贝账户信息
说明 :登录后调用此接口可获取云贝账户信息(账户云贝数)

接口地址 : /yunbei/info

调用例子 : /yunbei/info
 */

/**
 * 云贝所有任务
说明 :登录后调用此接口可获取云贝所有任务

接口地址 : /yunbei/tasks

调用例子 : /yunbei/tasks

 */
/**
 * 云贝todo任务
说明 :登录后调用此接口可获取云贝todo任务

接口地址 : /yunbei/tasks/todo

调用例子 : /yunbei/tasks/todo
 */

/**
 * 云贝完成任务
必选参数 :

userTaskId : 任务id

可选参数 :

depositCode: 任务depositCode

接口地址 : /yunbei/task/finish

调用例子 : /yunbei/task/finish?userTaskId=5146243240&depositCode=0
 */

/**
 * 云贝收入
说明 :登录后调用此接口可获取云贝收入

可选参数 : limit: 取出评论数量 , 默认为 10

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*10, 其中 10 为 limit 的值

接口地址 : /yunbei/tasks/receipt

调用例子 : /yunbei/tasks/receipt?limit=1
 */

/**
 * 云贝支出
说明 :登录后调用此接口可获取云贝支出

可选参数 : limit: 取出评论数量 , 默认为 10

offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*10, 其中 10 为 limit 的值
接口地址 : /yunbei/tasks/expense

调用例子 : /yunbei/tasks/expense?limit=1
 */

/**
 * 关注歌手新歌
 * 说明 :登录后调用此接口可获取关注歌手新歌
 * 可选参数 : limit: 取出评论数量 , 默认为 20
 * before: 上一页数据返回的publishTime的数据
 * 接口地址 : /artist/new/song
 * 调用例子 : /artist/new/song?limit=1
 *           /artist/new/song?limit=1&before=1602777625000
 */
export async function getArtistNewSong(
  url = "/artist/new/song",
  params = { limit: "20", before: "" }
) {
  const result = await get(url, params);
  return result;
}

/**
 * 关注歌手新MV
 * 说明 :登录后调用此接口可获取关注歌手新MV
 * 可选参数 : limit: 取出评论数量 , 默认为 20
 * before: 上一页数据返回的publishTime的数据
 * 接口地址 : /artist/new/mv
 * 调用例子 : /artist/new/mv?limit=1 /artist/new/mv?limit=1&before=1602777625000
 */
export async function getArtistNewMV(
  url = "/artist/new/mv",
  params = { limit: "20", before: "" }
) {
  const result = await get(url, params);
  return result;
}
