//用户信息栏信息获取
var info_bar_content = require("../../JS/info_bar.js");
//平时签到信息获取
var homework_content = require("../../JS/homework.js");
Page({
  data: {
    //用户栏信息
    info_bar_content: info_bar_content.info_bar,
    //签到课程名以及签到信息
    homework_content: homework_content.homework_content,
  },

  //点击显示成绩内容
  show_grade: function (e) {
    var tabIndex = parseInt(e.currentTarget.id);
    for (var i = 0; i < this.data.homework_content.length; i++) {
      //循环判断点击了哪个下拉按钮
      if (tabIndex == i) {
        if (this.data.homework_content[tabIndex].extraStyle == '') {
          //如果没有展开，将其展开
          this.data.homework_content[tabIndex].extraStyle = 'display:block;';
          var drop = this.data.homework_content
          this.setData({
            homework_content: drop,
          })
        } else {
          //如果已经展开，将其拉起
          this.data.homework_content[tabIndex].extraStyle = '';
          var drop = this.data.homework_content
          this.setData({
            homework_content: drop,
          })
        }
      } else {
        continue;
      }
    }
  },

})