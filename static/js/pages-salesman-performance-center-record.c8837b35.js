(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-salesman-performance-center-record"],{"57ff":function(t,e,a){"use strict";a.r(e);var i=a("7271"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},7271:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("ac1f"),a("841c");var i=uni.vk,n={},o={data:function(){return{url:"client/salesman.getPerformanceRecord",data:{list:[],total:"-",hasMore:!0},queryForm1:{pagination:{pageIndex:1,pageSize:20},formData:{pay_time:[],mode:0},columns:[{key:"pay_time",mode:"[]"}],sortRule:[]},subsection1:{key:"mode",current:0,list:[{name:"商品明细",value:0,color:"var(--main)"},{name:"商品统计",value:1,color:"var(--main)"}]},state:{loadmore:"loading"},loading:!1,scrollTop:0,options:{}}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=uni.vk,this.options=t,this.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){this.nextPage()},onShareAppMessage:function(t){},methods:{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;console.log("init: ",t),i.pubfn.isNotNull(t.type)&&(e.queryForm1.formData.type=Number(t.type)),i.pubfn.isNotNullAll(t.startTime,t.endTime)&&(e.queryForm1.formData.pay_time=[Number(t.startTime),Number(t.endTime)]),i.pubfn.objectAssign(e.queryForm1.formData,t),n["queryForm1"]=i.pubfn.copyObject(e.queryForm1.formData),e.search()},search:function(t){this.data.list=[],this.queryForm1.pagination.pageIndex=1,this.data.pageKey=!0,this.getList()},nextPage:function(){"loadmore"==this.state.loadmore&&(this.state.loadmore="loading",this.queryForm1.pagination.pageIndex++,this.getList())},getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;i.pubfn.getListData2({that:e,url:e.url,success:t.success})},itemClick:function(t){},valueFn:function(t){var e=t.amount,a=e.goods_payment_amount,i=void 0===a?0:a,n=e.refund_goods_payment_amount,o=void 0===n?0:n;return i+o},valueFilter:function(t){var e=this.valueFn(t),a=i.pubfn.priceFilter(e);return e>0?"+".concat(a):a},sectionChange1:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this;if(t<0)return!1;a.subsection1.current=t,a.url=0===t?"client/salesman.getPerformanceRecord":"client/salesman.getGoodsPerformanceRecord";var i=a.subsection1.key,n=a.subsection1.list[t].value;a.$set(a.queryForm1.formData,i,n),a.data.list=[],a.data.total="-",e&&a.search()}},computed:{}};e.default=o},"940e":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uSubsection:a("feee").default,uEmpty:a("0a6a").default,uLoadmore:a("fe05").default,vkDataFloatBall:a("80c3").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"app"},[a("v-uni-view",{staticClass:"list-page"},[a("v-uni-view",{staticClass:"list-head"},[t.options.title?a("v-uni-view",{staticStyle:{"text-align":"center",padding:"20rpx","background-color":"#f8f8fa"}},[t._v(t._s(t.options.title))]):t._e(),a("v-uni-view",{staticClass:"subsection"},[a("u-subsection",{attrs:{list:t.subsection1.list,current:t.subsection1.current,"button-color":t.subsection1.list[t.subsection1.current].color,"active-color":"#ffffff","bg-color":"#ffffff"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sectionChange1.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"total-desc"},[t._v("共"),a("v-uni-text",{staticClass:"total-num"},[t._v(t._s(t.data.total))]),t._v("条记录")],1)],1),0==t.data.list.length?a("v-uni-view",{staticStyle:{padding:"40% 0 80% 0"}},[t.loading?a("u-empty",{attrs:{text:"查询中...",mode:"search"}}):a("u-empty",{attrs:{text:"暂无内容",mode:"list"}})],1):a("v-uni-view",{staticClass:"list-main"},[t._l(t.data.list,(function(e,i){return[1===t.queryForm1.formData.mode?a("v-uni-view",{key:i+"_0",staticClass:"list-item"},[a("v-uni-view",{staticClass:"content",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.itemClick(e)}}},[a("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx","margin-right":"20rpx"},attrs:{src:e.image,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"left"},[a("v-uni-text",[t._v(t._s(e.goods_name))]),e.sku_name?a("v-uni-text",{staticClass:"time"},[t._v(t._s(e.sku_name))]):t._e()],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",[t._v("X "+t._s(e.calc_num))]),a("v-uni-text",{staticClass:"balance",staticStyle:{"font-size":"24rpx"}},[t._v("金额："+t._s(t.vk.pubfn.priceFilter(e.calc_goods_payment_amount)))])],1)],1)],1):a("v-uni-view",{staticClass:"list-item"},[a("v-uni-view",{staticClass:"content",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.itemClick(e)}}},[a("v-uni-view",{staticClass:"left"},[a("v-uni-text",[t._v(t._s(e.title||"【标题】"))]),a("v-uni-text",{staticClass:"time"},[t._v(t._s(t.$fn.timeFormat(e.pay_time)))])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",{class:{green:t.valueFn(e)>=0,red:t.valueFn(e)<0}},[t._v(t._s(t.valueFilter(e)))])],1)],1)],1)]})),a("u-loadmore",{attrs:{status:t.state.loadmore,"bg-color":"var(--bgcolor)","margin-bottom":"30"},on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.nextPage.apply(void 0,arguments)}}})],2)],1),a("vk-data-float-ball",{attrs:{"scroll-top":t.scrollTop}})],1)},o=[]},"957b":function(t,e,a){"use strict";var i=a("ff08"),n=a.n(i);n.a},"9c92":function(t,e,a){"use strict";a.r(e);var i=a("940e"),n=a("57ff");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("957b");var s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"5b3a409a",null,!1,i["a"],void 0);e["default"]=l.exports},d4f8:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";.app[data-v-5b3a409a]{--main:#4590f9;--secondary:rgba(41,121,255,0.13);--bgcolor:#f8f8fa;background-color:var(--bgcolor);min-height:calc(100vh - var(--window-top))}\n/* list主结构开始 */.list-page[data-v-5b3a409a]{background-color:var(--bgcolor)\n  /* 头部 */}.list-page .list-head .total-desc[data-v-5b3a409a]{font-size:%?28?%;color:#999;padding:%?20?% %?30?% %?0?% %?30?%;padding-bottom:0;line-height:%?52?%;width:100%}.list-page .list-head .total-num[data-v-5b3a409a]{font-weight:700;color:#000;font-size:%?26?%;margin-left:%?10?%;margin-right:%?10?%}.list-page .list-head .list-search[data-v-5b3a409a]{background-color:#fff;padding:%?20?% %?30?%}.list-page .list-main[data-v-5b3a409a]{padding:%?0?% %?0?% %?20?% %?0?%}\n/* list主结构结束 */\n/* list-item开始 */.list-item[data-v-5b3a409a]{margin:%?20?%}.list-item > .content[data-v-5b3a409a]{background-color:#fff;border-bottom:%?2?% solid #f3f3f3;padding:%?20?% %?30?%;display:flex;justify-content:space-between;align-items:center}.list-item > .content > uni-view[data-v-5b3a409a]{display:flex;flex-direction:column}.list-item > .content .text-one[data-v-5b3a409a]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.list-item > .content > .left[data-v-5b3a409a]{flex:1}.list-item > .content > .left uni-text[data-v-5b3a409a]{color:#333}.list-item > .content > .left uni-text[data-v-5b3a409a]:nth-of-type(2){margin:%?6?% %?0?%}.list-item > .content > .left .time[data-v-5b3a409a]{color:#999;font-size:%?24?%}.list-item > .content > .right[data-v-5b3a409a]{display:flex;justify-items:center;align-items:flex-end}.list-item > .content > .right .balance[data-v-5b3a409a]{color:#999}.list-item > .content > .right .gray[data-v-5b3a409a]{color:#9e9e9e;text-decoration:line-through}.list-item > .content > .right .green[data-v-5b3a409a]{color:#6dcfa5}.list-item > .content > .right .red[data-v-5b3a409a]{color:#fb4e4e}.list-item > .content > .right .bold[data-v-5b3a409a]{font-weight:700}.list-item > .content > .arrow-right[data-v-5b3a409a]{margin-left:%?20?%}\n/* list-item结束 */',""]),t.exports=e},ff08:function(t,e,a){var i=a("d4f8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3158bd5b",i,!0,{sourceMap:!1,shadowMode:!1})}}]);