import {env} from '../../profile.js'

Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
		isHide: true
    },
  
    onLoad: function() {
        var that = this;
        // 查看是否授权
        wx.getSetting({
            success: function(res) {
                var name = wx.getStorageSync("name");
				if(name!=""){
					// 已经登录过，直接跳转首页
					wx.switchTab({
					      url: '../index/index'
					    })
				}
            }
        });
    },
  
    bindGetUserInfo: function(e) {
        if (e.detail.userInfo) {
            //用户按了允许授权按钮
            var that = this;
            // 获取到用户的信息了，打印到控制台上看下
            console.log("用户的信息如下：");
            console.log(e.detail.userInfo);
			//登录
			wx.login({
				success: res => {
					console.log("用户的code:" + res.code);
					wx.request({
					      url: env.url+'/api-power/weixin/getOpenId',
						  data:{code:res.code},
					     method: 'POST',
						 header: {
						           'content-type': 'application/x-www-form-urlencoded'
						          },
					     success(res) {
					         wx.setStorageSync("name",e.detail);
					         wx.switchTab({url: '../index/index'})
					      }
					   })
				}
			});

        } else {
            //用户按了拒绝按钮
            wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权',
                success: function(res) {
                    // 用户没有授权成功，不需要改变 isHide 的值
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”');
                    }
                }
            });
        }
    }
})
