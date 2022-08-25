import { getAllCategory, getbrand } from '@/api/Home.js'

const getDefaultState = () => {
  return {
    categoryList: [
      {
        id: '1005000',
        name: '居家'
      },
      {
        id: '1005002',
        name: '美食'
      },
      {
        id: '1010000',
        name: '服饰'
      },
      {
        id: '1011000',
        name: '母婴'
      },
      {
        id: '1013001',
        name: '个护'
      },
      {
        id: '1019000',
        name: '严选'
      },
      {
        id: '1043000',
        name: '数码'
      },
      {
        id: '109243029',
        name: '运动'
      },
      {
        id: '19999999',
        name: '杂项'
      }
    ] || [],
    brandList: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_categoryList: (state, newLis) => {
    state.categoryList = newLis
  },
  SET_brandList: (state, newLis) => {
    state.brandList = newLis
  }
}

const actions = {
  async getCategoryList({ commit }) {
    const res = await getAllCategory()
    commit('SET_categoryList', res)
  },
  async getBrandList({ commit }) {
    const res = await getbrand()
    commit('SET_brandList', res)
  }

}

export default {
  // 设置此属性代表 此模块为独立的模块
  namespaced: true,
  state,
  mutations,
  actions
}
