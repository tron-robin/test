(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-list"],{"0877":function(t,e,i){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i="".concat(t);while(i.length<e)i="0".concat(i);return i}i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.isSameSecond=function(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)},e.parseFormat=function(t,e){var i=e.days,a=e.hours,o=e.minutes,r=e.seconds,s=e.milliseconds;-1===t.indexOf("DD")?a+=24*i:t=t.replace("DD",n(i));-1===t.indexOf("HH")?o+=60*a:t=t.replace("HH",n(a));-1===t.indexOf("mm")?r+=60*o:t=t.replace("mm",n(o));-1===t.indexOf("ss")?s+=1e3*r:t=t.replace("ss",n(r));return t.replace("SSS",n(s,3))},e.parseTimeData=function(t){var e=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),n=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3),o=Math.floor(t%1e3);return{days:e,hours:i,minutes:n,seconds:a,milliseconds:o}},i("c975"),i("ac1f"),i("5319")},"0a6a":function(t,e,i){"use strict";i.r(e);var n=i("e713"),a=i("2c7c");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d4fc");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"68cffead",null,!1,n["a"],void 0);e["default"]=s.exports},"0e7e":function(t,e,i){"use strict";i.r(e);var n=i("474a"),a=i("13b6");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1826");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"8dd52f22",null,!1,n["a"],void 0);e["default"]=s.exports},"111d":function(t,e,i){"use strict";i.r(e);var n=i("6d8d"),a=i("2b61");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a86a");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"11bc7c1d",null,!1,n["a"],void 0);e["default"]=s.exports},"13b6":function(t,e,i){"use strict";i.r(e);var n=i("2446"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},1826:function(t,e,i){"use strict";var n=i("ca20"),a=i.n(n);a.a},"1dc5":function(t,e,i){"use strict";i.r(e);var n=i("c054"),a=i("45d3");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2c33");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"2394f0e1",null,!1,n["a"],void 0);e["default"]=s.exports},2446:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-line",props:{color:{type:String,default:"#e4e7ed"},length:{type:String,default:"100%"},direction:{type:String,default:"row"},hairLine:{type:Boolean,default:!0},margin:{type:String,default:"0"},borderStyle:{type:String,default:"solid"}},computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"==this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.borderStyle,t.width=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.borderStyle,t.height=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,t}}};e.default=n},2688:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* list-item开始 */.list-item[data-v-2394f0e1]{margin:%?20?%;border-radius:%?0?%;overflow:hidden;box-shadow:0 0 7px rgba(0,0,0,.1)}.list-item > .content[data-v-2394f0e1]{background-color:#fff;padding:%?0?%;color:#606266;height:%?200?%;display:flex;align-items:center;position:relative}.list-item > .content .mt10[data-v-2394f0e1]{margin-top:%?10?%}.list-item > .content .text-one[data-v-2394f0e1]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.list-item > .content > .left[data-v-2394f0e1]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:30%;height:100%;background-color:var(--main)}.list-item > .content > .left .discounts[data-v-2394f0e1]{display:flex;justify-content:center;align-items:flex-end;width:100%}.list-item > .content > .left .discounts .min[data-v-2394f0e1]{color:#fff;font-size:16px;font-weight:700}.list-item > .content > .left .discounts .max[data-v-2394f0e1]{font-size:24px;color:#fff;font-weight:700}.list-item > .content > .left .full-reduction[data-v-2394f0e1]{display:flex;justify-content:center;align-items:center;width:100%;height:30px;font-size:12px;color:#fff}.list-item > .content > .left .jag[data-v-2394f0e1]{position:absolute;top:0;left:%?-6?%;width:6px;height:100%;background-size:10px 6px;background-color:#fff;background-position:100% 35%;background-image:linear-gradient(-45deg,var(--main) 25%,transparent 0,transparent),linear-gradient(-135deg,var(--main) 25%,transparent 0,transparent),linear-gradient(-45deg,transparent 75%,var(--main) 0),linear-gradient(-135deg,transparent 75%,var(--main) 0)}.list-item > .content > .right[data-v-2394f0e1]{width:70%;height:90%;padding:0 4%}.list-item > .content > .right .info-title[data-v-2394f0e1]{display:flex;width:100%;height:30px}.list-item > .content > .right .info-title .tag[data-v-2394f0e1]{margin-right:%?10?%}.list-item > .content > .right .info-title .tag uni-text[data-v-2394f0e1]{padding:%?4?% %?16?%;color:#fff;background-color:var(--main);font-size:%?24?%;border-radius:%?40?%}.list-item > .content > .right .info-title .title uni-text[data-v-2394f0e1]{font-size:%?24?%;color:#212121}.list-item > .content > .right .date-get[data-v-2394f0e1]{display:flex;align-items:center;justify-content:space-between;width:100%;height:%?80?%;border-bottom:%?2?% dashed #eee}.list-item > .content > .right .date-get .date[data-v-2394f0e1]{flex:1;display:flex;align-items:center}.list-item > .content > .right .date-get .date uni-text[data-v-2394f0e1]{font-size:%?24?%;color:#555}.list-item > .content > .right .date-get .get uni-text[data-v-2394f0e1]{padding:%?10?% %?20?%;background-color:var(--main);color:#fff;font-size:%?24?%;border-radius:%?100?%}.list-item > .content > .right .date-get .get uni-text[data-v-2394f0e1]:active{-webkit-filter:grayscale(50%);filter:grayscale(50%)}.list-item > .content > .right .date-get .get .use[data-v-2394f0e1]{background-color:initial;border:1px solid var(--main);color:var(--main)}.list-item > .content > .right .describe-title[data-v-2394f0e1]{display:flex;align-items:center;justify-content:space-between;width:100%;height:%?40?%}.list-item > .content > .right .describe-title uni-text[data-v-2394f0e1]{color:#555;font-size:%?24?%}.list-item > .content > .right .describe-title .more[data-v-2394f0e1]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.list-item .collapse[data-v-2394f0e1]{display:none;padding:%?20?%;font-size:%?24?%;color:#909399;line-height:%?40?%;background-color:#fff;border-top:1px solid #f8f8fa}.list-item .collapse.actived[data-v-2394f0e1]{display:block}.list-item.coupon-lose .left[data-v-2394f0e1]{background-color:silver}.list-item.coupon-lose .left .jag[data-v-2394f0e1]{position:absolute;top:0;left:%?-6?%;width:6px;height:100%;background-size:10px 6px;background-color:#fff;background-position:100% 35%;background-image:linear-gradient(-45deg,silver 25%,transparent 0,transparent),linear-gradient(-135deg,silver 25%,transparent 0,transparent),linear-gradient(-45deg,transparent 75%,silver 0),linear-gradient(-135deg,transparent 75%,silver 0)}.list-item.coupon-lose .right .info-title .tag uni-text[data-v-2394f0e1]{background-color:silver}.list-item.coupon-lose .right .info-title .title uni-text[data-v-2394f0e1]{color:silver}.list-item.coupon-lose .right .date-get .date uni-text[data-v-2394f0e1]{color:silver}.list-item.coupon-lose .right .date-get .get uni-text[data-v-2394f0e1]{background-color:silver}.list-item.coupon-lose .right .date-get .get .use[data-v-2394f0e1]{border:1px solid silver;color:silver}\n/* list-item结束 */',""]),t.exports=e},"2b61":function(t,e,i){"use strict";i.r(e);var n=i("40c9"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"2c33":function(t,e,i){"use strict";var n=i("9091"),a=i.n(n);a.a},"2c7c":function(t,e,i){"use strict";i.r(e);var n=i("68e8"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"40c9":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};e.default=n},"45d3":function(t,e,i){"use strict";i.r(e);var n=i("d462"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"474a":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-line",style:[this.lineStyle]})},a=[]},4927:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("841c");var n=uni.vk,a={},o={data:function(){return{url:"client/user.getMallCouponList",data:{list:[],total:"-",hasMore:!0},queryForm1:{pagination:{pageIndex:1,pageSize:20},formData:{_add_time:[]},columns:[{key:"_add_time",mode:"[]"}],sortRule:[{name:"sort",type:"asc"}]},state:{loadmore:"loading"},loading:!1,scrollTop:0}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n=uni.vk,this.options=t,this.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(t){this.nextPage()},methods:{init:function(t){console.log("init: ",t),a["queryForm1"]=n.pubfn.copyObject(this.queryForm1.formData),this.search()},search:function(t){this.queryForm1.pagination.pageIndex=1,this.data.pageKey=!0,this.getList()},nextPage:function(){"loadmore"==this.state.loadmore&&(this.state.loadmore="loading",this.queryForm1.pagination.pageIndex++,this.getList())},getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;n.pubfn.getListData2({that:e,url:e.url,success:t.success})}},computed:{}};e.default=o},"4ad6":function(t,e,i){"use strict";i.r(e);var n=i("d451"),a=i("5843");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"2ba24232",null,!1,n["a"],void 0);e["default"]=s.exports},5843:function(t,e,i){"use strict";i.r(e);var n=i("fc05"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"65cf":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-load-more-wrap[data-v-54e317ae]{display:flex;flex-direction:row;justify-content:center;align-items:center}.u-load-more-inner[data-v-54e317ae]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 %?12?%}.u-more[data-v-54e317ae]{position:relative;display:flex;flex-direction:row;justify-content:center}.u-dot-text[data-v-54e317ae]{font-size:%?28?%}.u-loadmore-icon-wrap[data-v-54e317ae]{margin-right:%?8?%}.u-loadmore-icon[data-v-54e317ae]{display:flex;flex-direction:row;align-items:center;justify-content:center}",""]),t.exports=e},"68e8":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=n},"6b8d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-empty[data-v-68cffead]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-68cffead]{margin-bottom:%?20?%}.u-slot-wrap[data-v-68cffead]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}",""]),t.exports=e},"6d8d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},a=[]},"6db2":function(t,e,i){"use strict";i.r(e);var n=i("4927"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"849f":function(t,e,i){var n=i("65cf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2166743d",n,!0,{sourceMap:!1,shadowMode:!1})},9091:function(t,e,i){var n=i("2688");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4215e24f",n,!0,{sourceMap:!1,shadowMode:!1})},9275:function(t,e,i){var n=i("debe");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6cfe2f52",n,!0,{sourceMap:!1,shadowMode:!1})},"941c":function(t,e,i){var n=i("ff65");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4d9cf5c8",n,!0,{sourceMap:!1,shadowMode:!1})},9971:function(t,e,i){"use strict";i.r(e);var n=i("a282"),a=i("6db2");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e8fa");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7b3d8185",null,!1,n["a"],void 0);e["default"]=s.exports},"9d7f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-line[data-v-8dd52f22]{vertical-align:middle}",""]),t.exports=e},a282:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uGap:i("111d").default,uEmpty:i("0a6a").default,vkMallCoupon:i("1dc5").default,uLoadmore:i("fe05").default,vkDataFloatBall:i("80c3").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"app"},[i("v-uni-view",{staticClass:"list-page"},[i("u-gap",{attrs:{height:"20","bg-color":"#f3f3f3"}}),0==t.data.list.length?i("v-uni-view",{staticStyle:{padding:"40% 0 80% 0"}},[t.loading?i("u-empty",{attrs:{text:"查询中...",mode:"search"}}):i("u-empty",{attrs:{text:"暂无内容",mode:"list"}})],1):i("v-uni-view",{staticClass:"list-main"},[t._l(t.data.list,(function(e,n){return[e.hide?t._e():i("vk-mall-coupon",{key:e._id+"_0",attrs:{coupon:e}})]})),i("u-loadmore",{attrs:{status:t.state.loadmore,"bg-color":"var(--bgcolor)","margin-bottom":"30"},on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.nextPage.apply(void 0,arguments)}}})],2)],1),i("vk-data-float-ball",{attrs:{"scroll-top":t.scrollTop}})],1)},o=[]},a860:function(t,e,i){var n=i("6b8d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("eadecd56",n,!0,{sourceMap:!1,shadowMode:!1})},a86a:function(t,e,i){"use strict";var n=i("9275"),a=i.n(n);a.a},a98d:function(t,e,i){"use strict";i.r(e);var n=i("aaa2"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},aaa2:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-loadmore",emits:["loadmore"],props:{bgColor:{type:String,default:"transparent"},icon:{type:Boolean,default:!0},fontSize:{type:String,default:"28"},color:{type:String,default:"#606266"},status:{type:String,default:"loadmore"},iconType:{type:String,default:"circle"},loadText:{type:Object,default:function(){return{loadmore:"加载更多",loading:"正在加载...",nomore:"没有更多了"}}},isDot:{type:Boolean,default:!1},iconColor:{type:String,default:"#b7b7b7"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},height:{type:[String,Number],default:"auto"}},data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:this.fontSize+"rpx",position:"relative",zIndex:1,backgroundColor:this.bgColor}},cricleStyle:function(){return{borderColor:"#e5e5e5 #e5e5e5 #e5e5e5 ".concat(this.circleColor)}},flowerStyle:function(){return{}},showText:function(){var t="";return t="loadmore"==this.status?this.loadText.loadmore:"loading"==this.status?this.loadText.loading:"nomore"==this.status&&this.isDot?this.dotText:this.loadText.nomore,t}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};e.default=n},c054:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uCountDown:i("4ad6").default,uIcon:i("d1bb").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"vk-mall-user-coupon list-item",class:{"coupon-lose":!!t.disableCom}},[i("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"discounts"},[1===t.coupon.type?[i("v-uni-text",{staticClass:"min"},[t._v("￥")]),i("v-uni-text",{staticClass:"max"},[t._v(t._s(parseFloat(t.vk.pubfn.priceFilter(t.coupon.coupon_rule.discount_amount))))])]:t._e(),2===t.coupon.type?[i("v-uni-text",{staticClass:"max"},[t._v(t._s(t.vk.pubfn.discountFilter(t.coupon.coupon_rule.discount_proportion)))])]:t._e()],2),i("v-uni-view",{staticClass:"full-reduction"},[t._v(t._s(t.reductionCom))]),i("v-uni-view",{staticClass:"jag"})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"info-title"},[t.coupon.only_original_price_use?i("v-uni-view",{staticClass:"tag"},[i("v-uni-text",[t._v("原价")])],1):t._e(),i("v-uni-view",{staticClass:"tag"},[i("v-uni-text",[t._v(t._s(t.typeCom))])],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.availableRangeRuleCom))])],1)],1),i("v-uni-view",{staticClass:"date-get"},[i("v-uni-view",{staticClass:"date"},[i("v-uni-text",{staticClass:"text-one"},[t._v(t._s(t.effectiveTimeRuleCom))])],1),t.coupon.receiveRes&&0!=t.coupon.receiveRes.status?1==t.coupon.receiveRes.status?i("v-uni-view",{staticClass:"get",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pageToGoodsList.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("立即使用")])],1):-1==t.coupon.receiveRes.status?i("v-uni-view",{staticClass:"get"},[i("v-uni-text",[t._v(t._s(t.coupon.receiveRes.msg))])],1):-2==t.coupon.receiveRes.status?i("v-uni-view",{staticClass:"get"},[i("u-count-down",{attrs:{timestamp:t.coupon.receive_start_time_diff},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.countDownChange(e,t.coupon)},finish:function(e){arguments[0]=e=t.$handleEvent(e),t.coupon.receiveRes.status=0}}},[i("v-uni-text",[t._v(t._s(t.coupon.receive_start_time_str)+"后")])],1)],1):t._e():i("v-uni-view",{staticClass:"get",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receiveCoupon.apply(void 0,arguments)}}},[1==t.coupon.receive_rule.mode&&t.coupon.receive_rule.integral?i("v-uni-text",[t._v(t._s(t.coupon.receive_rule.integral)+"积分兑换")]):i("v-uni-text",[t._v("立即领取")])],1)],1),i("v-uni-view",{staticClass:"describe-title"},[i("v-uni-text",[t._v("详细信息")]),i("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.footerActived=!t.footerActived}}},[t.footerActived?i("u-icon",{attrs:{name:"arrow-down"}}):i("u-icon",{attrs:{name:"arrow-up"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"collapse",class:t.footerActived?"actived":""},[i("v-uni-view",[t._v("优惠券名称："+t._s(t.coupon.name))]),i("v-uni-view",[t._v("最早可领取时间："+t._s(t.vk.pubfn.timeFormat(t.coupon.receive_start_time)))]),i("v-uni-view",[t._v("最晚可领取时间："+t._s(t.vk.pubfn.timeFormat(t.coupon.receive_end_time)))]),i("v-uni-view",[t._v("最多可领取："+t._s(t.coupon.limit)+" 张")]),i("v-uni-view",[t._v(t._s(t.effectiveTimeRuleCom))]),i("v-uni-view",[t._v("使用说明："+t._s(t.coupon.describe))])],1)],1)},o=[]},ca20:function(t,e,i){var n=i("9d7f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f29e7e88",n,!0,{sourceMap:!1,shadowMode:!1})},d451:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-count-down"},[this._t("default",[e("v-uni-text",{staticClass:"u-count-down__text",style:this.customStyle},[this._v(this._s(this.formattedTime))])])],2)},a=[]},d462:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("acd8"),i("99af");var n={name:"vk-mall-user-coupon",props:{coupon:{Type:Object,default:function(){return{}}}},data:function(){return{footerActived:!1}},mounted:function(){this.init()},methods:{init:function(){},click:function(){var t=this.coupon;this.$emit("click",{coupon:t})},checkboxChange:function(t){this.click()},receiveCoupon:function(){var t=this,e=t.vk,i=t.coupon;e.callFunction({url:"client/user.receiveCoupon",title:"领取中...",data:{coupon_id:i._id},success:function(n){e.confirm("领取成功","提示","立即使用","等会使用",(function(e){e.confirm&&t.pageToGoodsList()})),t.$set(i,"receiveRes",{status:1})}})},pageToGoodsList:function(){var t=this.vk,e=this.coupon;t.navigateTo("/pages/goods/goods-list?coupon_id=".concat(e._id))},countDownChange:function(t,e){var i="";t.days&&(t.hours+=24*t.days),i+=t.hours<10?"0".concat(t.hours,"时"):"".concat(t.hours,"时"),i+=t.minutes<10?"0".concat(t.minutes,"分"):"".concat(t.minutes,"分"),i+=t.seconds<10?"0".concat(t.seconds,"秒"):"".concat(t.seconds,"秒"),this.$set(e,"receive_start_time_str",i)}},watch:{},computed:{reductionCom:function(){var t=this.vk,e=this.coupon,i="",n=parseFloat(t.pubfn.priceFilter(e.coupon_rule.min_amount));if(1===e.type){var a=parseFloat(t.pubfn.priceFilter(e.coupon_rule.discount_amount));i="满".concat(n,"元减").concat(a,"元")}else if(2===e.type){var o=t.pubfn.discountFilter(e.coupon_rule.discount_proportion);i="满".concat(n,"元打").concat(o)}return i},typeCom:function(){this.vk;var t=this.coupon;return["","满减券","折扣券","随机金额券","商品兑换券","通用券"][t.type]},availableRangeRuleCom:function(){var t=this.vk,e=this.coupon,i="全场通用",n=t.pubfn.getData(e,"available_range_rule.type");return 0!=n&&(i="仅部分商品可用"),i},effectiveTimeRuleCom:function(){var t=this.vk,e=this.coupon,i=e.effective_time_rule,n=i.type,a=i.start_fixed_time,o=i.end_fixed_time,r=i.start_dynamic_time,s=i.end_dynamic_time,c="";return c=0===n?"有效期：".concat(t.pubfn.timeFormat(a)," - ").concat(t.pubfn.timeFormat(o)):0===r?"领取后".concat(s,"天内可用"):"领取".concat(r,"天后才生效，有效期").concat(s,"天"),c},disableCom:function(){this.vk;var t=this.coupon;return!!(t.receiveRes&&t.receiveRes.status<0)}}};e.default=n},d4fc:function(t,e,i){"use strict";var n=i("a860"),a=i.n(n);a.a},d700:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uLine:i("0e7e").default,uLoading:i("b709").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-load-more-wrap",style:{backgroundColor:t.bgColor,marginBottom:t.marginBottom+"rpx",marginTop:t.marginTop+"rpx",height:t.$u.addUnit(t.height)}},[i("u-line",{attrs:{color:"#d4d4d4",length:"50"}}),i("v-uni-view",{staticClass:"u-load-more-inner",class:"loadmore"==t.status||"nomore"==t.status?"u-more":""},[i("v-uni-view",{staticClass:"u-loadmore-icon-wrap"},[i("u-loading",{staticClass:"u-loadmore-icon",attrs:{color:t.iconColor,mode:"circle"==t.iconType?"circle":"flower",show:"loading"==t.status&&t.icon}})],1),i("v-uni-view",{staticClass:"u-line-1",class:["nomore"==t.status&&1==t.isDot?"u-dot-text":"u-more-text"],style:[t.loadTextStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._v(t._s(t.showText))])],1),i("u-line",{attrs:{color:"#d4d4d4",length:"50"}})],1)},o=[]},debe:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"",""]),t.exports=e},dee6:function(t,e,i){"use strict";var n=i("849f"),a=i.n(n);a.a},e713:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("d1bb").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[i("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),i("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},o=[]},e8fa:function(t,e,i){"use strict";var n=i("941c"),a=i.n(n);a.a},fc05:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975"),i("d401"),i("d3b7"),i("25f0");var n=i("0877"),a={name:"u-count-down",emits:["change","end","finish"],props:{timestamp:{type:[String,Number],default:0},format:{type:String,default:"DD:HH:mm:ss"},autoStart:{type:Boolean,default:!0},customStyle:{type:[String,Object],default:""}},data:function(){return{timer:null,timeData:(0,n.parseTimeData)(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}},watch:{timestamp:function(t){this.reset()},format:function(t,e){this.pause(),this.start()}},mounted:function(){this.init()},methods:{init:function(){this.reset()},start:function(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick:function(){this.format.indexOf("SSS")>-1?this.microTick():this.macroTick()},macroTick:function(){var t=this;this.clearTimeout(),this.timer=setTimeout((function(){var e=t.getRemainTime();(0,n.isSameSecond)(e,t.remainTime)&&0!==e||t.setRemainTime(e),0!==t.remainTime&&t.macroTick()}),30)},microTick:function(){var t=this;this.clearTimeout(),this.timer=setTimeout((function(){t.setRemainTime(t.getRemainTime()),0!==t.remainTime&&t.microTick()}),30)},getRemainTime:function(){return Math.max(this.endTime-Date.now(),0)},setRemainTime:function(t){this.remainTime=t;var e=(0,n.parseTimeData)(t);this.$emit("change",e),this.formattedTime=(0,n.parseFormat)(this.format,e),t<=0&&(this.pause(),this.$emit("end"),this.$emit("finish"))},reset:function(){this.pause(),this.remainTime=this.timestamp,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause:function(){this.runing=!1,this.clearTimeout()},clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearTimeout(this.timer),this.timer=null}))},beforeDestroy:function(){this.clearTimeout()}};e.default=a},fe05:function(t,e,i){"use strict";i.r(e);var n=i("d700"),a=i("a98d");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("dee6");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"54e317ae",null,!1,n["a"],void 0);e["default"]=s.exports},ff65:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";.app[data-v-7b3d8185]{background-color:var(--bgcolor);min-height:calc(100vh - var(--window-top))}\n/* list主结构开始 */.list-page[data-v-7b3d8185]{background-color:var(--bgcolor)\n  /* 头部 */}.list-page .list-head .total-desc[data-v-7b3d8185]{font-size:%?28?%;color:#999;padding:%?20?% %?30?% %?0?% %?30?%;padding-bottom:0;line-height:%?52?%;width:100%}.list-page .list-head .total-num[data-v-7b3d8185]{font-weight:700;color:#000;font-size:%?26?%;margin-left:%?10?%;margin-right:%?10?%}.list-page .list-head .list-search[data-v-7b3d8185]{background-color:#fff;padding:%?0?%}.list-page .list-head .list-search .list-search-input[data-v-7b3d8185]{display:flex}.list-page .list-head .list-search .list-search-input .search-input[data-v-7b3d8185]{flex:1}.list-page .list-head .list-search .list-search-input .advanced-search[data-v-7b3d8185]{margin-left:%?20?%}.list-page .list-main[data-v-7b3d8185]{padding:%?0?% %?0?% %?20?% %?0?%}\n/* list主结构结束 */\n/* 高级搜索弹窗开始 */.search-popup[data-v-7b3d8185]{background-color:#f3f3f3}.search-popup .scroll-view[data-v-7b3d8185]{flex:1;height:%?1024?%;padding:0}.search-popup .footer-btn[data-v-7b3d8185]{display:flex}.search-popup .footer-btn .btn[data-v-7b3d8185]{flex:1;display:block;text-align:center;line-height:%?80?%}.search-popup .footer-btn .btn[data-v-7b3d8185]:active{opacity:.7}.search-popup .footer-btn .reset[data-v-7b3d8185]{color:#404040;background-color:#fff}.search-popup .footer-btn .confirm[data-v-7b3d8185]{background-color:var(--main);color:#fff}.search-popup[data-v-7b3d8185]  .u-form-item{background-color:#fff;display:block;padding:%?20?%;color:#7e7e7e;padding-top:%?6?%;color:#262626;margin-bottom:%?20?%}.search-popup .date-range[data-v-7b3d8185]{text-align:center;background-color:#f6f6f6;line-height:%?60?%;border-radius:%?30?%;color:#7f7f7f;width:100%}\n/* 高级搜索弹窗结束 */',""]),t.exports=e}}]);