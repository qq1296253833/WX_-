// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_items: [{
        image_src: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2624385562.webp",
        title: "婚前故事",
        info: "7.4分/2020"
      },
      {
        "image_src": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2615992304.jpg",
        "title": "八佰",
        info: "8.0/2020"
      },
      {
        "image_src": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2574153046.jpg",
        "title": "海绵宝宝：营救大冒险",
        info: "6.9分/2020"
      },
      {
        "image_src": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2623523542.jpg",
        "title": "恶棍之都",
        info: "6.5分/2020"
      },
      {
        "image_src": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2621101922.jpg",
        "title": "一点就到家",
        info: "7.0分/2020"
      },

      {
        "image_src": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2621050857.jpg",
        "title": "天官赐福",
        info: "8.0分/2020"
      },
      {
        "image_src": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2624443747.jpg",
        "title": "隐秘而伟大",
        info: "8.2分/2020"
      },
      {
        "image_src": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2621201524.jpg",
        "title": "后翼弃兵",
        info: "9.1分/2020"
      },
      {
        "image_src": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2624093552.jpg",
        "title": "云端 第二季",
        info: "6.8分/2020"
      },
      {
        "image_src": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2623463039.jpg",
        "title": "爱情不设限",
        info: "6.2分/2020"
      },
      {
        "image_src": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2608297477.webp",
        "title": "乘风破浪的姐姐",
        info: "7.0分/2020"
      },
      {
        "image_src": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2620834741.webp",
        "title": "说唱新时代",
        info: "9.2分/2020"
      },
      {
        "image_src": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2621610453.webp",
        "title": "演员请就位",
        info: "6.3分/2020"
      },
      {
        "image_src": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2601149316.webp",
        "title": "这！就是街舞",
        info: "8.5分/2020"
      },
      {
        "image_src": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614262089.webp",
        "title": "明日之子",
        info: "7.3分/2020"
      },
    ],
    isItemShow:true,
    histories:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    

    //每次页面加载的时候都要进行缓存读取histories，并渲染
    
    wx.getStorage({
      key: 'searchTitle',

      success:function(res){
        var histories = res.data;
        console.log(histories);
        that.setData({
          histories:histories
        })
    
      }
    });
    
  },

  onShow:function(options){
   
  },
  

  searchInputEvent: function (event) {
    var inputString = event.detail.value;//输入框文本内容
    var items = this.data.search_items;//相当于数据库内的数据
    var isItemShow = this.data.isItemShow;//是否显示item
    var showItems = [];
    var error_title = "";//需要显示的搜索信息


    //只有当输入框内有内容才可以进行搜索或者查询，并且显示error信息
    if(inputString.length > 0){
    for (var index = 0; index < items.length; index++) {
      if (items[index].title.indexOf(inputString) >= 0) {
        showItems.push(items[index]);
      }
    }
    error_title = '"'+inputString+'"';
  }      

  //如果输入内容超过多少就会提示错误信息：文本超过
  if(error_title.length >= 8){
    wx.showToast({
      title: '关键词过长',
      image:'/images/icons/叉叉.png'
    })
    
  }
    //当搜索页面可展示的数据大于0
    if(showItems.length > 0){
        isItemShow = true;
    }
    //当输入框内容大于0
    else if(showItems.length ==0 && inputString.length == 0)
    {
      isItemShow = true;
    }else{
      isItemShow = false;
    }
    this.setData({
      showItems: showItems,
      isItemShow:isItemShow,
      error_title:error_title
    });
  },

  onItemTapEvent:function(event){
    /*首先通过点击搜索栏里的item获取item上的标题title；
    *然后将title保存进histories数组内，可以保存多个点击进入的title字符串
    *然后将histories数组缓存，这样可以保存多个浏览过的item
    */
    var title = event.currentTarget.dataset.title;
    var histories  = this.data.histories;
    var isExisted = false;
    
    for(var index=0;index<histories.length;index++){
      if(histories[index] == title){
        isExisted = true;
        break;
      }
    }
    if(!isExisted){
    histories.push(title);
    }
  
  
    //将搜索并且点击进入的item缓存其title，可以在历史记录中查询
    wx.setStorage({
      key:"searchTitle",
      data:histories,
      success:function(res){
        //console.log("保存成功！")
      }
    })

    wx.navigateTo({
      url: '/pages/details/details?name='+title,
    })
  },
  //清除历史记录
  onClearStorageEvent:function(event){
    wx.removeStorage({
      key: 'searchTitle',

      success:function(res){
        console.log("删除成功！");
      }
    });

    this.setData({
      histories:[]
    })
  },
  //删除选定项的item
  onDeleteItemEvent:function(event){
    var title = event.currentTarget.dataset.title;
    // console.log(title)
    var histories = this.data.histories;

    var that = this;
    // console.log(histories);
    for(var index=0;index<histories.length;index++){
      if(histories[index]==title){
        histories.splice(index,1);//从历史记录中删除对应选项的item
        break;
      }
    }
     
    //删除之后记得在缓存中进行保存当前历史记录list中的数据
    wx.setStorage({
      key:"searchTitle",
      data:histories,

      success:function(res){
        that.setData({
          histories:histories
        });
        
      }
    })
  }
})