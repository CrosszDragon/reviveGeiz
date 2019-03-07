// pages/homePages/homePages.js
var iconPath="../../image/icons/";
var tabs = [
    {
        "icon": iconPath + "课表.png",
        "iconActive": iconPath + "课表.png",
        "title": "我的课表",
        "extraStyle": "",
    },
    {
      "icon": iconPath + "成绩.png",
        "iconActive": iconPath + "成绩.png",
        "title": "我的成绩",
        "extraStyle": "",
    },
    {
      "icon": iconPath + "考勤.png",
        "iconActive": iconPath + "考勤.png",
        "title": "我的考勤",
        "extraStyle": "",
    },
  {
    "icon": iconPath + "下载.png",
    "iconActive": iconPath + "下载.png",
    "title": "我的下载",
    "extraStyle": "border:none;",
  },
    {
        "icon": iconPath + "设置.png",
        "iconActive": iconPath + "设置.png",
        "title": "个人设置",
        "extraStyle": "border:none;",
    },
]

var userInfo = {
    avatar: "https://pic4.zhimg.com/e515adf3b_xl.jpg",//头像图片
    nickname: "小闹钟",
    sex: "♂",  // 0, male; 1, female
    meta: '1篇日记',
}

Page({
  data:{
    //学习时长
    learning_time:"12",
    //经验值
    experience:"259",
    // 展示的tab标签
    tabs: tabs,
  },

transe_course:function(e){
  var tabIndex = parseInt(e.currentTarget.id);
  if(tabIndex==0){
       wx.navigateTo({
        url: 'courseSchedulePages/index',
      })
  }else if(tabIndex==1){
    wx.navigateTo({
      url: 'testScorePages/index',
    })
  } else if (tabIndex == 2) {
    wx.navigateTo({
      url: 'attendancePages/attendence/attendence',
    })
  }
}

})