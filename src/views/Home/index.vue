<template>
  <div class="container">
    <!-- 首页入口 -->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <home-category />
      <!-- banner -->
      <home-banner />
    </div>
  </div>

  <!-- 新鲜好物 -->
  <div class="home-new" ref="lazyTarget">
    <!-- panel 面板 -->
    <div class="home-panel">
      <div class="container">
        <div class="head">
          <h3>
            新鲜好物
            <span>新鲜出炉 品质靠谱</span>
          </h3>
          <router-link to="/path" class="more">
            <span>查看全部</span>
            <i class="iconfont icon-angle-right"></i>
          </router-link>
        </div>
        <!-- 面板内容 -->
        <transition name="fade">
          <!-- 面板内容 -->
          <ul class="goods-list">
            <li class="hover-shadow">
              <router-link to="/product/id">
                <img
                  src="https://yanxuan-item.nosdn.127.net/6e289ea8795025fddf3cff60d3f400a1.jpg"
                  alt=""
                />
                <p class="name ellipsis">冬季男鞋</p>
                <p class="price">&yen;213</p>
              </router-link>
            </li>
            <li class="hover-shadow">
              <router-link to="/product/id">
                <img
                  src="https://yanxuan-item.nosdn.127.net/6e289ea8795025fddf3cff60d3f400a1.jpg"
                  alt=""
                />
                <p class="name ellipsis">冬季男鞋</p>
                <p class="price">&yen;213</p>
              </router-link>
            </li>
            <li class="hover-shadow">
              <router-link to="/product/id">
                <img
                  src="https://yanxuan-item.nosdn.127.net/6e289ea8795025fddf3cff60d3f400a1.jpg"
                  alt=""
                />
                <p class="name ellipsis">冬季男鞋</p>
                <p class="price">&yen;213</p>
              </router-link>
            </li>
            <li class="hover-shadow">
              <router-link to="/product/id">
                <img
                  src="https://yanxuan-item.nosdn.127.net/6e289ea8795025fddf3cff60d3f400a1.jpg"
                  alt=""
                />
                <p class="name ellipsis">冬季男鞋</p>
                <p class="price">&yen;213</p>
              </router-link>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
  <!-- 人气爆款 -->
  <div class="home-hot">
    <div class="home-panel">
      <div class="container">
        <div class="head">
          <h3>
            人气推荐
            <span>人气爆款 不容错过</span>
          </h3>
          <router-link to="/path" class="more">
            <span>查看全部</span>
            <i class="iconfont icon-angle-right"></i>
          </router-link>
        </div>
        <!-- 面板内容 -->
        <transition name="fade">
          <ul class="goods-list">
            <li class="hover-shadow">
              <router-link to="/">
                <img
                  src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg"
                  alt=""
                />
                <p class="name">特惠推荐</p>
                <p class="desc">他们最实惠</p>
              </router-link>
            </li>
            <li class="hover-shadow">
              <router-link to="/">
                <img
                  src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg"
                  alt=""
                />
                <p class="name">特惠推荐</p>
                <p class="desc">他们最实惠</p>
              </router-link>
            </li>
            <li class="hover-shadow">
              <router-link to="/">
                <img
                  src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg"
                  alt=""
                />
                <p class="name">特惠推荐</p>
                <p class="desc">他们最实惠</p>
              </router-link>
            </li>
            <li class="hover-shadow">
              <router-link to="/">
                <img
                  src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg"
                  alt=""
                />
                <p class="name">特惠推荐</p>
                <p class="desc">他们最实惠</p>
              </router-link>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
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
import {} from 'vue'
import HomeCategory from './components/homeCategory.vue'
import HomeBanner from './components/homeBanner.vue'
</script>

<style lang="scss" scoped>
// 新鲜好物
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: $priceColor;
    }
  }
}

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

// 新鲜好物样式结束

// 人气爆款
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}

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
