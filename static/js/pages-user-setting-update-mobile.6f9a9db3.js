(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-setting-update-mobile"],{1424:function(e,t,n){var i=n("f33a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("398a7ebb",i,!0,{sourceMap:!1,shadowMode:!1})},"165d":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"vk-data-verification-code"},[n("v-uni-view",{style:e.customStyle,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendSmsCode.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.tips))],{tips:e.tips,secNum:e.secNum})],2)],1)},o=[]},1750:function(e,t,n){"use strict";n.r(t);var i=n("7112"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"25d5":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("ac1f"),n("00b4");var i=uni.vk,o={data:function(){return{pageIndex:0,data:{},form1:{oldMobile:"",oldMobileCode:"",mobile:"",code:""},focus:{oldMobileCode:!1,mobileCode:!1,mobile:!1},scrollTop:0}},onPageScroll:function(e){this.scrollTop=e.scrollTop},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=uni.vk,this.options=e,this.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this;e.pageIndex&&(t.pageIndex=Number(e.pageIndex)||0),uni.setNavigationBarTitle({title:0===t.pageIndex?this.$t("page.modify-mobile-number"):this.$t("page.bind-mobile-number")}),t.form1.oldMobile=i.getVuex("$user.userInfo.mobile")},pageTo:function(e){i.navigateTo(e)},next:function(e){var t=this;if(!t.form1.oldMobileCode)return i.toast(t.$t("setting.please-enter-the-verification-code")),t.focus.oldMobileCode=!0,!1;setTimeout((function(){t.pageIndex=e,setTimeout((function(){t.$refs.mobileCode.reset(t.$t("setting.get-verification-code"))}),100)}),300)},bindMobile:function(){var e=this;return i.pubfn.test(e.form1.mobile,"mobile")?e.form1.code?void("1"===e.options.pageIndex?i.userCenter.bindMobile({data:e.form1,success:function(t){i.alert(e.$t("setting.binding-succeeded"),(function(){i.navigateBack()}))}}):i.userCenter.bindNewMobile({data:e.form1,success:function(t){i.alert(e.$t("setting.bind-change-succeeded"),(function(){i.navigateBack()}))}})):(i.toast(e.$t("setting.please-enter-the-verification-code")),e.focus.mobileCode=!0,!1):(i.toast(e.$t("setting.please-enter-the-correct-mobile-number")),e.focus.mobile=!0,!1)}},watch:{},computed:{}};t.default=o},"394f":function(e,t,n){"use strict";n.r(t);var i=n("6ec9"),o=n("88c0");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("4f77");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"258a7be6",null,!1,i["a"],void 0);t["default"]=s.exports},"4d3f":function(e,t,n){var i=n("f362");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("03221cc6",i,!0,{sourceMap:!1,shadowMode:!1})},"4f77":function(e,t,n){"use strict";var i=n("4d3f"),o=n.n(i);o.a},"64c8":function(e,t,n){"use strict";n.r(t);var i=n("cbfc"),o=n("75ed");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("d186");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"f16159f4",null,!1,i["a"],void 0);t["default"]=s.exports},"6ec9":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uFormItem:n("aaa7").default,uInput:n("64c8").default,vkDataVerificationCode:n("f1f6").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"app app-bg"},[0===e.pageIndex?n("v-uni-view",{staticClass:"card"},[n("v-uni-view",[e._v(e._s(e.$t("setting.please-enter"))+" "+e._s(e.$fn.hidden(e.form1.oldMobile,3,4))+" "+e._s(e.$t("setting.sms-verification-code")))]),n("u-form-item",{attrs:{prop:"oldMobileCode"}},[n("u-input",{attrs:{type:"number",placeholder:e.$t("setting.please-enter-sms-verification-code"),focus:e.focus.oldMobileCode},model:{value:e.form1.oldMobileCode,callback:function(t){e.$set(e.form1,"oldMobileCode",t)},expression:"form1.oldMobileCode"}}),n("vk-data-verification-code",{ref:"oldMobileCode",attrs:{slot:"right",seconds:"60",mobile:e.form1.oldMobile,type:"unbind","custom-style":"font-size:24rpx;color:#606266"},slot:"right"})],1),n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.next(1)}}},[e._v(e._s(e.$t("setting.next-step")))])],1):1===e.pageIndex?n("v-uni-view",{staticClass:"card"},[n("u-form-item",{attrs:{prop:"mobile"}},[n("u-input",{attrs:{type:"number",placeholder:e.$t("setting.please-enter-a-new-mobile-number"),focus:e.focus.mobile},model:{value:e.form1.mobile,callback:function(t){e.$set(e.form1,"mobile",t)},expression:"form1.mobile"}})],1),n("u-form-item",{attrs:{prop:"code"}},[n("u-input",{attrs:{type:"number",placeholder:e.$t("setting.please-enter-sms-verification-code"),focus:e.focus.mobileCode},model:{value:e.form1.code,callback:function(t){e.$set(e.form1,"code",t)},expression:"form1.code"}}),n("vk-data-verification-code",{ref:"mobileCode",attrs:{slot:"right",seconds:"60",mobile:e.form1.mobile,type:"bind","custom-style":"font-size:24rpx;color:#606266"},slot:"right"})],1),n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMobile.apply(void 0,arguments)}}},[e._v(e._s(e.$t("system.confirm")))])],1):e._e()],1)},a=[]},7003:function(e,t,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("d81d"),n("b64b"),n("498a");var o=i(n("c818")),a={name:"u-input",emits:["update:modelValue","input","change","blur","focus","click","touchstart"],mixins:[o.default],props:{value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:""},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:[Boolean,String]},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0},adjustPosition:{type:Boolean,default:!0},backgroundColor:{type:String},padding:{type:String}},data:function(){return{defaultValue:"",inputHeight:70,textareaHeight:242,validateState:!1,focused:!1,showPassword:!1,lastValue:"",uForm:{inputAlign:"",clearable:""}}},watch:{valueCom:function(e,t){this.defaultValue=e,e!=t&&"select"==this.type&&this.handleInput({detail:{value:e}})}},computed:{valueCom:function(){return this.value},inputAlignCom:function(){return this.inputAlign||this.uForm.inputAlign||"left"},clearableCom:function(){return"boolean"==typeof this.clearable?this.clearable:"boolean"!=typeof this.uForm.clearable||this.uForm.clearable},inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var e={};return e.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",e=Object.assign(e,this.customStyle),e},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("onFormItemError",this.onFormItemError),this.defaultValue=this.valueCom},mounted:function(){var e=this,t=this.$u.$parent.call(this,"u-form");t&&Object.keys(this.uForm).map((function(n){e.uForm[n]=t[n]}))},methods:{handleInput:function(e){var t=this,n=e.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.$emit("update:modelValue",n),this.defaultValue=n,setTimeout((function(){t.dispatch("u-form-item","onFieldChange",n)}),40)},handleBlur:function(e){var t=this;setTimeout((function(){t.focused=!1}),100),this.$emit("blur",e.detail.value),setTimeout((function(){t.dispatch("u-form-item","onFieldBlur",e.detail.value)}),40)},onFormItemError:function(e){this.validateState=e},onFocus:function(e){this.focused=!0,this.$emit("focus")},onConfirm:function(e){this.$emit("confirm",e.detail.value)},onClear:function(e){this.$emit("input",""),this.$emit("update:modelValue","")},inputClick:function(){this.$emit("click")}}};t.default=a},7112:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("ac1f"),n("5319"),n("99af"),n("00b4"),n("c975");var i={"zh-Hans":{startText:"获取验证码",changeText:"X秒重新获取",endText:"重新获取",tryAgainInSeconds:"秒后再重试",pleaseEnterTheCorrectMobileNumber:"请输入正确的手机号码",sending:"发送中...",verificationCodeSent:"验证码已发送",triggerDayLevelFlowControl:"触发天级流控",pleaseTryAgainTomorrow:"短信发送频繁，请明日再试！",pleaseTryAgainIn1Hour:"短信发送频繁，请过1小时后再试！",triggerMinuteLevelFlowControl:"触发分钟级流控",pleaseTryAgainLater:"短信发送频繁，请稍后再试！"},"zh-Hant":{startText:"獲取驗證碼",changeText:"X秒重新獲取",endText:"重新獲取",tryAgainInSeconds:"秒後再重試",pleaseEnterTheCorrectMobileNumber:"請輸入正確的手機號碼",sending:"發送中...",verificationCodeSent:"驗證碼已發送",triggerDayLevelFlowControl:"觸發天級流控",pleaseTryAgainTomorrow:"短信發送頻繁，請明日再試！",pleaseTryAgainIn1Hour:"短信發送頻繁，請過1小時後再試！",triggerMinuteLevelFlowControl:"觸發分鐘級流控",pleaseTryAgainLater:"短信發送頻繁，請稍後再試！"},en:{startText:"Get code",changeText:"X second reacquire",endText:"Reacquire",tryAgainInSeconds:"Try again in seconds",pleaseEnterTheCorrectMobileNumber:"Please enter the correct mobile number",sending:"Sending...",verificationCodeSent:"Verification code sent",triggerDayLevelFlowControl:"Trigger day level flow control",pleaseTryAgainTomorrow:"SMS sent frequently, please try again tomorrow!",pleaseTryAgainIn1Hour:"SMS sent frequently, please try again in 1 hour",triggerMinuteLevelFlowControl:"Trigger minute level flow control",pleaseTryAgainLater:"SMS sent frequently, please try again later"}},o={name:"vk-data-verification-code",emits:["start","end","change","send","codeChange","error","success"],props:{mode:{type:String,default:"mobile"},mobile:{type:String},type:{type:String,default:"login"},customStyle:{type:[String,Object]},seconds:{type:[String,Number],default:60},startText:{type:String,default:""},changeText:{type:String,default:""},endText:{type:String,default:""},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""},checkUserExist:{type:Boolean,default:!1}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0,tips:"",locale:{}}},created:function(){if("undefined"!==typeof vk){var e=vk.pubfn.getLocale();this.locale=i[e]}else this.locale=i["zh-Hans"]},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},computed:{startTextCom:function(){return this.startText||this.locale.startText||"获取验证码"},changeTextCom:function(){return this.changeText||this.locale.changeText||"X秒重新获取"},endTextCom:function(){return this.endText||this.locale.endText||"重新获取"}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startTextCom);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startTextCom)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeTextCom.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeTextCom.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endTextCom),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(e){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(e||this.endTextCom)},changeEvent:function(e){this.codeChange(e),this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}},codeChange:function(e){this.tips=e,this.$emit("codeChange",e)},sendSmsCode:function(){var e=this,t=uni.vk,n=e.mobile,i=e.type,o=e.canGetCode,a=e.checkUserExist,r=e.secNum,s=e.mode;o?"custom"!==s?t.pubfn.test(n,"mobile")?(e.tips=e.locale.sending,t.userCenter.sendSmsCode({needAlert:!1,data:{mobile:n,type:i,checkUserExist:a},success:function(n){t.toast(e.locale.verificationCodeSent),e.start(),e.$emit("success",n)},fail:function(n){e.tips=e.startTextCom,n.errMsg&&n.errMsg.indexOf("触发天级流控")>-1?t.alert(e.locale.pleaseTryAgainTomorrow,(function(){e.$emit("error",n)})):n.errMsg&&n.errMsg.indexOf("触发小时级流控")>-1?t.alert(e.locale.pleaseTryAgainIn1Hour,(function(){e.$emit("error",n)})):n.errMsg&&n.errMsg.indexOf("触发分钟级流控")>-1?t.alert(e.locale.pleaseTryAgainLater,(function(){e.$emit("error",n)})):n.msg?t.alert(n.msg,(function(){e.$emit("error",n)})):t.alert(e.locale.pleaseTryAgainLater,(function(){e.$emit("error",n)}))}})):t.toast(e.locale.pleaseEnterTheCorrectMobileNumber,"none"):e.$emit("send",{type:i}):t.toast("".concat(r).concat(e.locale.tryAgainInSeconds),"none")}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=o},"75ed":function(e,t,n){"use strict";n.r(t);var i=n("7003"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"88c0":function(e,t,n){"use strict";n.r(t);var i=n("25d5"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},cbfc:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uIcon:n("d1bb").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":e.border,"u-input--error":e.validateState},style:{padding:e.padding?e.padding:"0 "+(e.border?20:0)+"rpx",borderColor:e.borderColor,textAlign:e.inputAlignCom,backgroundColor:e.backgroundColor},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.inputClick.apply(void 0,arguments)}}},["textarea"==e.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[e.getStyle],attrs:{value:e.defaultValue,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,disabled:e.disabled,maxlength:e.inputMaxlength,fixed:e.fixed,focus:e.focus,autoHeight:e.autoHeight,"selection-end":e.uSelectionEnd,"selection-start":e.uSelectionStart,"cursor-spacing":e.getCursorSpacing,"show-confirm-bar":e.showConfirmbar,"adjust-position":e.adjustPosition},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.handleInput.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.handleBlur.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[e.getStyle],attrs:{type:"password"==e.type?"text":e.type,value:e.defaultValue,password:"password"==e.type&&!e.showPassword,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,disabled:e.disabled||"select"===e.type,maxlength:e.inputMaxlength,focus:e.focus,confirmType:e.confirmType,"cursor-spacing":e.getCursorSpacing,"selection-end":e.uSelectionEnd,"selection-start":e.uSelectionStart,"show-confirm-bar":e.showConfirmbar,"adjust-position":e.adjustPosition},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.handleBlur.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.handleInput.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[e.clearableCom&&""!=e.valueCom&&e.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):e._e(),e.passwordIcon&&"password"==e.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:e.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPassword=!e.showPassword}}})],1):e._e(),"select"==e.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":e.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):e._e()],1)],1)},a=[]},d186:function(e,t,n){"use strict";var i=n("1424"),o=n.n(i);o.a},f1f6:function(e,t,n){"use strict";n.r(t);var i=n("165d"),o=n("1750");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"e05f3886",null,!1,i["a"],void 0);t["default"]=s.exports},f33a:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".u-input[data-v-f16159f4]{position:relative;flex:1;display:flex;flex-direction:row}.u-input__input[data-v-f16159f4]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-f16159f4]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-f16159f4]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-f16159f4]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-f16159f4]{margin-left:%?10?%}.u-input__right-icon--select[data-v-f16159f4]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-f16159f4]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}",""]),e.exports=t},f362:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".card[data-v-258a7be6]{padding:%?30?%;background-color:#fff}.btn[data-v-258a7be6]{color:#fff;display:flex;align-items:center;justify-content:center;width:90%;height:%?70?%;margin:%?40?% auto;background-color:var(--main);border-radius:%?70?%;box-shadow:0 %?10?% %?10?% var(--main)}.btn[data-v-258a7be6]:active{-webkit-filter:grayscale(50%);filter:grayscale(50%)}.center[data-v-258a7be6]{display:flex;justify-content:center;align-items:center}",""]),e.exports=t}}]);