<template>
  <layout-app>
    <post-display :slug="this.$route.params.slug" />
  </layout-app>
</template>

<script>
import LayoutApp from "@/layouts/LayoutApp";
import PostDisplay from "@/components/PostDisplay";

export default {
  components: {
    LayoutApp,
    PostDisplay,
  },
};
</script>