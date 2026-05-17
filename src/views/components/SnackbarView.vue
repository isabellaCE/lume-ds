<script setup>
import LPage from "@/components/ui/LPage.vue";
import LSnackbar from "@/components/ui/LSnackbar.vue";
</script>

<template>
  <LPage description="Mensagem de feedback transitória. Estilo similar ao Alert, mas sem ícone — pensado para flutuar no rodapé/topo da tela.">
    <section class="section">
      <h2>Tipos</h2>
      <div class="stack">
        <LSnackbar type="success">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at lorem cursus.
        </LSnackbar>
        <LSnackbar type="danger">
          Não foi possível enviar o formulário. Verifique sua conexão.
        </LSnackbar>
        <LSnackbar type="info">
          Novidade: agora o modo alto contraste persiste entre sessões.
        </LSnackbar>
      </div>
    </section>

    <section class="section">
      <h2>Quando usar</h2>
      <ul>
        <li>Feedback de ação concluída (envio, salvamento, exclusão).</li>
        <li>Notificações temporárias do sistema.</li>
        <li>Sempre com <code>role="status"</code> para leitor de tela.</li>
        <li>Para confirmar erros graves ou bloqueantes, prefira <code>LAlert</code>.</li>
      </ul>
    </section>
  </LPage>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
code {
  font-family: var(--font-mono);
  background: var(--bg-sunken);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}
</style>
