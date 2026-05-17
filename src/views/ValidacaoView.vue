<script setup>
import { ref, watch, nextTick } from "vue";
import LButton    from "@/components/ui/LButton.vue";
import LAlert     from "@/components/ui/LAlert.vue";
import LBadge     from "@/components/ui/LBadge.vue";
import LCard      from "@/components/ui/LCard.vue";
import LInput     from "@/components/ui/LInput.vue";
import LTag       from "@/components/ui/LTag.vue";
import LSnackbar  from "@/components/ui/LSnackbar.vue";
import PreviewBox from "@/components/ui/PreviewBox.vue";
import WcagChip   from "@/components/ui/WcagChip.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";

// ── Snackbar ─────────────────────────────────────────────────────────────────
const sbVisible = ref(false);
const sbType    = ref("success");
const sbMsg     = ref("");

function showSnackbar(type, msg) {
  sbType.value    = type;
  sbMsg.value     = msg;
  sbVisible.value = true;
  setTimeout(() => { sbVisible.value = false; }, 3000);
}

// ── Formulário interativo ─────────────────────────────────────────────────────
const nome      = ref("");
const email     = ref("");
const mensagem  = ref("");
const nomeErr   = ref("");
const emailErr  = ref("");
const formSent  = ref(false);
const successRef = ref(null);

function submitForm() {
  nomeErr.value  = nome.value.trim() ? "" : "Nome é obrigatório.";
  emailErr.value = !email.value.trim()
    ? "E-mail é obrigatório."
    : !email.value.includes("@")
    ? "Informe um e-mail válido."
    : "";

  if (!nomeErr.value && !emailErr.value) {
    formSent.value = true;
    showSnackbar("success", "Formulário enviado com sucesso!");
  } else {
    showSnackbar("danger", "Corrija os erros antes de enviar.");
  }
}

function resetForm() {
  nome.value = email.value = mensagem.value = "";
  nomeErr.value = emailErr.value = "";
  formSent.value = false;
}

// 2.4.3 Focus Order: move foco para a mensagem de sucesso ao aparecer
watch(formSent, (sent) => {
  if (sent) nextTick(() => successRef.value?.focus());
});

// ── Badge switcher ────────────────────────────────────────────────────────────
const badgeStates = [
  { value: "success",  label: "Aprovado"   },
  { value: "reject",   label: "Rejeitado"  },
  { value: "pending",  label: "Pendente"   },
  { value: "analysis", label: "Em análise" },
];
const activeBadge = ref("pending");
</script>

<template>
  <div class="page">

    <!-- Cabeçalho da página ------------------------------------------------- -->
    <header class="page-header">
      <p class="breadcrumb">QUALIDADE / VALIDAÇÃO</p>
      <h1 class="page-title">Validação do Design System</h1>
      <p class="page-desc">
        Use esta página para validar visualmente todos os componentes do Lume DS
        em seus diferentes estados, variantes e temas. Cheque consistência visual,
        comportamento interativo e conformidade com acessibilidade.
      </p>
      <div class="chips">
        <WcagChip level="AA"  text="1.4.3 Contraste mínimo" />
        <WcagChip level="AAA" text="1.4.6 Contraste aprimorado" />
        <WcagChip level="AA"  text="2.4.7 Foco visível" />
        <WcagChip level="AA"  text="4.1.2 Nome e Função" />
      </div>
    </header>

    <!-- ── BOTÕES ─────────────────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="sec-buttons">
      <span class="section-label" aria-hidden="true">BOTÕES</span>
      <h2 id="sec-buttons" class="section-title">Variantes e Estados</h2>

      <PreviewBox label="Variantes — tamanho padrão (md)">
        <div class="row">
          <LButton variant="primary">Ação principal</LButton>
          <LButton variant="secondary">Ação secundária</LButton>
          <LButton variant="ghost">Ação discreta</LButton>
        </div>
      </PreviewBox>

      <PreviewBox label="Tamanho pequeno (sm)">
        <div class="row">
          <LButton variant="primary"   size="sm">Principal</LButton>
          <LButton variant="secondary" size="sm">Secundário</LButton>
          <LButton variant="ghost"     size="sm">Discreto</LButton>
        </div>
      </PreviewBox>

      <PreviewBox label="Estado desabilitado">
        <div class="row">
          <LButton variant="primary"   disabled>Desabilitado</LButton>
          <LButton variant="secondary" disabled>Desabilitado</LButton>
          <LButton variant="ghost"     disabled>Desabilitado</LButton>
        </div>
      </PreviewBox>

      <PreviewBox label="Largura total (block)">
        <LButton variant="primary" block>Botão em largura total</LButton>
      </PreviewBox>

      <DoDontPair>
        <template #do-demo>
          <div class="row">
            <LButton variant="primary">Salvar</LButton>
            <LButton variant="secondary">Cancelar</LButton>
          </div>
        </template>
        <template #do-text>
          Use hierarquia visual: primário para ação principal, secundário ou ghost para ações de suporte.
        </template>
        <template #dont-demo>
          <div class="row">
            <LButton variant="primary">Salvar</LButton>
            <LButton variant="primary">Excluir</LButton>
            <LButton variant="primary">Cancelar</LButton>
          </div>
        </template>
        <template #dont-text>
          Não use múltiplos botões primários na mesma área — o usuário perde referência sobre qual ação é prioritária.
        </template>
      </DoDontPair>
    </section>

    <!-- ── ALERTAS ────────────────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="sec-alerts">
      <span class="section-label" aria-hidden="true">ALERTAS</span>
      <h2 id="sec-alerts" class="section-title">Tipos e Conteúdo</h2>

      <PreviewBox label="Sem título">
        <div class="col">
          <LAlert type="success">Operação concluída. Os dados foram salvos corretamente.</LAlert>
          <LAlert type="danger">Não foi possível concluir. Verifique sua conexão e tente novamente.</LAlert>
          <LAlert type="warning">Atenção: esta ação não poderá ser desfeita após a confirmação.</LAlert>
          <LAlert type="info">O sistema entrará em manutenção às 22h desta sexta-feira.</LAlert>
        </div>
      </PreviewBox>

      <PreviewBox label="Com título">
        <div class="col">
          <LAlert type="success" title="Cadastro realizado">
            Sua conta foi criada. Verifique seu e-mail para ativar o acesso.
          </LAlert>
          <LAlert type="danger" title="Erro de validação">
            Os campos marcados em vermelho são obrigatórios ou estão inválidos.
          </LAlert>
          <LAlert type="warning" title="Sessão expirando">
            Você será desconectado em 5 minutos por inatividade.
          </LAlert>
          <LAlert type="info" title="Novidade disponível">
            Uma nova versão do sistema está pronta para ser instalada.
          </LAlert>
        </div>
      </PreviewBox>
    </section>

    <!-- ── BADGES & TAGS ──────────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="sec-badges">
      <span class="section-label" aria-hidden="true">BADGES & TAGS</span>
      <h2 id="sec-badges" class="section-title">Estados e Tons</h2>

      <PreviewBox label="Badge — todos os estados">
        <div class="row">
          <LBadge state="success" />
          <LBadge state="reject" />
          <LBadge state="pending" />
          <LBadge state="analysis" />
        </div>
      </PreviewBox>

      <PreviewBox label="Badge — estado interativo">
        <div class="col">
          <div class="row" role="group" aria-label="Selecione o estado do badge">
            <LButton
              v-for="s in badgeStates"
              :key="s.value"
              :variant="activeBadge === s.value ? 'primary' : 'secondary'"
              size="sm"
              :aria-pressed="activeBadge === s.value"
              @click="activeBadge = s.value"
            >{{ s.label }}</LButton>
          </div>
          <LBadge :state="activeBadge" />
        </div>
      </PreviewBox>

      <PreviewBox label="Tag — tons azul e verde">
        <div class="row">
          <LTag tone="blue">Design System</LTag>
          <LTag tone="blue">Acessibilidade</LTag>
          <LTag tone="green">Aprovado</LTag>
          <LTag tone="green">Publicado</LTag>
        </div>
      </PreviewBox>
    </section>

    <!-- ── CAMPOS & FORMULÁRIO ────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="sec-form">
      <span class="section-label" aria-hidden="true">CAMPOS & FORMULÁRIO</span>
      <h2 id="sec-form" class="section-title">Validação Interativa</h2>

      <PreviewBox label="Estados dos campos">
        <div class="col fields-col">
          <LInput
            label="Campo padrão"
            placeholder="Digite algo…"
            hint="Texto de apoio para orientar o preenchimento."
          />
          <LInput
            label="Campo com erro"
            model-value="valor incorreto"
            error="Este campo apresenta um erro de validação."
          />
          <LInput
            label="Campo desabilitado"
            model-value="Valor fixo, não editável"
            disabled
          />
        </div>
      </PreviewBox>

      <PreviewBox label="Formulário com validação ao enviar">
        <form class="form" @submit.prevent="submitForm" novalidate aria-label="Formulário de contato com validação">
          <template v-if="!formSent">
            <LInput
              v-model="nome"
              label="Nome completo"
              placeholder="Seu nome"
              :error="nomeErr"
              hint="Como você gostaria de ser chamado."
            />
            <LInput
              v-model="email"
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              :error="emailErr"
            />
            <LInput
              v-model="mensagem"
              label="Mensagem (opcional)"
              placeholder="Deixe um comentário…"
            />
            <div class="row">
              <LButton type="submit" variant="primary">Enviar</LButton>
              <LButton type="button" variant="ghost" @click="resetForm">Limpar</LButton>
            </div>
          </template>

          <div v-else ref="successRef" tabindex="-1" class="success-region">
            <LAlert type="success" title="Enviado com sucesso!">
              Obrigado, <strong>{{ nome }}</strong>! Responderemos em breve para
              <strong>{{ email }}</strong>.
            </LAlert>
            <LButton variant="secondary" @click="resetForm">Preencher novamente</LButton>
          </div>
        </form>
      </PreviewBox>

      <DoDontPair>
        <template #do-demo>
          <LInput label="CPF" placeholder="000.000.000-00" hint="Apenas números." />
        </template>
        <template #do-text>
          Sempre use label visível e hint explicativo para campos com formato específico.
        </template>
        <template #dont-demo>
          <input
            class="demo-input"
            placeholder="CPF (apenas números)"
            aria-label="Campo demonstrativo sem label visível (anti-padrão de acessibilidade)"
          />
        </template>
        <template #dont-text>
          Placeholder como único rótulo desaparece ao digitar e não é lido corretamente por leitores de tela.
        </template>
      </DoDontPair>
    </section>

    <!-- ── CARDS ──────────────────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="sec-cards">
      <span class="section-label" aria-hidden="true">CARDS</span>
      <h2 id="sec-cards" class="section-title">Configurações de Conteúdo</h2>

      <PreviewBox label="Variações de preenchimento">
        <div class="card-grid">
          <LCard meta="COMPONENTE" title="Card completo" link-text="Ver documentação" link-href="#">
            Card com metadado, título, corpo e link de ação. Use para apresentar itens de catálogo ou referência.
          </LCard>
          <LCard title="Sem metadado">
            Card sem label de categoria. Indicado quando o contexto já está estabelecido pelo agrupamento visual.
          </LCard>
          <LCard meta="NOVIDADE">
            Card com metadado mas sem título fixo. O corpo carrega a informação principal do item.
          </LCard>
        </div>
      </PreviewBox>
    </section>

    <!-- ── SNACKBAR ───────────────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="sec-snackbar">
      <span class="section-label" aria-hidden="true">SNACKBAR</span>
      <h2 id="sec-snackbar" class="section-title">Notificações Temporárias</h2>

      <PreviewBox label="Disparar cada tipo — desaparecem após 3 s">
        <div class="col">
          <div class="row">
            <LButton variant="primary"   @click="showSnackbar('success', 'Ação realizada com sucesso!')">Sucesso</LButton>
            <LButton variant="secondary" @click="showSnackbar('danger',  'Não foi possível concluir a ação.')">Erro</LButton>
            <LButton variant="ghost"     @click="showSnackbar('warning', 'Esta ação pode ter impactos.')">Alerta</LButton>
            <LButton variant="ghost"     @click="showSnackbar('info',    'Uma atualização está disponível.')">Info</LButton>
          </div>

          <Transition name="snack">
            <LSnackbar v-if="sbVisible" :type="sbType">{{ sbMsg }}</LSnackbar>
          </Transition>
        </div>
      </PreviewBox>
    </section>

  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.page {
  display: flex;
  flex-direction: column;
  gap: 56px;
  max-width: 1200px;
}

// Cabeçalho
.page-header  { display: flex; flex-direction: column; gap: 16px; }
.breadcrumb   { font-size: 0.75rem; letter-spacing: .06em; color: var(--breadcrumb-fg); text-transform: uppercase; margin: 0; }
.page-title   { font-size: clamp(2.25rem, 4vw, 3rem); font-weight: 700; color: var(--fg-1); margin: 0; }
.page-desc    { font-size: 1.125rem; line-height: 1.6; color: var(--fg-2); max-width: 72ch; margin: 0; }
.chips        { display: flex; gap: 12px; flex-wrap: wrap; }

// Seções
.section       { display: flex; flex-direction: column; gap: 20px; }
.section-label { font-size: 0.6875rem; font-weight: 700; letter-spacing: .08em; color: var(--section-label-fg); text-transform: uppercase; }
.section-title { font-size: 1.375rem; font-weight: 700; color: var(--fg-1); margin: 0; }

// Helpers de layout
.row        { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
.col        { display: flex; flex-direction: column; gap: 16px; }
.fields-col { max-width: 480px; }

// Card grid
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

// Formulário
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
}

// Elemento de demonstração para o DoDont
.demo-input {
  height: 52px;
  width: 100%;
  max-width: 280px;
  padding: 0 14px;
  background: var(--input-bg);
  border: 2px solid var(--input-border);
  border-radius: t.$radius-md;
  color: var(--fg-1);
  font-family: t.$font-sans;
  font-size: 1rem;
}

// Região de sucesso (foco programático, sem outline visual)
.success-region {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &:focus { outline: none; }
}

// Transição do snackbar
.snack-enter-active,
.snack-leave-active  { transition: opacity .2s ease, transform .2s ease; }
.snack-enter-from,
.snack-leave-to      { opacity: 0; transform: translateY(6px); }
</style>
