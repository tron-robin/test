(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods-order-pay~pages-index-mys"],{"0880":function(t,e,o){"use strict";o("7a82");var n=o("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("0122"));o("a9e3"),o("e9c4");var r,s=n(o("fbf9")),u={name:"vk-data-qrcode",props:{value:{type:String},text:{type:String,default:""},size:{type:Number,default:200},unit:{type:String,default:"rpx"},show:{type:Boolean,default:!0},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},image:{type:String,default:""},imageSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!0},loadMake:{type:Boolean,default:!0},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!1},loadingText:{type:String,default:"二维码生成中"},loading:{type:Boolean,default:!1}},data:function(){return{result:"",canvasId:""}},methods:{_makeCode:function(){var t=this;this._empty(this.text)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):r=new s.default({context:t,canvasId:t.canvasId,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.text,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.image,imageSize:t.imageSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),r.clear()},_saveCode:function(){""!=this.result&&uni.saveImageToPhotosAlbum({filePath:this.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t),this.$emit("input",t)},_empty:function(t){var e=(0,i.default)(t),o=!1;return"number"==e&&""==String(t)||"undefined"==e?o=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(o=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(o=!0):"function"==e&&(o=!1),o},getBase64:function(){return this.result}},watch:{size:function(t,e){var o=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.text)||setTimeout((function(){o._makeCode()}),100))},text:function(t,e){var o=this;o.onval&&(t==e||o._empty(t)||(o.textTimer&&clearTimeout(o.textTimer),o.textTimer=setTimeout((function(){o._makeCode()}),300)))}},computed:{cpSize:function(){return"rpx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.canvasId="vk-qrcode-canvas-"+Math.floor(1e6*Math.random()),this.loadMake&&(this._empty(this.text)||setTimeout((function(){t._makeCode()}),100))}};e.default=u},"21b2":function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.canvasId&&""!==t.text&&!t.loading?o("v-uni-view",{staticClass:"vk-qrcode"},[o("v-uni-canvas",{staticClass:"vk-qrcode-canvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{"canvas-id":t.canvasId}}),t.result?o("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vk-qrcode-image",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}}):o("v-uni-view",{staticClass:"loading-text",style:"width: "+t.size+t.unit+";height: "+t.size+t.unit+";"},[t._v(t._s(t.loadingText))])],1):o("v-uni-view",{staticClass:"loading-text",style:"width: "+t.size+t.unit+";height: "+t.size+t.unit+";"},[t._v(t._s(t.loadingText))])},i=[]},3094:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".vk-qrcode[data-v-6105ba68]{\r\ndisplay:flex;\r\nposition:relative;justify-content:center;align-items:center;flex-direction:column}.vk-qrcode-image[data-v-6105ba68]{\r\ndisplay:block\n}.loading-text[data-v-6105ba68]{\r\ndisplay:flex;\r\ncolor:#9a9a9a;justify-content:center;align-items:center;flex-direction:column}.vk-qrcode-canvas[data-v-6105ba68]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},5400:function(t,e,o){var n=o("3094");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("6b5fe999",n,!0,{sourceMap:!1,shadowMode:!1})},"7ee0":function(t,e,o){"use strict";o.r(e);var n=o("21b2"),i=o("d7a9");for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("ab3c");var s=o("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6105ba68",null,!1,n["a"],void 0);e["default"]=u.exports},ab3c:function(t,e,o){"use strict";var n=o("5400"),i=o.n(n);i.a},cb29:function(t,e,o){"use strict";var n=o("23e7"),i=o("81d5"),r=o("44d2");n({target:"Array",proto:!0},{fill:i}),r("fill")},d7a9:function(t,e,o){"use strict";o.r(e);var n=o("0880"),i=o.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},fbf9:function(t,e,o){"use strict";o("7a82");var n=o("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(o("0122"));o("14d9"),o("d9e2"),o("d401"),o("a9e3"),o("cb29"),o("e9c4");var i={};(function(){function t(t){var e,o,n;return t<128?[t]:t<2048?(e=192+(t>>6),o=128+(63&t),[e,o]):(e=224+(t>>12),o=128+(t>>6&63),n=128+(63&t),[e,o,n])}function e(e,o){this.typeNumber=-1,this.errorCorrectLevel=o,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=e,this.utf8bytes=function(e){for(var o=[],n=0;n<e.length;n++)for(var i=e.charCodeAt(n),r=t(i),s=0;s<r.length;s++)o.push(r[s]);return o}(e),this.make()}e.prototype={constructor:e,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+o][e+n]=0<=o&&o<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=n&&n<=4)},createQrcode:function(){for(var t=0,e=0,o=null,n=0;n<8;n++){this.makeImpl(n);var i=r.getLostPoint(this);(0==n||t>i)&&(t=i,e=n,o=this.modules)}this.modules=o,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=r.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var n=t[e],i=t[o];if(null==this.modules[n][i])for(var s=-2;s<=2;s++)for(var u=-2;u<=2;u++)this.modules[n+s][i+u]=-2==s||2==s||-2==u||2==u||0==s&&0==u}},setupTypeNumber:function(t){for(var e=r.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var n=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=n,this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=n}},setupTypeInfo:function(t,e){for(var n=o[this.errorCorrectLevel]<<3|e,i=r.getBCHTypeInfo(n),s=0;s<15;s++){var u=!t&&1==(i>>s&1);s<6?this.modules[s][8]=u:s<8?this.modules[s+1][8]=u:this.modules[this.moduleCount-15+s][8]=u;u=!t&&1==(i>>s&1);s<8?this.modules[8][this.moduleCount-s-1]=u:s<9?this.modules[8][15-s-1+1]=u:this.modules[8][15-s-1]=u}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new h,o=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,o);for(var n=0,i=this.utf8bytes.length;n<i;n++)t.put(this.utf8bytes[n],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(e.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(e.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,o=0,n=0,i=this.rsBlock.length/3,s=new Array,u=0;u<i;u++)for(var l=this.rsBlock[3*u+0],h=this.rsBlock[3*u+1],d=this.rsBlock[3*u+2],c=0;c<l;c++)s.push([d,h]);for(var f=new Array(s.length),g=new Array(s.length),m=0;m<s.length;m++){var p=s[m][0],v=s[m][1]-p;o=Math.max(o,p),n=Math.max(n,v),f[m]=new Array(p);for(u=0;u<f[m].length;u++)f[m][u]=255&t.buffer[u+e];e+=p;var y=r.getErrorCorrectPolynomial(v),T=new a(f[m],y.getLength()-1),w=T.mod(y);g[m]=new Array(y.getLength()-1);for(u=0;u<g[m].length;u++){var b=u+w.getLength()-g[m].length;g[m][u]=b>=0?w.get(b):0}}var C=new Array(this.totalDataCount),P=0;for(u=0;u<o;u++)for(m=0;m<s.length;m++)u<f[m].length&&(C[P++]=f[m][u]);for(u=0;u<n;u++)for(m=0;m<s.length;m++)u<g[m].length&&(C[P++]=g[m][u]);return C},mapData:function(t,e){for(var o=-1,n=this.moduleCount-1,i=7,s=0,u=this.moduleCount-1;u>0;u-=2){6==u&&u--;while(1){for(var a=0;a<2;a++)if(null==this.modules[n][u-a]){var l=!1;s<t.length&&(l=1==(t[s]>>>i&1));var h=r.getMask(e,n,u-a);h&&(l=!l),this.modules[n][u-a]=l,i--,-1==i&&(s++,i=7)}if(n+=o,n<0||this.moduleCount<=n){n-=o,o=-o;break}}}}},e.PAD0=236,e.PAD1=17;for(var o=[1,0,3,2],n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},r={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(r.getBCHDigit(e)-r.getBCHDigit(r.G15)>=0)e^=r.G15<<r.getBCHDigit(e)-r.getBCHDigit(r.G15);return(t<<10|e)^r.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(r.getBCHDigit(e)-r.getBCHDigit(r.G18)>=0)e^=r.G18<<r.getBCHDigit(e)-r.getBCHDigit(r.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return r.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case n.PATTERN000:return(e+o)%2==0;case n.PATTERN001:return e%2==0;case n.PATTERN010:return o%3==0;case n.PATTERN011:return(e+o)%3==0;case n.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case n.PATTERN101:return e*o%2+e*o%3==0;case n.PATTERN110:return(e*o%2+e*o%3)%2==0;case n.PATTERN111:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),o=0;o<t;o++)e=e.multiply(new a([1,s.gexp(o)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,n=0,i=0;i<e;i++)for(var r=0,s=t.modules[i][0],u=0;u<e;u++){var a=t.modules[i][u];if(u<e-6&&a&&!t.modules[i][u+1]&&t.modules[i][u+2]&&t.modules[i][u+3]&&t.modules[i][u+4]&&!t.modules[i][u+5]&&t.modules[i][u+6]&&(u<e-10?t.modules[i][u+7]&&t.modules[i][u+8]&&t.modules[i][u+9]&&t.modules[i][u+10]&&(o+=40):u>3&&t.modules[i][u-1]&&t.modules[i][u-2]&&t.modules[i][u-3]&&t.modules[i][u-4]&&(o+=40)),i<e-1&&u<e-1){var l=0;a&&l++,t.modules[i+1][u]&&l++,t.modules[i][u+1]&&l++,t.modules[i+1][u+1]&&l++,0!=l&&4!=l||(o+=3)}s^a?r++:(s=a,r>=5&&(o+=3+r-5),r=1),a&&n++}for(u=0;u<e;u++)for(r=0,s=t.modules[0][u],i=0;i<e;i++){a=t.modules[i][u];i<e-6&&a&&!t.modules[i+1][u]&&t.modules[i+2][u]&&t.modules[i+3][u]&&t.modules[i+4][u]&&!t.modules[i+5][u]&&t.modules[i+6][u]&&(i<e-10?t.modules[i+7][u]&&t.modules[i+8][u]&&t.modules[i+9][u]&&t.modules[i+10][u]&&(o+=40):i>3&&t.modules[i-1][u]&&t.modules[i-2][u]&&t.modules[i-3][u]&&t.modules[i-4][u]&&(o+=40)),s^a?r++:(s=a,r>=5&&(o+=3+r-5),r=1)}var h=Math.abs(100*n/e/e-50)/5;return o+=10*h,o}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)s.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)s.EXP_TABLE[u]=s.EXP_TABLE[u-4]^s.EXP_TABLE[u-5]^s.EXP_TABLE[u-6]^s.EXP_TABLE[u-8];for(u=0;u<255;u++)s.LOG_TABLE[s.EXP_TABLE[u]]=u;function a(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var o=0;while(o<t.length&&0==t[o])o++;this.num=new Array(t.length-o+e);for(var n=0;n<t.length-o;n++)this.num[n]=t[n+o]}a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<t.getLength();n++)e[o+n]^=s.gexp(s.glog(this.get(o))+s.glog(t.get(n)));return new a(e,0)},mod:function(t){var e=this.getLength(),o=t.getLength();if(e-o<0)return this;for(var n=new Array(e),i=0;i<e;i++)n[i]=this.get(i);while(n.length>=o){var r=s.glog(n[0])-s.glog(t.get(0));for(i=0;i<t.getLength();i++)n[i]^=s.gexp(s.glog(t.get(i))+r);while(0==n[0])n.shift()}return new a(n,0)}};var l=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function h(){this.buffer=new Array,this.length=0}e.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=l[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var o=e.length/3,n=0,i=0;i<o;i++){var r=e[3*i+0],s=e[3*i+2];n+=s*r}var u=t>9?2:1;if(this.utf8bytes.length+u<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},h.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var o=0;o<e;o++)this.putBit(t>>>e-o-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d=[];i=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var o in t)this.options[o]=t[o];for(var n=null,i=(o=0,d.length);o<i;o++)if(d[o].text==this.options.text&&d[o].text.correctLevel==this.options.correctLevel){n=d[o].obj;break}o==i&&(n=new e(this.options.text,this.options.correctLevel),d.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:n}));var r=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground};(function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),o=n.getModuleCount(),i=t.size,s=t.imageSize,u=(i/o).toPrecision(4),a=(i/o).toPrecision(4),l=0;l<o;l++)for(var h=0;h<o;h++){var d=Math.ceil((h+1)*u)-Math.floor(h*u),c=Math.ceil((l+1)*u)-Math.floor(l*u),f=r({row:l,col:h,count:o,options:t});e.setFillStyle(n.modules[l][h]?f:t.background),e.fillRect(Math.round(h*u),Math.round(l*a),d,c)}if(t.image){var g=Number(((i-s)/2).toFixed(2)),m=Number(((i-s)/2).toFixed(2));(function(e,o,n,i,r,s,u,a,l){e.setLineWidth(u),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(o+s,n),e.arcTo(o+i,n,o+i,n+s,s),e.arcTo(o+i,n+r,o+i-s,n+r,s),e.arcTo(o,n+r,o,n+r-s,s),e.arcTo(o,n,o+s,n,s),e.closePath(),a&&e.fill(),l&&e.stroke()})(e,g,m,s,s,2,6,!0,!0),e.drawImage(t.image,g,m,s,s)}setTimeout((function(){e.draw(!0,(function(){setTimeout((function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&t.cbResult(e.tempFilePath)},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){t.showLoading&&uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)})(this.options)},i.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(function(){t&&t()}))}})();var r=i;e.default=r}}]);