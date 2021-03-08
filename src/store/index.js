import { createStore } from 'vuex'

export default createStore({
  state: {
    articles: [{
      "title": "Article 1",
      "slug": "article-1",
      "image_url": "XXX",
      "content": "Lorem lorem lorem .....",
      "created_at": "https://via.placeholder.com/320x220/381353",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Article 1",
      "slug": "article-1",
      "image_url": "XXX",
      "content": "Lorem lorem lorem .....",
      "created_at": "https://via.placeholder.com/320x220/381353",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Article 1",
      "slug": "article-1",
      "image_url": "XXX",
      "content": "Lorem lorem lorem .....",
      "created_at": "https://via.placeholder.com/320x220/381353",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },



    ],
  },
  mutations: {
    CREATE_ARTICLE(state, article) {
      state.articles.push(article);
    }
  },
  actions: {
    createArticle(context, article) {
      context.commit('CREATE_ARTICLE', article);
    },
  },
  modules: {
  }
})
