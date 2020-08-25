//index.js
//获取应用实例
const app = getApp()

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src: '',
    danmuList: [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  onShareAppMessage() {
    return {
      title: 'tabs',
      path: 'page/weui/example/tabs/tabs'
    }
  },
  data: {
    motto: 'hai cao go',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperNav: {
      i: 0,
      arr: [{
          v: 0,
          txt: "推荐"
        },
        {
          v: 1,
          txt: "口红"
        },
        {
          v: 2,
          txt: "彩妆"
        },
        {
          v: 3,
          txt: "防晒"
        },
        {
          v: 4,
          txt: "面膜"
        }
      ]
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  swiperNav: function (e) {
    console.log(e);
    /*获取可视窗口宽度*/
    var w = wx.getSystemInfoSync().windowWidth;
    var leng = this.data.swiperNav.arr.length;
    var i = e.target.dataset.i;
    var disX = (i - 2) * w / leng;
    if (i != this.data.swiperNav.i) {
      this.setData({
        'swiperNav.i': i
      })
    }
    this.setData({
      'swiperNav.x': disX
    })
  },
  toDetail: function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})