//用户信息
var user={
  name:"小飞侠",
  id:"201703008",
}
var academic_year={
  //学年
  year: "2018",
  //季节（春季或秋季）
  season: "秋",
}
//切换周天栏
var switch_content=require("../JS/switchOption.js");
//查询框架
var sqaral_content=require("../JS/sqaral.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //学年
    year:academic_year.year,
    //季节（春季或秋季）
    season:academic_year.season,
    //用户信息
    user:user,
    // 高亮的标签索引
    highLightIndex: "0",
    //成绩查询框架值
    sqaral_data:sqaral_content.sqaral,
    // 当前选中的标签
    currentTab: "tab1",
    //发送基本信息数据
    send:[academic_year, user]
  },

  // 点击tab项事件
  go_saqral_0:function (e) {
    wx.navigateTo({
      url: 'academic_year/academic?send='+JSON.stringify(this.data.send),
    })
  },
  go_saqral_1: function (e) {
    wx.navigateTo({
      url: 'past_year/past_year?send=' + JSON.stringify(this.data.send),
    })
  },
  go_saqral_2: function (e) {
    wx.navigateTo({
      url: 'foreign_test/foreign_test?send=' + JSON.stringify(this.data.send),
    })
  },
})
