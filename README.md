# Ecossistema de IA para Negócios

Sistema de agentes de IA para marketing, conteúdo, vendas e operação — rodando dentro do Claude Code, no seu computador.

## O que você consegue fazer com esse sistema
- Criar conteúdo para redes sociais (posts, carrosséis, reels, calendário) — incluindo as imagens já renderizadas em PNG, prontas pra publicar
- Criar e otimizar campanhas de anúncios (Google, Meta, TikTok)
- Criar landing pages e sites
- Estruturar e criar conteúdo de cursos
- Organizar leads e clientes em um CRM simples
- Documentar e montar automações (WhatsApp, e-mail, follow-up)
- Criar agentes de IA personalizados para o seu negócio

## Como instalar
1. Instale o [Claude Code](https://claude.com/claude-code)
2. Baixe/extraia esta pasta no seu computador (ou `git clone` do repositório)
3. Rode `npm install` na raiz (instala o motor de geração de imagens — Puppeteer)
4. Abra essa pasta no terminal e rode `claude`
5. O Claude vai ler o `CLAUDE.md` automaticamente

## Primeiro uso — Onboarding
Na primeira conversa, diga algo como:

> "Quero configurar o sistema para o meu negócio"

O Claude vai ativar o **Onboarding Agent** e te fazer perguntas sobre seu negócio, seu público, sua marca e suas preferências. Essas respostas ficam salvas em `_memoria/` e `identidade/` — e todo o resto do sistema passa a usar essas informações automaticamente.

## Como usar no dia a dia
Depois do onboarding, basta pedir o que você precisa. Exemplos:

- "Quero o calendário de conteúdo do mês"
- "Cria uma campanha de Google Ads para o produto X"
- "Preciso de uma landing page para esse lançamento"
- "Quero criar um agente que responde dúvidas dos meus clientes no WhatsApp"
- "Organiza esses leads no CRM"
- "Monta a estrutura do meu curso sobre Y"

## Regra de ouro do sistema
Antes de gerar qualquer entregável, o sistema passa pelo **Strategic Marketing Agent** — ele decide o que faz sentido priorizar antes de qualquer agente começar a produzir.

## Estrutura do projeto
- `CLAUDE.md` — contexto geral, lido sempre primeiro
- `SISTEMA-AGENTES.md` — visão completa dos agentes e skills
- `_memoria/` — dados do seu negócio (preenchido no onboarding)
- `identidade/` — sua marca (cores, fontes, assets)
- `agentes/` — os 10 agentes do sistema
- `skills/` — capacidades de geração usadas pelos agentes
- `scripts/render-engine.js` — motor de renderização de imagens (HTML → PNG)
- `conteudo/output/` — imagens de posts/carrosséis geradas, organizadas por data
- `saidas/aprovacoes/` — tudo que o sistema gera fica aqui antes de você publicar

## Suporte
Esse sistema é um produto. Para suporte, ajustes ou novas skills sob demanda, entre em contato com quem te vendeu este pacote.
