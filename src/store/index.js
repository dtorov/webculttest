import { createStore } from 'vuex'

export default createStore({
  state: {
    paints: [{
      id: 123,
      name: 'Рождение Венеры',
      author: 'Сандро Боттичелли',
      img: 'assets/img/mask-group@2x.png',
      price: 2000000,
      discount: 1000000,
      enabled: true
    },
    {
      id: 1234,
      name: 'Тайная вечеря',
      author: 'Леонардо да Винчи',
      img: 'assets/img/mask-group1@2x.png',
      price: 2000000,
      discount: 3000000,
      enabled: true
    },
    {
      id: 1235,
      name: 'Сотворение Адама',
      author: 'Микеланджело',
      img: 'assets/img/mask-group@2x.png',
      price: 6000000,
      discount: 5000000,
      enabled: true
    },
    {
      id: 1236,
      name: 'Урок анатомии',
      author: 'Рембрандт',
      img: 'assets/img/mask-group3@2x.png',
      price: 2000000,
      discount: 1000000,
      enabled: false,
      outOfSaleReason: 'Продана на аукционе'
    }],
    cart: window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : { items: [] }
  },
  getters: {
    getPaints: (state, getters, rootState) => {
      return state.paints
    }
  },
  mutations: {
    addItemTOCart (state, { item }) {
      state.cart.items.push(item.id)
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeItemFromCart (state, { item }) {
      state.cart.items.splice(state.cart.items.indexOf(item.id), 1)
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
    addItemTOCart ({ state, commit }, { item }) {
      commit('addItemTOCart', { item })
    },
    removeItemFromCart ({ state, commit }, { item }) {
      commit('removeItemFromCart', { item })
    }
  },
  modules: {
  }
})
