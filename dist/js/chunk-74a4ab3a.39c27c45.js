(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74a4ab3a"],{7101:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-bg",staticStyle:{padding:"20px"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"tittle"}),a("div",{staticClass:"content"},[a("el-form",{attrs:{model:t.form,"label-width":"120"}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"有权限的用户名：admin"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}},[a("template",{slot:"prepend"},[a("div",{staticClass:"icon-top"})])],2)],1),a("el-form-item",[a("el-input",{attrs:{type:"password",placeholder:"密码为123456，其他均为无权限"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[a("template",{slot:"prepend"},[a("div",{staticClass:"icon-bot"})])],2)],1),a("el-form-item",{attrs:{align:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")])],1)],1)],1)])])},s=[],n={data:function(){return{form:{username:"",password:""}}},methods:{login:function(){var t=this;this.$http.post("api/permission/getMenu",this.form).then((function(e){e=e.data,console.log(e),2e4===e.code?(t.$store.commit("clearMenu"),t.$store.commit("removeMenu"),t.$store.commit("setMenu",e.data.menu),t.$store.commit("setToken",e.data.token),t.$store.commit("addMenu",t.$router),console.log(t.$router,22),t.$router.push("/")):t.$message.warning(e.data.message)}))}}},r=n,i=(a("a0ef"),a("2877")),l=Object(i["a"])(r,o,s,!1,null,"5a6b2d88",null);e["default"]=l.exports},"9a52":function(t,e,a){},a0ef:function(t,e,a){"use strict";var o=a("9a52"),s=a.n(o);s.a}}]);
//# sourceMappingURL=chunk-74a4ab3a.39c27c45.js.map