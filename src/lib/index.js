import homeBanner from './homeBanner.vue'
import skeleton from './skeleton.vue'
import more from './more.vue'

export default {
  install(app) {
    app.component('m-banner', homeBanner)
    app.component('m-more', more)
    app.component('m-skeleton', skeleton)
  }
}
