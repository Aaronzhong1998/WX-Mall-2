Page({
  data: {
    userinfo: {}
  },
  onShow() {
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({
      userinfo
    })
    // console.log(userinfo);

  },
  // 跳转登录
  goToLogin() {
    wx.navigateTo({
      url: "/pages/login/login"
    })
  },

  callService() {
    wx.makePhoneCall({
      phoneNumber: '123456789',
    });
  }
})