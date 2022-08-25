<!-- 新鲜好物 -->
<template>
 <div  class="home-new" ref="target">
    <!-- panel 面板组件 -->
    <universal-panel title="新鲜好物" littleTitle="新鲜出炉 品质靠谱">
      <!-- 右侧插槽 -->
      <template #right>
        <!-- 更多组件 -->
        <m-more></m-more>
      </template>
      <!-- 内容插槽 -->
      <template #default>
        <!-- 面板内容 -->
        <transition name="fade">
          <!-- 面板内容 -->
           <ul class="goods-list" v-if="flashGoods.length === 0">
            <li class="hover-shadow" v-for="item in 4" :key="item" >
            <m-skeleton></m-skeleton>
            </li>
           </ul>
          <ul class="goods-list" v-else>
            <li class="hover-shadow"  v-for="item in flashGoods" :key="item.id">
              <router-link :to="`/product/${item.id}`">
                <img
                  :src="item.picture"
                />
                <p class="name ellipsis">{{item.name}}</p>
                <p class="price">&yen;{{item.price}}</p>
              </router-link>
            </li>

          </ul>
        </transition>
      </template>
    </universal-panel>
  </div>
</template>

<script setup>
import { getFlashList } from '@/api/Home'
import UniversalPanel from './Universal-panel.vue'
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
const flashGoods = ref([])
// 获取数据
const getFlashgoods = async () => {
  flashGoods.value = await getFlashList(4)
}
// getFlashgoods()

// 懒加载
const target = ref(null)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      getFlashgoods()
      stop() /// / 关闭监听
    }
  }
)

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

// 新鲜好物样式结束
</style>
