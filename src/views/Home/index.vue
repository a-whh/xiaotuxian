<template>
  <div class="container">
    <!-- 首页入口 -->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <home-category />
      <!-- banner 轮播图 -->
      <m-banner :data="bannerList" hrefText="hrefUrl" imgUrl="imgUrl" />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <flash-goods></flash-goods>
  <!-- 人气爆款 -->
  <hot-goods />
  <!-- 热门品牌 -->
  <popular-brands></popular-brands>
</template>

<script setup>
// API
import { getbannerData } from '../../api/Home'
import { ref } from 'vue'
// 组件
import HomeCategory from './components/homeCategory.vue'
import FlashGoods from './components/flashGoods.vue'
import HotGoods from './components/hotGoods.vue'
import popularBrands from './components/PopularBrands.vue'
const bannerList = ref([])
const getbannerList = async() => {
  const res = await getbannerData()
  bannerList.value = res
}
getbannerList()

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
// 人气爆款样式结束

</style>
