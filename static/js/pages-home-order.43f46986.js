(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-order"],{"0166":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".zp-swiper-container[data-v-4ba953dc]{\ndisplay:flex;\nflex-direction:column;flex:1}.zp-swiper-container-fixed[data-v-4ba953dc]{position:fixed;\nheight:auto;width:auto;\ntop:0;left:0;bottom:0;right:0}.zp-safe-area-inset-bottom[data-v-4ba953dc]{position:absolute;\nheight:env(safe-area-inset-bottom)\n}.zp-swiper-super[data-v-4ba953dc]{flex:1;position:relative;\ndisplay:flex;\nflex-direction:row}.zp-swiper-left[data-v-4ba953dc],.zp-swiper-right[data-v-4ba953dc]{\nheight:100%\n}.zp-swiper[data-v-4ba953dc]{flex:1;\nheight:100%;width:100%\n}.zp-absoulte[data-v-4ba953dc]{\nposition:absolute;top:0;width:auto\n}.zp-right[data-v-4ba953dc]{right:0}.zp-swiper-item[data-v-4ba953dc]{height:100%}",""]),t.exports=e},"0b73":function(t,e,n){"use strict";n.r(e);var i=n("d62b"),a=n("e9cb");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7694");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"4ba953dc",null,!1,i["a"],void 0);e["default"]=s.exports},"0c3a":function(t,e,n){"use strict";n.r(e);var i=n("4b21"),a=n("7dfa");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("e473");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"d46625d8",null,!1,i["a"],void 0);e["default"]=s.exports},"1bf2":function(t,e,n){"use strict";n.r(e);var i=n("4716"),a=n("51e3");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("36c7");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"328f9fee",null,!1,i["a"],void 0);e["default"]=s.exports},"36c7":function(t,e,n){"use strict";var i=n("d9ca"),a=n.n(i);a.a},4716:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={zPagingSwiper:n("0b73").default,vkDataFloatBall:n("80c3").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("z-paging-swiper",{attrs:{swiperStyle:t.swiperStyle}},[n("v-uni-view",{staticClass:"position-fixed top-0 left-0 bg-white pt-2 w-100",staticStyle:{"z-index":"99"}},[n("v-uni-scroll-view",{staticStyle:{"white-space":"nowrap"},attrs:{"scroll-x":"true"}},[n("v-uni-view",{staticClass:"flex"},t._l(t.tabbar_list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"flex flex-column px-2 align-center tabbar-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseCate(i)}}},[n("v-uni-view",{class:i===t.currentIndex?"active-blue-text":"un-active-blue-text"},[t._v(t._s(e.name))]),n("v-uni-view",{class:i===t.currentIndex?"active-blue-line":"un-active-blue-line"})],1)})),1)],1)],1),n("v-uni-view",{staticStyle:{height:"78rpx"}}),n("v-uni-swiper",{style:"height:"+t.swiperHeight+"px;",attrs:{autoplay:!1,"indicator-dots":!1,current:t.swiperIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSwiper.apply(void 0,arguments)}}},t._l(t.tabbar_list,(function(e,i){return n("v-uni-swiper-item",{key:i},[n("order-item",{ref:"orderItemRef",refInFor:!0,attrs:{currentIndex:t.currentIndex,swiperIndex:t.swiperIndex}})],1)})),1)],1),n("vk-data-float-ball",{attrs:{"scroll-top":t.scrollTop}})],1)},o=[]},"4b21":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={zPaging:n("aa37").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("z-paging",{ref:"paging",attrs:{auto:!1,"show-loading-more-when-reload":!0,"auto-show-back-to-top":!0},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.queryList.apply(void 0,arguments)}},model:{value:t.data.list,callback:function(e){t.$set(t.data,"list",e)},expression:"data.list"}},[n("v-uni-view",{staticClass:"mx-2 mt-2"},[t._l(t.data.list,(function(e,i){return[n("v-uni-view",{key:e._id+"_0",staticClass:"bg-white py-3 px-2 mb-2 rounded-20",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toOrderInfo(e,i)}}},[n("v-uni-view",{staticClass:"flex align-center justify-between pb-3 line-height-42",staticStyle:{"border-bottom":"1rpx solid #ccc"}},[n("v-uni-view",[t._v("订单编号："+t._s(e.order_no))]),n("v-uni-view",{staticClass:"font-weight-bold",style:e.status>-1?"color:#44A736":"color: #999;"},[t._v(t._s(t.status3Fn(e.status)))])],1),n("v-uni-view",{staticClass:"flex align-center mb-2 pt-2"},[n("v-uni-image",{staticClass:"rounded-20",staticStyle:{width:"160rpx",height:"160rpx"},attrs:{src:e.goods_info.goods_thumb}}),n("v-uni-view",{staticClass:"flex flex-column justify-between ml-2",staticStyle:{width:"480rpx",padding:"3rpx 0 5rpx 0"}},[n("v-uni-view",{staticClass:"font line-height-48 text_ellipsis_2"},[t._v(t._s(e.goods_info.name))]),n("v-uni-view",{staticClass:"flex justify-between align-center",staticStyle:{"margin-top":"16rpx"}},[n("v-uni-view",{staticClass:"font-weight-bold line-height-50",staticStyle:{color:"#333","font-size":"28rpx"}},[t._v("￥"+t._s(t.vk.pubfn.priceFilter(e.goods_info.price)))]),n("v-uni-view",{staticClass:"font-24 line-height-32",staticStyle:{color:"#999"}},[t._v("x"+t._s(e.travel_user_list.length))])],1),n("v-uni-view",{staticClass:"flex justify-between align-center",staticStyle:{"margin-top":"16rpx"}},[t.vk.pubfn.isNotNull(e.amount_info.need_payment_amount)&&e.amount_info.need_payment_amount>0?n("v-uni-view",{staticClass:"font-weight-bold line-height-50",staticStyle:{color:"#333","font-size":"28rpx"}},[t._v("需付款："),n("v-uni-text",{staticStyle:{color:"#f00"}},[t._v("￥"+t._s(t.vk.pubfn.priceFilter(e.amount_info.need_payment_amount)))])],1):t.vk.pubfn.isNotNull(e.amount_info.payment_amount)&&e.amount_info.payment_amount>0?n("v-uni-view",{staticClass:"font-weight-bold line-height-50",staticStyle:{color:"#333","font-size":"28rpx"}},[t._v("实付款："),n("v-uni-text",{staticStyle:{color:"#f00"}},[t._v("￥"+t._s(t.vk.pubfn.priceFilter(e.amount_info.payment_amount)))])],1):t._e(),2==e.goods_info.is_free?[n("v-uni-view",{staticClass:"gz_tag_size"},[t._v("鸽子费")])]:t._e()],2)],1)],1),n("v-uni-view",{staticClass:"flex justify-between align-center mt-2"},[n("v-uni-view",{staticStyle:{"font-size":"28rpx","line-height":"50rpx"}},[t._v(t._s(e.pay_time?t.vk.pubfn.timeFormat(e.pay_time,"yyyy-MM-dd hh:mm"):t.vk.pubfn.timeFormat(e._add_time,"yyyy-MM-dd hh:mm")))]),0==e.status?n("v-uni-view",{staticClass:"flex flex-row-reverse"},[n("v-uni-view",{staticClass:"bg-main text-white action-btn-size ml-2",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.toPay(e,i)}}},[t._v("付款")]),n("v-uni-view",{staticClass:"action-btn-size text-main border-main",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.cancelOrder(e,i)}}},[t._v("取消")])],1):t._e(),4==e.status?n("v-uni-view",{staticClass:"action-btn-size bg-main text-white",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.scanToCheck(e)}}},[t._v("扫码校验")]):t._e(),5==e.status?n("v-uni-view",{staticClass:"action-btn-size bg-main text-white",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.scanToCheck(e)}}},[t._v("扫码签到")]):t._e(),6==e.status&&2!=e.is_evaluate?n("v-uni-view",{staticClass:"action-btn-size bg-main text-white",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.toEvaluate(e)}}},[t._v("去评价")]):t._e()],1)],1)]}))],2)],1)},o=[]},"51e3":function(t,e,n){"use strict";n.r(e);var i=n("fae1"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},5523:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".list-action-item[data-v-d46625d8]{width:%?180?%;height:%?54?%;border-radius:%?27?%;text-align:center;line-height:%?54?%;margin-left:%?30?%;font-size:%?28?%}.blue-btn-border[data-v-d46625d8]{border:%?1?% solid #44a736}.action-btn-size[data-v-d46625d8]{width:%?140?%;height:%?50?%;display:flex;align-items:center;justify-content:center;font-size:%?24?%;border-radius:%?25?%}.border-main[data-v-d46625d8]{border:%?1?% solid #44a736}.gz_tag_size[data-v-d46625d8]{font-size:%?20?%;border:%?1?% solid #ff6e1a;color:#ff6e1a;width:%?88?%;height:%?32?%;background-color:rgba(255,110,26,.02);text-align:center;line-height:%?32?%;border-radius:%?6?%;margin-left:%?10?%}",""]),t.exports=e},7694:function(t,e,n){"use strict";var i=n("8e25"),a=n.n(i);a.a},"7b31":function(t,e,n){"use strict";var i=n("bb36"),a=n.n(i);a.a},"7dfa":function(t,e,n){"use strict";n.r(e);var i=n("8c30"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"80c3":function(t,e,n){"use strict";n.r(e);var i=n("d31e"),a=n("f574");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("9dc9");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"ebe37cf2",null,!1,i["a"],void 0);e["default"]=s.exports},"883d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975"),n("d81d"),n("14d9");var i={name:"vk-data-float-ball",props:{scrollTop:{type:Number,default:function(){return 0}},leftBtns:{type:Array,default:function(){return[]}},rightBtns:{type:Array,default:function(){return[]}},showBack:{type:Boolean},custom:{type:Array,default:function(){return[]}},zIndex:{type:[Number],default:900}},data:function(){return{data:{showBack:!1},complete:!1}},created:function(){var t=getCurrentPages();t&&t.length>1?this.data.showBack=!0:this.data.showBack=!1},mounted:function(){var t=this;setTimeout((function(){t.complete=!0}),100)},methods:{pageBack:function(){var t=getCurrentPages();t&&t.length>1&&uni.navigateBack({delta:1})},customEvent:function(t){var e=this.custom,n=void 0===e?[]:e,i=this.vk;if("login"===t&&-1===n.indexOf(t)){var a=i.callFunctionUtil.getConfig();i.reLaunch(a.login.url)}this.$emit(t)}},computed:{rightBtnsCom:function(){var t=[],e=this.rightBtns,n=void 0===e?[]:e;return n.map((function(e,n){"contact"===e||t.push(e)})),t}}};e.default=i},"8b3f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".u-back-top[data-v-63149417]{width:%?80?%;height:%?80?%;position:fixed;z-index:9;display:flex;flex-direction:row;flex-direction:column;justify-content:center;background-color:#e1e1e1;color:#606266;align-items:center;transition:opacity .4s}.u-back-top__content[data-v-63149417]{display:flex;flex-direction:row;flex-direction:column;align-items:center}.u-back-top__content__tips[data-v-63149417]{font-size:%?24?%;-webkit-transform:scale(.8);transform:scale(.8);line-height:1}",""]),t.exports=e},"8c30":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d401"),n("d3b7"),n("25f0"),n("159b"),n("c975"),n("99af");var i={props:["statusItem","currentIndex","swiperIndex","categoryId","keywords"],data:function(){return{data:{list:[],total:"-",hasMore:!0},tabbar_list:[{name:"全部",value:"",num:0},{name:"待付款",value:0,num:0},{name:"待开始",value:4,num:0},{name:"服务中",value:5,num:0},{name:"已完成",value:6,num:0},{name:"已取消",value:-1,num:0}],url:"client/order.getMyOrderList",queryForm1:{pagination:{pageIndex:1,pageSize:20},formData:{easy_status:""},sortRule:[{name:"_add_time",type:"desc"}]}}},onLoad:function(){},methods:{status3Fn:function(t){return{"-4":"已关闭","-3":"已退款","-2":"申请退款中","-1":"已取消",0:"待付款",4:"待开始",5:"服务中",6:"已完成"}[t.toString()]},initListData:function(){var t=this;setTimeout((function(){t.$refs.paging.reload()}),100)},queryList:function(t,e){this.queryForm1.pagination.pageIndex=t,this.getList({success:function(t){}})},toEvaluate:function(t){var e=this;vk.navigateTo({url:"/pages/activity/comment?_id="+t._id+"&order_no="+t.order_no,success:function(e){t&&e.eventChannel.emit("data",t)},events:{update_order_msg:function(t){e.$refs.paging.reload()}}})},calcOrderNum:function(t){var e=0;return t.goods_sku_list.forEach((function(t){e+=1*t.buy_num})),e},toOrderInfo:function(t,e){var n=this;vk.navigateTo({url:"/pages/activity/order-info?_id="+t._id+"&order_no="+t.order_no,success:function(e){t&&e.eventChannel.emit("data",t)},events:{update_order_msg:function(t){n.$refs.paging.reload()}}})},toPay:function(t,e){var n=this;vk.navigateTo({url:"/pages/activity/activity-order-pay?_id="+t._id+"&order_no="+t.order_no,success:function(e){t&&e.eventChannel.emit("data",t)},events:{update_order_msg:function(t){n.$refs.paging.reload()}}})},scanToCheck:function(t){var e=this;uni.scanCode({success:function(n){var i=decodeURIComponent(n.path);if(vk.pubfn.isNull(i))vk.toast("二维码不正确");else if(-1!==i.indexOf("?scene=")){var a=i.split("?scene="),o=a[a.length-1];vk.callFunction({url:"client/activityOrder.checkLoginByOrderId",data:{_id:t._id,goods_id:o},success:function(t){e.$refs.paging.reload(),vk.toast(t.msg)}})}else vk.toast("二维码不正确")}})},cancelOrder:function(t,e){var n=this;vk.callFunction({url:"client/order.cancel",title:"请求中...",data:{order_no:t.order_no},success:function(t){vk.toast(t.msg),n.$refs.paging.reload()}})},getList:function(){var t=this;t.queryForm1.formData.easy_status=t.tabbar_list[t.currentIndex].value,vk.callFunction({url:t.url,loading:!1,data:t.queryForm1,success:function(e){t.$nextTick((function(){t.$refs.paging.complete(e.rows)})),console.log(e.rows)}})},confirmReceive:function(t,e){var n=this;vk.confirm("确定已收到货了吗?","提示","确定","取消",(function(e){e.confirm&&vk.callFunction({url:"client/order.confirmReceipt",title:"请求中...",data:{_id:t._id},success:function(t){vk.toast("已收货"),n.$refs.paging.reload()}})}))},look_express:function(t,e){var n="/pages/user/order/express?name=".concat(t.express_info.express_name,"&no=").concat(t.express_info.express_no,"&order_no=").concat(t.order_no);vk.navigateTo({url:n,success:function(e){t&&e.eventChannel.emit("data",t)}})},applyRefund:function(t,e){var n=this;vk.callFunction({url:"client/order.applyRefundOrder",data:{_id:t._id,goods_sku_list:t.goods_sku_list},success:function(t){vk.toast(t.msg),n.$refs.paging.reload()}})}}};e.default=i},"8e25":function(t,e,n){var i=n("0166");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("678f31de",i,!0,{sourceMap:!1,shadowMode:!1})},"940c2":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("d1bb").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-back-top",class:["u-back-top--mode--"+t.mode],style:[{bottom:t.bottom+"rpx",right:t.right+"rpx",borderRadius:"circle"==t.mode?"10000rpx":"8rpx",zIndex:t.uZIndex,opacity:t.opacity},t.customStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}},[t.$slots.default||t.$slots.$default?t._t("default"):n("v-uni-view",{staticClass:"u-back-top__content"},[n("u-icon",{attrs:{name:t.icon,"custom-style":t.iconStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-back-top__content__tips"},[t._v(t._s(t.tips))])],1)],2)},o=[]},"9b25":function(t,e,n){var i=n("5523");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("19fa971e",i,!0,{sourceMap:!1,shadowMode:!1})},"9dc9":function(t,e,n){"use strict";var i=n("a75b"),a=n.n(i);a.a},a75b:function(t,e,n){var i=n("e8a6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3aef1e0c",i,!0,{sourceMap:!1,shadowMode:!1})},b38a:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"u-back-top",props:{mode:{type:String,default:"circle"},icon:{type:String,default:"arrow-upward"},tips:{type:String,default:""},duration:{type:[Number,String],default:100},scrollTop:{type:[Number,String],default:0},top:{type:[Number,String],default:400},bottom:{type:[Number,String],default:200},right:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:"9"},iconStyle:{type:Object,default:function(){return{color:"#909399",fontSize:"38rpx"}}},customStyle:{type:Object,default:function(){return{}}}},watch:{showBackTop:function(t,e){t?(this.uZIndex=this.zIndex,this.opacity=1):(this.uZIndex=-1,this.opacity=0)}},computed:{showBackTop:function(){return this.scrollTop>uni.upx2px(this.top)}},data:function(){return{opacity:0,uZIndex:-1}},methods:{backToTop:function(){uni.pageScrollTo({scrollTop:0,duration:this.duration})}}};e.default=i},bb36:function(t,e,n){var i=n("8b3f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("589f4367",i,!0,{sourceMap:!1,shadowMode:!1})},d31e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uBackTop:n("f92a").default,uIcon:n("d1bb").default,uButton:n("f363").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.complete?n("v-uni-view",{staticClass:"vk-data-float-ball"},[n("u-back-top",{attrs:{"scroll-top":t.scrollTop,"icon-style":{fontSize:"32rpx",color:"#ffffff"},"custom-style":{backgroundColor:"rgba(0, 0, 0, 0.6)"},bottom:200+100*t.rightBtnsCom.length}}),t.data.showBack?n("v-uni-view",{staticClass:"ball-btn left-btn",style:{bottom:200+100*t.leftBtns.length+"rpx",zIndex:t.zIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pageBack.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"arrow-left",color:"#FFFFFF",size:"38"}})],1):t._e(),t._l(t.rightBtnsCom,(function(e,i){return n("v-uni-view",{key:i,staticClass:"ball-btn right-btn",style:{bottom:200+100*i+"rpx",zIndex:t.zIndex},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.customEvent(e)}}},["contact"===e?n("u-button",{attrs:{"hover-class":"none",shape:"circle",size:"mini","open-type":"contact",plain:!0,"hair-line":!1,"custom-style":{border:0,width:"80rpx",height:"80rpx",backgroundColor:"rgba(0, 0, 0, 0)"}}},[n("u-icon",{attrs:{name:"server-man",color:"#FFFFFF",size:"38"}})],1):"login"===e?n("v-uni-view",[t._v("登录")]):t._e()],1)}))],2):t._e()},o=[]},d62b:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:t.fixed?"zp-swiper-container zp-swiper-container-fixed":"zp-swiper-container",style:[t.finalSwiperStyle]},[-1===t.cssSafeAreaInsetBottom?n("v-uni-view",{staticClass:"zp-safe-area-inset-bottom"}):t._e(),t.zSlots.top?t._t("top"):t._e(),n("v-uni-view",{staticClass:"zp-swiper-super"},[t.zSlots.left?n("v-uni-view",{class:{"zp-swiper-left":!0,"zp-absoulte":t.isOldWebView}},[t._t("left")],2):t._e(),n("v-uni-view",{class:{"zp-swiper":!0,"zp-absoulte":t.isOldWebView},style:[t.swiperContentStyle]},[t._t("default")],2),t.zSlots.right?n("v-uni-view",{class:{"zp-swiper-right":!0,"zp-absoulte zp-right":t.isOldWebView}},[t._t("right")],2):t._e()],1),t.zSlots.bottom?t._t("bottom"):t._e()],2)},a=[]},d98b:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("bade")),o={name:"z-paging-swiper",mixins:[a.default],data:function(){return{swiperContentStyle:{}}},props:{fixed:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},swiperStyle:{type:Object,default:function(){return{}}}},mounted:function(){var t=this;this.$nextTick((function(){t.systemInfo=uni.getSystemInfoSync()})),this._getCssSafeAreaInsetBottom(),this.updateLeftAndRightWidth(),this.swiperContentStyle={flex:"1"},this.swiperContentStyle={width:"100%",height:"100%"}},computed:{finalSwiperStyle:function(){var t=this.swiperStyle;if(!this.systemInfo)return t;var e=this.windowTop,n=this.systemInfo.windowBottom;if(this.fixed&&(e&&!t.top&&(t.top=e+"px"),!t.bottom)){var i=n||0;i+=this.safeAreaInsetBottom?this.safeAreaBottom:0,i>0&&(t.bottom=i+"px")}return t}},methods:{updateLeftAndRightWidth:function(){var t=this;this.isOldWebView&&this.$nextTick((function(){return t._updateLeftAndRightWidth(t.swiperContentStyle,"zp-swiper")}))}}};e.default=o},d9ca:function(t,e,n){var i=n("da16");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("22a72498",i,!0,{sourceMap:!1,shadowMode:!1})},da16:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-328f9fee]{width:100%;height:100%;background-color:#f5f5f5}body.?%PAGE?%[data-v-328f9fee]{background-color:#f5f5f5}.active-blue-text[data-v-328f9fee]{color:#44a736;font-size:%?30?%;line-height:%?42?%;height:%?42?%;font-weight:700;letter-spacing:%?1?%}.un-active-blue-text[data-v-328f9fee]{color:#999;line-height:%?42?%;font-size:%?30?%;height:%?42?%;font-weight:400}.tabbar-item[data-v-328f9fee]{width:%?200?%}.active-blue-line[data-v-328f9fee]{height:%?8?%;width:%?50?%;border-radius:%?4?%;margin:%?6?% auto;background-color:#44a736}.un-active-blue-line[data-v-328f9fee]{height:%?8?%;width:%?50?%;border-radius:%?4?%;background-color:#fff;margin:%?6?% auto}",""]),t.exports=e},e473:function(t,e,n){"use strict";var i=n("9b25"),a=n.n(i);a.a},e8a6:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".vk-data-float-ball .ball-btn[data-v-ebe37cf2]{width:%?80?%;height:%?80?%;position:fixed;border-radius:50%;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;color:#fff;z-index:900}.vk-data-float-ball .left-btn[data-v-ebe37cf2]{left:%?40?%}.vk-data-float-ball .right-btn[data-v-ebe37cf2]{right:%?40?%}",""]),t.exports=e},e9cb:function(t,e,n){"use strict";n.r(e);var i=n("d98b"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f574:function(t,e,n){"use strict";n.r(e);var i=n("883d"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f620:function(t,e,n){"use strict";n.r(e);var i=n("b38a"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f92a:function(t,e,n){"use strict";n.r(e);var i=n("940c2"),a=n("f620");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7b31");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"63149417",null,!1,i["a"],void 0);e["default"]=s.exports},fae1:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a=i(n("0c3a")),o={components:{orderItem:a.default},data:function(){return{swiperIndex:0,swiperStyle:{},tabbar_list:[{name:"全部",value:"",num:0},{name:"待付款",value:0,num:0},{name:"待开始",value:4,num:0},{name:"服务中",value:5,num:0},{name:"已完成",value:6,num:0},{name:"已取消",value:-1,num:0}],swiperHeight:400,currentIndex:0,scrollTop:0,url:"client/order.getMyOrderList",data:{list:[],total:"-",hasMore:!0},queryForm1:{pagination:{pageIndex:1,pageSize:20},formData:{easy_status:""},sortRule:[{name:"_add_time",type:"desc"}]}}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;e.options=t,e.init(t),uni.getSystemInfo({success:function(t){console.log(t),"ios"==t.osName?e.swiperHeight=t.windowHeight-uni.upx2px(90):e.swiperHeight=t.windowHeight-uni.upx2px(90)-t.safeAreaInsets.bottom}})},methods:{init:function(t){var e=this;if(t.status){var n=vk.pubfn.getListIndex(e.tabbar_list,"value",Number(t.status));e.swiperIndex=1*n,e.currentIndex=1*n}setTimeout((function(){e.$refs.orderItemRef[e.currentIndex].initListData()}),120)},chooseCate:function(t){this.currentIndex=t,this.swiperIndex=t,this.$refs.orderItemRef[this.currentIndex].initListData()},changeSwiper:function(t){this.swiperIndex=t.detail.current,this.currentIndex=t.detail.current,this.$refs.orderItemRef[this.currentIndex].initListData()}}};e.default=o}}]);