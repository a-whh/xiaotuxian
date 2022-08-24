<!-- 左侧分类 -->
<template>
     <div class="home-category">
        <ul class="menu">
          <li class="menu-item" v-for="item in $store.getters.categoryList" :key="item.id">
            <!-- 一级跳转 -->
            <router-link :to="`/category/${item.id}`">{{item.name}} </router-link>
            <!-- 二级跳转 -->
            <router-link to="/">{{getTwo(item.children)}}</router-link>
            <!-- 骨架 -->
            <!-- 左侧分类弹层 -->
            <div class="home-layer layer">
              <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
              <ul>
                <li v-for="good in item.goods" :key="good.id">
                  <router-link to="/">
                    <img
                      :src="good.picture"
                      alt=""
                    />
                    <div class="info">
                      <p class="name ellipsis-2">{{good.name}}</p>
                      <p class="desc ellipsis">{{good.desc}}</p>
                      <p class="price"><i>¥</i>{{good.price}}</p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
           <li class="menu-item">
            <!-- 一级跳转 -->
            <router-link to="/">品牌</router-link>
            <!-- 二级跳转 -->
            <router-link to="/">品牌推荐</router-link>
            <!-- 骨架 -->
            <!-- 左侧分类弹层 -->
            <div class="home-layer layer">
              <h4>品牌推荐 <small>根据您的购买或浏览记录推荐</small></h4>
              <ul>
                <li v-for="good in  $store.getters.brandList" :key="good.id">
                  <router-link to="/">
                    <img
                      :src="good.picture"
                      alt=""
                    />
                    <div class="info">
                      <p class="name ellipsis-2">{{good.name}}</p>
                      <p class="desc ellipsis">{{good.desc}}</p>
                      <p class="price"><i>¥</i>{{good.price}}</p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
</template>

<script setup>
import {} from 'vue'
function getTwo(arr) {
  return arr.slice(0, 2).map((item) => {
    return item.name
  }).join(' ')
}

</script>

<style lang="scss" scoped>
// 左侧分类
.home-category {
  width: 250px;
  height: 450px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    .menu-item {
      padding-left: 40px;
      height: 45px;
      line-height: 50px;
      &:hover {
        background: $xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }

        ~ a:hover {
          color: #333333;
        }
      }

      &:hover {
        .home-layer {
          display: block;
        }
      }
    }
  }
}

// 左侧分类弹出层样式
.layer {
  width: 990px;
  height: 450px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  display: none;
  padding: 0 15px;
  h4 {
    font-size: 20px;
    font-weight: normal;
    line-height: 80px;
    small {
      font-size: 16px;
      color: #666;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 310px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
      background: #fff;
      &:nth-child(3n) {
        margin-right: 0;
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 10px;
        &:hover {
          background: #e3f9f4;
        }
        img {
          width: 95px;
          height: 95px;
        }
        .info {
          padding-left: 10px;
          line-height: 24px;
          width: 190px;
          .name {
            font-size: 16px;
            color: #666;
          }
          .desc {
            color: #999;
          }
          .price {
            font-size: 22px;
            color: $priceColor;
            i {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
