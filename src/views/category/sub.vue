<template>
  <div class="sub-categroy">
    <div class="container">
      <!-- 面包屑 -->
    <m-bread>
      <m-bread-item to="/">首页</m-bread-item>
      <m-bread-item to="/">{{store.state.category.parentName}}</m-bread-item>
      <m-bread-item >{{store.state.category.name}}</m-bread-item>
    </m-bread>
      <!-- 筛选区域 -->
      <div class="sub-filter">
        <div class="item">
          <div class="head">品牌：</div>
          <div class="body">
            <a
            :class="{active : item.id === currentbrands}"
            v-for="item in store.state.category.brands"
            :key="item.id"
            @click="choseBrand(item.id)"
            href="javascript:;">{{item.name}}</a>
          </div>
        </div>
        <div class="item" v-for="item in store.state.category.saleProperties" :key="item.id">
          <div class="head" >{{item.name}}：</div>
          <div class="body">
            <a
            :class="{active: child.id === item.isCurrent}"
            href="javascript:;"
            @click="choseStandard([item.id,child.id,item.name,child.name])"
            v-for="child in item.properties"
            :key="child.id">{{child.name}}</a>
          </div>
        </div>
      </div>
      <!-- 排序区域 -->
      <div class="goods-list">
        <div class="sub-sort">
          <div class="sort">
            <a class="active" href="javascript:;">默认排序</a>
            <a href="javascript:;">最新商品</a>
            <a href="javascript:;">最高人气</a>
            <a href="javascript:;">评论最多</a>
          </div>
          <!-- 复选框 -->
           <div class="check">
            <checkbox-vue></checkbox-vue>
          </div>
        </div>
        <ul>
          <li v-for="item in store.state.category.categories" :key="item.id">
            <router-link :to="`/product/${item.id}`" class="goods-item hover-shadow">
              <img v-lazy
                :src="item.picture"
              />
              <p class="name ellipsis">{{item.name}}</p>
              <p class="desc ellipsis">
                {{item.desc}}
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;{{item.price}}</p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="infinite-loading">
        <div class="loading">
          <span class="img"></span>
          <span class="text">正在加载...</span>
        </div>
        <div class="none">
          <span class="text">亲，没有更多了</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref } from 'vue-demi'
import CheckboxVue from './components/checkboxVue.vue'
const store = useStore()
const route = useRoute()
store.dispatch('category/filter', route.params.id)
const currentbrands = ref('0')
// 选择品牌
const choseBrand = (id) => {
  currentbrands.value = id
  condition.value.categoryId = route.params.id
  condition.value.brandId = id
  getList()
}
// 选择规格
const choseStandard = (arr) => {
  store.commit('category/changActive', arr)
  condition.value.attrs.push({
    groupName: arr[2],
    propertyName: arr[3]
  })
  getList()
}
const query = ref({
  page: 1,
  pageSize: 20
})
const condition = ref({
  attrs: [],
  brandId: null,
  categoryId: ''
})
// 获取列表
const getList = () => {
  store.dispatch('category/getlistBybrand', { ...query.value, ...condition.value })
}
getList()

</script>

<style lang="scss" scoped>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
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

// 筛选区域样式
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: $xtxColor;
        }
      }
    }
  }
  .skeleton {
    padding: 10px 0;
  }
}
// 筛选区域样式结束

// 排序区域
.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sort {
    display: flex;
    a {
      height: 30px;
      line-height: 28px;
      border: 1px solid #e4e4e4;
      padding: 0 20px;
      margin-right: 20px;
      color: #999;
      border-radius: 2px;
      position: relative;
      transition: all 0.3s;
      &.active {
        background: $xtxColor;
        border-color: $xtxColor;
        color: #fff;
      }
      .arrow {
        position: absolute;
        border: 5px solid transparent;
        right: 8px;
        &.up {
          top: 3px;
          border-bottom-color: #bbb;
          &.active {
            border-bottom-color: $xtxColor;
          }
        }
        &.down {
          top: 15px;
          border-top-color: #bbb;
          &.active {
            border-top-color: $xtxColor;
          }
        }
      }
    }
  }
  .check {
    .checkbox {
      margin-left: 20px;
      color: #999;
    }
  }
}
// 排序区域样式结束

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
