<template>
  <button class="btn" :class="getColorClass()" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: "button",
    },
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