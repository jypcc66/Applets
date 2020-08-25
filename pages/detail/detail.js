// pages/detail/detail.js
const tool = require("../../js/tool");
Page({

  /**
   * 页面的初始数据
   */
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    showTop: false, //返回顶部图片显示状态
    colorList: [{ //色号列表
        color: '001',
        disable: false
      },
      {
        color: '002',
        disable: false
      },
      {
        color: '003',
        disable: false
      },
      {
        color: '004',
        disable: false
      },
      {
        color: '005',
        disable: true
      },
      {
        color: '006',
        disable: false
      }
    ],
    specsList: [{
        specs: '2.9g',
        disable: false
      },
      {
        specs: '3.5g',
        disable: false
      },
      {
        specs: '5.0g',
        disable: true
      }
    ],
    colorIndex: 0, //色号下标
    specsIndex: 0, //规格下标
    disable: true,
    count: 1, //数量
    totalcount: 5, //库存
    showModal: false,
    background: [{
        url: '../../images/chanpin5.jpg'
      },
      {
        url: '../../images/chanpin5.jpg'
      },
      {
        url: '../../images/chanpin5.jpg'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  car: function () {
    /*
    wx.reLaunch({
      url: '../shoppingCart/shoppingCart'
    })
    
   wx.navigateTo({
    url:"/pages/a/a"
  })*/
  },
  //跳转到首页
  toHome: function () {
    wx.switchTab({
      url: "/pages/index/index"
    })
  },
  //跳转到购物车
  toCar: function () {
    wx.switchTab({
      url: '/pages/shoppingCart/shoppingCart',
    })
  },
  //加入购物车和立即购买点击事件
  buyClick: function () {
    this.setData({
      showModal: true
    })
  },
  //关闭弹层点击事件
  closeClick: function () {
    this.setData({
      showModal: false
    })
  },
  //色号tab
  colorTabClick: function (e) {
    var index = e.currentTarget.dataset.index; //点击事件获取下标currentTarget
    var disable = this.data.colorList[index].disable;
    if (disable) {
      return;
    }
    this.setData({
      colorIndex: index
    })
  },
  //规格tab
  specsTabClick: function (e) {
    var index = e.currentTarget.dataset.index;
    var disable = this.data.specsList[index].disable;
    if(disable){
      return;
    }
    this.setData({
      specsIndex: index
    })
  },
  //加号点击事件
  plusClick: function (e) {
    const count = e.currentTarget.dataset.count;
    const totalcount = e.currentTarget.dataset.totalcount;
    if (count < totalcount) {
      const add = tool.plusClick(count)
      this.setData({
        count: add
      })
    }
  },
  //减号点击事件
  minusClick: function (e) {
    const count = e.currentTarget.dataset.count;
    if (count > 1) {
      const minus = tool.minusClick(count)
      this.setData({
        count: minus
      })
    }
  },
  //获取滚动条当前位置
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.setData({
        showTop: true
      })
    } else {
      this.setData({
        showTop: false
      })
    }
  },
  goTop: function (e) { // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
})