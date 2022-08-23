<!-- 吸顶容器 -->
<template>
  <div class="app-header-sticky" :class="{show : y > 90}">
    <div class="container">
      <router-link class="logo" to="/" />
        <!-- 头部导航组件 -->
        <head-navigation />
      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref , watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import HeadNavigation from './HeadNavigation.vue'
// const isShow = ref(false)
const { y } = useWindowScroll() // x,y 轴
</script>

<style lang="scss" scoped>
// 吸顶容器
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 模板无动画
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(~@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: $xtxColor;
      }
    }
  }
}
// 吸顶容器结束
</style>
