<template>
    <div>
        <header :style="{background:obj.bgColor}">
           <span class="home">首页</span> 
           {{obj.name}}
        </header>
    </div>
</template>

<script>
    export default {
        props:['obj']
    }
</script>

<style scoped>
header{
    background: #000;
    height: 1rem;
    width:100%;
    font-size: 0.35rem;
    color: white;
    text-align: center;
    position: fixed;
    top:0;
    left:0;
    line-height: 1rem;
}
.home{
    position: absolute;
    top: 50%;
    left:0.1rem;
    transform: translateY(-50%);
    font-size: 0.3rem;
}


</style>