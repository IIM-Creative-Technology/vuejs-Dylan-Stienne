<template>
  <div class="container rounded bg-light p-3">
    <div class="d-flex align-items-center flex-column">
      <img
        :src="post?.image_url"
        :alt="post?.meta_title"
        class="rounded overflow-hidden border bg-light"
      />
    </div>
    <h1 class="mt-3">{{ post.title }}</h1>
    <div class="mt-2">
      {{ post.content }}
    </div>

    <div class="d-flex justify-content-between align-items-center pt-3 mt-3 border-top">
      <div>Posté le {{ post.created_at }}</div>
      <div class="d-flex">
        <img
          :src="post?.author?.image_url"
          :alt="post?.author?.first_name"
          style="width: 50px; height: 50px"
          class="rounded-circle overflow-hidden border bg-light"
        />
        <div class="d-flex flex-column justify-content-center ml-3">
          <span>{{ post?.author?.first_name }}</span>
          <span>{{ post?.author?.last_name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    slug: null,
  },
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    ...mapState({
      getPost(state) {
        const index = state.posts.findIndex((post) => post.slug == this.slug);
        this.post = state.posts[index];
        document.title = this.post.meta_title;
        document.description = this.post.meta_desc;
      },
    }),
  },
};
</script>