<template>
  <div class="footer" :style="{background:color}">
    <ul>
      <li v-for='(obj,index) in menu' :key='index' >
        <router-link :to='obj.path' @click.native='change(obj)'>{{obj.name}}</router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
    props:["menu",'color'],
    methods:{
        change(obj){
            this.bg=obj.bgColor;
            this.$emit('changeBg',obj);
        }
    },
    created(){

    }
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background: #000;
}
.footer ul {
  display: flex;
}
li {
  text-align: center;
  flex-grow: 1;
  line-height: 1rem;
  color: white;
  /* font-size: 0.4rem; */
}
.footer a {
  color:pink;
  outline: none;
}
.footer a.router-link-active {
  color: #fff;
}
</style>