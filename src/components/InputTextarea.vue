<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <textarea
      class="form-control"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      rows="10"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: null,
    label: null,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      id: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 6),
    };
  },
};
</script>