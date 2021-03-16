<template>
  <div class="post-card">
    <img class="img" :src="post.image_url" :alt="post.title" />
    <div class="content">
      <h2>{{ post.title }}</h2>
      <p>
        {{ post.content.substring(0, 250) }}
        <span v-if="post.content.length > 250">...</span>
      </p>
    </div>
    <div class="actions" v-if="isEditable">
      <button-link
        class="mb-2"
        color="secondary"
        :to="{ name: 'admin.post.edit', params: { slug: post.slug } }"
      >
        Editer
      </button-link>

      <button-custom color="danger" @click="deletePost(post.slug)">
        Supprimer
      </button-custom>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ButtonLink from "@/components/ButtonLink";
import ButtonCustom from "@/components/ButtonCustom";

export default {
  components: {
    ButtonLink,
    ButtonCustom,
  },
  props: {
    isEditable: {
      default: false,
    },
    post: {
      default: {},
    },
  },
  methods: {
    ...mapActions(["deletePost"]),
  },
};
</script>

<style scoped lang="scss">
.post-card {
  width: 100%;
  height: 10rem;
  background-color: whitesmoke;
  display: flex !important;
  overflow: hidden;

  .img {
    width: 10rem;
    min-width: 10rem;
    height: 10rem;
    padding: 1rem;
    overflow: hidden;
    object-fit: cover;
  }

  .content {
    margin: 1rem;
    width: 100%;
    text-align: left;
    overflow: hidden;
    line-height: 1.3;
  }

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10rem;
    padding: 1rem;
  }
}
</style>