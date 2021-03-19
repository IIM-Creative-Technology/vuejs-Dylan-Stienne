<template>
  <layout-app>
    <template #header-name>Éditer la page de blog</template>
    <template #header-actions>
      <button-link :to="{ name: 'admin.post.create' }">
        Créer une page
      </button-link>
    </template>

    <div class="w-100 d-flex">
      <div class="w-50 mr-2">
        <posts-list :isPostsEditable="true" pageSize="3" />
      </div>
      <div class="w-50 ml-2">
        <form-post-informations
          :key="$route.fullPath"
          :slug="this.$route.params.slug"
          class="p-2 border rounded"
        />
      </div>
    </div>
  </layout-app>
</template>

<script>
import LayoutApp from "@/layouts/LayoutApp";
import FormPostInformations from "@/components/FormPostInformations";
import PostsList from "@/components/PostsList";
import ButtonLink from "@/components/ButtonLink";

export default {
  components: {
    LayoutApp,
    PostsList,
    ButtonLink,
    FormPostInformations,
  },
};
</script>