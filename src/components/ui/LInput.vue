<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
  label:       { type: String, default: "" },
  type:        { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  hint:        { type: String, default: "" },
  error:       { type: String, default: "" },
  disabled:    { type: Boolean, default: false }
});
const emit = defineEmits(["update:modelValue"]);
const id = computed(() => `input-${Math.random().toString(36).slice(2)}`);
</script>

<template>
  <div class="l-field" :class="{ 'l-field--error': error }">
    <label v-if="label" :for="id" class="l-field__label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="error ? 'true' : undefined"
      class="l-field__input"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <p v-if="hint && !error" class="l-field__hint">{{ hint }}</p>
    <p v-if="error" class="l-field__error" role="alert">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.l-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 340px;
}

.l-field__label {
  font-size: 1rem;
  font-weight: 700;
  color: var(--input-label-fg);
}

.l-field__input {
  appearance: none;
  height: 52px;
  padding: 0 14px;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: t.$radius-md;
  color: var(--input-fg);
  font-family: t.$font-sans;
  font-size: 1rem;
  width: 100%;
  transition: border-color .15s;

  &::placeholder { color: var(--input-placeholder); }
  &:focus-visible {
    outline: 3px solid var(--focus-ring);
    outline-offset: 2px;
    border-color: var(--accent);
  }
  &:disabled { opacity: .5; cursor: not-allowed; }
}

.l-field--error .l-field__input {
  border: 2px solid var(--input-error-border);
}

.l-field__hint {
  font-size: 0.8125rem;
  color: var(--input-hint-fg);
  margin: 0;
}

.l-field__error {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--input-error-fg);
  margin: 0;
}
</style>
