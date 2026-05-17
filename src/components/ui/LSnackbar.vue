<script setup>
const props = defineProps({
  type: { type: String, default: "success", validator: (t) => ["success","danger","info","warning"].includes(t) }
});
</script>

<template>
  <div class="l-snackbar" :class="`l-snackbar--${type}`" role="status">
    <p class="l-snackbar__text"><slot /></p>
  </div>
</template>

<style scoped>
.l-snackbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-5);
  border-radius: var(--radius-md);
  border: var(--border-1) solid;
  text-align: center;
}

.l-snackbar__text {
  margin: 0;
  font-size: var(--text-base);
  line-height: var(--lh-relaxed);
  max-width: 60ch;
}

.l-snackbar--success { background: var(--success-bg); border-color: var(--success-border); color: var(--success-fg); }
.l-snackbar--danger  { background: var(--danger-bg);  border-color: var(--danger-border);  color: var(--danger-fg);  }
.l-snackbar--warning { background: var(--warning-bg); border-color: var(--warning-border); color: var(--warning-fg); }
.l-snackbar--info    { background: var(--info-bg);    border-color: var(--info-border);    color: var(--info-fg);    }
</style>
