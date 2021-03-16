<template>
  <router-link :to="to">
    <button class="btn w-100" :class="getColorClass()">
      <slot />
    </button>
  </router-link>
</template>

<script>
export default {
  props: {
    to: null,
    color: {
      default: "primary",
    },
  },
  methods: {
    getColorClass() {
      return `btn-${this.color}`;
    },
  },
};
</script>