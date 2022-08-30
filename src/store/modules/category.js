import { filterGoods, getList } from '@/api/category.js'

const getDefaultState = () => {
  return {
    name: '',
    parentName: '',
    brands: [],
    categories: [],
    saleProperties: [],
    bare: false
  }
}

const state = getDefaultState()

const mutations = {
  SETNAME(state, name) {
    state.name = name
  },
  SETparentName(state, name) {
    state.parentName = name
  },
  SETbrands(state, brands) {
    brands.unshift({
      id: '0',
      name: '全部'
    })
    state.brands = brands
  },
  SET_categories(state, goods) {
    state.categories = goods
  },
  SETgoods(state, saleProperties) {
    saleProperties.forEach(item => {
      item.properties.unshift({
        id: '0',
        name: '全部'
      })
      item.isCurrent = '0'
    })
    state.saleProperties = saleProperties
  },
  changActive(state, arr) {
    state.saleProperties.forEach(item => {
      if (item.id === arr[0]) {
        item.isCurrent = arr[1]
      }
    })
  },
  ADD_categories(state, goods) {
    state.categories.push(...goods)
  },
  // 空了
  SETNULL(state, n) {
    state.bare = n
  },
  SETBARE(state) {
    state.bare = false
  },
  clear(state) {
    state.categories = []
  }
}

const actions = {
  filter: async({ commit }, id) => {
    const res = await filterGoods(id)
    commit('SETNAME', res.name)
    commit('SETparentName', res.parentName)
    commit('SETbrands', res.brands)
    commit('SETgoods', res.saleProperties)
  },
  getlistBybrand: async({ commit }, obj) => {
    if (obj.page === 1) {
      commit('clear')
    }
    const res = await getList(obj)
    commit('SET_categories', res.items)
  },
  addgoodsList: async({ commit }, obj) => {
    const res = await getList(obj)
    commit('ADD_categories', res.items)
    if (res.items.length === 0) {
      commit('SETNULL', true)
    }
    console.log(res)
  }
}

export default {
  // 设置此属性代表 此模块为独立的模块
  namespaced: true,
  state,
  mutations,
  actions
}
