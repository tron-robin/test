(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-mys"],{"015d":function(t,e,i){var n=i("9304");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0df813e8",n,!0,{sourceMap:!1,shadowMode:!1})},"07c6":function(t,e,i){"use strict";var n=i("cdcf"),a=i.n(n);a.a},"242a":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-image",emits:["click","error","load"],props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?(this.isError=!1,this.loading=!0):(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=n},"33ac":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("v-uni-image",{staticClass:"navigation-image",attrs:{src:t.logo,mode:"aspectFill"}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title"},[i("v-uni-view",{staticClass:"u-title u-line-1"},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},a=[]},"3a28":function(t,e,i){"use strict";var n=i("d65a"),a=i.n(n);a.a},"47a1":function(t,e,i){"use strict";var n=i("015d"),a=i.n(n);a.a},"4c92":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-navbar[data-v-7b9b8603]{width:100%}.u-navbar-fixed[data-v-7b9b8603]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-7b9b8603]{width:100%}.u-navbar-inner[data-v-7b9b8603]{display:flex;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-7b9b8603]{display:flex;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-7b9b8603]{padding-left:%?4?%;font-size:%?30?%}.navigation-image[data-v-7b9b8603]{width:30px;height:30px;display:block;border-radius:50%}.u-navbar-content-title[data-v-7b9b8603]{display:flex;align-items:center;flex:1;height:%?60?%;text-align:left;flex-shrink:0}.u-title[data-v-7b9b8603]{line-height:%?60?%;font-size:%?34?%;font-weight:700;width:calc(%?750?% - 60px)}.u-navbar-centent-slot[data-v-7b9b8603]{flex:1}.u-navbar-right[data-v-7b9b8603]{flex:1;display:flex;align-items:center;justify-content:flex-end}.u-slot-content[data-v-7b9b8603]{flex:1;display:flex;align-items:center}",""]),t.exports=e},"588e":function(t,e,i){"use strict";i.r(e);var n=i("d099"),a=i("95e6");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("07c6"),i("9843");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"4c0cc859",null,!1,n["a"],void 0);e["default"]=r.exports},"63ba":function(t,e,i){var n=i("7654");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6022e4e2",n,!0,{sourceMap:!1,shadowMode:!1})},"664d":function(t,e,i){"use strict";i.r(e);var n=i("e3a9"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"6f37":function(t,e,i){"use strict";i.r(e);var n=i("96a1"),a=i("a50a");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("47a1");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"7d1df3c0",null,!1,n["a"],void 0);e["default"]=r.exports},7654:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".fixed-top-content[data-v-4c0cc859]{width:100%;height:calc(0px + %?420?%);background:url(https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/my-bg-icon.png) no-repeat;background-size:100% 100%;z-index:99}uni-page-body[data-v-4c0cc859]{width:100%;height:100%}.role-btn[data-v-4c0cc859]{height:%?36?%;width:%?112?%;border-radius:%?18?%;background:linear-gradient(180deg,#ffef15,#ff6f00);font-size:%?22?%;line-height:%?30?%}[data-v-4c0cc859] .u-drawer-bottom{background-color:hsla(0,0%,100%,0)!important}",""]),t.exports=e},"7d81":function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d");var a=n(i("f07e")),s=n(i("c964")),o=n(i("9ee1")),r=uni.getSystemInfoSync(),l=uni.vk,u={components:{mysNavbar:o.default},data:function(){return{logout_visible:!1,service_mobile_visible:!1,invitation_img:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/my-invitation-icon.png",windowHeight:0,next_icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/icon-list-next.png",navHeight:0,page_height:uni.getSystemInfoSync().windowHeight,data:{couponNum:"-"},collectNum:0,form1:{},scrollTop:0,statusBarHeight:r.statusBarHeight,list:[{title:"联系我们1",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/my-kefu-icon.png",page:"callPhone"},{title:"企业微信",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/my-kefu-icon.png",page:"/pages/user/setting/contacts"},{title:"隐私政策",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/xy-icon.png",page:"/pages/login/agreement?code=YSZC"},{title:"设置",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/icon-setting-icon.png",page:"/pages/user/setting/setting"}],list_2:[{title:"订单管理",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/my-order-icon.png",page:"/pages/leader/order"},{title:"活动报名情况",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/action-bm-icon.png",page:"/pages/leader/activity-list"},{title:"联系我们",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/my-kefu-icon.png",page:"callPhone"},{title:"企业微信",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/my-kefu-icon.png",page:"/pages/setting/contacts"},{title:"隐私政策",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/xy-icon.png",page:"/pages/login/agreement?code=YSZC"},{title:"设置",icon:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/icon-setting-icon.png",page:"/pages/user/setting/setting"}],functionList:[],vipCodeShow:!1,isLogin:!1,platform:"",serviceMobile:"",loading:!0}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log(l.getVuex("$user.userInfo"));var e=this;this.options=t,this.isLogin=l.checkToken(),uni.getSystemInfo({success:function(t){e.windowWidth=t.windowWidth,e.navHeight=t.statusBarHeight+uni.upx2px(88)}}),this.getServiceMobile()},onReady:function(){},onShow:function(){var t=this;if(l.checkToken()){this.isLogin=!0;var e=l.getVuex("$user.userInfo");e.is_leader&&2==e.is_leader?this.functionList=this.list_2:this.functionList=this.list,l.callFunction({url:"client/user.getMyInfo",success:function(e){console.log(e),t.collectNum=e.collectNum}})}else this.isLogin=!1,this.functionList=this.list},onHide:function(){},onShareAppMessage:function(t){return l.myfn.onShareAppMessage({options:t})},methods:{getServiceMobile:function(){var t=this;return(0,s.default)((0,a.default)().mark((function e(){var i;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.callFunction({url:"client/pub.getDictInfo",data:{_id:"service-mobile"}});case 2:i=e.sent,t.serviceMobile=i.info;case 4:case"end":return e.stop()}}),e)})))()},logout_system:function(){var t=this;l.confirm("是否立即退出登录","提示","退出登录","取消",(function(e){e.confirm&&l.userCenter.logout({success:function(e){t.isLogin=!1}})}))},login_system:function(){uni.redirectTo({url:"/pages/login/login"})},toNextPage:function(t){"/pages/login/login"==t||"/pages/login/login"!=t&&this.isLogin?"callPhone"==t?uni.makePhoneCall({phoneNumber:this.serviceMobile}):uni.navigateTo({url:t}):uni.navigateTo({url:"/pages/login/login"})},toEditInfo:function(){l.checkToken()?l.navigateTo("/pages/user/setting/info"):l.navigateToLogin()},init:function(t){var e=this;if(e.platform=l.pubfn.getPlatform(),e.isLogin=l.checkToken(),e.isLogin){e.cell1.list[0].show=!0,l.callFunction({url:"client/user.getUserCenter",loading:!0,data:{},success:function(t){e.data=t,l.pubfn.getData(t.userInfo,"fx.is_fx")?(e.cell1.list[0].title="推广大使",e.cell1.list[0].value="进入业务中心"):(e.cell1.list[0].title="我要成为推广大使",e.cell1.list[0].value="分享商品拿佣金！"),t.vip.isUpgrade&&l.alert(t.vip.msg,"VIP升级提醒","好的"),e.grid1.list.map((function(e,i){e.num=t.groupArr[e.title]}))}})}},pageTo:function(t){l.navigateTo(t)},openVipCode:function(){this.vipCodeShow=!0},login:function(){l.navigateToLogin({mode:"navigateTo"})},setWeixinUserInfo:function(){l.toast("h5环境不支持获取微信昵称")},scanCode:function(){return l.toast("H5不支持扫码"),!1}},watch:{},computed:{statusBarOpacityCom:function(){var t=this.scrollTop,e=void 0===t?0:t;return e>80?1:e/80},myVipCom:function(){var t=l.getVuex("$user.mchInfo.vip_level_rule"),e=l.getVuex("$user.userInfo.vip_lv"),i=l.pubfn.getListItem(t,"lv",e)||{};return i}}};e.default=u},"7f9e":function(t,e,i){"use strict";var n=i("ef52"),a=i.n(n);a.a},9304:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-image[data-v-7d1df3c0]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-7d1df3c0]{width:100%;height:100%}.u-image__loading[data-v-7d1df3c0], .u-image__error[data-v-7d1df3c0]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}",""]),t.exports=e},9533:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-count-num",style:{fontSize:this.fontSize+"rpx",fontWeight:this.bold?"bold":"normal",color:this.color}},[this._v(this._s(this.displayValueCom))])},a=[]},"95e6":function(t,e,i){"use strict";i.r(e);var n=i("7d81"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"96a1":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:i("d1bb").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:t.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},s=[]},9843:function(t,e,i){"use strict";var n=i("63ba"),a=i.n(n);a.a},"9ee1":function(t,e,i){"use strict";i.r(e);var n=i("33ac"),a=i("664d");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("3a28");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"7b9b8603",null,!1,n["a"],void 0);e["default"]=r.exports},a50a:function(t,e,i){"use strict";i.r(e);var n=i("242a"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},aa32:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-count-num[data-v-1bb17de3]{display:inline-flex;text-align:center}",""]),t.exports=e},afc5:function(t,e,i){"use strict";i.r(e);var n=i("9533"),a=i("b8a2");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("7f9e");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1bb17de3",null,!1,n["a"],void 0);e["default"]=r.exports},b8a2:function(t,e,i){"use strict";i.r(e);var n=i("fefd"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},c294:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-4c0cc859]{width:100%;height:100vh;background-color:#f5f5f5;overflow:scroll}body.?%PAGE?%[data-v-4c0cc859]{background-color:#f5f5f5}",""]),t.exports=e},cdcf:function(t,e,i){var n=i("c294");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("51dcd595",n,!0,{sourceMap:!1,shadowMode:!1})},d099:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uImage:i("6f37").default,uCountTo:i("afc5").default,uPopup:i("52e6").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"fixed-top-content"},[i("v-uni-view",{style:"height:"+t.statusBarHeight+"px"}),i("v-uni-view",{staticClass:"text-white w-100 text-center font-weight-bold font line-height-88 box-border"},[t._v("我的")]),t.isLogin?i("v-uni-view",{staticClass:"mt-5 pl-2 flex justify-between align-center"},[i("v-uni-view",{staticClass:"flex flex-1 text-white align-center"},[i("u-image",{attrs:{src:t.vk.getVuex("$user.userInfo.avatar"),width:"108",height:"108",borderRadius:"54"}}),i("v-uni-view",{staticClass:"flex flex-column justify-between ml-2 flex-1",staticStyle:{padding:"18rpx 0  17rpx 0"}},[i("v-uni-view",{staticClass:"flex",staticStyle:{"max-width":"340rpx"}},[i("v-uni-view",{staticClass:"text-ellipsis",staticStyle:{"line-height":"48rpx","font-size":"31rpx","font-weight":"500","max-width":"295rpx"}},[t._v(t._s(t.vk.getVuex("$user.userInfo.nickname")))]),i("v-uni-view",{staticClass:"text-white font-22 role-btn flex align-center justify-center ml-2",staticStyle:{background:"linear-gradient(180deg, #541212 0%, #000000 100%)"}},[t._v(t._s(2==t.vk.getVuex("$user.userInfo.is_leader")?"领队":"普通用户"))])],1),i("v-uni-view",{staticStyle:{"font-size":"24rpx","line-height":"33rpx","margin-top":"16rpx"}},[t._v(t._s(t.vk.getVuex("$user.userInfo.mobile")))])],1)],1),i("v-uni-view",{staticClass:"flex px-2 bg-white align-center",staticStyle:{height:"68rpx","border-radius":"34rpx 0 0 34rpx","line-height":"68rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEditInfo.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:"https://mp-1e0acd55-7819-4fee-982a-70fb396d7ffa.cdn.bspapp.com/images/icon-my-edit.png"}}),i("v-uni-view",{staticStyle:{"font-size":"26rpx","margin-left":"8rpx"}},[t._v("编辑资料")])],1)],1):i("v-uni-view",{staticClass:"mt-5 pl-2 flex justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login_system()}}},[i("v-uni-view",{staticClass:"flex flex-1 text-white"},[i("u-image",{attrs:{src:"/static/logo.png",width:"132",height:"132",borderRadius:"66"}}),i("v-uni-view",{staticClass:"flex flex-column pb-1 ml-2 justify-between",staticStyle:{height:"132rpx"}},[i("v-uni-view",{staticClass:"flex flex-column justify-center flex-1 font-34"},[t._v("立即登录")]),i("v-uni-view",{staticClass:"font-24"},[t._v("登录享受更多权益～")])],1)],1)],1),i("v-uni-view",{staticClass:"bg-white mt-4 mx-2 rounded-20 flex align-center",staticStyle:{padding:"30rpx 0"}},[i("v-uni-view",{staticClass:"flex flex-column flex-1 align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNextPage("/pages/user/wallet/list")}}},[i("u-count-to",{attrs:{bold:!0,"font-size":"34","null-val":"-","start-val":0,"end-val":t.vk.vuex.getters("$user/getUserBalanceStr"),duration:1e3,decimals:2}}),i("v-uni-view",{staticClass:"line-height-32 font-22",staticStyle:{color:"#999","margin-top":"12rpx"}},[t._v("钱包")])],1),i("v-uni-view",{staticStyle:{height:"60rpx","border-right":"1rpx solid #d1d1d1",width:"1rpx"}}),i("v-uni-view",{staticClass:"flex flex-column flex-1 align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNextPage("/pages/user/collect/collect")}}},[i("u-count-to",{attrs:{bold:!0,"font-size":"34","null-val":"-","start-val":0,"end-val":t.collectNum,duration:1e3}}),i("v-uni-view",{staticClass:"line-height-32 font-22",staticStyle:{color:"#999","margin-top":"12rpx"}},[t._v("收藏")])],1)],1),i("v-uni-view",{staticClass:"rounded-20",staticStyle:{padding:"24rpx 20rpx"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"160rpx"},attrs:{src:t.invitation_img,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNextPage("/pages/user/invitation/invitation")}}}),i("v-uni-view",{staticClass:"bg-white rounded-20 px-2 pt-3"},t._l(t.functionList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex justify-between align-center pb-3",staticStyle:{height:"90rpx","font-size":"29rpx","font-weight":"bold"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toNextPage(e.page)}}},[i("v-uni-view",{staticClass:"flex align-center",staticStyle:{"line-height":"48rpx"}},[i("v-uni-image",{staticStyle:{width:"48rpx",height:"48rpx","margin-right":"22rpx"},attrs:{src:e.icon}}),i("v-uni-view",[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"flex align-center",staticStyle:{height:"48rpx","line-height":"48rpx"}},[i("v-uni-view",{staticClass:"text-main font-weight-bold"},[t._v(t._s("我的佣金"===e.title?t.vk.pubfn.priceFilter(t.vk.getVuex("$user.userInfo.account_reward.allow")):""))]),i("v-uni-image",{staticClass:"ml-1",staticStyle:{width:"28rpx",height:"30rpx"},attrs:{src:t.next_icon}})],1)],1)})),1)],1),t.isLogin?i("v-uni-view",{staticClass:"px-2 w-100",staticStyle:{"margin-top":"88rpx"}},[i("v-uni-view",{staticClass:"save-btn-main bg-main text-white w-100 font-weight-bold",staticStyle:{"border-radius":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout_system.apply(void 0,arguments)}}},[t._v("退出登录")])],1):t._e(),i("v-uni-view",{staticStyle:{height:"50rpx"}})],1),i("v-uni-view",{staticStyle:{height:"40rpx"}}),i("u-popup",{attrs:{mode:"bottom"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.logout_visible=!1}},model:{value:t.logout_visible,callback:function(e){t.logout_visible=e},expression:"logout_visible"}},[i("v-uni-view",{staticClass:"flex align-center flex-column mx-2"},[i("v-uni-view",{staticClass:"logout_tips_con"},[t._v("是否确定退出登录？")]),i("v-uni-view",{staticClass:"confirm_logout_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmLogout.apply(void 0,arguments)}}},[t._v("确定")]),i("v-uni-view",{staticStyle:{height:"20rpx"}})],1)],1),i("u-popup",{attrs:{mode:"bottom"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.service_mobile_visible=!1}},model:{value:t.service_mobile_visible,callback:function(e){t.service_mobile_visible=e},expression:"service_mobile_visible"}},[i("v-uni-view",{staticClass:"flex align-center flex-column mx-2"},[i("v-uni-view",{staticClass:"logout_tips_con"},[t._v("平台联系电话："+t._s(t.service_mobile))]),i("v-uni-view",{staticClass:"confirm_logout_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmCallPhone.apply(void 0,arguments)}}},[t._v("确定")]),i("v-uni-view",{staticStyle:{height:"20rpx"}})],1)],1)],1)},s=[]},d65a:function(t,e,i){var n=i("4c92");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("28f5d8bc",n,!0,{sourceMap:!1,shadowMode:!1})},e3a9:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n=uni.getSystemInfoSync(),a={},s={name:"mys-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:[String,null],default:""},titleWidth:{type:[String,Number],default:"250"},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"var(--bgcolor,#ffffff)"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!1},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null},logo:{type:[String,null],default:"/static/logo.png"}},data:function(){return{menuButtonInfo:a,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.vk.navigateToHome()}}};e.default=s},ef52:function(t,e,i){var n=i("aa32");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("685cf0b7",n,!0,{sourceMap:!1,shadowMode:!1})},fefd:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("acd8"),i("ac1f"),i("00b4"),i("5319");var n={name:"u-count-to",emits:["end"],props:{nullVal:{type:[Number,String],default:"-"},startVal:{type:[Number,String],default:0},endVal:{type:[Number,String],default:0,required:!0},duration:{type:[Number,String],default:2e3},autoplay:{type:Boolean,default:!0},decimals:{type:[Number,String],default:0},useEasing:{type:Boolean,default:!0},decimal:{type:[Number,String],default:"."},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:50},bold:{type:Boolean,default:!1},separator:{type:String,default:""}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},computed:{countDown:function(){return this.startVal>this.endVal},displayValueCom:function(){var t,e=this.displayValue,i=this.nullVal,n=this.endVal;return t=isNaN(n)?i:e,t}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{easingFn:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e},requestAnimationFrame:function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-this.lastTime)),n=setTimeout((function(){t(e+i)}),i);return this.lastTime=e+i,n},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.startTime=null,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count)},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var e=t.split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))while(a.test(i))i=i.replace(a,"$1"+this.separator+"$2");return i+n},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}};e.default=n}}]);