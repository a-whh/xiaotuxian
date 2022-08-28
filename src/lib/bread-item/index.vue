<template>
  <div class="bread-item">
    <router-link v-if="to" :to="to">
      <slot />
    </router-link>
    <span v-else><slot /> </span>
    <!-- <i class="iconfont icon-angle-right"></i> -->
  </div>
</template>

<script>
export default {
  props: {
    to: String
  }
}

</script>

<style lang="scss" scoped></style>
