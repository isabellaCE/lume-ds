<script setup>
import LPage from "@/components/ui/LPage.vue";
import LTag from "@/components/ui/LTag.vue";
</script>

<template>
  <LPage description="Tags categorizam conteúdo de forma neutra. Sem ícone — só texto bold 20px.">
    <section class="section">
      <h2>Tons</h2>
      <div class="row">
        <LTag tone="blue">UX</LTag>
        <LTag tone="blue">Pesquisa</LTag>
        <LTag tone="green">A11Y</LTag>
        <LTag tone="green">WCAG 2.2</LTag>
      </div>
    </section>

    <section class="section">
      <h2>Em sequência</h2>
      <div class="row" style="max-width:600px">
        <LTag v-for="t in ['Acessível','Hiperlegível','AAA','High-contrast','Vue','Vite']" :key="t" tone="blue">{{ t }}</LTag>
      </div>
    </section>
  </LPage>
</template>
