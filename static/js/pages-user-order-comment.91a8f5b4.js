(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order-comment"],{"042cc":function(e,t,i){"use strict";var a=i("ffb1"),o=i.n(a);o.a},"0fdd":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var a={uGap:i("111d").default,uRate:i("89fc").default,vkDataInput:i("40fd").default,vkDataUpload:i("2d9b").default,uButton:i("f363").default,vkDataFloatBall:i("80c3").default,vkDataLoading:i("be34").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"app app-bg"},[i("u-gap",{attrs:{height:"1","bg-color":"#f3f3f3"}}),e._l(e.form1.goods_sku_list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"card"},[i("u-gap",{attrs:{height:"80","bg-color":"#f3f3f3"}}),i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{staticClass:"image",attrs:{src:t.image,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"text-one sku-name"},[e._v(e._s(t.sku_name))]),i("u-gap",{attrs:{height:"20","bg-color":"#ffffff"}}),i("v-uni-view",[i("v-uni-text",[e._v("评分：")]),i("u-rate",{model:{value:t.stars,callback:function(i){e.$set(t,"stars",i)},expression:"item.stars"}})],1),i("u-gap",{attrs:{height:"20","bg-color":"#ffffff"}})],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"centre-tips"},[e._v("客观真实的评价能帮助用户做决策")]),i("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[i("vk-data-input",{attrs:{placeholder:"从多个角度评价宝贝，可以帮助更多想买的人",type:"textarea",height:"200",focus:t.focus},on:{blur:function(i){arguments[0]=i=e.$handleEvent(i),t.focus=!1}},model:{value:t.content,callback:function(i){e.$set(t,"content",i)},expression:"item.content"}}),i("v-uni-view",{staticClass:"upload"},[i("vk-data-upload",{staticStyle:{"margin-top":"10rpx"},attrs:{limit:9,"show-header":!1,title:"请上传图片(最多9张)"},model:{value:t.images,callback:function(i){e.$set(t,"images",i)},expression:"item.images"}})],1)],1)],1)],1)})),e.complete?i("v-uni-view",{staticStyle:{"margin-top":"100rpx","text-align":"center"}},[i("u-button",{staticStyle:{width:"80%"},attrs:{type:"success"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1):e._e(),i("u-gap",{attrs:{height:"100","bg-color":"#f3f3f3"}}),i("vk-data-float-ball",{attrs:{"scroll-top":e.scrollTop}}),i("vk-data-loading",{model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}})],2)},n=[]},2062:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".vk-data-upload[data-v-7d75bfe9]{width:100%;text-align:left}.vk-data-upload .chooseImage-view[data-v-7d75bfe9]{color:#989898;background-color:#f8f8fa;display:flex;justify-content:center;align-items:center;flex-direction:column}.vk-data-upload .upload-btn[data-v-7d75bfe9]{border:1px solid #52a0d5;color:#52a0d5;background-color:#fff;border-radius:%?8?%;padding:%?20?% %?60?%;margin-top:%?20?%;line-height:normal}.vk-data-upload .image-mask[data-v-7d75bfe9]{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.4);border-radius:%?8?%;top:0;left:0;z-index:2;display:flex;justify-content:center;align-items:center}.vk-data-upload .image-item-view[data-v-7d75bfe9]{position:relative;display:inline-block;margin:%?10?%;width:%?150?%;height:%?150?%}.vk-data-upload .image-item-view .image-item[data-v-7d75bfe9]{width:100%;height:100%;border-radius:%?10?%}.vk-data-upload .delete-btn[data-v-7d75bfe9]{position:absolute;right:%?10?%;top:%?10?%;font-size:%?30?%;width:%?40?%;height:%?40?%;border-radius:50%;text-align:center;line-height:%?36?%;z-index:3;background-color:#565656;color:#fff}.vk-data-upload .progress[data-v-7d75bfe9]{font-size:%?24?%;width:%?70?%;height:%?70?%;background-color:#fff;border-radius:50%;text-align:center;line-height:%?70?%}.vk-data-upload .upload-btn-sub[data-v-7d75bfe9]{width:%?150?%;height:%?150?%;background-color:#eff8ff;border:1px solid #c3e1ed;display:flex;align-items:center;justify-content:center;position:relative}.vk-data-upload .upload-btn-sub .item-1[data-v-7d75bfe9]{position:absolute;width:50%;border-bottom:2px solid #489cd3}.vk-data-upload .upload-btn-sub .item-2[data-v-7d75bfe9]{position:absolute;border-left:2px solid #489cd3;height:50%}.vk-data-upload .lists-view[data-v-7d75bfe9]{display:flex;flex-direction:row;flex-wrap:wrap}.vk-data-upload .default-image[data-v-7d75bfe9]{width:%?128?%;height:%?128?%}.vk-data-upload .header-view[data-v-7d75bfe9]{padding:%?10?% %?20?%;display:flex}.vk-data-upload .left-view[data-v-7d75bfe9]{width:70%}.vk-data-upload .right-view[data-v-7d75bfe9]{width:30%;text-align:right}.vk-data-upload.quick-preview .delete-btn[data-v-7d75bfe9]{background-color:#fff;color:#000}",""]),e.exports=t},"2d9b":function(e,t,i){"use strict";i.r(t);var a=i("a2be"),o=i("e001");for(var n in o)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("042cc");var s=i("f0c5"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"7d75bfe9",null,!1,a["a"],void 0);t["default"]=r.exports},"51eb8":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("d81d");var a=uni.vk,o={data:function(){return{form1:{goods_sku_list:[]},loading:!1,scrollTop:0,complete:!1}},onPageScroll:function(e){this.scrollTop=e.scrollTop},onPullDownRefresh:function(){this.init(this.options),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=uni.vk,this.options=e,this.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(){var e=this;a.callFunction({url:"client/order.getInfo",loading:!0,data:{_id:this.options._id},success:function(t){t.orderInfo.goods_sku_list.map((function(e,t){e.stars=5})),e.form1.goods_sku_list=t.orderInfo.goods_sku_list,e.complete=!0}})},submit:function(){for(var e=this,t=this.form1,i="",o=0;o<t.goods_sku_list.length;o++){var n=t.goods_sku_list[o];if(!n.content||n.content.length<2){i="评论内容不能小于2个字",this.$set(n,"focus",!0);break}}if(i)return a.toast(i),!1;var s=t.goods_sku_list.map((function(e,t){return{goods_id:e.goods_id,goods_name:e.goods_name,sku_id:e._id,sku_name:e.sku_name,content:e.content,images:e.images,stars:e.stars}}));a.callFunction({url:"client/order.addComment",loading:!0,data:{_id:this.options._id,list:s},success:function(t){var i=e.getOpenerEventChannel();i.emit&&i.emit("update",{status:6}),a.alert("提交成功",(function(){setTimeout((function(){a.navigateBack()}),300)}))}})}},watch:{},computed:{}};t.default=o},"734f":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".card[data-v-5c47804f]{display:block}.card .header[data-v-5c47804f]{background-color:#fff;display:block;border-radius:%?20?%;margin:0 %?20?%;padding:%?20?%;position:relative;display:flex;flex-direction:column;align-items:center}.card .header .image[data-v-5c47804f]{width:%?100?%;height:%?100?%;position:absolute;top:%?-50?%;border-radius:%?20?%}.card .header .sku-name[data-v-5c47804f]{margin-top:%?30?%;color:#606266;font-size:%?24?%}.card .content[data-v-5c47804f]{background-color:#fff;display:block;border-radius:%?20?%;margin:0 %?20?%;border-top:%?1?% dashed #f3f3f3;padding:%?20?%;position:relative}.card .content .centre-tips[data-v-5c47804f]{position:absolute;color:#909399;top:%?-18?%;font-size:%?24?%;width:100%;text-align:center}.card .content .upload[data-v-5c47804f]{border:%?1?% dashed #f3f3f3;border-radius:%?20?%}",""]),e.exports=t},a2be:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"vk-data-upload",class:e.quickPreview?"quick-preview":""},[e.quickPreview?i("v-uni-view",[e.lists&&e.lists.length?i("v-uni-image",{style:"width: "+e.widthCom+";height: "+e.heightCom+";display: block;",attrs:{src:e.lists[e.previewIndex].url,mode:e.imageMode},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage(e.lists[e.previewIndex].url)}}}):i("v-uni-view",{staticClass:"chooseImage-view",style:{width:e.widthCom,height:e.heightCom},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"default-image",attrs:{src:e.defaultImage}})],1),i("v-uni-view",[e._v(e._s(e.placeholder))]),i("v-uni-view",{staticClass:"upload-btn"},[e._v(e._s(e.uploadText))])],1)],1):e._e(),e.showHeader?i("v-uni-view",{staticClass:"header-view"},[e.title?i("v-uni-view",{staticClass:"left-view"},[e._v(e._s(e.title))]):e._e(),e.limit>1?i("v-uni-view",{staticClass:"right-view"},[e._v(e._s(e.limitTitleCom))]):e._e()],1):e._e(),e.quickPreview&&e.lists&&e.lists.length||!e.quickPreview?i("v-uni-view",{staticStyle:{padding:"10rpx"}},[i("v-uni-view",{staticClass:"lists-view"},[e._l(e.lists,(function(t,a){return i("v-uni-view",{key:a,staticClass:"image-item-view"},[i("v-uni-image",{staticClass:"image-item",attrs:{src:t.url},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.imageItemClick(t.url,a)}}}),t.error?i("v-uni-view",{staticClass:"image-mask"},[i("v-uni-view",{staticClass:"progress",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFile.apply(void 0,arguments)}}},[e._v("重试")])],1):t.progress<100?i("v-uni-view",{staticClass:"image-mask"},[i("v-uni-view",{staticClass:"progress"},[e._v(e._s(t.progress)+"%")])],1):e.quickPreview&&e.previewIndex==a?i("v-uni-view",{staticClass:"image-mask"}):e._e(),e.disabled?e._e():i("v-uni-view",{staticClass:"delete-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteImage(a)}}},[e._v("×")])],1)})),e.lists.length<e.limit?i("v-uni-view",{staticClass:"image-item-view upload-btn-sub",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"item-1"}),i("v-uni-view",{staticClass:"item-2"})],1):e._e()],2)],1):e._e()],1)},o=[]},b70b:function(e,t,i){"use strict";var a=i("fc7c"),o=i.n(a);o.a},e001:function(e,t,i){"use strict";i.r(t);var a=i("e21e"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},e21e:function(e,t,i){"use strict";i("7a82");var a=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i("f07e")),n=a(i("c964")),s=a(i("0122"));i("a9e3"),i("d81d"),i("14d9"),i("e9c4"),i("a434"),i("d3b7"),i("3ca3"),i("ddb0"),i("99af");var r={name:"vk-data-upload",emits:["update:modelValue","input","on-progress","on-success","on-error","on-preview"],props:{value:{},modelValue:{},placeholder:{Type:String},defaultImage:{type:String,default:"data:image/png;base64,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"},width:{type:[String,Number],default:200},height:{type:[String,Number]},quickPreview:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},disabled:{type:Boolean,default:!1},previewFullImage:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!1},needSave:{type:Boolean,default:!1},title:{type:String,default:"上传图片"},limit:{type:Number,default:99},provider:{type:String},uploadText:{type:String,default:"选择图片"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},maxSize:{type:[String,Number],default:999999999}},data:function(){return{previewIndex:0,lists:[]}},mounted:function(){this.init()},methods:{init:function(){var e=this.valueCom,t=this.vk,i=this.limit;t.pubfn.isNull(e)&&i>1&&this._updateValue([])},_updateValue:function(e){var t=this.limit;1==t&&"object"===(0,s.default)(e)&&(e=e[0]),this.$emit("input",e),this.$emit("update:modelValue",e)},chooseImage:function(){var e=this,t=e.sizeType,i=e.sourceType,a=e.lists,o=e.limit,n=e.maxSize,s=e.disabled;return!(a.length>=o)&&(!s&&void uni.chooseImage({count:o,sizeType:t,sourceType:i,success:function(t){t.tempFiles.map((function(t,i){if(t.size>n&&(e.$emit("on-oversize",t,e.lists,e.index),uni.showToast({title:"超出允许的文件大小",icon:"none"})),a.length>=o)return e.$emit("on-exceed",t,e.lists,e.index),void uni.showToast({title:"超出最大允许的文件个数",icon:"none"});a.push({url:t.path,progress:0,error:!1,file:t})})),e.lists=JSON.parse(JSON.stringify(a)),e.uploadFile()}}))},deleteImage:function(e){var t=this,i=t.previewIndex,a=void 0===i?0:i,o=t.vk,n=t.valueCom,s=t.limit;o.confirm("确定删除吗？","删除提示","确定","取消",(function(i){i.confirm&&(o.pubfn.isNull(n)&&t.lists.splice(e,1),a>=t.lists.length-1&&(t.previewIndex=0),s>1?n.splice(e,1):n="",t._updateValue(n))}))},uploadFile:function(){var e=this;return(0,n.default)((0,o.default)().mark((function t(){var i,a,n,s,r,l,u,d;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e,a=i.provider,n=i.vk,s=i.lists,a||(r=n.callFunctionUtil.getConfig(),l=n.pubfn.getData(r,"service.aliyunOSS"),a=l&&l.isDefault?"aliyun":"unicloud"),u=[],s.map((function(e,t){e.progress<100&&("unicloud"===a?u.push(i.beforeUpload_unicloud(t,s)):"aliyun"===a&&u.push(i.beforeUpload_aliyunoss(t,s)))})),t.next=7,Promise.all(u);case 7:d=[],i.lists.map((function(e,t){d.push(e.url)})),i._updateValue(d);case 10:case"end":return t.stop()}}),t)})))()},beforeUpload_unicloud:function(e,t){var i=this,a=i.vk,o=i.limit,n=i.needSave,s=t[e].url,r=t[e].file;return a.callFunctionUtil.uploadFile({filePath:s,fileType:"image",provider:"unicloud",file:r,needSave:n,onUploadProgress:function(a){a.progress>0&&t[e]&&(t[e].progress=a.progress,i.$emit("on-progress",a,e,t))},success:function(a){var n=a.fileID;t[e].response="ok",t[e].progress=100,t[e].error=!1,t[e].url=n,i.$emit("on-success",a,e,t);var s=i.valueCom;o>1?(s&&0!=s.length||(s=[]),s.push(n)):s=n},fail:function(a){t[e].error=!0,i.$emit("on-error",a,e,t)}})},beforeUpload_aliyunoss:function(e,t){var i=this,a=i.limit,o=i.vk,n=i.needSave,s=t[e].url,r=t[e].file;return o.callFunctionUtil.uploadFile({filePath:s,fileType:"image",provider:"aliyun",index:e,file:r,needSave:n,onUploadProgress:function(a){a.progress>0&&t[e]&&(t[e].progress=a.progress,i.$emit("on-progress",a,e,t))},success:function(o){var n=o.fileID;t[e].response=o,t[e].progress=100,t[e].error=!1,i.$emit("on-success",o,e,t);var s=i.valueCom;a>1?(s&&0!=s.length||(s=[]),s.push(n)):s=n,i._updateValue(s)},fail:function(a){i.$emit("on-error",a,e,t)}})},previewImage:function(e,t){var i=this,a=i.previewIndex,o=i.lists,n=i.previewFullImage;if(void 0==t&&(t=a),n){var s=o.map((function(e){return e.url||e.path}));uni.previewImage({urls:s,current:e,success:function(){i.$emit("on-preview",e,o,t)},fail:function(){uni.showToast({title:"预览图片失败",icon:"none"})}})}else i.$emit("on-preview",e,o,t)},imageItemClick:function(e,t){var i=this.quickPreview,a=this.previewFullImage;this.previewIndex=t,!i&&a&&this.previewImage(e,t)}},watch:{valueCom:{immediate:!0,handler:function(e,t){var i=[];e&&(1==this.limit?i.push({url:e,progress:100,error:!1}):e.map((function(e,t){i.push({url:e,progress:100,error:!1})}))),this.lists=JSON.parse(JSON.stringify(i))}}},computed:{valueCom:function(){return this.value},widthCom:function(){var e=this.width;return"".concat(Number(e),"rpx")},heightCom:function(){var e=this.height;return"".concat(Number(e),"rpx")},limitTitleCom:function(){var e=this.limit,t="";if(e>1){var i=this.valueCom;i||(i=[]);var a=i.length;t="".concat(a," /  ").concat(e)}return t}}};t.default=r},f770:function(e,t,i){"use strict";i.r(t);var a=i("51eb8"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},fc5a:function(e,t,i){"use strict";i.r(t);var a=i("0fdd"),o=i("f770");for(var n in o)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("b70b");var s=i("f0c5"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"5c47804f",null,!1,a["a"],void 0);t["default"]=r.exports},fc7c:function(e,t,i){var a=i("734f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("63c95c9a",a,!0,{sourceMap:!1,shadowMode:!1})},ffb1:function(e,t,i){var a=i("2062");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("05ec5d89",a,!0,{sourceMap:!1,shadowMode:!1})}}]);