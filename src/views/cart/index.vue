<template>
  <div class="xtx-cart-page">
    <div class="container">
      <!-- 面包屑 -->
      <div class="bread">
        <div class="bread-item">
          <router-link to="/"> 首页 </router-link>
        </div>
        <i class="iconfont icon-angle-right"></i>
        <div class="bread-item">
          <router-link to="/"> 购物车 </router-link>
        </div>
      </div>
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <!-- checkbox -->
                <div class="checkbox">
                  <i class="iconfont icon-unchecked"></i>
                  <span>全选</span>
                </div>
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="i in 3" :key="i">
              <td>
                <!-- checkbox -->
                <div class="checkbox">
                  <i class="iconfont icon-unchecked"></i>
                </div>
              </td>
              <td>
                <div class="goods">
                  <router-link to="/">
                    <img
                    v-lazy
                      src="https://yanxuan-item.nosdn.127.net/13ab302f8f2c954d873f03be36f8fb03.png"
                      alt=""/>
                  </router-link>
                  <div>
                    <p class="name ellipsis">
                      和手足干裂说拜拜 ingrams手足皲裂修复霜
                    </p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;200.00</p>
                <p>比加入时降价 <span class="red">&yen;20.00</span></p>
              </td>
              <td class="tc">
                <!-- number -->
                <div class="numbox">
                  <div class="label">数量</div>
                  <div class="numbox">
                    <a href="javascript:;">-</a>
                    <input type="text" readonly />
                    <a href="javascript:;">+</a>
                  </div>
                </div>
              </td>
              <td class="tc"><p class="f16 red">&yen;200.00</p></td>
              <td class="tc">
                <p><a href="javascript:;">移入收藏夹</a></p>
                <p><a class="green" href="javascript:;">删除</a></p>
                <p><a href="javascript:;">找相似</a></p>
              </td>
            </tr>
          </tbody>
          <!-- 无效商品 -->
          <tbody>
            <tr>
              <td colspan="6"><h3 class="tit">失效商品</h3></td>
            </tr>
            <tr v-for="i in 3" :key="i">
              <td>
                <!-- checkbox -->
                <div class="checkbox">
                  <i class="iconfont icon-unchecked"></i>
                </div>
              </td>
              <td>
                <div class="goods">
                  <router-link to="/"
                    ><img v-lazy
                      src="https://yanxuan-item.nosdn.127.net/13ab302f8f2c954d873f03be36f8fb03.png"
                      alt=""
                  /></router-link>
                  <div>
                    <p class="name ellipsis">
                      和手足干裂说拜拜 ingrams手足皲裂修复霜
                    </p>
                    <p class="attr">颜色：粉色 尺寸：14cm 产地：中国</p>
                  </div>
                </div>
              </td>
              <td class="tc"><p>&yen;200.00</p></td>
              <td class="tc">1</td>
              <td class="tc"><p>&yen;200.00</p></td>
              <td class="tc">
                <p><a class="green" href="javascript:;">删除</a></p>
                <p><a href="javascript:;">找相似</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          <!-- checkbox -->
          <div class="checkbox">
            <i class="iconfont icon-unchecked"></i>
            <span>全选</span>
          </div>
          <a href="javascript:;">删除商品</a>
          <a href="javascript:;">移入收藏夹</a>
          <a href="javascript:;">清空失效商品</a>
        </div>
        <div class="total">
          共 7 件商品，已选择 2 件，商品合计：
          <span class="red">¥400</span>
          <!-- 按钮 -->
          <button class="button ellipsis primary middle">下单结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tc {
  text-align: center;
  .xtx-numbox {
    margin: 0 auto;
    width: 120px;
  }
}
.red {
  color: $priceColor;
}
.green {
  color: $xtxColor;
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
  .xtx-checkbox {
    color: #999;
  }
  .batch {
    a {
      margin-left: 20px;
    }
  }
  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.xtx-cart-page {
  .cart {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
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

// number 样式
.numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
// number 样式结束

// 按钮样式
.button {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
// 按钮样式结束
</style>
