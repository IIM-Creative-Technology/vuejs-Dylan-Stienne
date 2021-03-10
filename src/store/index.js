import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [{
      "title": "Post 1",
      "slug": "post-1",
      "image_url": "https://via.placeholder.com/320x220/381353",
      "content": "Lorem lorem lorem ",
      "created_at": "XXX",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Post 2",
      "slug": "post-2",
      "image_url": "https://via.placeholder.com/320x220/381353",
      "content": "Lorem lorem lorem Lorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem lorem",
      "created_at": "XXX",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Post 3",
      "slug": "post-3",
      "image_url": "https://via.placeholder.com/320x220/381353",
      "content": "Lorem lorem lorem coucou.",
      "created_at": "XXX",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Post 4",
      "slug": "post-4",
      "image_url": "https://via.placeholder.com/320x220/381353",
      "content": "Lorem lorem lorem Lorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem lorem",
      "created_at": "XXX",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Post 5",
      "slug": "post-5",
      "image_url": "https://via.placeholder.com/320x220/381353",
      "content": "Lorem lorem lorem Lorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem loremLorem lorem lorem",
      "created_at": "XXX",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },



    ],
  },
  mutations: {
    CREATE_ARTICLE(state, post) {
      state.posts.push(post);
    }
  },
  actions: {
    createPost(context, post) {
      context.commit('CREATE_ARTICLE', post);
    },
  },
  modules: {
  }
})
