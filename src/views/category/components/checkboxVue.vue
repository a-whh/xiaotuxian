<!--  -->
<template>
    <div class="checkbox"
    @click="clickFn"
    >
      <i class="iconfont icon-checked"
      v-if="checked"
      ></i>
      <i
      v-else
      class="iconfont icon-unchecked"></i>
      <span><slot></slot></span>
    </div>
            <!-- <div class="checkbox">
              <i class="iconfont icon-unchecked"></i>
              <span>仅显示特惠商品</span>
            </div> -->
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  checked: Boolean
})
const emit = defineEmits(['update:checked'])
const clickFn = () => {
  if (props.checked === true) {
    emit('update:checked', false)
  } else {
    emit('update:checked', true)
  }
}
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
