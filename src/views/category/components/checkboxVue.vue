<!--  -->
<template>
    <div class="checkbox">
      <i class="iconfont icon-checked"></i>
      <span>仅显示有货商品</span>
    </div>
            <!-- <div class="checkbox">
              <i class="iconfont icon-unchecked"></i>
              <span>仅显示有货商品</span>
            </div> -->
</template>

<script setup>
import {} from 'vue'

</script>

<style lang="scss" scoped>

// checkbox 样式
.checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: $xtxColor;
    // ~ 表示兄弟层级：.icon-checked的兄弟
    ~ span {
      color: $xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
// checkbox 样式结束
</style>
