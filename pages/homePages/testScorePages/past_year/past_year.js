// past_year/past_year.js
var dropDown_button=[
  {
    time:"2016~2017-秋季学期",
    //控制下拉菜单内容显示
    extraStyle: '',
  },
  { 
    time: "2017~2017-春季学期",
    extraStyle: '',
  },
  { 
    time: "2017~2018-秋季学期",
    extraStyle: '',
  },
  { 
    time: "2018~2018-春季学期",
    extraStyle: '',
  },
  { 
    time: "2018~2019-秋季学期",
    extraStyle: '',
  },
]
//学年分数
var grade_content = require("../../JS/grade.js");

Page({
  data: {
    receive: [],
    //学年
    year: '',
    //季节（春季或秋季）
    season: '',
    //用户信息
    user: {},
    //下拉菜单按钮内容
    dropDown_button: dropDown_button,
    //学年成绩
    academic_grade: grade_content.grade,

  },

  onLoad: function (options) {
    this.data.receive = JSON.parse(options.send);
    var academic_year = this.data.receive[0];
    var user_temp = this.data.receive[1];
    this.setData({
      season: academic_year.season,
      year: academic_year.year,
      user: user_temp,
    })
  },
  //点击显示成绩内容
  show_grade:function(e){
    var tabIndex=parseInt(e.currentTarget.id);
    for(var i=0;i<dropDown_button.length;i++){
      //循环判断点击了哪个下拉按钮
        if(tabIndex==i){
          if(this.data.dropDown_button[tabIndex].extraStyle==''){
            //如果没有展开，将其展开
            this.data.dropDown_button[tabIndex].extraStyle='display:block;';
            var drop=this.data.dropDown_button
            this.setData({
              dropDown_button:drop,
            })
          }else{
            //如果已经展开，将其拉起
            this.data.dropDown_button[tabIndex].extraStyle = '';
            var drop = this.data.dropDown_button
            this.setData({
              dropDown_button: drop,
            })
          }
        }else{
          continue;
        }
      }
  },


})