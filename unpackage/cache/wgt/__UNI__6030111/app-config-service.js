
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/index","pages/zixun/index","pages/mine/index","pages/mine/InviteFriends/InviteFriends","pages/mine/ChangePassword/ChangePassword","pages/mine/TransactionCode/TransactionCode","pages/mine/MessageBoard/MessageBoard","pages/login/login","pages/login/reg/reg","pages/news/newdel/newdel","pages/news/jiaoyi/jiaoyi","pages/news/chongzhi/chongzhi","pages/news/tixian/tixian","pages/index/tuandui/tuandui","pages/index/mujuan/mujuan","pages/index/mujuanj/mujuanj","pages/mine/dizhi/dizhi","pages/mine/dizhi/tianjia/tianjia","pages/mine/tc2/tc2"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"Oxfam","navigationBarBackgroundColor":"#fff","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#BBBBBB","selectedColor":"#6BCF00","backgroundColor":"#FFFFFF","boxShadow":"0px 2px 2px 0px rgba(0,0,0,0.05)","list":[{"pagePath":"pages/index/index","iconPath":"static/img/images/01.png","selectedIconPath":"static/img/images/1.png","text":"首页"},{"pagePath":"pages/news/index","iconPath":"static/img/images/02.png","selectedIconPath":"static/img/images/2.png","text":"交易"},{"pagePath":"pages/zixun/index","iconPath":"static/img/images/03.png","selectedIconPath":"static/img/images/3.png","text":"咨讯"},{"pagePath":"pages/mine/index","iconPath":"static/img/images/04.png","selectedIconPath":"static/img/images/4.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Oxfam","compilerVersion":"3.2.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","titleNView":true}},{"path":"/pages/news/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"交易","titleNView":true}},{"path":"/pages/zixun/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"咨讯","titleNView":true}},{"path":"/pages/mine/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","titleNView":false}},{"path":"/pages/mine/InviteFriends/InviteFriends","meta":{},"window":{"navigationBarTitleText":"邀请好友","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/mine/ChangePassword/ChangePassword","meta":{},"window":{"navigationBarTitleText":"修改密码","enablePullDownRefresh":false}},{"path":"/pages/mine/TransactionCode/TransactionCode","meta":{},"window":{"navigationBarTitleText":"交易密码","enablePullDownRefresh":false}},{"path":"/pages/mine/MessageBoard/MessageBoard","meta":{},"window":{"navigationBarTitleText":"留言板","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false}},{"path":"/pages/login/reg/reg","meta":{},"window":{"navigationBarTitleText":"注册","enablePullDownRefresh":false}},{"path":"/pages/news/newdel/newdel","meta":{},"window":{"navigationBarTitleText":"详情","enablePullDownRefresh":false}},{"path":"/pages/news/jiaoyi/jiaoyi","meta":{},"window":{"navigationBarTitleText":"交易记录","enablePullDownRefresh":true,"backgroundTextStyle":"dark"}},{"path":"/pages/news/chongzhi/chongzhi","meta":{},"window":{"navigationBarTitleText":"充值","enablePullDownRefresh":false}},{"path":"/pages/news/tixian/tixian","meta":{},"window":{"navigationBarTitleText":"提现","enablePullDownRefresh":false}},{"path":"/pages/index/tuandui/tuandui","meta":{},"window":{"navigationBarTitleText":"我的团队","enablePullDownRefresh":false}},{"path":"/pages/index/mujuan/mujuan","meta":{},"window":{"navigationBarTitleText":"募捐明细","enablePullDownRefresh":true,"backgroundTextStyle":"dark"}},{"path":"/pages/index/mujuanj/mujuanj","meta":{},"window":{"navigationBarTitleText":"募捐","enablePullDownRefresh":false}},{"path":"/pages/mine/dizhi/dizhi","meta":{},"window":{"navigationBarTitleText":"常用地址","enablePullDownRefresh":false,"titleNView":{"buttons":[{"text":"添加","fontSize":"14","float":"right","color":"rgba(0,0,0,1)","width":"60px"}]}}},{"path":"/pages/mine/dizhi/tianjia/tianjia","meta":{},"window":{"navigationBarTitleText":"添加地址","enablePullDownRefresh":false}},{"path":"/pages/mine/tc2/tc2","meta":{},"window":{"navigationBarTitleText":"设置交易密码","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
