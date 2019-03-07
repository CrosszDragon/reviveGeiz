
//查询框架
var attendance_sqaral_content = require("../../JS/attendance_sqaral.js");
var info_bar_content=require("../../JS/info_bar.js");
Page({

  data: {
    //成绩查询框架值
    sqaral_data: attendance_sqaral_content.sqaral,
    //用户栏信息
    info_bar_content:info_bar_content.info_bar,
  },
  // 点击tab项事件
  go_saqral_0: function (e) {
    wx.navigateTo({
      url: '../sign_in/signIn' ,
    })
  },
  go_saqral_1: function (e) {
    wx.navigateTo({
      url: '../homework_commit/homework',
    })
  },
})