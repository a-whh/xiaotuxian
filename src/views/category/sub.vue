<template>
  <div class="sub-categroy">
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
        <div class="bread-item">
          <router-link to="/"> 酒具 </router-link>
        </div>
      </div>
      <!-- 筛选区域 -->
      <div class="sub-filter">
        <div class="item">
          <div class="head">品牌：</div>
          <div class="body">
            <a class="active" href="javascript:;">全部</a>
            <a class="active" href="javascript:;">釉色美颜</a>
          </div>
        </div>
        <div class="item">
          <div class="head">颜色：</div>
          <div class="body">
            <a class="active" href="javascript:;">黑色</a>
            <a href="javascript:;">蓝色</a>
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
          <div class="check">
            <div class="checkbox">
              <i class="iconfont icon-checked"></i>
              <span>仅显示有货商品</span>
            </div>
            <div class="checkbox">
              <i class="iconfont icon-unchecked"></i>
              <span>仅显示有货商品</span>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <router-link to="/product/id" class="goods-item hover-shadow">
              <img v-lazy
                src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                alt=""
              />
              <p class="name ellipsis">【包邮】优雅香槟杯气泡酒杯高脚杯2支装</p>
              <p class="desc ellipsis">
                百年工艺一体成型，触感光滑，精致透亮，有余音绕梁之感
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;12</p>
            </router-link>
          </li>
          <li>
            <router-link to="/product/id" class="goods-item hover-shadow">
              <img v-lazy
                src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                alt=""
              />
              <p class="name ellipsis">【包邮】优雅香槟杯气泡酒杯高脚杯2支装</p>
              <p class="desc ellipsis">
                百年工艺一体成型，触感光滑，精致透亮，有余音绕梁之感
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;12</p>
            </router-link>
          </li>
          <li>
            <router-link to="/product/id" class="goods-item hover-shadow">
              <img v-lazy
                src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                alt=""
              />
              <p class="name ellipsis">【包邮】优雅香槟杯气泡酒杯高脚杯2支装</p>
              <p class="desc ellipsis">
                百年工艺一体成型，触感光滑，精致透亮，有余音绕梁之感
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;12</p>
            </router-link>
          </li>
          <li>
            <router-link to="/product/id" class="goods-item hover-shadow">
              <img v-lazy
                src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                alt=""
              />
              <p class="name ellipsis">【包邮】优雅香槟杯气泡酒杯高脚杯2支装</p>
              <p class="desc ellipsis">
                百年工艺一体成型，触感光滑，精致透亮，有余音绕梁之感
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;12</p>
            </router-link>
          </li>
          <li>
            <router-link to="/product/id" class="goods-item hover-shadow">
              <img v-lazy
                src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                alt=""
              />
              <p class="name ellipsis">【包邮】优雅香槟杯气泡酒杯高脚杯2支装</p>
              <p class="desc ellipsis">
                百年工艺一体成型，触感光滑，精致透亮，有余音绕梁之感
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;12</p>
            </router-link>
          </li>
          <li>
            <router-link to="/product/id" class="goods-item hover-shadow">
              <img v-lazy
                src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                alt=""
              />
              <p class="name ellipsis">【包邮】优雅香槟杯气泡酒杯高脚杯2支装</p>
              <p class="desc ellipsis">
                百年工艺一体成型，触感光滑，精致透亮，有余音绕梁之感
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;12</p>
            </router-link>
          </li>
          <li>
            <router-link to="/product/id" class="goods-item hover-shadow">
              <img v-lazy
                src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                alt=""
              />
              <p class="name ellipsis">【包邮】优雅香槟杯气泡酒杯高脚杯2支装</p>
              <p class="desc ellipsis">
                百年工艺一体成型，触感光滑，精致透亮，有余音绕梁之感
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;12</p>
            </router-link>
          </li>
          <li>
            <router-link to="/product/id" class="goods-item hover-shadow">
              <img v-lazy
                src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                alt=""
              />
              <p class="name ellipsis">【包邮】优雅香槟杯气泡酒杯高脚杯2支装</p>
              <p class="desc ellipsis">
                百年工艺一体成型，触感光滑，精致透亮，有余音绕梁之感
              </p>
              <!-- &yen; 人民币标记 -->
              <p class="price">&yen;12</p>
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

<script setup></script>

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

// checkbox 样式
.checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: $xtxColor;
    // ~ 表示兄弟层级：.icon-checked的兄弟
    ~ span {
      color: $xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
// checkbox 样式结束

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
