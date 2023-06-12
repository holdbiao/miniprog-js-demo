const app = getApp()

Page({
  data: {
    showTextAndTitle: false
  },
  handleClick() {
    console.log(1111)
    this.setData({
      showTextAndTitle: true
    })
  },
  confirmBtn() {
    this.setData({
      showTextAndTitle: false
    })
  }
})
