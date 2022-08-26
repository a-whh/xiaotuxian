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
          <li>
            <a href="javascript:;">
              <img v-lazy
                src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView"
              />
              <p>茶壶酒具</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img v-lazy
                src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView"
              />
              <p>茶壶酒具</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img v-lazy
                src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView"
              />
              <p>茶壶酒具</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img v-lazy
                src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView"
              />
              <p>茶壶酒具</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 各个分类推荐商品 -->
      <div class="ref-goods">
        <div class="head">
          <h3>- 茶咖酒具 -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <!-- 查看更多 -->
          <router-link to="/category/sub/id" class="more">
            <span>查看全部</span>
            <i class="iconfont icon-angle-right"></i>
          </router-link>
        </div>
        <div class="body">
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
        </div>
      </div>
      <!-- 各个分类推荐商品 -->
      <div class="ref-goods">
        <div class="head">
          <h3>- 茶咖酒具 -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <!-- 查看更多 -->
          <router-link to="/category/sub/id" class="more">
            <span>查看全部</span>
            <i class="iconfont icon-angle-right"></i>
          </router-link>
        </div>
        <div class="body">
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
        </div>
      </div>
      <!-- 各个分类推荐商品 -->
      <div class="ref-goods">
        <div class="head">
          <h3>- 茶咖酒具 -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <!-- 查看更多 -->
          <router-link to="/category/sub/id" class="more">
            <span>查看全部</span>
            <i class="iconfont icon-angle-right"></i>
          </router-link>
        </div>
        <div class="body">
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
        </div>
      </div>
      <!-- 各个分类推荐商品 -->
      <div class="ref-goods">
        <div class="head">
          <h3>- 茶咖酒具 -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <!-- 查看更多 -->
          <router-link to="/category/sub/id" class="more">
            <span>查看全部</span>
            <i class="iconfont icon-angle-right"></i>
          </router-link>
        </div>
        <div class="body">
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
        </div>
      </div>
      <!-- 各个分类推荐商品 -->
      <div class="ref-goods">
        <div class="head">
          <h3>- 茶咖酒具 -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <!-- 查看更多 -->
          <router-link to="/category/sub/id" class="more">
            <span>查看全部</span>
            <i class="iconfont icon-angle-right"></i>
          </router-link>
        </div>
        <div class="body">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
