<template>
  <div class="container">
    <div class="d-flex flex-row-reverse p-3">
      <router-link :to="{ name: 'admin.post.create' }">
        <button class="btn btn-primary">Créer une page</button>
      </router-link>
    </div>

    <PostsList :isPostsEditable="true" />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList";

export default {
  components: {
    PostsList,
  },
};
</script>