//用户信息
var user={
  name:"小飞侠",
  id:"201703008",
}
//切换周天栏
var switch_content=require("../JS/switchOption.js");
// //课
var schedule_content=require("../JS/schedule.js");

Page({
  data: {
    //学年
    year:"2019",
    //季节（春季或秋季）
    season:"春",
    //用户信息
    user:user,
    // 高亮的标签索引
    highLightIndex: "0",
    //切换栏
    switchOption:switch_content.switchOption,
    //一周的课表
    schedule:schedule_content.schedule,
    // 当前选中的标签
    currentTab: "tab1",
  },

  // 点击tab项事件
  touchTab: function (event) {
    var tabIndex = parseInt(event.currentTarget.id);
    var template = "tab" + (tabIndex + 1).toString();

    this.setData({
      currentTab: template,
      highLightIndex: tabIndex.toString()
    }
    );
  },

})