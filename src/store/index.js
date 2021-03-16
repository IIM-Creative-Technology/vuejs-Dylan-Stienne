import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [{
      "title": "Post 1",
      "slug": "post-1",
      "image_url": "https://via.placeholder.com/320x220/381353",
      "content": "Lorem lorem lorem ",
      "meta_title": "meta title post 1",
      "meta_desc": "meta description post 1",
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
      "meta_title": "meta title post 2",
      "meta_desc": "meta description post 2",
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
      "meta_title": "meta title post 3",
      "meta_desc": "meta description post 3",
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
      "meta_title": "meta title post 4",
      "meta_desc": "meta description post 4",
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
      "meta_title": "meta title post 5",
      "meta_desc": "meta description post 5",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },



    ],
  },
  mutations: {
    CREATE_POST(state, post) {
      state.posts.push(post);
    },
    DELETE_POST(state, slug) {
      state.posts.splice(state.posts.findIndex(post => post.slug === slug), 1);
    }
  },
  actions: {
    createPost(context, post) {
      context.commit('CREATE_POST', post);
    },
    updatePost(context, slug, post) {
      context.commit('DELETE_POST', slug);
      context.commit('CREATE_POST', post);
    },
    deletePost(context, slug) {
      context.commit('DELETE_POST', slug);
    },
  },
  modules: {
  }
})
