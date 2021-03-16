<template>
  <nav-bar />

  <div class="container">
    <div class="d-flex align-items-center my-4">
      <div class="mr-auto">
        <h3><slot name="header-name" /></h3>
      </div>

      <div class="ml-auto">
        <slot name="header-actions" />
      </div>
    </div>
  </div>

  <div class="container">
    <slot />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>