(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/user/user"], {
		"44b4": function(t, n, o) {
			"use strict";
			o.r(n);
			var e = o("af4d"),
				i = o.n(e);
			for (var a in e) "default" !== a && function(t) {
				o.d(n, t, (function() {
					return e[t]
				}))
			}(a);
			n["default"] = i.a
		},
		"481f": function(t, n, o) {
			"use strict";
			var e = o("6364"),
				i = o.n(e);
			i.a
		},
		"60b3": function(t, n, o) {
			"use strict";
			o.r(n);
			var e = o("a3f7"),
				i = o("44b4");
			for (var a in i) "default" !== a && function(t) {
				o.d(n, t, (function() {
					return i[t]
				}))
			}(a);
			o("481f");
			var c, u = o("f0c5"),
				r = Object(u["a"])(i["default"], e["b"], e["c"], !1, null, "b5a2bcea", null, !1, e["a"], c);
			n["default"] = r.exports
		},
		6364: function(t, n, o) {},
		a3f7: function(t, n, o) {
			"use strict";
			var e;
			o.d(n, "b", (function() {
				return i
			})), o.d(n, "c", (function() {
				return a
			})), o.d(n, "a", (function() {
				return e
			}));
			var i = function() {
					var t = this,
						n = t.$createElement;
					t._self._c
				},
				a = []
		},
		af4d: function(t, n, o) {
			"use strict";
			(function(t) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				}), n.default = void 0;
				var e = o("f1e2"),
					i = {
						data: function() {
							return {
								title: "个人中心",
								path: "",
								userinfo: "",
								wx_nickname: "",
								get_wxinfo: !1,
								isChongzhi: !1,
								czmoney: 0,
								shop_phone: "",
								isCut: !0,
								todayTotal: 0
							}
						},
						onShareAppMessage: function(n) {
							var o = getCurrentPages(),
								e = o[0].$page.fullPath,
								i = o[0].data.title,
								a = t.getStorageSync("userinfo");
							if ("" != a.uid && a.uid) return n.from, {
								title: i,
								path: "".concat(e, "?pid=").concat(a.uid),
								imageUrl: "../../static/banner4.png"
							};
							t.navigateTo({
								url: "../login/login"
							})
						},
						onLoad: function() {
							this.getsetting()
						},
						onShow: function() {
							(0, e.checkUserinfo)(), this.base_check(), this.gettodaystudytime()
						},
						methods: {
							copyright: function() {
								t.navigateTo({
									url: "../copyright/copyright"
								})
							},
							gettodaystudytime: function() {
								var n = this,
									o = t.BASE_URL;
								t.request({
									url: o + "index/user/my_today_studytime",
									method: "POST",
									data: {
										uid: this.userinfo.id
									},
									success: function(t) {
										console.log(t.data), 0 == t.data.code && (n.todayTotal = n.formatSecToStr(t.data.data.videostudytime +
											t.data.data.audiostudytime + t.data.data.tuwenstudytime))
									},
									fail: function(t) {
										console.log(t.data)
									}
								})
							},
							formatSecToStr: function(t) {
								var n = 86400,
									o = 3600,
									e = 60,
									i = Math.floor(t / n),
									a = Math.floor(t % n / o),
									c = Math.floor(t % o / e),
									u = t % e;
								return i > 0 ? i + "天" + a + "小时" + c + "分钟" + u + "秒" : a > 0 ? a + "小时" + c + "分钟" + u + "秒" : c > 0 ? c +
									"分钟" + u + "秒" : u + "秒"
							},
							cutButton: function() {
								this.isCut = !this.isCut
							},
							make_phone: function() {
								t.makePhoneCall({
									phoneNumber: "17636002018"
								})
							},
							getsetting: function() {
								var n = t.getStorageSync("base_set");
								this.shop_phone = n.phone
							},
							changeCzmoney: function(t) {
								this.czmoney = t.detail.value
							},
							czbtn: function() {
								if (this.czmoney <= 0) return t.showToast({
									title: "充值金额不能为空",
									icon: "none"
								}), !1;
								t.navigateTo({
									url: "../confirm-order-form/confirm-order-form?goodstype=chongzhi&czmoney=" + this.czmoney
								})
							},
							logout: function() {
								t.showModal({
									title: "提示",
									content: "确定要退出登录吗？",
									success: function(n) {
										n.confirm ? (t.removeStorageSync("userinfo"), t.navigateTo({
											url: "/pages/login/login"
										})) : n.cancel && console.log("用户点击取消")
									}
								})
							},
							base_check: function() {
								var n = t.getStorageSync("userinfo");
								n.userdata && (this.userinfo = n.userdata), n.wxinfo ? (this.get_wxinfo = !1, this.wx_nickname = n.wxinfo.nickName) :
									this.get_wxinfo = !0
							},
							getwxinfo: function() {
								var t = this;
								(0, e.wx_login)(), setTimeout((function() {
									t.base_check()
								}), 1e3)
							},
							goSignIn: function() {
								t.navigateTo({
									url: "/pages/sign-in/sign-in"
								})
							},
							navigate: function(n) {
								"vip" == n ? t.switchTab({
									url: "/pages/".concat(n, "/").concat(n)
								}) : t.navigateTo({
									url: "/pages/".concat(n, "/").concat(n)
								})
							},
							openChongzhi: function() {
								this.isChongzhi = !0
							},
							closeChongzhi: function(t) {
								this.isChongzhi = !1
							}
						}
					};
				n.default = i
			}).call(this, o("543d")["default"])
		},
		df11: function(t, n, o) {
			"use strict";
			(function(t) {
				o("d51a");
				e(o("66fd"));
				var n = e(o("60b3"));

				function e(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(n.default)
			}).call(this, o("543d")["createPage"])
		}
	},
	[
		["df11", "common/runtime", "common/vendor"]
	]
]);
