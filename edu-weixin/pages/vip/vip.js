(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vip/vip"],{1903:function(t,i,e){"use strict";var n=e("2af0"),o=e.n(n);o.a},"2af0":function(t,i,e){},"3ae7":function(t,i,e){"use strict";e.r(i);var n=e("90f5"),o=e("f4d9");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("1903");var s,u=e("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"4a479e03",null,!1,n["a"],s);i["default"]=c.exports},5777:function(t,i,e){"use strict";(function(t){e("d51a");n(e("66fd"));var i=n(e("3ae7"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},8053:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("2e7d"),o=e("f1e2"),a={data:function(){return{addBorder:1,vipList:[],userinfo:"",wx_nickname:"",vipid:0,jhm:"",vipinfo:[],isvip:!1}},onLoad:function(){(0,o.checkUserinfo)(),this.getViptime(),this.base_check()},onShareAppMessage:function(i){var e=getCurrentPages(),n=e[0].$page.fullPath,o=(e[0].data.title,t.getStorageSync("userinfo")),a=t.getStorageSync("base_set");return""!=o.uid&&o.uid?(i.from,{title:a.title,path:"".concat(n,"?pid=").concat(o.uid)}):(t.navigateTo({url:"../login/login"}),{title:"请先登录后再分享给好友",path:""})},onShow:function(){(0,o.checkUserinfo)(),this.getViptime(),this.base_check()},methods:{changeJhm:function(t){this.jhm=t.detail.value},ljjh:function(){if(""==this.jhm)return t.showToast({title:"激活码不能为空",icon:"none"}),!1;var i=t.BASE_URL;t.request({url:i+"index/vip/jhmjh",method:"POST",data:{uid:this.userinfo.id,jhm:this.jhm},success:function(i){console.log(i.data),0==i.data.code?(t.showToast({title:i.data.msg}),t.switchTab({url:"../user/user"})):t.showToast({title:i.data.msg,icon:"none"})},fail:function(t){console.log(t.data)}})},base_check:function(){var i=this,e=t.getStorageSync("userinfo");if(e.userdata&&(this.userinfo=e.userdata,1==e.userdata.is_vip)){this.isvip=!0;var n=t.BASE_URL;t.request({url:n+"index/vip/vipinfo",method:"POST",data:{uid:this.userinfo.id},success:function(t){console.log(t.data),i.vipinfo=t.data.data},fail:function(t){console.log(t.data)}})}},getViptime:function(){var t=this;(0,n.getViptime)().then((function(i){t.vipList=i.data.data,console.log(t.vipList),1==t.vipList.length?t.chooseVip(0,t.vipList[0].id):t.chooseVip(1,t.vipList[1].id)}))},chooseVip:function(t,i){this.addBorder=t,this.vipid=i},goPay:function(i){t.navigateTo({url:"/pages/confirm-order-form/confirm-order-form?goodstype=vip&id=".concat(i)})}}};i.default=a}).call(this,e("543d")["default"])},"90f5":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement;t._self._c},a=[]},f4d9:function(t,i,e){"use strict";e.r(i);var n=e("8053"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a}},[["5777","common/runtime","common/vendor"]]]);