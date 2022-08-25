<!-- 通用盒子 -->
<template>
    <!-- panel 面板 -->
    <div class="home-panel">
      <div class="container">
        <div class="head">
          <h3>
            {{ title }}
            <span>{{ littleTitle }}</span>
          </h3>
          <slot name="right"></slot>
        </div>
        <!-- 面板内容 -->
        <transition name="fade">
          <!-- 面板内容 -->
          <slot></slot>
        </transition>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  littleTitle: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>
// panel 面板样式
.home-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      span {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
