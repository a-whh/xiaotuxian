<template>
  <div class="goods-page">
    <div class="container">
      <!-- 面包屑 -->
      <div class="bread">
        <div class="bread-item">
          <router-link to="/"> 首页 </router-link>
        </div>
        <i class="iconfont icon-angle-right"></i>
        <div class="bread-item">
          <router-link to="/"> 严选 </router-link>
        </div>
        <i class="iconfont icon-angle-right"></i>
        <div class="bread-item">
          <router-link to="/"> 数码电器 </router-link>
        </div>
        <i class="iconfont icon-angle-right"></i>
        <div class="bread-item">
          <router-link to="/">
            户外休闲防滑徒步鞋轻量速干G-GRIP大底
          </router-link>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-info">
        <div class="media">
          <!-- 图片预览 -->
          <div class="goods-image">
            <!-- 放大镜 -->
            <div
              class="zoom-img"
              :style="[
                {
                  backgroundImage:
                    'url(https://yanxuan-item.nosdn.127.net/7ef0f743fe590efc6c5eda075c632aa0.jpg)',
                  backgroundPositionX: 0,
                  backgroundPositionY: 0
                }
              ]"
            ></div>
            <!-- 大图 -->
            <div class="middle">
              <img
                src="https://yanxuan-item.nosdn.127.net/7ef0f743fe590efc6c5eda075c632aa0.jpg"
                alt=""
              />
              <!-- 阴影层 -->
              <div class="layer" :style="{ left: 0, top: 0 }"></div>
            </div>
            <!-- 小图 -->
            <ul class="small">
              <li class="active">
                <img
                  src="https://yanxuan-item.nosdn.127.net/7ef0f743fe590efc6c5eda075c632aa0.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://yanxuan-item.nosdn.127.net/7ef0f743fe590efc6c5eda075c632aa0.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://yanxuan-item.nosdn.127.net/7ef0f743fe590efc6c5eda075c632aa0.jpg"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <!-- 商品销售 -->
          <ul class="goods-sales">
            <li>
              <p>销量人气</p>
              <p>200+</p>
              <p><i class="iconfont icon-task-filling"></i>销量人气</p>
            </li>
            <li>
              <p>商品评价</p>
              <p>400+</p>
              <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
            </li>
            <li>
              <p>收藏人气</p>
              <p>600+</p>
              <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
            </li>
            <li>
              <p>品牌信息</p>
              <p>苏宁电器</p>
              <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
            </li>
          </ul>
        </div>
        <div class="spec">
          <!-- 基本信息 -->
          <div class="goods-spec">
            <p class="g-name">户外休闲防滑徒步鞋轻量速干G-GRIP大底</p>
            <p class="g-desc">
              轻量防滑，牛皮拼接、吸湿速干、360度科技抗菌，轻松户外；G-GRIP大底减震防滑、三防鞋面防泼防污
            </p>
            <p class="g-price">
              <span>123</span>
              <span>321</span>
            </p>
            <div class="g-service">
              <dl>
                <dt>促销</dt>
                <dd>12月好物放送，App领券购买直降120元</dd>
              </dl>
              <dl>
                <dt>配送</dt>
                <dd>至</dd>
                <div class="city">
                  <div class="select active">
                    <span class="placeholder">山东省 济南市 历下区</span>
                    <span class="value"></span>
                    <i class="iconfont icon-angle-down"></i>
                  </div>
                </div>
              </dl>
              <dl>
                <dt>服务</dt>
                <dd>
                  <span>无忧退货</span>
                  <span>快速退款</span>
                  <span>免费包邮</span>
                  <a href="javascript:;">了解详情</a>
                </dd>
              </dl>
            </div>
          </div>
          <!-- sku -->
          <div class="goods-sku">
            <dl>
              <dt>颜色</dt>
              <dd>
                <img
                  class="sku-state-mixin selectd"
                  src="https://yanxuan-item.nosdn.127.net/f8464775ab1524d5bcb6ede767c347a9.jpg"
                  title="颜色"
                />
                <img
                  class="sku-state-mixin disabled"
                  src="https://yanxuan-item.nosdn.127.net/f8464775ab1524d5bcb6ede767c347a9.jpg"
                  title="颜色"
                />
              </dd>
            </dl>
            <dl>
              <dt>尺码</dt>
              <dd>
                <span class="sku-state-mixin selectd">39</span>
                <span class="sku-state-mixin disabled">40</span>
                <span class="sku-state-mixin">41</span>
                <span class="sku-state-mixin disabled">42</span>
                <span class="sku-state-mixin">43</span>
                <span class="sku-state-mixin">44</span>
              </dd>
            </dl>
          </div>
          <!-- 计数器 -->
          <div class="numbox">
            <div class="label">数量</div>
            <div class="numbox">
              <a href="javascript:;">-</a>
              <input type="text" readonly value="1" />
              <a href="javascript:;">+</a>
            </div>
          </div>
          <!-- 按钮 -->
          <button class="button ellipsis primary middle">加入购物车</button>
        </div>
      </div>

      <!-- 商品推荐 -->
      <div class="goods-relevant">
        <div class="header">
          <i class="icon" />
          <span class="title">同类商品推荐</span>
        </div>
        <div class="carousel">
          <!-- 多图效果 -->
          <ul class="carousel-body">
            <li class="carousel-item fade">
              <div class="slider">
                <router-link to="/">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                    alt="alt"
                  />
                  <p class="name ellipsis">
                    【包邮】优雅香槟杯气泡酒杯高脚杯2支装
                  </p>
                  <p class="price">&yen;89</p>
                </router-link>
                <router-link to="/">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                    alt="alt"
                  />
                  <p class="name ellipsis">
                    【包邮】优雅香槟杯气泡酒杯高脚杯2支装
                  </p>
                  <p class="price">&yen;89</p>
                </router-link>
                <router-link to="/">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                    alt="alt"
                  />
                  <p class="name ellipsis">
                    【包邮】优雅香槟杯气泡酒杯高脚杯2支装
                  </p>
                  <p class="price">&yen;89</p>
                </router-link>
                <router-link to="/">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                    alt="alt"
                  />
                  <p class="name ellipsis">
                    【包邮】优雅香槟杯气泡酒杯高脚杯2支装
                  </p>
                  <p class="price">&yen;89</p>
                </router-link>
              </div>
            </li>
            <li class="carousel-item fade">
              <div class="slider">
                <router-link to="/">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                    alt="alt"
                  />
                  <p class="name ellipsis">
                    【包邮】优雅香槟杯气泡酒杯高脚杯2支装
                  </p>
                  <p class="price">&yen;89</p>
                </router-link>
                <router-link to="/">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                    alt="alt"
                  />
                  <p class="name ellipsis">
                    【包邮】优雅香槟杯气泡酒杯高脚杯2支装
                  </p>
                  <p class="price">&yen;89</p>
                </router-link>
                <router-link to="/">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                    alt="alt"
                  />
                  <p class="name ellipsis">
                    【包邮】优雅香槟杯气泡酒杯高脚杯2支装
                  </p>
                  <p class="price">&yen;89</p>
                </router-link>
                <router-link to="/">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/12a882699bd531a1bd428bffe1989525.jpg"
                    alt="alt"
                  />
                  <p class="name ellipsis">
                    【包邮】优雅香槟杯气泡酒杯高脚杯2支装
                  </p>
                  <p class="price">&yen;89</p>
                </router-link>
              </div>
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
            <span class="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <!-- tabs -->
      <div class="goods-tabs">
        <nav>
          <a class="active" href="javascript:;">商品详情</a>
          <a href="javascript:;">商品评价<span>(500+)</span></a>
        </nav>
        <!-- 商品详情 -->
        <div class="goods-detail">
          <!-- 属性 -->
          <ul class="attrs">
            <li>
              <span class="dt">鞋型</span>
              <span class="dd">登山鞋、徒步鞋</span>
            </li>
          </ul>
          <!-- 图片 -->
          <img
            src="https://yanxuan-item.nosdn.127.net/f72298bac718b8250fc61d5818a65ec7.jpg"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/f72298bac718b8250fc61d5818a65ec7.jpg"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/f72298bac718b8250fc61d5818a65ec7.jpg"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/f72298bac718b8250fc61d5818a65ec7.jpg"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/f72298bac718b8250fc61d5818a65ec7.jpg"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/f72298bac718b8250fc61d5818a65ec7.jpg"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/f72298bac718b8250fc61d5818a65ec7.jpg"
          />
        </div>
        <!-- 商品评价 -->
        <div class="goods-comment">
          <!-- 评价头部 -->
          <div class="head">
            <div class="data">
              <p><span>14343</span><span>人购买</span></p>
              <p><span>99.5%</span><span>好评率</span></p>
            </div>
            <div class="tags">
              <div class="dt">大家都在说：</div>
              <div class="dd">
                <a href="javascript:;" class="active">全部评价（3343）</a>
                <a href="javascript:;">有图（3343）</a>
                <a href="javascript:;">音质好（3343）</a>
                <a href="javascript:;">充电快（3343）</a>
                <a href="javascript:;">完美（3343）</a>
              </div>
            </div>
          </div>
          <div class="sort">
            <span>排序：</span>
            <a href="javascript:;" class="active">默认</a>
            <a href="javascript:;">最新</a>
            <a href="javascript:;">最热</a>
          </div>
          <!-- 评价列表 -->
          <div class="list">
            <!-- 评论项 -->
            <div class="item">
              <div class="user">
                <img
                  src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/avatar_1.png"
                  alt=""
                />
                <span>兔****y</span>
              </div>
              <div class="body">
                <div class="score">
                  <i
                    v-for="i in 4"
                    :key="i + 's'"
                    class="iconfont icon-wjx01"
                  ></i>
                  <i
                    v-for="i in 5 - 1"
                    :key="i + 'k'"
                    class="iconfont icon-wjx02"
                  ></i>
                  <span class="attr">颜色：白色 尺寸：10cm 产地：美国</span>
                </div>
                <div class="text">
                  昨天下单，今天中午开锅就试着烧了五花肉，耗时30分钟，一切都刚刚好，比以前的锅烧出来口感汤汁都好多了，且价格实惠！建议购买！
                </div>
                <!-- 评论图片 -->
                <div class="goods-comment-image">
                  <div class="list">
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="time">
                  <span>2021-04-03 13:20:32</span>
                  <span class="zan"
                    ><i class="iconfont icon-dianzan"></i>1455</span
                  >
                </div>
              </div>
            </div>
            <!-- 评论项 -->
            <div class="item">
              <div class="user">
                <img
                  src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/avatar_1.png"
                  alt=""
                />
                <span>兔****y</span>
              </div>
              <div class="body">
                <div class="score">
                  <i
                    v-for="i in 4"
                    :key="i + 's'"
                    class="iconfont icon-wjx01"
                  ></i>
                  <i
                    v-for="i in 5 - 1"
                    :key="i + 'k'"
                    class="iconfont icon-wjx02"
                  ></i>
                  <span class="attr">颜色：白色 尺寸：10cm 产地：美国</span>
                </div>
                <div class="text">
                  昨天下单，今天中午开锅就试着烧了五花肉，耗时30分钟，一切都刚刚好，比以前的锅烧出来口感汤汁都好多了，且价格实惠！建议购买！
                </div>
                <!-- 评论图片 -->
                <div class="goods-comment-image">
                  <div class="list">
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="time">
                  <span>2021-04-03 13:20:32</span>
                  <span class="zan"
                    ><i class="iconfont icon-dianzan"></i>1455</span
                  >
                </div>
              </div>
            </div>
            <!-- 评论项 -->
            <div class="item">
              <div class="user">
                <img
                  src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/avatar_1.png"
                  alt=""
                />
                <span>兔****y</span>
              </div>
              <div class="body">
                <div class="score">
                  <i
                    v-for="i in 4"
                    :key="i + 's'"
                    class="iconfont icon-wjx01"
                  ></i>
                  <i
                    v-for="i in 5 - 1"
                    :key="i + 'k'"
                    class="iconfont icon-wjx02"
                  ></i>
                  <span class="attr">颜色：白色 尺寸：10cm 产地：美国</span>
                </div>
                <div class="text">
                  昨天下单，今天中午开锅就试着烧了五花肉，耗时30分钟，一切都刚刚好，比以前的锅烧出来口感汤汁都好多了，且价格实惠！建议购买！
                </div>
                <!-- 评论图片 -->
                <div class="goods-comment-image">
                  <div class="list">
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                    <a href="javascript:;">
                      <img
                        src="https://yanxuan.nosdn.127.net/6cb114f4b71ce2ca51eeea4cbf761a2a.jpg?type=webp&imageView&quality=95&thumbnail=603x438"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="time">
                  <span>2021-04-03 13:20:32</span>
                  <span class="zan"
                    ><i class="iconfont icon-dianzan"></i>1455</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <div class="pagination">
            <a class="disabled" href="javascript:;">上一页</a>
            <span>...</span>
            <a href="javascript:;" class="active"> 1 </a>
            <a href="javascript:;"> 2 </a>
            <a href="javascript:;"> 3 </a>
            <a href="javascript:;"> 4 </a>
            <a href="javascript:;"> 5 </a>
            <span>...</span>
            <a class="disabled" href="javascript:;">下一页</a>
          </div>
        </div>
      </div>

      <!-- 注意事项 -->
      <div class="goods-warn">
        <h3>注意事项</h3>
        <p class="tit">• 购买运费如何收取？</p>
        <p>
          单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费)
        </p>
        <br />
        <p class="tit">• 使用什么快递发货?</p>
        <p>默认使用顺丰快递发货(个别商品使用其他快递）</p>
        <p>配送范围覆盖全国大部分地区(港澳台地区除外）</p>
        <br />
        <p class="tit">• 如何申请退货?</p>
        <p>
          1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
        </p>
        <p>2.内裤和食品等特殊商品无质量问题不支持退货；</p>
        <p>
          3.退货流程：
          确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；
        </p>
        <p>
          4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
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

// 图片预览
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .zoom-img {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 410px;
    top: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
    z-index: 9999;
  }

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    cursor: move;
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
// 图片预览样式结束

// 商品销售样式
.goods-sales {
  display: flex;
  width: 400px;
  align-items: center;
  text-align: center;
  height: 140px;
  li {
    flex: 1;
    position: relative;
    ~ li::after {
      position: absolute;
      top: 10px;
      left: 0;
      height: 60px;
      border-left: 1px solid #e4e4e4;
      content: '';
    }
    p {
      &:first-child {
        color: #999;
      }
      &:nth-child(2) {
        color: $priceColor;
        margin-top: 10px;
      }
      &:last-child {
        color: #666;
        margin-top: 10px;
        i {
          color: $xtxColor;
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: $xtxColor;
          cursor: pointer;
        }
      }
    }
  }
}
// 商品销售样式结束

// 商品基本信息
.goods-spec {
  .g-name {
    font-size: 22px;
  }
  .g-desc {
    color: #999;
    margin-top: 10px;
  }
  .g-price {
    margin-top: 10px;
    span {
      &::before {
        content: '¥';
        font-size: 14px;
      }
      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }
      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }
  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;
    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;
      dt {
        width: 50px;
        color: #999;
      }
      dd {
        color: #666;
        &:last-child {
          span {
            margin-right: 10px;
            &::before {
              content: '•';
              color: $xtxColor;
              margin-right: 2px;
            }
          }
          a {
            color: $xtxColor;
          }
        }
      }
    }
  }
}
// 商品基本信息结束

// 城市选择器
.city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
// 城市选择器样式结束

// sku 样式
.sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: $xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      line-height: 40px;
      > img {
        width: 50px;
        height: 50px;
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
      }
    }
  }
}
// sku 样式结束

// 计数器样式
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
// 计数器样式结束

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
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: $xtxColor;
  background: $xtxColor;
  color: #fff;
}
.plain {
  border-color: $xtxColor;
  color: $xtxColor;
  background: lighten($xtxColor, 50%);
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
// 按钮样式结束

// 商品推荐样式
.goods-relevant {
  background: #fff;
  min-height: 460px;
  margin-top: 20px;
  .header {
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    .title {
      font-size: 20px;
      padding-left: 10px;
    }
    .icon {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-top: 4px solid $xtxColor;
      border-right: 4px solid $xtxColor;
      box-sizing: border-box;
      position: relative;
      transform: rotate(45deg);
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 2px;
        background: lighten($xtxColor, 40%);
      }
    }
  }
}

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
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: transparent;
      color: #ddd;
      border-radius: 50%;
      position: absolute;
      top: 110px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
}

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
.carousel {
  height: 380px;
  &-indicator {
    bottom: 30px;
    span {
      &.active {
        background: $xtxColor;
      }
    }
  }
  &-btn {
    top: 110px;
    opacity: 1;
    background: rgba(0, 0, 0, 0);
    color: #ddd;
    i {
      font-size: 30px;
    }
  }
}
// 商品推荐样式结束

// tabs 样式处理
.goods-tabs {
  margin-top: 20px;
  min-height: 600px;
  background: #fff;
  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;
      > span {
        color: $priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
      &:first-child {
        border-right: 1px solid #f5f5f5;
      }
      &.active {
        &::before {
          content: '';
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: $xtxColor;
        }
      }
    }
  }
}
// tabs 样式处理结束

// 商品详情样式
.goods-detail {
  padding: 40px;
  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;
      .dt {
        width: 100px;
        color: #999;
      }
      .dd {
        flex: 1;
        color: #666;
      }
    }
  }
  > img {
    width: 100%;
  }
}
// 商品详情样式结束

// 商品评价样式
.goods-comment {
  .head {
    display: flex;
    padding: 30px 0;
    .data {
      width: 340px;
      display: flex;
      padding: 20px;
      p {
        flex: 1;
        text-align: center;
        span {
          display: block;
          &:first-child {
            font-size: 32px;
            color: $priceColor;
          }
          &:last-child {
            color: #999;
          }
        }
      }
    }
    .tags {
      flex: 1;
      display: flex;
      border-left: 1px solid #f5f5f5;
      .dt {
        font-weight: bold;
        width: 100px;
        text-align: right;
        line-height: 42px;
      }
      .dd {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        > a {
          width: 132px;
          height: 42px;
          margin-left: 20px;
          margin-bottom: 20px;
          border-radius: 4px;
          border: 1px solid #e4e4e4;
          background: #f5f5f5;
          color: #999;
          text-align: center;
          line-height: 40px;
          &:hover {
            border-color: $xtxColor;
            background: lighten($xtxColor, 50%);
            color: $xtxColor;
          }
          &.active {
            border-color: $xtxColor;
            background: $xtxColor;
            color: #fff;
          }
        }
      }
    }
  }
  .sort {
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin: 0 20px;
    color: #666;
    > span {
      margin-left: 20px;
    }
    > a {
      margin-left: 30px;
      &.active,
      &:hover {
        color: $xtxColor;
      }
    }
  }

  .list {
    padding: 0 20px;
    .item {
      display: flex;
      padding: 25px 10px;
      border-bottom: 1px solid #f5f5f5;
      .user {
        width: 160px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
        }
        span {
          padding-left: 10px;
          color: #666;
        }
      }
      .body {
        flex: 1;
        .score {
          line-height: 40px;
          .iconfont {
            color: #ff9240;
            padding-right: 3px;
          }
          .attr {
            padding-left: 10px;
            color: #666;
          }
        }
      }
      .text {
        color: #666;
        line-height: 24px;
      }
      .time {
        color: #999;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
      }
    }
  }
}
// 商品评价样式结束

// 评论图片样式
.goods-comment-image {
  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    a {
      width: 120px;
      height: 120px;
      border: 1px solid #e4e4e4;
      margin-right: 20px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      &.active {
        border-color: $xtxColor;
      }
    }
  }
}
// 评论图片样式结束

// 分页器样式
.pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
  > a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    &:hover {
      color: $xtxColor;
    }
    &.active {
      background: $xtxColor;
      color: #fff;
      border-color: $xtxColor;
    }
    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        color: #333;
      }
    }
  }
  > span {
    margin-right: 10px;
  }
}
// 分页器样式结束

// 注意事项样式
.goods-warn {
  margin-top: 20px;
  background: #fff;
  padding-bottom: 40px;
  h3 {
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #f5f5f5;
    padding-left: 50px;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  p {
    line-height: 40px;
    padding: 0 25px;
    color: #666;
    &.tit {
      color: #333;
    }
  }
}
// 注意事项样式结束
</style>
