// component/itemDetail/itemDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemTitle:{
      type:String,
      value:"海王 Aquaman(2018)"
    },
    itemRate:{
      type:Number,
      value:8.0
    },
    itemDetail:{
      type:Object,
      value:{
        "item_type":"143分钟 动作/奇幻/冒险",
        "item_time":" 2018-12-07(中国大陆)上映 美国",
        "item_actors":"温子仁(导演)/杰森·莫玛/艾梅柏·希尔德/威廉·达福"
      }
    },
    itemImage:{
      type:String,
      value:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.webp"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
