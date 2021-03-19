import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [{
      "title": "Post 1",
      "slug": "post-1",
      "image_url": "https://via.placeholder.com/320x220/381311",
      "content": "Content post 1",
      "meta_title": "meta title post 1",
      "meta_desc": "meta description post 1",
      "created_at": "3 Mars 2020",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Post 2",
      "slug": "post-2",
      "image_url": "https://via.placeholder.com/320x220/001100",
      "content": "Content post 2",
      "meta_title": "meta title post 2",
      "meta_desc": "meta description post 2",
      "created_at": "3 Mars 2020",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Post 3",
      "slug": "post-3",
      "image_url": "https://via.placeholder.com/320x220/323200",
      "content": "Content post 3",
      "meta_title": "meta title post 3",
      "meta_desc": "meta description post 3",
      "created_at": "3 Mars 2020",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Post 4",
      "slug": "post-4",
      "image_url": "https://via.placeholder.com/320x220/123123",
      "content": "Content post 4",
      "meta_title": "meta title post 4",
      "meta_desc": "meta description post 4",
      "created_at": "3 Mars 2020",
      "author": {
        "first_name": "Dylan",
        "last_name": "STIENNE",
        "image_url": "https://via.placeholder.com/160x160/311353"
      }
    },
    {
      "title": "Post 5",
      "slug": "post-5",
      "image_url": "https://via.placeholder.com/320x220/113253",
      "content": "Content post 5",
      "meta_title": "meta title post 5",
      "meta_desc": "meta description post 5",
      "created_at": "3 Mars 2020",
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
    UPDATE_POST(state, payload) {
      state.posts[state.posts.findIndex(post => post.slug === payload.slug)] = payload.post
    },
    DELETE_POST(state, slug) {
      state.posts.splice(state.posts.findIndex(post => post.slug === slug), 1);
    }
  },
  actions: {
    createPost(context, post) {
      context.commit('CREATE_POST', post);
    },
    updatePost(context, payload) {
      context.commit('UPDATE_POST', payload);
    },
    deletePost(context, slug) {
      context.commit('DELETE_POST', slug);
    },
  },
  modules: {
  }
})
