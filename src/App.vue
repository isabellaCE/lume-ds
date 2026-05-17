<script setup>
import { RouterLink, useRoute } from "vue-router";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppSidebar from "@/components/layout/AppSidebar.vue";
</script>

<template>
  <a class="skip-link" href="#main">Pular para o conteúdo principal</a>
  <AppHeader />
  <div class="shell">
    <AppSidebar />
    <main id="main" class="main-content" tabindex="-1">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@use "@/styles/tokens" as t;

.shell {
  display: grid;
  grid-template-columns: #{t.$sidebar-w} 1fr;
  min-height: calc(100vh - #{t.$header-h});
}

.main-content {
  padding: 40px 48px 80px;
  min-width: 0;
  background: var(--bg);
  outline: none;
}

@media (max-width: 900px) {
  .shell { grid-template-columns: 1fr; }
  .main-content { padding: 24px; }
}
</style>
