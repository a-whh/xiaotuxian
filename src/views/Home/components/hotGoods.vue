<!-- 人气推荐 -->
<template>
   <div ref="target" class="home-hot">
    <UniversalPanel title="人气推荐" littleTitle="人气爆款 不容错过" >
      <!-- 右侧插槽 -->
      <template #right>
        <!-- 更多组件 -->
        <m-more to="/"></m-more>
      </template>
      <!-- 内容插槽 -->
      <template #default>
        <!-- 面板内容 -->
        <transition name="fade">
          <!-- 面板内容 -->
           <ul class="goods-list" v-if="hotGoods.length === 0">
            <li class="hover-shadow" v-for="item in 4" :key="item" >
            <!-- 骨架 正在加载时的样式 -->
            <m-skeleton></m-skeleton>
            </li>
            </ul>
          <ul class="goods-list" v-else >
             <li class="hover-shadow"  v-for="item in hotGoods" :key="item.id">
              <router-link to="/">
                <img v-lazy
                  :src="item.picture"
                />
                <p class="name">{{item.title}}</p>
                <p class="desc">{{item.alt}}</p>
              </router-link>
            </li>
          </ul>
        </transition>
      </template>
    </UniversalPanel>
  </div>
</template>

<script setup>
// API
import { getHotList } from '@/api/Home.js'
import { ref } from 'vue'
import UniversalPanel from './Universal-panel.vue'
import { useIntersectionObserver } from '@vueuse/core'
const hotGoods = ref([])
const getList = async () => {
  hotGoods.value = await getHotList()
}

const target = ref(null)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      getList()
      stop()
    }
  }
)

</script>

<style lang="scss" scoped>
// 人气爆款
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}

</style>
