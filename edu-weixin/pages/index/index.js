(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/index/index"], {
		3409: function(t, e, a) {
			"use strict";
			var o = a("cf7f"),
				n = a.n(o);
			n.a
		},
		3858: function(t, e, a) {
			"use strict";
			a.r(e);
			var o = a("d24c"),
				n = a.n(o);
			for (var i in o) "default" !== i && function(t) {
				a.d(e, t, (function() {
					return o[t]
				}))
			}(i);
			e["default"] = n.a
		},
		"5d7c": function(t, e, a) {
			"use strict";
			(function(t) {
				a("d51a");
				o(a("66fd"));
				var e = o(a("c600"));

				function o(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, a("543d")["createPage"])
		},
		c600: function(t, e, a) {
			"use strict";
			a.r(e);
			var o = a("f5be"),
				n = a("3858");
			for (var i in n) "default" !== i && function(t) {
				a.d(e, t, (function() {
					return n[t]
				}))
			}(i);
			a("3409");
			var s, c = a("f0c5"),
				u = Object(c["a"])(n["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
			e["default"] = u.exports
		},
		cf7f: function(t, e, a) {},
		d24c: function(t, e, a) {
			"use strict";
			(function(t) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = void 0;
				var o = a("de5f"),
					n = (a("f1e2"), {
						data: function() {
							return {
								keyword: "",
								fls: [],
								current: 0,
								navBarFixed: !1,
								huifu: !1,
								images: [],
								HOST_URL: t.HOST_URL,
								coursemenus: [],
								son_fls: [],
								index: 0,
								swiper_bgcolor: "#4b89ff",
								robBuyList: {},
								killhour: 0,
								killminute: 0,
								killsecond: 0,
								ptInfo: {},
								ptNum: "",
								tuijianjigou: [],
								index_courseTJ: [],
								courseTJ: [],
								dujiaList: [],
								flid: "",
								isPlaying: !1,
								isPaused: !1,
								isPlaying1: !1,
								isPaused1: !1,
								page: 0,
								page1: 0,
								base_set: [],
								ad_close: !1
							}
						},
						onShareAppMessage: function(e) {
							var a = getCurrentPages(),
								o = a[0].$page.fullPath,
								n = (a[0].data.title, t.getStorageSync("userinfo")),
								i = t.getStorageSync("base_set");
							return "" != n.uid && n.uid ? (e.from, {
								title: i.title,
								path: "".concat(o, "?pid=").concat(n.uid)
							}) : (t.navigateTo({
								url: "../login/login"
							}), {
								title: "请先登录后再分享给好友",
								path: ""
							})
						},
						onLoad: function() {
							var e = t.getStorageSync("base_set");
							e && (this.base_set = e, t.setNavigationBarTitle({
								title: e.title
							}))
						},
						onPageScroll: function(t) {
							var e = t.scrollTop;
							e > 30 ? (this.navBarFixed = !0, this.huifu = !1) : (this.navBarFixed = !1, this.huifu = !0)
						},
						onShow: function() {
							this.getIndexInfo();
							var e = new Date,
								a = e.getTime(),
								o = t.getStorageSync("base_set"),
								n = t.getStorageSync("adclosetime");
							console.log(a + "..." + n), o && (this.base_set = o, 1 == o.is_gz && (this.ad_close = !n || a - n > 8e3))
						},
						onReady: function() {},
						methods: {
							closebtn: function() {
								var e = new Date,
									a = e.getTime();
								this.ad_close = !1, t.setStorageSync("adclosetime", a)
							},
							declick: function(t) {
								var e = this;
								"tj" == t ? (this.isPlaying = !0, console.log("loading"), this.isPaused = !1, setTimeout((function() {
									var a = {
										flid: e.flid,
										page: e.page,
										type: t || ""
									};
									(0, o.postDhHyp)(a).then((function(t) {
										console.log(t.data), 0 == t.data.code && (e.courseTJ = t.data.data)
									})), console.log("end"), e.isPaused = !0
								}), 1500), this.page++) : (this.isPlaying1 = !0, console.log("loading"), this.isPaused1 = !1, setTimeout(
									(function() {
										var a = {
											flid: e.flid,
											page: e.page1,
											type: t || ""
										};
										(0, o.postDhHyp)(a).then((function(t) {
											console.log(t.data), 0 == t.data.code && (e.dujiaList = t.data.data)
										})), console.log("end"), e.isPaused1 = !0
									}), 1500), this.page1++)
							},
							formatSecToStr: function(t) {
								var e = 86400,
									a = 3600,
									o = 60,
									n = (Math.floor(t / e), Math.floor(t % e / a)),
									i = Math.floor(t % a / o),
									s = t % o;
								n > 0 && (this.killhour = n), i > 0 && (this.killminute = i), s > 0 && (this.killsecond = s)
							},
							plugin_navigate: function(e, a, o) {
								var n;
								"course" == e ? (n = "course-details", t.navigateTo({
									url: "/pages/".concat(n, "/").concat(n, "?menuid=").concat(a, "&action=").concat(o)
								})) : ("mall" == e ? n = "shop-details" : "pxb" == e && (n = "agency-course-details"), t.navigateTo({
									url: "/pages/".concat(n, "/").concat(n, "?id=").concat(a, "&action=").concat(o)
								}))
							},
							goListPage: function() {
								t.navigateTo({
									url: "/pages/list-page/list-page?goodstype=course",
									success: function(t) {},
									fail: function() {},
									complete: function() {}
								})
							},
							goCourseDetails: function(e) {
								t.navigateTo({
									url: "/pages/course-details/course-details?menuid=".concat(e)
								})
							},
							swiper_change: function(t) {
								this.swiper_bgcolor = this.images[t.detail.current].maincolor
							},
							navigate: function(e, a) {
								"vip" == e ? t.switchTab({
									url: "/pages/" + e + "/" + e
								}) : "course-list" == e ? t.navigateTo({
									url: "/pages/" + e + "/" + e + "?moretype=" + a
								}) : t.navigateTo({
									url: "/pages/" + e + "/" + e
								})
							},
							goCourseList: function() {
								t.navigateTo({
									url: "/pages/course-list/course-list?media=live&goodstype=course"
								})
							},
							getIndexInfo: function() {
								var t = this;
								(0, o.getIndexInfo)().then((function(e) {
									t.images = e.data.data.ads, t.fls = e.data.data.classify, t.index_courseTJ = e.data.data.courses
								}))
							},
							postIndexGoods: function(t, e) {
								var a = this;
								this.current = e, this.flid = t, (0, o.getIndexListInfo)({
									flid: t
								}).then((function(t) {
									a.son_fls = t.data.data.son_fl
								})), (0, o.postIndexGoods)({
									goods_label: "is_tj",
									flid: t
								}).then((function(t) {
									0 == t.data.code ? a.courseTJ = t.data.data : a.courseTJ = []
								})), (0, o.postIndexGoods)({
									goods_label: "",
									flid: t
								}).then((function(t) {
									0 == t.data.code ? a.dujiaList = t.data.data : a.dujiaList = []
								}))
							},
							sonflCourseList: function(e) {
								t.navigateTo({
									url: "/pages/course-list/course-list?flid=".concat(this.flid, "&sonflid=").concat(e,
										"&goodstype=course")
								})
							},
							postSearchCourse: function(e) {
								var a;
								if ("hot" == e || "new" == e || "free" == e) a = e;
								else if (a = this.keyword, "" == a) return t.showToast({
									title: "搜索内容不能为空",
									icon: "none"
								}), !1;
								t.navigateTo({
									url: "/pages/course-list/course-list?keyword=".concat(a)
								})
							},
							color_change: function() {
								var e = t.createCanvasContext("myCanvas"),
									a = this.HOST_URL + this.images[0].thumb;
								t.downloadFile({
									url: a,
									success: function(a) {
										var o = a.tempFilePath;
										t.getImageInfo({
											src: o,
											success: function(a) {
												e.drawImage(o, 0, 0, 375, 138.5), e.draw(), setTimeout((function() {
													t.canvasGetImageData({
														canvasId: "myCanvas",
														x: 0,
														y: 0,
														width: 50,
														height: 50,
														success: function(t) {
															var e = t.data,
																a = [],
																o = 0,
																n = t.data.length;
															for (o; o < n; o += 4) a.push(e[o] + "," + e[o + 1] + "," + e[o + 2]);
															if (a != []) {
																for (var i = {}, s = 0, c = a.length; s < c; s++) {
																	var u = a[s];
																	i[u] = i[u] + 1 || 1
																}
																console.log(i);
																var l, r = Object.keys(i),
																	d = 0;
																for (o = 0, c = r.length; o < c; o++) i[r[o]] > d && (d = i[r[o]], l = r[o]);
																console.log(l)
															}
														}
													})
												}), 500)
											}
										})
									}
								})
							}
						}
					});
				e.default = n
			}).call(this, a("543d")["default"])
		},
		f5be: function(t, e, a) {
			"use strict";
			var o;
			a.d(e, "b", (function() {
				return n
			})), a.d(e, "c", (function() {
				return i
			})), a.d(e, "a", (function() {
				return o
			}));
			var n = function() {
					var t = this,
						e = t.$createElement;
					t._self._c
				},
				i = []
		}
	},
	[
		["5d7c", "common/runtime", "common/vendor"]
	]
]);
