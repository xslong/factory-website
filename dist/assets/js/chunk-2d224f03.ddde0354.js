(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224f03"],{e1ef:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"slide-left"}},[a("div",{staticClass:"container p15"},[a("h3",{staticClass:"aboutUs__main__title"},[e._v(e._s(e.$t("navMain.menus.email")))]),a("el-form",{ref:"concatForm",attrs:{model:e.formMap,rules:e.rules,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:e.$t("concat.name"),required:"",prop:"name"}},[a("el-input",{model:{value:e.formMap.name,callback:function(t){e.$set(e.formMap,"name",t)},expression:"formMap.name"}})],1)],1),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:e.$t("concat.company")}},[a("el-input",{model:{value:e.formMap.company,callback:function(t){e.$set(e.formMap,"company",t)},expression:"formMap.company"}})],1)],1),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:e.$t("concat.phone"),required:"",prop:"phone"}},[a("el-input",{model:{value:e.formMap.phone,callback:function(t){e.$set(e.formMap,"phone",t)},expression:"formMap.phone"}})],1)],1),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:e.$t("concat.email"),required:"",prop:"email"}},[a("el-input",{model:{value:e.formMap.email,callback:function(t){e.$set(e.formMap,"email",t)},expression:"formMap.email"}})],1)],1)],1),a("el-form-item",{attrs:{label:e.$t("concat.content"),required:"",prop:"content"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formMap.content,callback:function(t){e.$set(e.formMap,"content",t)},expression:"formMap.content"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("concatForm")}}},[e._v("提交")])],1)],1)],1)])},o=[],n=a("7933"),s=a("4a6f"),l=a("6a99"),i={data:function(){var e=function(e,t,a){if(!t)return a(new Error("手机号不能为空"));var r=/^1[3|4|5|7|8][0-9]\d{8}$/;if(!r.test(t))return a(new Error("请输入正确的手机号"));a()};return{formMap:{},rules:{name:[{required:!0,message:this.getMessage("concat.name"),trigger:"blur"}],phone:[{required:!0,message:this.getMessage("concat.phone"),trigger:"blur"},{validator:e,message:this.getMessage("concat.phone","validInfo.format"),trigger:["blur","change"]}],email:[{required:!0,message:this.getMessage("concat.email"),trigger:"blur"},{type:"email",message:this.getMessage("concat.email","validInfo.format"),trigger:["blur","change"]}],message:[{required:!0,message:this.getMessage("concat.message"),trigger:"blur"}]}}},mounted:function(){this.formMap=l(n["b"])},methods:{getMessage:function(e,t){return t=t?this.$t(t):this.$t("validInfo.empty"),this.$t(e)+t},onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;Object(s["j"])(t.formMap)}))}}},m=i,c=a("6691"),p=Object(c["a"])(m,r,o,!1,null,"3b36b166",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d224f03.ddde0354.js.map