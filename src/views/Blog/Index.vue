<template>
  <layout-app>
    <posts-list />
  </layout-app>
</template>

<script>
import LayoutApp from "@/layouts/LayoutApp";
import PostsList from "@/components/PostsList";

export default {
  components: {
    LayoutApp,
    PostsList,
  },
};
</script>