(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e73a502"],{"18fa":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={methods:{routerGo:function(t){this.$router.push("/app/consult/newsDetial/"+t)}}}},"1d8d":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".news__summary{font-size:16px;letter-spacing:1px;color:#606266}.text-indent{text-indent:2em}.news__tools{width:100%;display:table;color:#909399;margin-top:15px}.news__tools__block{display:table-cell}",""])},"237f":function(t,n,e){var a=e("1d8d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("499e").default;i("10423f3e",a,!0,{sourceMap:!1,shadowMode:!1})},"454f":function(t,n,e){e("46a7");var a=e("584a").Object;t.exports=function(t,n,e){return a.defineProperty(t,n,e)}},"46a7":function(t,n,e){var a=e("63b6");a(a.S+a.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"4a6f":function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"f",(function(){return l})),e.d(n,"c",(function(){return p})),e.d(n,"b",(function(){return d})),e.d(n,"k",(function(){return g})),e.d(n,"j",(function(){return m})),e.d(n,"i",(function(){return h})),e.d(n,"h",(function(){return b})),e.d(n,"g",(function(){return w})),e.d(n,"e",(function(){return v})),e.d(n,"l",(function(){return _})),e.d(n,"d",(function(){return y}));e("96cf"),e("7f7f"),e("ac6a");var a=e("3b8d"),i=e("1d6a"),r=e("ed08"),o=e("fec7"),s=e("8a59");function c(){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t([o,s])}),300)})));case 1:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}var f="/server/public/v1";function l(){var t=[{name:"menus.home",state:"/app/home",id:7,pid:-1},{name:"menus.aboutUs",id:1,pid:-1},{name:"menus.products",id:2,state:"/app/products",pid:-1},{name:"menus.consult",id:3,pid:-1},{name:"menus.customer",id:4,state:"/app/customer",pid:-1},{name:"menus.faq",state:"/app/faqs",id:5,pid:-1},{name:"menus.concatUs",id:6,state:"/app/concatUs",pid:-1},{name:"menus.enterprise",pid:1,state:"/app/aboutUs/index",id:10},{name:"menus.histroy",state:"/app/aboutUs/histroy",pid:1,id:11},{name:"menus.news",state:"/app/consult/news",pid:3,id:30},{name:"menus.methods",state:"/app/concatUs/info",pid:6,id:60},{name:"menus.email",state:"/app/concatUs/email",pid:6,id:61}];return new Promise((function(n){n(t)}))}function p(){return i["b"].get("".concat(f,"/company/info"),null,!0)}function d(){return i["b"].get("".concat(f,"/company/history/list"),null,!0).then((function(t){return t.forEach((function(t){var n=new Date(1e3*t.timestamp);t.year=n.getFullYear(),t.month=n.getMonth()+1})),Object(r["b"])(t,"year")}))}function g(){return i["b"].get("".concat(f,"/workshop/get"),null,!0)}function m(t){return i["b"].get("".concat(f,"/products/nav/get"),t,!0).then((function(t){return t.forEach((function(t){t.label=t.name})),Object(r["c"])(t,"id","pid","children")}))}function h(t){return i["b"].get("".concat(f,"/products/item/get"),t,!0)}function b(t){return i["b"].get("".concat(f,"/company/news/list"),t,!0).then((function(t){return t.data.forEach((function(t){var n=new Date(1e3*t.time);return t.formattime="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDay()),t})),t}))}function w(t){return i["b"].get("".concat(f,"/company/news/get"),t,!0).then((function(t){var n=new Date(1e3*t.time);return t.formattime="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDay()),t}))}function v(t){return i["b"].get("".concat(f,"/faq/get"),t,!0)}function _(t){return i["b"].post("".concat(f,"/feedback/submit"),t)}function y(t){return i["b"].get("".concat(f,"/customer/get"),t,!0)}f="/api"},"617a":function(t,n,e){"use strict";var a=e("d225"),i=e("bd86");function r(){for(var t=navigator.userAgent,n=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],e=!0,a=0;a<n.length;a++)if(t.indexOf(n[a])>0){e=!1;break}return e}var o=function t(){Object(a["a"])(this,t),Object(i["a"])(this,"IsPC",!1)},s=new o;s.IsPC=r();n["a"]=s},"7f7f":function(t,n,e){var a=e("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,o="name";o in i||e("9e1e")&&a(i,o,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"85f2":function(t,n,e){t.exports=e("454f")},"8a59":function(t,n,e){t.exports=e.p+"assets/img/lbt2.b147c4e0.jpg"},b40b:function(t,n,e){"use strict";var a=e("237f"),i=e.n(a);i.a},bb32:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var a=e("617a"),i={data:function(){return{pagination:{pageSize:10,currentPage:1,total:0,pagerCount:5,layout:a["a"].IsPC?"sizes , prev, pager, next ,total":"prev, pager, next"}}}}},bd86:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var a=e("85f2"),i=e.n(a);function r(t,n,e){return n in t?i()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},d225:function(t,n,e){"use strict";function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return a}))},f51e:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"slide-right"}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container p15 companyNews",staticStyle:{"min-height":"150px"}},[e("h3",{staticClass:"aboutUs__main__title mb15"},[t._v(t._s(t.$t("navMain.menus.news")))]),t._l(t.newsInfo,(function(n){return e("el-card",{key:n.$index,staticClass:"mb15",attrs:{shadow:"hover"}},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{md:4}},[e("el-image",{directives:[{name:"fix-fixed-transition",rawName:"v-fix-fixed-transition"}],staticStyle:{width:"100%",height:"100%"},attrs:{src:n.img,"preview-src-list":[n.img],title:n.title}},[e("image-placehold",{attrs:{slot:"placeholder"},slot:"placeholder"})],1)],1),e("el-col",{attrs:{md:20}},[e("div",{staticClass:"cursor",on:{click:function(e){return t.routerGo(n.id)}}},[e("h4",{staticClass:"mb5"},[t._v("\n              "+t._s(n.title)+"\n            ")]),e("p",{staticClass:"color999 text-left text-indent news__summary"},[t._v("\n              "+t._s(n.summary)+"\n            ")]),e("p",{staticClass:"news__tools"},[e("span",{staticClass:"news__tools__block text-left"},[t._v("\n                "+t._s(t.$t("newsInfo.releaseTime"))+"："+t._s(n.formattime))]),e("span",{staticClass:"news__tools__block text-right"},[t._v("\n                "+t._s(t.$t("newsInfo.readings"))+"："+t._s(n.readings))])])])])],1)],1)})),e("div",{staticClass:"overhidden"},[e("el-pagination",{attrs:{"hide-on-single-page":!1,small:t.pagination.small,background:"","page-size":t.pagination.pageSize,"current-page":t.pagination.currentPage,layout:t.pagination.layout,total:t.pagination.total,"page-sizes":[10,20,40]},on:{"update:pageSize":function(n){return t.$set(t.pagination,"pageSize",n)},"update:page-size":function(n){return t.$set(t.pagination,"pageSize",n)},"update:currentPage":function(n){return t.$set(t.pagination,"currentPage",n)},"update:current-page":function(n){return t.$set(t.pagination,"currentPage",n)},"current-change":t.onPaginationChange,"size-change":t.onPaginationChange}})],1)],2)])},i=[],r=(e("96cf"),e("3b8d")),o=e("bb32"),s=e("18fa"),c=e("4a6f"),u=e("617a"),f={mixins:[o["a"],s["a"]],data:function(){return{newsInfo:[],loading:!1}},mounted:function(){this.pagination.small=!u["a"].IsPC,this.onPaginationChange()},methods:{onPaginationChange:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Object(c["h"])(this.pagination);case 3:n=t.sent,this.loading=!1,this.newsInfo=n.data,this.pagination.total=n.total;case 7:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()},watch:{"$i18n.locale":function(){this.onPaginationChange()}}},l=f,p=(e("b40b"),e("2877")),d=Object(p["a"])(l,a,i,!1,null,null,null);n["default"]=d.exports},fec7:function(t,n,e){t.exports=e.p+"assets/img/lbt1.d768163a.jpg"}}]);