// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies_detail:[{
      "image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2624385562.webp",
      "title":"婚前故事",
      "rate": 7.4,
      "review":{
        "item_type":"40分钟 剧情/伦理",
        "item_time":" 2020-10-30(中国大陆) ",
        "item_actors":"张一山/吴翌尘 "
      },
      "tags":["温情","催泪","亲情","冒险"]
    },

    {
      "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2615992304.jpg",
      "title":"八佰",
      "rate": 7.6, 
      "review":{
        "item_type":"147分钟 剧情 / 历史 / 战争",
        "item_time":"2020-08-21(中国大陆) ",
        "item_actors":" 王千源 / 张译 / 姜武 / 黄志忠 / 张俊一 "
      },
      "tags":["抗日","战争","历史","淞沪会战","人性","中国大陆","国军"]
    },
    {
      "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2574153046.jpg",
      "title":"海绵宝宝：营救大冒险",
      "rate": 6.2, 
      "review":{
        "item_type":"喜剧 / 动画 / 冒险",
        "item_time":"2020-11-06(中国大陆网络)",
        "item_actors":"基努·里维斯 / 奥卡菲娜 / 克兰西·布朗 / 汤姆·肯尼 / 比尔·法格巴克"
      },
      "tags":["海绵宝宝","动画","喜剧","美国","2020","3D","派拉蒙"]
    },
    {
      "image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2623523542.jpg",
      "title":"恶棍之都",
      "rate": 6.5, 
      "review":{
        "item_type":"100分钟 剧情 / 冒险 ",
        "item_time":" 2020-11-13(中国大陆)",
        "item_actors":" 哈里森·福特 / 丹·史蒂文斯 / 凯伦·吉兰 / 布莱德利·惠特福德 / 珍·路易莎·凯利 /"
      },
      "tags":[ "冒险", "传记", "英国", "小雀斑" ,"剧情" ,"2019" ,"英国电影"]
    },
    {
      "image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2621101922.jpg",
      "title":"一点就到家",
      "rate": 7.0, 
      "review":{
        "item_type":"97分钟 剧情 / 喜剧",
        "item_time":"2020-10-04(中国大陆)",
        "item_actors":" 刘昊然 / 彭昱畅 / 尹昉 / 谭卓 / 张琪 "
      },
      "tags":["喜剧","国产电影","刘昊然"]
    },

  {
    "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2621050857.jpg",
    "title":"天官赐福",
    "rate":8.9,
    "review":{
      "item_type":"剧情 / 动画",
      "item_time":" 2020-10-31(中国大陆)",
      "item_actors":"姜广涛 / 马正阳 / 黄莺"
    },
    "tags":["国漫","动漫","耽美","小说改编","动画"]
  },
  {
    "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2624443747.jpg",
    "title":"隐秘而伟大",
    "rate":8.2,
    "review":{
      "item_type":" 剧情",
      "item_time":"2020-11-06(中国大陆)",
      "item_actors":" 李易峰 / 金晨 / 王泷正 / 牛骏峰 / 施诗 / 王小毅 / 李强 "
    },
    "tags":["谍战","国产电视剧","剧情","国产剧"]
  },
  {
    "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2621201524.jpg",
    "title":"后翼弃兵",
    "rate":9.1,
    "review":{
      "item_type":"50分钟 剧情",
      "item_time":"2020-10-23(美国)",
      "item_actors":" 安雅·泰勒-乔伊 / 伊斯拉·约翰斯顿 / 玛丽埃尔·海勒 / 托马斯·布罗迪-桑斯特 / 马辛·多洛辛斯基"
    },
    "tags":["女性","天才","国际象棋","成长","美国"]
  },
  {"image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2624093552.jpg",
  "title":"云端 第二季",
  "rate":6.8,
  "review":{
    "item_type":"悬疑 / 短片",
    "item_time":"2020-11-02(中国大陆)",
    "item_actors":"江奇霖 / 孙睿 / 秋伶"
  },
  "tags":["悬疑","犯罪","网剧","推理","国产剧"]
  },
  {
    "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2623463039.jpg",
    "title":"爱情不设限",
    "rate":7.6,
    "review":{
      "item_type":"剧情",
      "item_time":"2020-11-04(瑞典)",
      "item_actors":"埃达·英格薇 / 瑞内·拜诺索恩 / 伯恩·谢尔曼 Björn Kjellman / Gizem Erdogan / 约翰内斯·昆科 / Björn Mosten"
    },
    "tags":["瑞典","北欧剧","欧洲剧"]
  },
  {
    "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2608297477.webp",
    "title":"乘风破浪的姐姐",
    "rate":7.0,
    "review":{
      "item_type":"真人秀",
      "item_time":"2020-06-12(中国大陆)",
      "item_actors":" 宁静 / 张雨绮 / 黄圣依 / 伊能静 / 万茜 / 金晨 / 吴昕 / 郁可唯 / 蓝盈莹 / 张含韵 / 李斯丹妮 / 王霏霏 / 孟佳 / 袁咏琳 / 白冰 / 张萌 / 沈梦辰 / 黄龄 / 钟丽缇 / 郑希怡 / 王丽坤 / 丁当 / 阿朵 / 金莎 / 刘芸 / 陈松伶 / 海陆 / 王智 / 许飞 / 朱婧汐 / 黄晓明 / 杜华 / 赵兆 / 陈琦沅 / 魏大勋 / 杜海涛 / 彭磊 / 赵梦 / 庞宽 / 杨澜 / 霍汶希 / 李佳琦 "
    },
    "tags":["综艺","真人秀","芒果TV","选秀","中国大陆"]
  },
  {
    "image_src":"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2620834741.webp",
    "title":"说唱新时代",
    "rate":9.2,
    "review":{
      "item_type":"音乐 / 真人秀",
      "item_time":"2020-08-22(中国大陆)",
      "item_actors":"李宇春 / 黄子韬 / 热狗 / 马思唯 / 丁震 / 里奇·布莱恩 / 马伯骞"
    },
    "tags":["说唱","B站","新时代","音乐","真人秀"]
  },
  {
    "image_src":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2621610453.webp",
    "title":"演员请就位",
    "rate":6.3,
    "review":{
      "item_type":"真人秀",
      "item_time":"2020-08-22(中国大陆)",
      "item_actors":" 陈凯歌 / 尔冬升 / 赵薇 / 郭敬明 / 大鹏 "
    },
    "tags":["综艺","表演","真人秀","中国大陆"]
  },
  {
    "image_src":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2601149316.webp",
    "title":"这！就是街舞",
    "rate":8.5,
    "review":{
      "item_type":" 真人秀 ",
      "item_time":"149分钟 中国大陆 ",
      "item_actors":"陆伟 / 王嘉尔 / 王一博 / 钟汉良 / 张艺兴"
    },
    "tags":["街舞","舞蹈","综艺","真人秀"]
  },
  {
    "image_src":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614262089.webp",
    "title":"明日之子",
    "rate":7.3,
    "review":{
      "item_type":"音乐 / 真人秀 ",
      "item_time":"250分钟 中国大陆 ",
      "item_actors":"张佩 / 邓紫棋 / 郎朗 / 欧阳娜娜 / 周震南 / 梁龙 / 朴树"
    },
    "tags":["乐队","综艺","真人秀"]
  }],

    item_detail:{

    },

    comments:[{
      "user_image_src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605435709975&di=ac6810b084d93508bb0b0de61b961f8f&imgtype=0&src=http%3A%2F%2Fpic43.photophoto.cn%2F20170506%2F0470102348231008_b.jpg",
      "user_name":"二龙",
      "user_rate":"8.0",
      "user_time":"2020-11-15 12:27:14",
      "user_comment":"  虽然有很多细节处理不到位，但我还是要说，能不能给“差生”一个机会啊！最少我相信很多朋友肯定会被最后的演出感动，“有教无类”我们提倡了两千多年了，但是社会主流还是那些以“罗董事”为首的政治正确一派，我是做教育的，这部影片也是在通过“严老师、卢校长等等”的努力告诉我们一个很简单的道理：做教育不是办企业，每一个学生都值得我们给予正确的价值引导。《热血合唱团》给了我很大的动力，不只是因为刘德华，挺起！"
    },
    {
      "user_image_src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2174517194,1195025150&fm=26&gp=0.jpg",
      "user_name":"逸尘",
      "user_rate":"1",
      "user_time":"2020-11-18  9:28:14",
      "user_comment":"  作为华仔监制的电影，我的期待值确实很高，影片讲述了一位指挥家帮助一群不被人关注的学生组成的合唱团完成一场合唱的故事，在我看来这其实是一部学生和老师互相救赎的故事，整体高度上虽然达不到《放牛班的春天》，但催泪的情感线和每段故事的配乐都可圈可点"
    },
    {
      "user_image_src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605456080212&di=55a104e24250b674f0f2af98c4784b68&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8644ebf81a4c510f9a4fd0266359252dd42aa506.jpg",
      "user_name":"功乾",
      "user_rate":"3.5",
      "user_time":"2020-11-6 10:28:6",
      "user_comment":"拍的什么玩意儿这是，浪费我时间去看，经典浪费时间"
    }
  ]
    

  },

  onLoad:function(options){
    wx.showLoading({
      title: '正在加载中...',
    })
    //点击index首页的图片或者任意itemview上的图片跳转进入电影详情页面
    var name = options.name;
    
    //获得传入的参数，这个参数是通过url？属性=""里的属性得到的
    var details = this.data.movies_detail;
    
    var item_detail = {};
    //通过传入参数对数据库内数据进行比对，如果存在匹配的电影，则进行渲染，如果不存在对应匹配的数据，则给一个默认的数据进行渲染
    for(var index=0;index < details.length;index++){
      if(details[index].title == name){
        item_detail = details[index];
        
        break;
      }
    }
    if(item_detail == null){
        item_detail = {        
            "title":"海王",
            "image_src":"https://img1.doubanio.com/view/photo/s_ratioposter/public/p2541280047.webp",
            "rate":8.0,
            "review":{
              "item_type":"143分钟 动作/奇幻/冒险",
              "item_time":" 2018-12-07(中国大陆)上映 美国",
              "item_actors":"温子仁(导演)/杰森·莫玛/艾梅柏·希尔德/威廉·达福"
            },
            "tags":["DC","超级英雄","特效","美国","奇幻","动作","漫画改编"]
        }
        
      }
    
    this.setData({
      item_detail:item_detail,
    })
    
   
    
  },
  onShow:function(){
    wx.hideLoading({
      success: (res) => {},
    });

    wx.pageScrollTo({
      scrollTop:0
    });

  }

})