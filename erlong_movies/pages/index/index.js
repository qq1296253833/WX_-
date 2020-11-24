//index.js
Page({
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
    }],

  tvs:[{
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
  }],
  shows:[{
    "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2608297477.webp",
    "title":"乘风破浪的姐姐",
    "rate":7.0
  },
  {
    "image_src":"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2620834741.webp",
    "title":"说唱新时代",
    "rate":9.2
  },
  {
    "image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2621610453.webp",
    "title":"演员请就位",
    "rate":6.3
  },
  {
    "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2601149316.webp",
    "title":"这！就是街舞",
    "rate":8.5
  },
  {
    "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614262089.webp",
    "title":"明日之子",
    "rate":7.3
  },  
]
  },
  //事件处理函数
  
  onLoad: function () {
    wx.showLoading({
      title: '正在加载中...',
    })
  },
  onShow:function(){
    wx.hideLoading({
      success: (res) => {},
    });
    wx.pageScrollTo({
      scrollTop:0
    })
  }
  
  

  

  
  
})
