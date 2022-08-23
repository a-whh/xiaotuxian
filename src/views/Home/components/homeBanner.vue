<!-- 轮播图 -->
<template>
  <div class="home-banner">
        <!-- 轮播图 -->
        <div class="carousel">
          <!-- 图片容器 -->
          <ul class="carousel-body">
            <!-- fade 显示的图片加上 -->
            <li class="carousel-item fade">
              <router-link to="/">
                <!-- 指定了  prop 对象之后，需要修改此处的数据使用 -->
                <img
                  src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg"
                />
              </router-link>
            </li>
          </ul>
          <!-- 上一张 -->
          <a href="javascript:;" class="carousel-btn prev"
            ><i class="iconfont icon-angle-left"></i
          ></a>
          <!-- 下一张 -->
          <a href="javascript:;" class="carousel-btn next"
            ><i class="iconfont icon-angle-right"></i
          ></a>
          <!-- 指示器 -->
          <div class="carousel-indicator">
            <!-- active 激活点 -->
            <span></span>
            <span class="active"></span>
            <span></span>
          </div>
        </div>
      </div>
</template>

<script setup>
import {} from 'vue'

</script>

<style lang="scss" scoped>
// banner 样式
.home-banner {
  width: 1240px;
  height: 450px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}

.carousel {
  .carousel-btn.prev {
    left: 270px !important;
  }
  .carousel-indicator {
    padding-left: 250px !important;
  }
}
// banner 样式结束
// 轮播图样式

.carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}

// 轮播商品
.slider {
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
  > a {
    width: 240px;
    text-align: center;
    img {
      padding: 20px;
      width: 230px !important;
      height: 230px !important;
    }
    .name {
      font-size: 16px;
      color: #666;
      padding: 0 40px;
    }
    .price {
      font-size: 16px;
      color: $priceColor;
      margin-top: 15px;
    }
  }
}
// 轮播图样式结束

</style>
