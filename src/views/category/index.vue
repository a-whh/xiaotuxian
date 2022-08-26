<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <div class="bread">
        <div class="bread-item">
          <router-link to="/"> 首页 </router-link>
        </div>
        <i class="iconfont icon-angle-right"></i>
        <div class="bread-item">
          <router-link to="/"> 居家 </router-link>
        </div>
      </div>
      <!-- 二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in allsort.children" :key="item.id">
            <a href="javascript:;">
              <img v-lazy
                :src="item.picture"
              />
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 各个分类推荐商品 -->
      <div class="ref-goods" v-for="item in allsort.children" :key="item.id">
        <div class="head">
          <h3>- {{item.name}} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <!-- 查看更多 -->
          <more text="查看全部" :to="`/category/sub/${item.id}`" ></more>
        </div>
        <div class="body">
          <router-link v-for="child in item.goods" :key="child.id" :to="`/product/${child.id}`" class="goods-item hover-shadow">
            <img v-lazy
              :src="child.picture"
            />
            <p class="name ellipsis">{{child.name}}</p>
            <p class="desc ellipsis">
             {{child.desc}}
            </p>
            <!-- &yen; 人民币标记 -->
            <p class="price">&yen;{{child.price}}</p>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// api
import { getAllCategory } from '@/api/category.js'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import More from '../../lib/more.vue'
const route = useRoute()
// 全部分类
const allsort = ref([])
const getAll = async() => {
  allsort.value = await getAllCategory(route.params.pid)
}
getAll()
watch(
  () => route.params.pid,
  (curVal, preVal) => {
    if (!curVal) return
    getAll(curVal)
  },
  {
    immediate: true
  }
)
console.log(route)

</script>

<style lang="scss" scoped>
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      min-height: 160px;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }
  // 推荐商品
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
}

// 面包屑
.bread {
  display: flex;
  padding: 25px 10px;
  ::v-deep &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: $xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
// 面包屑样式结束

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
// 查看更多样式结束

// 商品 item
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  img {
    width: 160px;
    height: 160px;
  }
  p {
    padding-top: 10px;
  }
  .name {
    font-size: 16px;
  }
  .desc {
    color: #999;
    height: 29px;
  }
  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
// 商品 item 样式结束
</style>
