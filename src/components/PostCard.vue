<template>
  <div class="post-card rounded">
    <img class="img" :src="post.image_url" :alt="post.title" />
    <div class="content">
      <router-link
        style="text-decoration: none"
        class="bg-primary"
        :to="{ name: 'blog.post.show', params: { slug: post.slug } }"
      >
        <h2 class="text-dark">{{ post.title }}</h2>
      </router-link>

      <p>
        {{ post.meta_desc.substring(0, 250) }}
        <span v-if="post.meta_desc.length > 250">...</span>
      </p>
    </div>
    <div class="actions">
      <button-link
        class="mb-2"
        color="secondary"
        v-if="isEditable"
        :to="{ name: 'admin.post.edit', params: { slug: post.slug } }"
      >
        Editer
      </button-link>

      <button-custom
        v-if="isDeletable"
        color="danger"
        @click="deletePost(post.slug)"
      >
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
    isDeletable: {
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
    justify-content: flex-end;
    height: 10rem;
    padding: 1rem;
  }
}
</style>