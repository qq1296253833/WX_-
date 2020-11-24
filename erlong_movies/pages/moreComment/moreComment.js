// pages/moreComment/moreComment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalCount:1000,

    eachPageComments:4,

    start:0,


    morecomments:[{
      "user_image_src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1194131577,2954769920&fm=26&gp=0.jpg",
      "user_name":"贺威",
      "user_rate":"3.0",
      "user_time":"2020-11-17 15:26:24",
      "user_comment":"我曾经以为看电影多了,就能成为电影爱好者。但是这玩意,电影看多了,口味就刁了,一些烂片就看不进去了。以前我看电影也不会考虑叙事啊节奏啊逻辑啊什么的,看喜剧单纯觉得搞笑就行了呗,看故事也觉得这故事里的人物贼厉害。现在看到那些厉害的,首先会考虑这是不是太不现实了,这符合逻辑么? "
    },
    {
      "user_image_src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142857875,120857813&fm=11&gp=0.jpg",
      "user_name":"贵睿",
      "user_rate":"6",
      "user_time":"2020-10-17 15:28:29",
      "user_comment":"被嗤之以鼻的那个机械女的译名，实际上是完全符合恐怖片的元素的，只不过，不是追逐恐怖而来的观众，仍然会用Fragile（脆弱）这个原名来感受和体验这个片子。开片小男孩就诡异骨折，声声断裂声不绝于耳，呼应着这个fragile的片名，那么就让我一一回顾一下片中每个人有关脆弱的心路历程吧。"
    },
    {
      "user_image_src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605523166112&di=c5de36df7a9e6a9ff8b09e6339f33b25&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F11%2F20140911211243_3rT4u.jpeg",
      "user_name":"主席",
      "user_rate":"6",
      "user_time":"2020-10-17 15:28:29",
      "user_comment":"其实这个电影给人的感觉很平淡很真实,建议带着亲人到电影院看,手机看必须把弹幕关了。看完后让人为桃姐的质朴感动,不是亲人胜似亲人。"
    },
    {
      "user_image_src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605523166112&di=6b3e862c9db93c610003414fe66e41f6&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201408%2F24%2F20140824154253_45Hay.png",
      "user_name":"老张",
      "user_rate":"6",
      "user_time":"2020-10-17 15:28:29",
      "user_comment":" 題目是我最初想到的，可是後來我便不想用這個了。因為後來得，敏感與否不是問題的重點，但為了不背棄最初的決定，我還是將它保留了下來我在一個微微陰沉的下午看了這個片子，其實我原本是想看那部血腥暴力的《機關槍女》來著，可是陰差陽錯點開了完全不相干的此片。在此之前我完全不了解此片的背景，而拙劣的翻译居然将片名译为《机械女》……但影片一開始就有一些讓我喜歡的元素在刺激著我那小小的心靈，沒有讓我在略嫌拖沓沉悶的前奏中喪失興趣。畫面總是視野開闊，色調淡淡的，像一幅幅老舊的褪色的風景照。這樣有寧靜感的影像似乎不應該是屬於怖片的，而後來的發展，證實這的確是一部披著恐怖外衣的純愛系作品。。"
    },
    {
      "user_image_src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605523166112&di=346252131d6d519b7d5c83cdcb303e07&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F24%2F20181024133921_wlvbo.thumb.700_0.jpeg",
      "user_name":"刘津儿",
      "user_rate":"6",
      "user_time":"2020-10-17 15:28:29",
      "user_comment":"其实这个电影给人的感觉很平淡很真实,建议带着亲人到电影院看,手机看必须把弹幕关了。看完后让人为桃姐的质朴感动,不是亲人胜似亲人。"
    }
    
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData(options);//渲染当前页面的电影信息，知道是对哪一部电影的评价
    
    var pages = getCurrentPages();
    var detailsPage = "pages/details/details";
    var page = pages[0];
    for(var index=0;index<pages.length;index++){
      if(pages[index].route== detailsPage){
        page = pages[index];
        break;
      }
    }//从电影详情页面中获取数据
    var comments = page.data.comments;
    var morecomments = this.data.morecomments;
    var totalCount = this.data.totalCount;
    var eachPageComments = this.data.eachPageComments;//每一页最多可看到的评论数
    var currentComments =[];
    for(var index=0;index<comments.length;index++){
      morecomments.push(comments[index]);
    }
    var start = this.data.start;//用户评论数据从第几个开始
    //每一页评论只有eachPageComments条评论
    
    for(var index=start;index<start+eachPageComments;index++){
      if(morecomments[index]!=null)
      currentComments.push(morecomments[index]);      
    }
    
    totalCount = morecomments.length;
  
    this.setData({
      currentComments:currentComments,
      start:start,
      totalCount:totalCount
      
    })

    
    
  },
  //点击返回的函数
  onItemTapEvent:function(event){
    wx.navigateBack();
  },

  //上一页函数
  onPrePageBtn:function(event){
    var start = this.data.start;
    var morecomments = this.data.morecomments;
    var eachPageComments = this.data.eachPageComments;
    var currentComments = [];
    if(start>=eachPageComments){
      start-=eachPageComments;
    }else{
      wx.showToast({
        title: '这是第一页',
        image:"/images/icons/叉叉.png"
      })
    }
    for(var index=start;index<start+eachPageComments;index++){
      if(morecomments[index]!=null)
      currentComments.push(morecomments[index]);
    }
    
    
    this.setData({
      currentComments:currentComments,
      start:start
    });
    wx.pageScrollTo({
      scrollTop:0
    })
    
  },

  //下一页函数
  onNextPageBtn:function(event){
    var start = this.data.start;
    var morecomments = this.data.morecomments;
    var eachPageComments = this.data.eachPageComments;
    var currentPageComments = this.data.currentComments;
    var currentComments = [];
    if(currentPageComments.length ==eachPageComments && morecomments.length > start+eachPageComments){
      start+=eachPageComments;
    }else{
      wx.showToast({
        title: '这是最后一页',
        image:'/images/icons/叉叉.png'
      })
    }
    for(var index=start;index<start+eachPageComments;index++){
      if(morecomments[index]!=null)
      currentComments.push(morecomments[index]);
    }
   
    this.setData({
      currentComments:currentComments,
      start:start
    });
    wx.pageScrollTo({
      scrollTop:0
    })
  
  }

 
})