<template>
  <div class="form-group input-group d-flex">
    <div class="input-group-prepend">
      <label class="input-group-text" :for="id">{{ label }}</label>
    </div>

    <input
      type="text"
      class="form-control"
      :id="id"
      :pattern="pattern"
      :required="required"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: null,
    pattern: null,
    label: null,
    required: { default: false },
    disabled: { default: false },
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