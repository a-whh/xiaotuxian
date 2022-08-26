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
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          热门品牌
          <span>国际经典 品质保证</span>
        </h3>

        <a
          href="javascript:;"
          class="iconfont icon-angle-left prev disabled"
        ></a>
        <a href="javascript:;" class="iconfont icon-angle-right next"></a>
      </div>
      <div class="box">
        <ul class="list" :style="{ transform: `translateX(${0 * 1240}px)` }">
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
                alt=""
              />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img
                src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/b0941d16-a466-4f23-bbf4-90f818298abb.jpg"
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
// API
import { getbannerData } from '../../api/Home'
import { ref } from 'vue'
// 组件
import HomeCategory from './components/homeCategory.vue'
import FlashGoods from './components/flashGoods.vue'
import HotGoods from './components/hotGoods.vue'
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
