(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f86de07"],{"48bb":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".faqs .el-collapse-item__header{font-size:18px;color:#303133}.faqs .el-collapse-item__content{text-align:left;padding-left:35px;color:#909399}",""])},"4a6f":function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"f",(function(){return p})),e.d(n,"c",(function(){return l})),e.d(n,"b",(function(){return d})),e.d(n,"k",(function(){return m})),e.d(n,"j",(function(){return h})),e.d(n,"i",(function(){return g})),e.d(n,"h",(function(){return b})),e.d(n,"g",(function(){return v})),e.d(n,"e",(function(){return w})),e.d(n,"l",(function(){return y})),e.d(n,"d",(function(){return x}));e("96cf"),e("7f7f"),e("ac6a");var a=e("3b8d"),i=e("1d6a"),c=e("ed08"),o=e("fec7"),r=e("8a59");function u(){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t([o,r])}),300)})));case 1:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}var f="/server/public/v1";function p(){var t=[{name:"menus.home",state:"/app/home",id:7,pid:-1},{name:"menus.aboutUs",id:1,pid:-1},{name:"menus.products",id:2,state:"/app/products",pid:-1},{name:"menus.consult",id:3,pid:-1},{name:"menus.customer",id:4,state:"/app/customer",pid:-1},{name:"menus.faq",state:"/app/faqs",id:5,pid:-1},{name:"menus.concatUs",id:6,state:"/app/concatUs",pid:-1},{name:"menus.enterprise",pid:1,state:"/app/aboutUs/index",id:10},{name:"menus.histroy",state:"/app/aboutUs/histroy",pid:1,id:11},{name:"menus.news",state:"/app/consult/news",pid:3,id:30},{name:"menus.methods",state:"/app/concatUs/info",pid:6,id:60},{name:"menus.email",state:"/app/concatUs/email",pid:6,id:61}];return new Promise((function(n){n(t)}))}function l(){return i["b"].get("".concat(f,"/company/info"),null,!0)}function d(){return i["b"].get("".concat(f,"/company/history/list"),null,!0).then((function(t){return t.forEach((function(t){var n=new Date(1e3*t.timestamp);t.year=n.getFullYear(),t.month=n.getMonth()+1})),Object(c["b"])(t,"year")}))}function m(){return i["b"].get("".concat(f,"/workshop/get"),null,!0)}function h(t){return i["b"].get("".concat(f,"/products/nav/get"),t,!0).then((function(t){return t.forEach((function(t){t.label=t.name})),Object(c["c"])(t,"id","pid","children")}))}function g(t){return i["b"].get("".concat(f,"/products/item/get"),t,!0)}function b(t){return i["b"].get("".concat(f,"/company/news/list"),t,!0).then((function(t){return t.data.forEach((function(t){var n=new Date(1e3*t.time);return t.formattime="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDay()),t})),t}))}function v(t){return i["b"].get("".concat(f,"/company/news/get"),t,!0).then((function(t){var n=new Date(1e3*t.time);return t.formattime="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDay()),t}))}function w(t){return i["b"].get("".concat(f,"/faq/get"),t,!0)}function y(t){return i["b"].post("".concat(f,"/feedback/submit"),t)}function x(t){return i["b"].get("".concat(f,"/customer/get"),t,!0)}f="/api"},"5cd7":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"zoom-in"}},[e("div",{staticClass:"container faqs tbGap"},[e("h4",{staticClass:"aboutUs__main__title mb15"},[t._v(t._s(t.$t("navMain.menus.faq")))]),e("el-collapse",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"min-height":"150px"},model:{value:t.activeNames,callback:function(n){t.activeNames=n},expression:"activeNames"}},t._l(t.faqQuestionList,(function(n){return e("el-collapse-item",{key:n.id,attrs:{title:n.question,name:n.id}},[e("div",[t._v("\n          "+t._s(n.answer)+"\n        ")])])})),1)],1)])},i=[],c=(e("96cf"),e("3b8d")),o=e("4a6f"),r={data:function(){return{activeNames:[63],faqQuestionList:null,loading:!1}},mounted:function(){this.get()},methods:{get:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Object(o["e"])();case 3:this.faqQuestionList=t.sent,this.faqQuestionList[0]&&(this.activeNames.push(this.faqQuestionList[0].id),this.loading=!1);case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()},watch:{"$i18n.locale":function(){this.get()}}},u=r,s=(e("da47"),e("2877")),f=Object(s["a"])(u,a,i,!1,null,null,null);n["default"]=f.exports},"7f7f":function(t,n,e){var a=e("86cc").f,i=Function.prototype,c=/^\s*function ([^ (]*)/,o="name";o in i||e("9e1e")&&a(i,o,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},"8a59":function(t,n,e){t.exports=e.p+"assets/img/lbt2.b147c4e0.jpg"},da47:function(t,n,e){"use strict";var a=e("efab"),i=e.n(a);i.a},efab:function(t,n,e){var a=e("48bb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("499e").default;i("215d7bbe",a,!0,{sourceMap:!1,shadowMode:!1})},fec7:function(t,n,e){t.exports=e.p+"assets/img/lbt1.d768163a.jpg"}}]);