<script setup>
import WcagChip from "@/components/ui/WcagChip.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";
</script>

<template>
  <div class="page">
    <p class="breadcrumb">COMPONENTES / LUMELINK</p>
    <h1 class="page-title">Link</h1>
    <p class="page-desc">Navegação para outra página, âncora ou recurso. Sublinhado obrigatório — cor sozinha não basta.</p>

    <div class="chips">
      <WcagChip level="AA"  text="1.4.1 Uso de cor" />
      <WcagChip level="AA"  text="2.4.4 Finalidade do link" />
      <WcagChip level="AAA" text="2.4.9 Finalidade só pelo link" />
    </div>

    <section class="section">
      <span class="section-label">BOAS PRÁTICAS</span>
      <DoDontPair>
        <template #do-demo>
          <div class="demo-para">
            <p>Veja o <a href="#" @click.prevent class="demo-link">guia completo de contraste WCAG 2.2</a> com exemplos práticos.</p>
            <p class="demo-caption"><strong>Sublinhado + cor + texto descritivo.</strong> Funciona fora de contexto e para daltônicos.</p>
          </div>
        </template>
        <template #dont-demo>
          <div class="demo-para">
            <p>Para mais informações <a href="#" @click.prevent class="demo-link-bad">clique aqui</a>.</p>
            <p class="demo-caption-bad">"Clique aqui" é <strong>inútil para leitor de tela</strong> que lê só os links. Sem sublinhado falha em monocromático.</p>
          </div>
        </template>
      </DoDontPair>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;
.page { display: flex; flex-direction: column; gap: 40px; max-width: 1200px; }
.breadcrumb { font-size: 0.75rem; letter-spacing:.06em; color: var(--breadcrumb-fg); text-transform: uppercase; margin: 0; }
.page-title { font-size: clamp(2.25rem,4vw,3rem); font-weight: 700; color: var(--fg-1); margin: 0; }
.page-desc  { font-size: 1.125rem; line-height: 1.6; color: var(--fg-1); max-width: 72ch; margin: 0; }
.chips { display: flex; gap: 12px; flex-wrap: wrap; }
.section { display: flex; flex-direction: column; gap: 16px; }
.section-label { font-size: 0.6875rem; font-weight: 700; letter-spacing:.08em; color: var(--section-label-fg); text-transform: uppercase; }
.demo-para { display: flex; flex-direction: column; gap: 10px; p { margin: 0; font-size: 1rem; color: var(--fg-1); max-width: 100%; } }
.demo-link { color: var(--link); font-weight: 700; text-decoration: underline; text-decoration-thickness: 2px; }
.demo-caption { font-size: 0.875rem; color: var(--do-text-fg); }
.demo-link-bad { color: var(--link); text-decoration: none; }
.demo-caption-bad { font-size: 0.875rem; color: var(--dont-text-fg); }
</style>
