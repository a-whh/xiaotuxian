import request from '../utils/request'

// 获取-全部分类(包含推荐商品)
export function getAllCategory() {
  return request({
    url: '/home/category/head'
  })
}
