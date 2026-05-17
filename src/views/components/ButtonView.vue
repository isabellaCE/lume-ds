<script setup>
import WcagChip from "@/components/ui/WcagChip.vue";
import PreviewBox from "@/components/ui/PreviewBox.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";
import LButton from "@/components/ui/LButton.vue";
</script>

<template>
  <div class="page">
    <p class="breadcrumb">FOUNDATIONS / ESPAÇAMENTO</p>
    <h1 class="page-title">Botão</h1>
    <p class="page-desc">Aciona uma ação imediata. Sempre &lt;button&gt; semântico — nunca div ou span clicável.</p>

    <div class="chips">
      <WcagChip level="AAA" text="1.4.6 Contraste" />
      <WcagChip level="AA"  text="2.4.7 Foco visível" />
      <WcagChip level="AA"  text="2.5.5 Tamanho 48px" />
      <WcagChip level="AA"  text="4.1.2 Nome e Função" />
    </div>

    <!-- Preview -->
    <section class="section">
      <span class="section-label">TOKENS — ESCALA 4PX</span>
      <PreviewBox>
        <div class="btn-row">
          <LButton variant="primary">Confirmar ação</LButton>
          <LButton variant="secondary">Cancelar</LButton>
          <LButton variant="ghost">Ver mais</LButton>
          <LButton variant="primary" disabled>Desabilitado</LButton>
        </div>
      </PreviewBox>
    </section>

    <!-- Boas práticas — tamanho -->
    <section class="section">
      <span class="section-label">BOAS PTRÁTICAS</span>
      <DoDontPair>
        <template #do-demo>
          <LButton variant="primary" style="min-width:220px">Salvar alterações</LButton>
        </template>
        <template #do-text>
          Botões com 56px de altura. Acima dos 48px mínimos do Lume e dos 44px do WCAG 2.5.5.
        </template>
        <template #dont-demo>
          <button class="demo-btn-ok">OK</button>
        </template>
        <template #dont-text>
          Botões compactos excluem usuários com tremor e exigem precisão milimétrica em mobile.
        </template>
      </DoDontPair>
    </section>

    <!-- Hierarquia visual -->
    <section class="section">
      <span class="section-label">HIERARQUIA VISUAL</span>
      <DoDontPair>
        <template #do-demo>
          <div class="btn-row">
            <LButton variant="primary">Excluir conta</LButton>
            <LButton variant="secondary">Cancelar</LButton>
          </div>
        </template>
        <template #do-text>
          Botões com 56px de altura. Acima dos 48px mínimos do Lume e dos 44px do WCAG 2.5.5.
        </template>
        <template #dont-demo>
          <div class="btn-row">
            <LButton variant="primary" size="sm">Cancelar</LButton>
            <LButton variant="primary" size="sm">Salvar</LButton>
            <LButton variant="primary" size="sm">Excluir</LButton>
          </div>
        </template>
        <template #dont-text>
          Botões compactos excluem usuários com tremor e exigem precisão milimétrica em mobile.
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
.btn-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
.demo-btn-ok {
  height: 36px; padding: 0 16px;
  background: var(--btn-primary-bg); color: var(--btn-primary-fg);
  border: none; border-radius: t.$radius-md;
  font-family: t.$font-sans; font-weight: 700; font-size: 1rem; cursor: pointer;
}
</style>
