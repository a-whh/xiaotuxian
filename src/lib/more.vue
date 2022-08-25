<!-- 查看更多 -->
<template>
  <router-link to="/path" class="more">
    <span>{{ text }}</span>
    <i class="iconfont icon-angle-right"></i>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  text: {
    type: String,
    default: '查看全部'
  }
})
</script>

<style lang="scss" scoped>
// 查看更多样式
.more {
  margin-bottom: 2px;
  span {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 4px;
    color: #999;
  }
  i {
    font-size: 14px;
    vertical-align: middle;
    position: relative;
    top: 2px;
    color: #ccc;
  }
  &:hover {
    span,
    i {
      color: $xtxColor;
    }
  }
}
</style>
