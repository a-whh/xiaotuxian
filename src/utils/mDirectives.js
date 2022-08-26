import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
export default {
  install(app) {
    app.directive('lazy', {
      mounted(el) {
        const imgurl = el.src
        el.src = ''
        el.style.background = `no-repeat center/contain url(${defaultImg})`
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
              stop()
              el.src = imgurl
              el.onload = () => {
                el.style.background = ''
              }
            }
          }
        )
      }
    })
  }
}
