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
