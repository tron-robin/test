(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"165d":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"vk-data-verification-code"},[n("v-uni-view",{style:e.customStyle,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendSmsCode.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.tips))],{tips:e.tips,secNum:e.secNum})],2)],1)},r=[]},1750:function(e,t,n){"use strict";n.r(t);var i=n("7112"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"1e9a":function(e,t,n){var i=n("707b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("6353701b",i,!0,{sourceMap:!1,shadowMode:!1})},"1f66":function(e,t,n){"use strict";n.r(t);var i=n("3906"),r=n("501d");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("c834");var a=n("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"6f33cbf1",null,!1,i["a"],void 0);t["default"]=s.exports},3906:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={vkDataVerificationCode:n("f1f6").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center",height:"100vh"}},[e.over?e._e():n("v-uni-view",{staticClass:"form-view"},[n("v-uni-view",{staticClass:"form-item form-border"},[n("v-uni-input",{staticClass:"form-input",attrs:{type:"text",maxlength:50,placeholder:"名字~","placeholder-style":"'color':'#8e8e8e'"},model:{value:e.form1.name,callback:function(t){e.$set(e.form1,"name",t)},expression:"form1.name"}})],1),n("v-uni-view",{staticClass:"form-item form-border"},[n("v-uni-input",{staticClass:"form-input",attrs:{type:"text",maxlength:50,placeholder:"手机号~","placeholder-style":"'color':'#8e8e8e'"},model:{value:e.form1.mobile,callback:function(t){e.$set(e.form1,"mobile",t)},expression:"form1.mobile"}})],1),n("v-uni-view",{staticClass:"form-item form-border"},[n("v-uni-input",{staticClass:"form-input",attrs:{type:"number",maxlength:6,placeholder:"短信验证码~","placeholder-style":"'color':'#8e8e8e'"},model:{value:e.form1.code,callback:function(t){e.$set(e.form1,"code",t)},expression:"form1.code"}}),n("vk-data-verification-code",{attrs:{"check-user-exist":!0,seconds:"60",mobile:e.form1.mobile,type:"login","custom-style":"font-size: 28rpx;"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.codeError.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"40rpx",color:"brown","margin-top":"100rpx"}},[e._v(e._s(e.over?"已经登记，欢迎参加今日讲座~":"还未登记"))]),n("v-uni-view",{staticClass:"submit-btn"},[n("v-uni-button",{staticClass:"btn success circle",attrs:{"hover-class":"hover",plain:!1,type:"success",shape:"circle","hair-line":!1,disabled:e.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.loginBySms.apply(void 0,arguments)}}},[e._v("确 认")])],1)],1)},o=[]},"501d":function(e,t,n){"use strict";n.r(t);var i=n("884f"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"707b":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".content[data-v-6f33cbf1]{display:flex;flex-direction:column;justify-content:center}\r\n\r\n/* 头部 logo 开始 */.header[data-v-6f33cbf1]{width:%?160?%;height:%?160?%;box-shadow:%?0?% %?0?% %?60?% %?0?% rgba(0,0,0,.1);border-radius:50%;margin-top:%?40?%;margin-bottom:%?40?%;margin-left:auto;margin-right:auto}.header .logo[data-v-6f33cbf1]{width:%?160?%;height:%?160?%;border-radius:50%;border:0}\r\n\r\n/* 头部 logo 结束 */\r\n\r\n/* 表单主体 开始 */.form-view[data-v-6f33cbf1]{display:flex;flex-direction:column;padding-left:%?70?%;padding-right:%?70?%}.form-view .form-item[data-v-6f33cbf1]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:#333;padding:%?24?% %?32?%;margin:%?26?% 0;background-color:#fff}.form-view .form-border[data-v-6f33cbf1]{border:none;border-radius:2.5rem;-webkit-box-shadow:0 0 %?60?% 0 rgba(43,86,112,.1);box-shadow:0 0 %?60?% 0 rgba(43,86,112,.1)}.form-view .form-input[data-v-6f33cbf1]{flex:1;text-align:left;font-size:%?28?%;padding-right:%?10?%;margin-left:%?20?%;width:100%;min-height:%?70?%}\r\n\r\n/* 表单主体 结束 */\r\n\r\n/* 主体按钮 开始 */.submit-btn[data-v-6f33cbf1]{margin-top:%?60?%;width:80%;height:%?100?%;margin-left:auto;margin-right:auto}.submit-btn .btn[data-v-6f33cbf1]{height:%?76?%;line-height:%?76?%;font-size:%?30?%}.submit-btn .btn.success[data-v-6f33cbf1]{background-color:#19be6b;color:#fff}.submit-btn .btn.circle[data-v-6f33cbf1]{border-radius:%?100?%}.submit-btn .btn.hover[data-v-6f33cbf1]{opacity:.7}\r\n\r\n/* 主体按钮 结束 */\r\n\r\n/* 底部 开始*/.footer[data-v-6f33cbf1]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:%?28?%;margin-top:%?80?%;color:rgba(0,0,0,.7);text-align:center;height:%?40?%;line-height:%?40?%}.footer uni-label[data-v-6f33cbf1]{display:flex;align-items:center}.footer .center-line[data-v-6f33cbf1]{font-size:%?24?%;margin-left:%?15?%;margin-right:%?15?%}.footer .footer-checkbox[data-v-6f33cbf1]{-webkit-transform:scale(.7);transform:scale(.7)}\r\n\r\n/* 底部 结束*/\r\n\r\n/* 其他登录开始 */.login-icon-title[data-v-6f33cbf1]{width:100%;text-align:center;margin-top:%?50?%;color:rgba(0,0,0,.3);font-size:%?24?%}.login-icon-view[data-v-6f33cbf1]{width:100%;text-align:center;margin-top:%?30?%;display:flex;justify-content:center}.login-icon-item[data-v-6f33cbf1]{width:%?120?%}\r\n\r\n/* 其他登录结束 */",""]),e.exports=t},7112:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("ac1f"),n("5319"),n("99af"),n("00b4"),n("c975");var i={"zh-Hans":{startText:"获取验证码",changeText:"X秒重新获取",endText:"重新获取",tryAgainInSeconds:"秒后再重试",pleaseEnterTheCorrectMobileNumber:"请输入正确的手机号码",sending:"发送中...",verificationCodeSent:"验证码已发送",triggerDayLevelFlowControl:"触发天级流控",pleaseTryAgainTomorrow:"短信发送频繁，请明日再试！",pleaseTryAgainIn1Hour:"短信发送频繁，请过1小时后再试！",triggerMinuteLevelFlowControl:"触发分钟级流控",pleaseTryAgainLater:"短信发送频繁，请稍后再试！"},"zh-Hant":{startText:"獲取驗證碼",changeText:"X秒重新獲取",endText:"重新獲取",tryAgainInSeconds:"秒後再重試",pleaseEnterTheCorrectMobileNumber:"請輸入正確的手機號碼",sending:"發送中...",verificationCodeSent:"驗證碼已發送",triggerDayLevelFlowControl:"觸發天級流控",pleaseTryAgainTomorrow:"短信發送頻繁，請明日再試！",pleaseTryAgainIn1Hour:"短信發送頻繁，請過1小時後再試！",triggerMinuteLevelFlowControl:"觸發分鐘級流控",pleaseTryAgainLater:"短信發送頻繁，請稍後再試！"},en:{startText:"Get code",changeText:"X second reacquire",endText:"Reacquire",tryAgainInSeconds:"Try again in seconds",pleaseEnterTheCorrectMobileNumber:"Please enter the correct mobile number",sending:"Sending...",verificationCodeSent:"Verification code sent",triggerDayLevelFlowControl:"Trigger day level flow control",pleaseTryAgainTomorrow:"SMS sent frequently, please try again tomorrow!",pleaseTryAgainIn1Hour:"SMS sent frequently, please try again in 1 hour",triggerMinuteLevelFlowControl:"Trigger minute level flow control",pleaseTryAgainLater:"SMS sent frequently, please try again later"}},r={name:"vk-data-verification-code",emits:["start","end","change","send","codeChange","error","success"],props:{mode:{type:String,default:"mobile"},mobile:{type:String},type:{type:String,default:"login"},customStyle:{type:[String,Object]},seconds:{type:[String,Number],default:60},startText:{type:String,default:""},changeText:{type:String,default:""},endText:{type:String,default:""},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""},checkUserExist:{type:Boolean,default:!1}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0,tips:"",locale:{}}},created:function(){if("undefined"!==typeof vk){var e=vk.pubfn.getLocale();this.locale=i[e]}else this.locale=i["zh-Hans"]},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},computed:{startTextCom:function(){return this.startText||this.locale.startText||"获取验证码"},changeTextCom:function(){return this.changeText||this.locale.changeText||"X秒重新获取"},endTextCom:function(){return this.endText||this.locale.endText||"重新获取"}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startTextCom);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startTextCom)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeTextCom.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeTextCom.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endTextCom),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(e){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(e||this.endTextCom)},changeEvent:function(e){this.codeChange(e),this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}},codeChange:function(e){this.tips=e,this.$emit("codeChange",e)},sendSmsCode:function(){var e=this,t=uni.vk,n=e.mobile,i=e.type,r=e.canGetCode,o=e.checkUserExist,a=e.secNum,s=e.mode;r?"custom"!==s?t.pubfn.test(n,"mobile")?(e.tips=e.locale.sending,t.userCenter.sendSmsCode({needAlert:!1,data:{mobile:n,type:i,checkUserExist:o},success:function(n){t.toast(e.locale.verificationCodeSent),e.start(),e.$emit("success",n)},fail:function(n){e.tips=e.startTextCom,n.errMsg&&n.errMsg.indexOf("触发天级流控")>-1?t.alert(e.locale.pleaseTryAgainTomorrow,(function(){e.$emit("error",n)})):n.errMsg&&n.errMsg.indexOf("触发小时级流控")>-1?t.alert(e.locale.pleaseTryAgainIn1Hour,(function(){e.$emit("error",n)})):n.errMsg&&n.errMsg.indexOf("触发分钟级流控")>-1?t.alert(e.locale.pleaseTryAgainLater,(function(){e.$emit("error",n)})):n.msg?t.alert(n.msg,(function(){e.$emit("error",n)})):t.alert(e.locale.pleaseTryAgainLater,(function(){e.$emit("error",n)}))}})):t.toast(e.locale.pleaseEnterTheCorrectMobileNumber,"none"):e.$emit("send",{type:i}):t.toast("".concat(a).concat(e.locale.tryAgainInSeconds),"none")}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=r},"884f":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{over:!1,form1:{name:"",mobile:"",code:"",inviteCode:""},loading:!1}},methods:{loginBySms:function(){var e=this,t=uni,n=t.vk,i=this.form1,r=i.name,o=i.mobile,a=i.code,s=i.inviteCode;return r?n.pubfn.checkStr(o,"mobile")?a?void n.userCenter.loginBySms({data:{role:[r],mobile:o,code:a,inviteCode:s},success:function(t){n.setVuex("$user.login.mobile",o),n.toast("登记成功!欢迎参加今日讲座~"),e.over=!0}}):n.toast("请输入验证码"):n.toast("手机号格式错误"):n.toast("名字也要输入哦")}}};t.default=i},c834:function(e,t,n){"use strict";var i=n("1e9a"),r=n.n(i);r.a},f1f6:function(e,t,n){"use strict";n.r(t);var i=n("165d"),r=n("1750");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var a=n("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"e05f3886",null,!1,i["a"],void 0);t["default"]=s.exports}}]);