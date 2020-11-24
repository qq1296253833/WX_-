// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[{
      "image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2624385562.webp",
      "title":"婚前故事",
      "rate": 7.4,
    },

    {
      "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2615992304.jpg",
      "title":"八佰",
      "rate": 7.6, 
    },
    {
      "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2574153046.jpg",
      "title":"海绵宝宝：营救大冒险",
      "rate": 6.2, 
    },
    {
      "image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2623523542.jpg",
      "title":"恶棍之都",
      "rate": 6.5, 
    },
    {
      "image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2621101922.jpg",
      "title":"一点就到家",
      "rate": 7.0, 
    },
    {
      "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2621050857.jpg",
      "title":"天官赐福",
      "rate":8.9
    },
    {
      "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2624443747.jpg",
      "title":"隐秘而伟大",
      "rate":8.2
    },
    {
      "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2621201524.jpg",
      "title":"后翼弃兵",
      "rate":9.1
    },
    {"image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2624093552.jpg",
    "title":"云端 第二季",
    "rate":6.8
    },
    {
      "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2623463039.jpg",
      "title":"爱情不设限",
      "rate":7.6
    },
    {
      "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2601149316.webp",
      "title":"这！就是街舞",
      "rate":8.5
    },
  ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在获取资源...',
    })

    //为了在点击“更多”后，导航栏上展示列表item的类型信息：movie，tv，show
    var type = options.type;
    if(type === "movie"){
      type="电影";
      wx.setNavigationBarTitle({
        title:type
      });
      this.setData({
        title:type
      })
    }else if(type === "tv"){
      type="电视剧";
      wx.setNavigationBarTitle({
        title:type
      });
      this.setData({
        title:type
      })
    }else {
      type="综艺/其他";
      wx.setNavigationBarTitle({
        title:type
      });
      this.setData({
        title:type
      })
    }

    var count = this.data.movies.length;
    if(count%3 == 2){
      var movies = this.data.movies;
      movies.push(null);
      this.setData({
        movies:movies
      })
    }
  },
  onShow:function(){
    wx.hideLoading({
      success: (res) => {},
    })
  }

})