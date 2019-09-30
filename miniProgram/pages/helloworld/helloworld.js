Page({
  data: {
    filePath: "",
    filename: ""
  },
  chooseFile: function() {
    var _that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        console.log("文件信息",res)
        var size = res.tempFiles[0].size; // 文件大小
        var filename = res.tempFiles[0].name; // 文件名
        if (size > 4194301) { // 判断文件大小不能大于4M
          wx.showToast({
            title: '文件大小不能超过4MB！',
            icon: "none",
            duration: 2000,
            mask: true
          })
        } else if (filename.indexOf('.pdf') == -1) { // 判断文件格式必须为pdf
          wx.showToast({
            title: '文件格式必须为PDF！',
            icon: "none",
            duration: 2000,
            mask: true
          })
        } else {
          _that.setData({
            filePath: res.tempFiles[0].path, // 保存文件地址到data
            filename: filename // 保存文件名
          })
        }
      }
    })
  },
  uploadFile: function(){
    var _that = this;
      wx.uploadFile({
        url: 'http://localhost:3000/uploadFile',
        filePath: _that.data.filePath,
        name: 'file',
        formData: {
          'filename': _that.data.filename
        },
        success(res) {
          const data = res.data
          console.log("success",data)
        }
      })
      
  }
})