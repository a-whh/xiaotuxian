import request from '../utils/request'

// 获取-全部分类(包含推荐商品)
export function getAllCategory() {
  return request({
    url: '/home/category/head'
  })
}

// 获取-热门品牌
export function getbrand(num) {
  return request({
    url: '/home/brand',
    params: {
      limit: num
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

// 获取-新鲜好物
export function getFlashList(limit) {
  return request({
    url: '/home/new',
    params: {
      limit
    }
  })
}

// 获取-人气推荐
export function getHotList() {
  return request({
    url: '/home/hot'
  })
}
