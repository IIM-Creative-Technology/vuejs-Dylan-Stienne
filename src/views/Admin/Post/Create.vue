<template>
  <layout-app>
    <template #header-name>Créer une nouvelle page de blog</template>

    <form-post-informations />
  </layout-app>
</template>

<script>
import LayoutApp from "@/layouts/LayoutApp";
import FormPostInformations from "@/components/FormPostInformations";

export default {
  components: {
    LayoutApp,
    FormPostInformations,
  },
};
</script>