// pages/movie_input/movie_input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submitEvent:function(event){
    var imageSrc = event.detail.value.movie_image_src;
    var title = event.detail.value.movie_title;
    var rate = event.detail.value.movie_rate;
    var pages = getCurrentPages();
    var page = pages[0];
    var movies = page.data.movies;
    movies.push({
      image_src:imageSrc,
      title:title,
      rate:rate
    })
    page.setData({
      movies:movies
    })
    console.log(page.data.movies);
    wx.navigateBack();
  }
 
})