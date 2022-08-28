import homeBanner from './homeBanner.vue'
import skeleton from './skeleton.vue'
import more from './more.vue'
import bread from './bread'
import breadItem from './bread-item'

export default {
  install(app) {
    app.component('m-banner', homeBanner)
    app.component('m-more', more)
    app.component('m-skeleton', skeleton)
    app.component('m-bread', bread)
    app.component('m-bread-item', breadItem)
  }
}
