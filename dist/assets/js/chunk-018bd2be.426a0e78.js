(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-018bd2be"],{"0fac":function(t,e,n){"use strict";var i=n("e845"),s=n.n(i);s.a},1637:function(t,e,n){"use strict";var i=n("d281"),s=n.n(i);s.a},"18fa":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={methods:{routerGo:function(t){this.$router.push("/app/consult/newsDetial/"+t)}}}},"2d43":function(t,e,n){var i=n("01f5"),s=n("6462"),a=n("db4b"),r=n("b146"),o=n("5824");t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d,p=e||o;return function(e,o,m){for(var h,v,_=a(e),b=s(_),g=i(o,m,3),x=r(b.length),C=0,w=n?p(e,x):c?p(e,0):void 0;x>C;C++)if((f||C in b)&&(h=b[C],v=g(h,C,_),t))if(n)w[C]=v;else if(v)switch(t){case 3:return!0;case 5:return h;case 6:return C;case 2:w.push(h)}else if(u)return!1;return d?-1:l||u?u:w}}},3433:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overhidden"},[n("home-introduce",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"slide-right"}}),n("home-products",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"slide-left","data-aos-offset":"280"}}),n("home-news",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"slide-right","data-aos-offset":"280"}})],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeComponent companyIntroduce"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"homeComponent__titleSmall "},[n("el-divider",[t._v(t._s(t.$t("home.introduce.title")))])],1),t._m(0),n("p",{staticClass:"homeComponent__tenet "},[t._v("\n      商信诺人寿的使命是帮助我们的客户更健康，更幸福，更有保障！\n    ")]),n("el-image",{staticClass:"mb5 companyLogo mb15",staticStyle:{width:"60%"},attrs:{src:t.companyLogo,lazy:""},on:{"update:src":function(e){t.companyLogo=e}}}),n("div",[n("el-link",{staticClass:"fs16",attrs:{type:"primary",href:"/#/app/aboutUs/index"}},[t._v(t._s(t.$t("common.more")))])],1)],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"companyIntroduce__brief mb25"},[n("p",[t._v("\n        招商信诺人寿是一家专业、稳健、创新、以健康险为专长的中外合资寿险公司,\n        为企业和个人提供涵盖保险保障、\n        健康管理、财富规划的全方位产品及服务，中外股东分别为招商银行和美国信诺集团。\n      ")])])}],o=n("2ff3"),c=n.n(o),l=n("4a6f"),u={data:function(){return{companyLogo:c.a}},mounted:function(){var t=this;Object(l["c"])().then((function(e){t.companyLogo=e.logo}))}},d=u,f=(n("dd3c"),n("6691")),p=Object(f["a"])(d,a,r,!1,null,"1771439a",null),m=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeComponent homeProducts"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"homeComponent__titleSmall"},[n("el-divider",[t._v(t._s(t.$t("home.products.title")))])],1),n("p",{staticClass:"homeComponent__tenet mb15"},[t._v("\n      "+t._s(t.$t("home.products.purpose"))+"\n    ")]),n("div",{staticClass:"mb15"},[n("el-radio-group",{model:{value:t.productsType,callback:function(e){t.productsType=e},expression:"productsType"}},[n("el-radio-button",{attrs:{label:t.$t("home.products.title")+"1"}}),n("el-radio-button",{attrs:{label:t.$t("home.products.title")+"2"}}),n("el-radio-button",{attrs:{label:t.$t("home.products.title")+"3"}})],1)],1),n("div",[n("el-carousel",{attrs:{interval:3e4,height:"590px","indicator-position":"outside"},on:{change:t.carouselChange}},t._l(4,(function(e){return n("el-carousel-item",{key:e},[n("div",[n("el-row",{attrs:{gutter:25}},t._l(t.productsList,(function(e){return n("el-col",{key:e.$index,staticClass:"mb25 cursor",attrs:{xs:24,sm:12,md:6}},[n("el-image",{directives:[{name:"fix-fixed-transition",rawName:"v-fix-fixed-transition",value:t.productsDetial.dialogVisible,expression:"productsDetial.dialogVisible"}],staticStyle:{width:"100%",height:"255px"},attrs:{src:e.image,title:t.$t("header.imgTitle"),lazy:""},on:{click:function(n){return t.toggleDialogVisible(e.id)}}}),n("p",{staticClass:"products__item__txt"},[t._v(t._s(e.name))])],1)})),1)],1)])})),1)],1),n("div",[n("el-link",{attrs:{type:"primary",href:"/#/app/products"}},[t._v(t._s(t.$t("common.more")))])],1),n("div",[n("el-dialog",{attrs:{visible:t.productsDetial.dialogVisible,modal:!0},on:{"update:visible":function(e){return t.$set(t.productsDetial,"dialogVisible",e)}}},[n("products-detial",{attrs:{"canvas-list":t.productsList,"selected-id":t.productsDetial.selectedId}})],1)],1)])])},v=[],_=(n("63ff"),n("f8f9")),b=n("6123"),g={mixins:[b["a"]],data:function(){return{productsType:"",carouselIndex:0,productsListAll:[]}},computed:{productsList:function(){return this.productsListAll.slice(8*this.carouselIndex,8*(this.carouselIndex+1))}},mounted:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["g"])({pageSize:32});case 2:this.productsListAll=t.sent.list;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{carouselChange:function(){var t=arguments[0];this.carouselIndex=t}}},x=g,C=(n("1637"),Object(f["a"])(x,h,v,!1,null,"4bbe3184",null)),w=C.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeComponent homeNews"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"homeComponent__titleSmall"},[n("el-divider",[t._v(t._s(t.$t("home.news.title")))])],1),n("p",{staticClass:"homeComponent__tenet"},[t._v("\n      "+t._s(t.$t("home.news.purpose"))+"\n    ")]),n("el-row",{attrs:{gutter:20}},t._l(t.newsInfo,(function(e){return n("el-col",{key:e.$index,attrs:{span:12}},[n("el-card",{staticClass:"mb15",attrs:{shadow:"hover"}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{md:8}},[n("el-image",{directives:[{name:"fix-fixed-transition",rawName:"v-fix-fixed-transition"}],staticStyle:{width:"100%",height:"100%"},attrs:{src:e.images,"preview-src-list":[e.images],title:t.$t("header.imgTitle"),lazy:""}})],1),n("el-col",{attrs:{md:16}},[n("div",{staticClass:"cursor",on:{click:function(n){return t.routerGo(e.id)}}},[n("h4",[t._v("\n                  "+t._s(e.title)+"\n                ")]),n("p",{staticClass:"color999 homeNews__content__p"},[t._v("\n                  "+t._s(e.content)+"\n                ")])])])],1)],1)],1)})),1),n("div",[n("el-link",{attrs:{type:"primary",href:"/#/app/consult/news"}},[t._v(t._s(t.$t("common.more")))])],1)],1)])},I=[],$=n("18fa"),L={mixins:[$["a"]],data:function(){return{newsInfo:[]}},mounted:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["f"])({pageSize:4});case 2:this.newsInfo=t.sent.list;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},k=L,S=(n("89e0"),Object(f["a"])(k,y,I,!1,null,"1879b336",null)),P=S.exports,O={components:{homeIntroduce:m,homeProducts:w,homeNews:P}},D=O,j=(n("0fac"),Object(f["a"])(D,i,s,!1,null,null,null));e["default"]=j.exports},3955:function(t,e,n){},"56dc":function(t,e,n){"use strict";var i=n("3955"),s=n.n(i);s.a},5824:function(t,e,n){var i=n("f691");t.exports=function(t,e){return new(i(t))(e)}},6123:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modalViewer"},[t.isSingle?t._e():[n("span",{staticClass:"modal__btn modal__prev",class:{"is-disabled":!t.infinite&&t.isFirst},on:{click:t.prev}},[n("i",{staticClass:"el-icon-arrow-left"})]),n("span",{staticClass:"modal__btn modal__next",class:{"is-disabled":!t.infinite&&t.isLast},on:{click:t.next}},[n("i",{staticClass:"el-icon-arrow-right"})])],n("div",{staticClass:"modal__canvas"},[n("el-row",{attrs:{gutter:15}},[n("el-col",{staticClass:"mb15",attrs:{span:24}},[n("el-image",{staticClass:"productsInfo__image",attrs:{src:t.currentProduct.image}})],1),n("el-col",{attrs:{span:24}},[n("h4",{staticClass:"text-center mb15 productsInfo__title"},[t._v("\n          "+t._s(t.currentProduct.name)+"\n        ")]),n("dl",{staticClass:"text-center"},[n("dd",{staticClass:"mb15"},[n("span",{staticClass:"productsInfo__label"},[t._v(t._s(t.$t("productsInfo.model")))]),n("span",{staticClass:"productsInfo__p"},[t._v("\n              "+t._s(t.currentProduct.model)+"\n            ")])])])])],1)],1)],2)},s=[],a=(n("cde0"),n("617a")),r={name:"modalViewer",props:{canvasList:{type:Array,default:function(){return[]}},onSwitch:{type:Function,default:function(){return{}}},onClose:{type:Function,default:function(){return{}}},selectedId:{type:String,default:""}},data:function(){return{index:0,isShow:!1,infinite:!0}},computed:{isSingle:function(){return!a["a"].IsPC||this.canvasList.length<=1},isFirst:function(){return 0===this.index},isLast:function(){return this.index===this.canvasList.length-1},currentProduct:function(){return this.canvasList[this.index]}},watch:{index:{handler:function(t){this.onSwitch(t)}},selectedId:function(t){if(!t)return this.index=0;this.index=this.canvasList.findIndex((function(e){return e.id===t}))}},methods:{hide:function(){this.onClose()},prev:function(){if(!this.isFirst||this.infinite){var t=this.canvasList.length;this.index=(this.index-1+t)%t}},next:function(){if(!this.isLast||this.infinite){var t=this.canvasList.length;this.index=(this.index+1)%t}}},mounted:function(){var t=this;this.index=this.canvasList.findIndex((function(e){return e.id===t.selectedId}))||0},destroyed:function(){}},o=r,c=(n("56dc"),n("6691")),l=Object(c["a"])(o,i,s,!1,null,"3af7821b",null),u=l.exports;n.d(e,"a",(function(){return d}));var d={components:{productsDetial:u},data:function(){return{productsDetial:{dialogVisible:!1,selectProductIndex:0}}},methods:{toggleDialogVisible:function(t){this.productsDetial.selectedId=t||0,this.productsDetial.dialogVisible=!this.productsDetial.dialogVisible}}}},"617a":function(t,e,n){"use strict";var i=n("7300"),s=n("97a3");function a(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,i=0;i<e.length;i++)if(t.indexOf(e[i])>0){n=!1;break}return n}var r=function t(){Object(i["a"])(this,t),Object(s["a"])(this,"IsPC",!1)},o=new r;o.IsPC=a();e["a"]=o},"7bb2":function(t,e,n){},"89e0":function(t,e,n){"use strict";var i=n("7bb2"),s=n.n(i);s.a},b68f:function(t,e,n){},cde0:function(t,e,n){"use strict";var i=n("b2f5"),s=n("2d43")(6),a="findIndex",r=!0;a in[]&&Array(1)[a]((function(){r=!1})),i(i.P+i.F*r,"Array",{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("644a")(a)},d281:function(t,e,n){},dd3c:function(t,e,n){"use strict";var i=n("b68f"),s=n.n(i);s.a},e845:function(t,e,n){},f691:function(t,e,n){var i=n("88dd"),s=n("b5b8"),a=n("8b37")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),i(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}}}]);
//# sourceMappingURL=chunk-018bd2be.426a0e78.js.map