<template>
  <div id="app">
    <commonHeader :obj='obj'> </commonHeader>
    <div id="content">
        <router-view></router-view>
    </div>
    <CFooter :menu='menu' @changeBg='color' :color='obj.bgColor'  ></CFooter>
  </div>
</template>
<script>
import commonHeader from '@/components/CommonHeader.vue'
import CFooter from '@/components/CFooter.vue'
export default {

  data(){
    return{
      menu:[  
        {
          path:'/Movie',
          name:'电影' ,
          bgColor:'#000'
        },
        {
          path:'/Music',
          name:'音乐',
          bgColor:'#e9f460'
        },
        {
          path:'/Photo',
          name:'图片',
          bgColor:'#96c2f1'
        },
        {
          path:'/Book',
          name:'图书',
          bgColor:'#4abce8'
        }
      ],
      obj:{
           path:"/movie",
           name:"电影",
           bgColor:"#ff0036"
        }
    }
  },

  components:{
    commonHeader,
    CFooter
  },
  methods:{
    color(obj){
      this.obj = obj;
    }
  },
  created(){
    let result = this.menu.filter((obj,index)=>{
      return obj.path == this.$route.path;
    });
    if(result.length){
    this.obj = result[0];
    }
  }

}
</script>

<style>
#content{
  margin: 1rem 0;
}
</style>
