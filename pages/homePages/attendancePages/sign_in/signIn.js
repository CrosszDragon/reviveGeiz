// sign_in/signIn.js
//用户信息栏信息获取
var info_bar_content = require("../../JS/info_bar.js");
//平时签到信息获取
var signIn_=require("../../JS/signIn_content.js");
Page({
  data: {
    //用户栏信息
    info_bar_content: info_bar_content.info_bar,
    //签到课程名以及签到信息
    signIn_content: signIn_.signIn,
  },

  //点击显示成绩内容
  show_grade: function (e) {
    var tabIndex = parseInt(e.currentTarget.id);
    for (var i = 0; i < this.data.signIn_content.length; i++) {
      //循环判断点击了哪个下拉按钮
      if (tabIndex == i) {
        if (this.data.signIn_content[tabIndex].extraStyle == '') {
          //如果没有展开，将其展开
          this.data.signIn_content[tabIndex].extraStyle = 'display:block;';
          var drop = this.data.signIn_content
          this.setData({
            signIn_content: drop,
          })
        } else {
          //如果已经展开，将其拉起
          this.data.signIn_content[tabIndex].extraStyle = '';
          var drop = this.data.signIn_content
          this.setData({
            signIn_content: drop,
          })
        }
      } else {
        continue;
      }
    }
  },

})