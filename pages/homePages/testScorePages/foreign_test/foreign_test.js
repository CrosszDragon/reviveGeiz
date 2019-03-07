// foreign_test/foreign_test.js
var foreign_test=[
  {
    semester:"2017春季",
    subjects:"CET-4",
    score:"425",
    support:"否",
  },
  {
    semester: "2017秋季",
    subjects: "CET-4",
    score: "620",
    support: "是",
  },
  {
    semester: "2017春季",
    subjects: "CET-6",
    score: "530",
    support: "是",
  },
  {
    semester: "2018春季",
    subjects: "CET-6",
    score: "600",
    support: "是",
  },
  
]

Page({


  data: {
    receive: [],
    //学年
    year: '',
    //季节（春季或秋季）
    season: '',
    //用户信息
    user: {},
    //外语成绩信息
    foreign_test_content:foreign_test,
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

})