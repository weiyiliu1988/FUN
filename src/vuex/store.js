import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  current: 0,
  articles: null,
  tags: null
}
let getters = {
  nextArticle: state => {
    let next = state.current + 1
    if (next < state.articles.length) {
      return state.articles[next]
    } else {
      return state.articles[0]
    }
  },
  prevArticle: state => {
    if (state.current === 0) {
      return state.articles[state.articles.length - 1]
    } else {
      return state.articles[state.current - 1]
    }
  }
}

let actions = {
}
let mutations = {
  saveArticles (state, articles) {
    state.articles = articles
  },
  saveTags (state, tags) {
    state.tags = tags
  },
  setCurrent (state, currentId) {
    if (typeof currentId === 'number') {
      state.current = currentId
    } else {
      let articles = state.articles
      let len = articles.length
      for (let i = 0; i < len; i++) {
        if (articles[i].id === currentId) {
          state.current = i
          return
        }
      }
    }
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
