<!-- 头部导航组件 -->
<template>
  <ul class="app-header-nav">
        <li class="home"><router-link to="/">首页</router-link></li>
        <!-- 每一项 -->
        <li v-for="item in $store.getters.categoryList" :key="item.id">
          <!-- 标题 -->
          <router-link :to='`/category/${item.id}`'>{{ item.name }}</router-link>
          <!-- 弹出层 -->
          <div class="layer">
            <ul>
              <li v-for="child in item.children" :key="child.id">
                <router-link :to='`/category/sub/${child.id}`'>
                  <img
                    :src="child.picture"
                    alt=""
                  />
                  <p>{{child.name}}</p>
                </router-link>
              </li>
            </ul>
          </div>
        </li>

      </ul>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
// 头部组件
.app-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('~@/assets/images/logo.png') no-repeat center 18px /
        contain;
    }
  }
  .navs {
    width: 820px;
    display: flex;
    justify-content: space-around;
    padding-left: 40px;
    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
      }
      &:hover {
        a {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
    }
  }
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  .cart {
    width: 50px;
    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
      .icon-cart {
        font-size: 22px;
      }
      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}

// 头部导航组件
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
      // 显示二级类目
      > .layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}

// 二级类名弹层
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  z-index: 999;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: $xtxColor;
        }
      }
    }
  }
}
// 头部导航组件结束
</style>
