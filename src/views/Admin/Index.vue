<template>
  <layout-app>
    <template #header-actions>
      <button-link :to="{ name: 'admin.post.create' }">
        Créer une page
      </button-link>
    </template>

    <posts-list :isPostsEditable="true" />
  </layout-app>
</template>

<script>
import LayoutApp from "@/layouts/LayoutApp";
import PostsList from "@/components/PostsList";
import ButtonLink from "@/components/ButtonLink";

export default {
  components: {
    LayoutApp,
    PostsList,
    ButtonLink,
  },
};
</script>