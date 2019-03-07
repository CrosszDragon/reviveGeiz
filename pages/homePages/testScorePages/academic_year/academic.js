// academic_year/academic.js

//学年分数
var grade_content = require("../../JS/grade.js");

Page({
  data: {
    receive:[],
    //学年
    year:'',
    //季节（春季或秋季）
    season: '',
    //用户信息
    user:{},
    //学年成绩
    academic_grade:grade_content.grade,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.receive=JSON.parse(options.send);
    var academic_year = this.data.receive[0];
    var user_temp = this.data.receive[1];
    this.setData({
      season:academic_year.season,  
      year: academic_year.year,
      user:user_temp,
    })
  },

})