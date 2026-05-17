<script setup>
import WcagChip from "@/components/ui/WcagChip.vue";
import PreviewBox from "@/components/ui/PreviewBox.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";
import LAlert from "@/components/ui/LAlert.vue";
</script>

<template>
  <div class="page">
    <p class="breadcrumb">COMPONENTES / LUMEALERT</p>
    <h1 class="page-title">Alerta</h1>
    <p class="page-desc">Comunica feedback do sistema sobre uma ação ou estado. Sempre com ícone + label + cor.</p>

    <div class="chips">
      <WcagChip level="AA" text="1.4.1 Uso de cor" />
      <WcagChip level="AA" text="4.1.3 Mensagens de status" />
    </div>

    <!-- Preview -->
    <section class="section">
      <span class="section-label">VARIAÇÕES SEMÂNTICAS</span>
      <PreviewBox>
        <div class="alerts-grid">
          <LAlert type="success" title="Salvo com sucesso">Suas alterações foram registradas.</LAlert>
          <LAlert type="danger"  title="Erro ao processar">Não foi possível conectar ao servidor. Tente novamente em alguns segundos.</LAlert>
          <LAlert type="warning" title="Atenção">Esta ação não pode ser desfeita.</LAlert>
          <LAlert type="info"    title="Dica">Você pode aumentar a fonte usando os controles no header.</LAlert>
        </div>
      </PreviewBox>
    </section>

    <!-- Boas práticas -->
    <section class="section">
      <span class="section-label">BOAS PRÁTICAS</span>
      <DoDontPair>
        <template #do-demo>
          <LAlert type="danger" title="Senha incorreta">Tente novamente ou recupere o acesso.</LAlert>
        </template>
        <template #do-text>
          Ícone + título + descrição. Border-left de 6px reforça a categoria visualmente.
        </template>
        <template #dont-demo>
          <button class="demo-btn-erro">Erro!</button>
        </template>
        <template #dont-text>
          Apenas cor + texto curto. Daltônico vê só "Erro!" sem contexto. Falta título e detalhe.
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
.alerts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 700px) { .alerts-grid { grid-template-columns: 1fr; } }
.demo-btn-erro {
  padding: 8px 20px; background: #dc2626; color: #fff;
  border: none; border-radius: t.$radius-sm;
  font-family: t.$font-sans; font-weight: 700; font-size: 0.9375rem; cursor: pointer;
}
[data-theme="hc"] .demo-btn-erro { background: var(--yellow-hc, #FFEB3B); color: #000; }
</style>
