import request from '../utils/request'

// 获取-二级分类列表
export function getAllCategory(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

// 二级类目-筛选条件-PC
export function filterGoods(id) {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

// 商品列表_临时
export function getList(data) {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
