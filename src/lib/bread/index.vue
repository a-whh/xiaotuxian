
<script>
import { h } from 'vue'
export default {
  render() {
    const str = []
    this.$slots.default().forEach((item, index, arr) => {
      str.push(item)
      if (index !== arr.length - 1) {
        str.push(h(
          'i', { class: 'iconfont icon-angle-right' }
        ))
      }
    })
    return h('div', { class: 'bread' }, str)
  }

}

</script>

<style lang="scss" scoped>
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
</style>
