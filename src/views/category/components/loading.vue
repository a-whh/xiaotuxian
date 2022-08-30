<!--  -->
<template>
    <div class="infinite-loading" >
        <div class="loading" v-show="loading" v-if="!finished">
          <span class="img"></span>
          <span class="text">正在加载...</span>
        </div>
        <div class="none" v-else>
          <span class="text">{{finishedText}}</span>
        </div>
      </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineEmits(['update:loading'])
defineProps(
  {
    finished: Boolean,
    loading: Boolean,
    finishedText: String
  }
)

</script>

<style lang="scss" scoped>
// 加载更多 loading 样式
.infinite-loading {
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 50px;
      height: 50px;
      background: url(~@/assets/images/load.gif) no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 200px;
      height: 134px;
      background: url(~@/assets/images/none.png) no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
// 加载更多 loading 样式结束
</style>
