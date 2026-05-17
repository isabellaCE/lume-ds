# Lume — Design System

Design system acessível para **baixa visão**, com 3 modos (Claro / Escuro / Alto Contraste), controle de tamanho de fonte e tokens calibrados em WCAG 2.2 AAA quando possível.

## Stack

- **Vue 3** + Composition API
- **Vue Router 4** (history hash — funciona sem servidor)
- **Vite 6** como build tool
- **CSS puro** com custom properties (sem Tailwind / sem Sass)
- **Atkinson Hyperlegible** (Google Fonts) — fonte da Braille Institute para baixa visão

## Rodando localmente

```bash
# 1. instale
npm install

# 2. modo dev (http://localhost:5173)
npm run dev

# 3. build de produção
npm run build

# 4. preview do build
npm run preview
```

## Estrutura

```
src/
├── main.js              # bootstrap Vue + CSS globais
├── App.vue              # shell: header + sidebar + router-view
├── router/index.js      # 14 rotas (foundations + componentes + padrões)
│
├── styles/
│   ├── tokens.css       # paleta, type-scale, spacing, radii, sombras (BRUTOS)
│   ├── themes.css       # tokens SEMÂNTICOS por modo: light, dark, hc
│   └── base.css         # reset, type elements, focus, motion-reduce
│
├── composables/
│   ├── useTheme.js      # persiste modo em localStorage
│   └── useFontScale.js  # 5 paradas de zoom de fonte (87,5% → 150%)
│
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   ├── AppSidebar.vue
│   │   ├── ModeSwitcher.vue
│   │   └── FontScaleControl.vue
│   └── ui/
│       ├── LButton.vue   # primary / secondary / tertiary / focused
│       ├── LInput.vue    # label + hint + error states
│       ├── LAlert.vue    # success / danger / warning / info
│       ├── LBadge.vue    # 4 estados com ícone + label
│       ├── LTag.vue      # blue / green
│       ├── LSnackbar.vue
│       ├── LCard.vue
│       ├── LIcon.vue     # carrega SVGs via mask + currentColor
│       ├── LPage.vue     # layout padrão das views
│       └── LSwatch.vue   # demo de cor
│
├── views/
│   ├── HomeView.vue
│   ├── foundations/     # Colors, Typography, Spacing, Icons
│   ├── components/      # Button, Input, Link, Alert, Badge, Tag, Card, Snackbar
│   └── patterns/        # DoDontView
│
└── assets/icons/        # SVGs exportados do .fig
```

## Princípios de acessibilidade

1. **Corpo mínimo 18px** (1,125rem). Padrão 20px.
2. **Contraste AAA** (≥ 7:1) em todos os pares fg/bg semânticos do tema dark e na maioria do light.
3. **Hit-target ≥ 48px** em todos os controles; 56px é o padrão "cozy".
4. **Focus ring 3px** + offset 3px, sempre visível.
5. **3 modos de cor** — claro, escuro, alto contraste preto/amarelo.
6. **Controle de fonte** no header escala todo o site (87,5% → 150%, salvo em localStorage).
7. **Cores semânticas nunca sozinhas** — sempre acompanhadas de ícone + label.
8. **`prefers-reduced-motion`** suspende todas as transições.

## Próximos passos sugeridos

- [ ] Cobrir componentes restantes do Figma (Card-Info, Color Scheme grid, Header completo).
- [ ] Testes a11y automatizados (axe-core ou Lighthouse CI).
- [ ] Storybook ou Histoire para documentação de variantes.
- [ ] Tokens em formato JSON (Style Dictionary) para gerar também Android/iOS.
- [ ] Skip-links com foco programático ao trocar de rota.

## Licença

Projeto educacional — TCC. Atkinson Hyperlegible é licenciada pela Braille Institute (uso livre, inclusive comercial).
