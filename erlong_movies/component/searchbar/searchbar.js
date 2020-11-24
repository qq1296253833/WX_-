// component/searchbar/searchbar.js
Component({
  properties:{

    /*
    *搜索框是否显示的属性判断依据
    */ 
    isnavigator:{
      type:Boolean,
      value:false
    }
  },

  //输入框输入内容时，将输入的内容传给搜索页面使用其数据
  //因为组件是无法处理数据的，只能页面进行处理
  methods:{
    onInputEvent:function(event){
      var value = event.detail.value;
      var detail = {"value":value};
      var options = {};
      this.triggerEvent("searchInput",detail,options);
    }
  }

  
})