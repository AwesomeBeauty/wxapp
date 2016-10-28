//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    hidden:false
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url:"https://api.github.com/users/defunkt",
      header:{
        "Content-Type":"application/json"
      },
      success:function(req){
        that.setData({
          logs: req.data,
          hidden:true
        })
      }
      })
    },
    onClick:function(){
      console.log("触发!");
    }
})
