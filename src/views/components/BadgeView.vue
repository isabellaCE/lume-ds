<script setup>
import PreviewBox from "@/components/ui/PreviewBox.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";
import LBadge from "@/components/ui/LBadge.vue";
</script>

<template>
  <div class="page">
    <p class="breadcrumb">COMPONENTES / LUMEBADGE</p>
    <h1 class="page-title">Badge</h1>
    <p class="page-desc">Indica status, categoria ou contagem. Sempre com ícone para reforçar significado.</p>

    <!-- Variações -->
    <section class="section">
      <span class="section-label">VARIAÇÕES</span>
      <PreviewBox>
        <div class="badges-row">
          <LBadge state="success">Aprovado</LBadge>
          <LBadge state="reject">Rejeitado</LBadge>
          <LBadge state="pending">Pendente</LBadge>
          <LBadge state="analysis">Em análise</LBadge>
        </div>
      </PreviewBox>
    </section>

    <!-- Boas práticas -->
    <section class="section">
      <span class="section-label">BOAS PRÁTICAS</span>
      <DoDontPair>
        <template #do-demo>
          <div class="badges-row">
            <LBadge state="success">Aprovado</LBadge>
            <LBadge state="reject">Rejeitado</LBadge>
          </div>
        </template>
        <template #do-text>
          Ícone + texto + cor + borda. Quatro reforços de significado — funciona em monocromático.
        </template>
        <template #dont-demo>
          <div class="dots-col">
            <span class="dot dot--green" />
            <span class="dot dot--red" />
          </div>
        </template>
        <template #dont-text>
          Bolinhas coloridas sem texto. Para daltônico ou em monocromático, são duas bolinhas iguais.
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
.section { display: flex; flex-direction: column; gap: 16px; }
.section-label { font-size: 0.6875rem; font-weight: 700; letter-spacing:.08em; color: var(--section-label-fg); text-transform: uppercase; }
.badges-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
.dots-col { display: flex; flex-direction: column; gap: 8px; align-items: center; }
.dot { width: 20px; height: 20px; border-radius: 50%; }
.dot--green { background: #16a34a; }
.dot--red   { background: #dc2626; }
[data-theme="hc"] .dot--green,
[data-theme="hc"] .dot--red { background: #FFEB3B; }
</style>
