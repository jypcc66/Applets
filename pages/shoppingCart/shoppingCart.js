// pages/shoppingCart/shoppingCart.js
const tool = require("../../js/tool");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 0,
        checkbox: false,
        pic: "../../images/chanpin11.jpg",
        title: "【HOT】Armani/阿玛尼唇釉传奇红管524甜美豆沙红",
        specs: "红色",
        price: '5600.00',
        count: 1,
        totalCount: 6,
        coupon: true
      },
      {
        id: 1,
        checkbox: true,
        pic: "../../images/chanpin2.jpg",
        title: "魅可矿质四色眼影盘",
        specs: "四色",
        price: '330.00',
        count: 1,
        totalCount: 3,
        coupon: false
      }
    ]
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
  returns: function () {

  },
  //加号点击事件
  /*plusClick: function (e) {
    // 传递的参数
    let index = e.currentTarget.dataset.count
    let totalCount = e.currentTarget.dataset.totalcount
    if (index < totalCount) {
      const add = tool.plusClick(index)
      this.setData({
        'list.count': add
      })
    }
  },
  */
  //加号点击事件
  plusClick: function (e) {
    // 传递的参数
    let index = e.currentTarget.dataset['index']; //当前下标
    let len = this.data.list.length; //data里list的长度
    for (let i = 0; i < len; i++) {
      if (i === index) { //判断当循环索引等于索引参数index时
        let count = this.data.list[i].count; //当前data里list的数量
        let totalCount = this.data.list[i].totalCount //当前data里list的总数量
        if (count < totalCount) { //如果数量小于总数量
          //const add = tool.plusClick(count) //这里的tool.js的plusClick方法
          const add = count + 1;
          this.setData({
            ['list[' + i + '].count']: add //改变list当前下标中count的值
          })
        }
      }
    }

  },
  //减号点击事件
  /*minusClick: function (e) {
    let count = e.currentTarget.dataset.count
    const minus = tool.minusClick(count)
    this.setData({
      'list.count': minus
    })
  },
*/
  //减号点击事件
  minusClick: function (e) {
    let index = e.currentTarget.dataset["index"];
    let len = this.data.list.length;
    for (let i = 0; i < len; i++) {
      if (i === index) {
        let count = this.data.list[i].count;
        if (count > 1) {
          let minus = count - 1
          this.setData({
            ['list[' + i + '].count']: minus
          })
        }
      }
    }
  }
})