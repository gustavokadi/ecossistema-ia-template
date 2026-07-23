# SISTEMA DE AGENTES — Ecossistema de IA para Negócios

## Visão geral
Sistema de IA para tomada de decisão e geração de entregáveis de marketing, conteúdo, vendas e operação.
Não executa tarefas às ciegas — toma decisões estratégicas primeiro, depois gera.

---

## Filosofia do sistema
**Decisão antes de execução.**
Antes de gerar qualquer entregável, o sistema pergunta:
- Para quem?
- Qual o objetivo?
- Qual canal/formato faz sentido agora?
- O que priorizar com o tempo/budget disponível?

Só depois gera o entregável.

---

## Estrutura de pastas

```
ecossistema/
│
├── CLAUDE.md                    ← contexto geral, ler sempre primeiro
│
├── _memoria/                    ← memória persistente do negócio
│   ├── empresa.md               ← nome, segmento, histórico, produtos
│   ├── persona.md                ← ICP detalhado, dores, desejos, linguagem
│   ├── estrategia.md             ← posicionamento, canais, metas, budget
│   ├── preferencias.md           ← tom de voz, o que aprovar, o que evitar
│   └── crm.md                    ← visão geral do funil e do pipeline
│
├── identidade/                  ← identidade visual do negócio
│   ├── paleta.css                ← variáveis CSS com as cores
│   ├── tipografia.md             ← fontes, tamanhos, hierarquia
│   └── assets/                   ← logos, ícones, imagens de referência
│
├── agentes/                      ← os 10 agentes do sistema
│   ├── 00-onboarding-agent.md
│   ├── 01-social-media-agent.md
│   ├── 02-ads-agent.md
│   ├── 03-landing-page-agent.md
│   ├── 04-website-agent.md
│   ├── 05-strategic-marketing-agent.md
│   ├── 06-agent-builder-agent.md
│   ├── 07-crm-agent.md
│   ├── 08-automation-agent.md
│   └── 09-course-agent.md
│
├── skills/                       ← skills de geração de conteúdo
│   ├── client-analysis.md
│   ├── social-media-calendar.md
│   ├── social-post-generator.md
│   ├── ads-generator.md
│   ├── landing-page-generator.md
│   ├── agent-builder.md
│   ├── crm-pipeline.md
│   ├── automation-flow.md
│   └── course-builder.md
│
├── conteudo/                     ← saídas de conteúdo de redes sociais
│   ├── calendarios/
│   ├── posts/
│   └── reels/
│
├── ads/                          ← saídas de campanhas pagas
│   ├── google/
│   ├── facebook/
│   └── tiktok/
│
├── sites/                        ← landing pages e websites gerados
│
├── crm/                          ← leads e pipeline
│   ├── leads/
│   └── pipeline/
│
├── automacoes/                   ← fluxos de automação documentados
│
├── cursos/                       ← estrutura e conteúdo de cursos
│
└── saidas/                       ← entregáveis finais para aprovação
    ├── relatorios/
    └── aprovacoes/
```

---

## Os 10 Agentes

### Agente 00 — Onboarding Agent ← RODA UMA VEZ, NO INÍCIO
**Função:** Configurar o sistema para o negócio do cliente.
**Recebe:** respostas do cliente sobre negócio, público, marca e preferências.
**Entrega:** `_memoria/*.md` e `identidade/*` preenchidos.
**Skill que usa:** `client-analysis` (opcional, se o cliente já tiver site/redes)

---

### Agente 01 — Social Media Agent
**Função:** Planejar e gerar conteúdo para redes sociais.
**Decisões que toma:**
- Qual canal priorizar (Instagram, TikTok, LinkedIn)
- Qual pilar de conteúdo usar essa semana
- Qual formato (estático, carrossel, reels) por objetivo
- Frequência ideal baseada no histórico

**Skills que usa:**
- `social-media-calendar` → gera calendário mensal
- `social-post-generator` → gera posts por formato

---

### Agente 02 — Ads Agent
**Função:** Criar e otimizar campanhas de tráfego pago.
**Decisões que toma:**
- Qual campanha criar (pesquisa, display, performance max)
- Qual objetivo (leads, vendas, tráfego)
- Qual budget alocar por campanha
- Quais palavras-chave/públicos priorizar

**Skills que usa:**
- `ads-generator` → Google, Meta (Facebook/Instagram), TikTok

---

### Agente 03 — Landing Page Agent
**Função:** Criar páginas de conversão.
**Decisões que toma:**
- Qual oferta comunicar
- Qual estrutura converte melhor para esse público
- Qual CTA usar
- Quais objeções tratar no FAQ

**Skills que usa:**
- `landing-page-generator` → Hero, Benefícios, CTA, FAQ

---

### Agente 04 — Website Agent
**Função:** Criar e manter websites completos.
**Decisões que toma:**
- Quantas páginas o projeto precisa
- Qual arquitetura de informação
- Qual tecnologia (HTML simples, Next.js)
- O que priorizar no mobile

**Skills que usa:**
- `landing-page-generator` (adaptado para multipáginas)
- Identidade visual do negócio

---

### Agente 05 — Strategic Marketing Agent ← O MAIS IMPORTANTE
**Função:** Tomada de decisão estratégica — não gera conteúdo, decide o que fazer.
**Recebe:**
- Situação atual do negócio
- Budget disponível
- Histórico de resultados
- Concorrência

**Retorna:**
- O que fazer primeiro
- O que priorizar
- Onde investir
- Qual canal/agente acionar
- Cronograma de ações

**É o agente que comanda os outros.**

---

### Agente 06 — Agent Builder ← MAIOR DIFERENCIAL DO SISTEMA
**Função:** Criar agentes de IA personalizados para o negócio do cliente (atendimento, vendas, suporte, qualificação de leads, etc).
**Decisões que toma:**
- Qual problema do negócio o novo agente resolve
- Que informações o agente precisa (memória própria)
- Em qual canal o agente vai operar (WhatsApp, site, Instagram DM)
- Quais limites e escaladas para humano

**Skill que usa:**
- `agent-builder` → gera o prompt/CLAUDE.md do novo agente + roteiro de uso

---

### Agente 07 — CRM Agent
**Função:** Organizar leads, clientes e pipeline de vendas.
**Decisões que toma:**
- Em que estágio do funil cada lead está
- Quais leads priorizar para follow-up
- Quando mover um lead de estágio
- O que reportar como resumo do pipeline

**Skill que usa:**
- `crm-pipeline` → cria/atualiza arquivos de leads e pipeline

---

### Agente 08 — Automation Agent
**Função:** Documentar e estruturar fluxos de automação (WhatsApp, e-mail, follow-up, integrações).
**Decisões que toma:**
- Qual gatilho inicia o fluxo
- Quais etapas e condições o fluxo tem
- Qual ferramenta executa (n8n, Zapier, Make, API direta)
- O que precisa de aprovação humana no meio do fluxo

**Skill que usa:**
- `automation-flow` → gera a especificação do fluxo passo a passo

---

### Agente 09 — Course Agent
**Função:** Estruturar e criar conteúdo de cursos/treinamentos.
**Decisões que toma:**
- Quantos módulos/aulas o curso precisa
- Qual ordem de aprendizado faz sentido
- Qual formato por aula (vídeo, texto, exercício)
- Quais bônus e CTAs de upsell incluir

**Skill que usa:**
- `course-builder` → estrutura módulos, roteiros de aula e materiais de apoio

---

## Fluxo de trabalho padrão

```
INSTALAÇÃO
     ↓
Onboarding Agent (00) preenche _memoria/ e identidade/
     ↓
Strategic Marketing Agent (05) decide:
  → O que fazer primeiro?
  → Onde investir?
  → Qual agente acionar?
     ↓
Agentes executam na ordem decidida (01–04, 06–09)
     ↓
Saídas vão para /saidas/aprovacoes/
     ↓
Cliente aprova → publica/executa
```

---

## Notas para o Claude Code
- Memória (`_memoria/`) é lida no início de cada sessão
- Skills são arquivos `.md` com input/output bem definidos
- Saídas sempre vão para `/saidas/` para aprovação antes de publicar/executar
- Sistema funciona para qualquer negócio — toda personalização vem de `_memoria/` e `identidade/`
