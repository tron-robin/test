(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-detail"],{"304d":function(t,e,a){var n=a("6faa");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7df90ae0",n,!0,{sourceMap:!1,shadowMode:!1})},"30bf":function(t,e,a){"use strict";a.r(e);var n=a("70ee"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"3c4c":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={jyfParser:a("ebbd").default,uSkeleton:a("3f82").default,vkDataFloatBall:a("80c3").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"app"},[a("v-uni-view",{staticClass:"u-skeleton"},[a("v-uni-view",{staticClass:"title u-skeleton-fillet"},[t._v(t._s(t.data.title))]),a("v-uni-view",{staticClass:"time-view-count"},[a("v-uni-view",{staticClass:"time u-skeleton-fillet"},[t.data.update_time?a("v-uni-text",[t._v("与 "+t._s(t.$fn.timeFormat(t.data.update_time))+" 修改")]):a("v-uni-text",[t._v(t._s(t.$fn.timeFormat(t.data._add_time)))])],1),a("v-uni-view",{staticClass:"view-count"},[a("v-uni-text",{staticClass:"u-skeleton-fillet text"},[t._v("阅读 "+t._s(t.$fn.numStr(t.data.view_count)))])],1)],1),a("v-uni-view",{staticClass:"content u-skeleton-fillet"},[a("jyf-parser",{attrs:{html:t.data.content}})],1),t.data.url?a("v-uni-view",{staticClass:"detail-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detailBtn.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"u-skeleton-fillet text"},[t._v(t._s(t.data.url_text||"查看详情"))])],1):t._e()],1),a("u-skeleton",{attrs:{loading:t.loading,animation:!0,bgColor:"#fff"}}),a("vk-data-float-ball",{attrs:{"scroll-top":t.scrollTop}})],1)},o=[]},"6faa":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".app[data-v-72dbfe66]{padding:%?30?%}.app .title[data-v-72dbfe66]{font-weight:700;font-size:%?34?%;margin-bottom:%?20?%;letter-spacing:%?2?%;min-height:%?44?%}.app .time-view-count[data-v-72dbfe66]{display:flex;align-items:center;color:#9a9a9a;font-size:%?28?%}.app .time-view-count .time[data-v-72dbfe66]{min-height:%?40?%;flex:1}.app .time-view-count .view-count[data-v-72dbfe66]{min-height:%?40?%;margin-left:%?20?%}.app .content[data-v-72dbfe66]{margin-top:%?80?%;letter-spacing:%?2?%;min-height:%?400?%}.app .detail-btn[data-v-72dbfe66]{min-height:%?40?%;margin-top:%?40?%;color:var(--main);text-decoration:underline}.app .text.u-skeleton-fillet[data-v-72dbfe66]{min-width:%?150?%;display:inline-block}",""]),t.exports=e},"70ee":function(t,e,a){"use strict";a("7a82");var n=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c975");var i=n(a("ebbd")),o=uni.vk,l={components:{jyfParser:i.default},data:function(){return{data:{_id:"",content:"",sort:"",status:"",title:"",update_time:"",url:"",user_id:"",_add_time:"",view_count:""},form1:{},scrollTop:0,loading:!0}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o=uni.vk,this.options=t,this.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},onShareAppMessage:function(t){},methods:{init:function(t){var e=this;e.loading=!0;var a=e.getOpenerEventChannel();a.on&&a.on("data",(function(t){t.view_count++,e.data=t,e.loading=!1})),o.callFunction({url:"client/pub.getNoticeInfo",data:{_id:t._id,is_view:!0},success:function(t){e.data=t.info},complete:function(){e.loading=!1}})},detailBtn:function(){var t=this.data.url;t&&(0!==t.indexOf("/")&&(t="/"+t),o.navigateTo(t))}},watch:{},computed:{}};e.default=l},"740e":function(t,e,a){"use strict";a.r(e);var n=a("3c4c"),i=a("30bf");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8f9a");var l=a("f0c5"),u=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"72dbfe66",null,!1,n["a"],void 0);e["default"]=u.exports},"8f9a":function(t,e,a){"use strict";var n=a("304d"),i=a.n(n);i.a}}]);