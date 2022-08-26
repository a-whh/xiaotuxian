<!-- 热门品牌 -->
<template>
    <div class="home-panel" ref="target">
    <div class="container">
      <div class="head">
        <h3>
          热门品牌
          <span>国际经典 品质保证</span>
        </h3>

        <a
          href="javascript:;"
          @click="prev"
          class="iconfont icon-angle-left prev "
          :class="{ disabled : current === 0  }"
        ></a>
        <a href="javascript:;"
          @click="next"
          :class="{ disabled : current !== 0  }"
         class="iconfont icon-angle-right next"></a>
      </div>
      <div class="box">
         <ul class="list" v-if="hotGoods.length === 0">
            <li  v-for="item in 5" :key="item" >
            <!-- 骨架 正在加载时的样式 -->
            <m-skeleton></m-skeleton>
            </li>
          </ul>
        <ul class="list" v-else :style="{ transform: `translateX(${-current * 1240}px)` }">
          <li v-for="item in hotGoods" :key="item.id" >
            <router-link to="/">
              <img
                :src="item.picture"
                alt=""
              />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getbrand } from '@/api/Home'
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
const hotGoods = ref([])
const getlist = async() => {
  hotGoods.value = await getbrand(10)
}
const current = ref(0)

const prev = function() {
  current.value = 0
}
const next = function() {
  current.value = 1
}
const target = ref(null)
const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      getlist()
      stop()
    }
  }
)
</script>

<style lang="scss" scoped>
// 热门品牌
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: $xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}

.skeleton {
  width: 100%;
  display: flex;
  .item {
    margin-right: 10px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}

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
// 热门品牌样式结束
</style>
