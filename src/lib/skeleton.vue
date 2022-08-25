<!-- 骨架 未显示时显示的样子 -->
<template>
  <div class="box1">
    <div class="one"></div>
    <div class="two">
      <div class="q"></div>
      <div class="w"></div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'

</script>

<style lang="scss" scoped>
.box1 {
  width: 100%;
  .one {
    width: 100%;
    height: 306px;
    background-color: #e4e4e4;
    position: relative;
  }
  .one::after {
        content: "";
    position: absolute;
    // animation: shan-86b02dda 1.5s ease 0s infinite;
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    // animation-name: shan-86b02dda;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(270deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0));
    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0));
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    transform: skewX(-45deg);
  }
  .two{
    width: 100%;
    height: 100px;
    background-color: #f0f9f4;
    display: flex;
    flex-direction:column;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    .q{
      width: 160px;
      height: 24px;
      background-color: #e4e4e4;
    }
    .w{
      width: 120px;
      height: 24px;
      background-color: #e4e4e4;
    }
  }
}
</style>
