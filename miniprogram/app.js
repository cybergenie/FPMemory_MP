//app.js
App({
  buf2hex: function (buffer) {
    var arr =  Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2))
    var str = ''
    for (var i = 0; i < arr.length; i++) {
      // if(i == 10)
      // {
      //   str += '\n'
      // }
      str += arr[i]
    }
    return str
  },
  buf2string: function (buffer) {
    var arr = Array.prototype.map.call(new Uint8Array(buffer), x => x)
    var str = ''
    for (var i = 0; i < arr.length; i++) {
      str += String.fromCodePoint.fromCharCode(arr[i])
    }
    return str
  },
  onLaunch: function () {
    this.globalData.SystemInfo = wx.getSystemInfoSync()
    //console.log(this.globalData.SystemInfo)
  },
  globalData: {
    SystemInfo: {}
  }
})