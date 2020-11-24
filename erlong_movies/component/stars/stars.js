// component/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:0
    },

    starSize:{
      type:Number,
      value:20
    },
    fontSize:{
      type:Number,
      value:14//rpx
    },
    fontColor:{
      type:String,
      value:"#ccc"
    }
    
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /*lifetime生命周期内，在ready进行展示星星，因为ready在页面的onLoading之后，否则/无法展示*/
  lifetimes:{
    ready:function(){
      var that = this;
      var rate = that.properties.rate;
      var lightStars = parseInt(rate/2);
      var halfStars = parseInt(rate%2);
      var grayStars = 5 - lightStars - halfStars;
      var lights = [];
      var halfs = [];
      var grays = [];
      for(var index = 0;index < lightStars;index++){
        lights.push(index);
      }
      for(var index = 0;index < halfStars;index++){
       halfs.push(index);
      }
      for(var index = 0;index < grayStars;index++){
        grays.push(index);
      }
      var rateText = rate && rate > 0? rate.toFixed(1) : "未评分";
      that.setData({
        lights:lights,
        halfs:halfs,
        grays:grays,
        rateText:rateText
      })
      


    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
