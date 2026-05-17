<script setup>
import { ref } from "vue";
import WcagChip from "@/components/ui/WcagChip.vue";
import PreviewBox from "@/components/ui/PreviewBox.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";
import LInput from "@/components/ui/LInput.vue";

const email = ref("seu@email.com");
const senha = ref("•••");
</script>

<template>
  <div class="page">
    <p class="breadcrumb">COMPONENTES / LUMEINPUT</p>
    <h1 class="page-title">Campo de formulário</h1>
    <p class="page-desc">Coleta entrada do usuário. Label visível é obrigatório — placeholder não substitui label.</p>

    <div class="chips">
      <WcagChip level="AA"  text="1.3.1 Label associado" />
      <WcagChip level="AAA" text="1.4.6 Contraste" />
      <WcagChip level="AA"  text="3.3.1 Erro identificado" />
      <WcagChip level="AA"  text="3.3.3 Sugestão de correção" />
    </div>

    <!-- Estados -->
    <section class="section">
      <span class="section-label">ESTADOS</span>
      <PreviewBox>
        <div class="fields-row">
          <LInput v-model="email" label="E-mail institucional" placeholder="seu@email.com"
            hint="Use o e-mail cadastrado na instituição" />
          <LInput v-model="senha" type="password" label="Senha" placeholder="•••"
            error="Mínimo de 8 caracteres" />
        </div>
      </PreviewBox>
    </section>

    <!-- Boas práticas — label -->
    <section class="section">
      <span class="section-label">BOAS PRÁTICAS</span>
      <DoDontPair>
        <template #do-demo>
          <div class="field-demo">
            <label class="demo-label">Nome Completo</label>
            <input class="demo-input" placeholder="Ex: Maria Silva" />
          </div>
        </template>
        <template #do-text>
          Label sempre visível acima do campo. Placeholder é só exemplo — nunca substitui label.
        </template>
        <template #dont-demo>
          <div class="field-demo">
            <input class="demo-input demo-input--placeholder-label" placeholder="Nome" />
          </div>
        </template>
        <template #dont-text>
          Placeholder como label desaparece ao digitar, tem contraste fraco e quebra leitor de tela.
        </template>
      </DoDontPair>
    </section>

    <!-- Mensagens de erro -->
    <section class="section">
      <span class="section-label">MENSAGENS DE ERRO</span>
      <DoDontPair>
        <template #do-demo>
          <div class="field-demo">
            <label class="demo-label">CPF</label>
            <input class="demo-input demo-input--error" value="123" />
            <span class="demo-error">Digite os 11 dígitos do CPF</span>
          </div>
        </template>
        <template #do-text>
          Erro específico, com ícone, e role="alert". Diz exatamente o que corrigir.
        </template>
        <template #dont-demo>
          <div class="field-demo field-demo--row">
            <div>
              <label class="demo-label demo-label--muted">CPF</label>
              <input class="demo-input" value="123" />
            </div>
            <span class="demo-error-inline">Erro</span>
          </div>
        </template>
        <template #dont-text>
          "Erro" é vago. Vermelho sozinho não é acessível — adicione ícone e descreva como corrigir.
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
.fields-row { display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start; }
.field-demo { display: flex; flex-direction: column; gap: 6px; width: 100%; max-width: 300px; }
.field-demo--row { flex-direction: row; align-items: center; gap: 12px; }
.demo-label { font-size: 0.9375rem; font-weight: 700; color: var(--input-label-fg); }
.demo-label--muted { color: var(--fg-3); font-weight: 400; font-size: 0.8125rem; }
.demo-input {
  height: 48px; padding: 0 12px;
  background: var(--input-bg); border: 1px solid var(--input-border);
  border-radius: t.$radius-md; color: var(--input-fg);
  font-family: t.$font-sans; font-size: 0.9375rem; width: 100%;
  &--error { border: 2px solid var(--input-error-border); }
  &--placeholder-label { color: var(--input-placeholder); }
  &::placeholder { color: var(--input-placeholder); }
}
.demo-error { font-size: 0.8125rem; font-weight: 700; color: var(--input-error-fg); }
.demo-error-inline { font-size: 0.9375rem; font-weight: 700; color: var(--input-error-fg); white-space: nowrap; }
</style>
