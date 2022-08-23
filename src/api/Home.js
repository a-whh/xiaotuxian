import request from '../utils/request'

// 获取-全部分类(包含推荐商品)
export function getAllCategory() {
  return request({
    url: '/home/category/head'
  })
}

// 获取-热门品牌
export function getbrand() {
  return request({
    url: '/home/brand',
    params: {
      limit: 6
    }
  })
}

// 获取-轮播图数据
export function getbannerData(distributionSite) {
  return request({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}
