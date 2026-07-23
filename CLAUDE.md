# CLAUDE.md — Ecossistema de IA para Negócios

Este arquivo é o ponto de entrada do sistema. Sempre que o Claude Code abrir este projeto, deve ler este arquivo primeiro.

## O que é esse sistema
Um ecossistema de agentes de IA para gerar marketing, conteúdo, sites, cursos, CRM e automações de um negócio — sempre com decisão estratégica antes de execução.

O sistema funciona para qualquer negócio. Toda a personalização vive em `_memoria/` e `identidade/`. Os agentes e skills são genéricos.

## Primeiro uso — Onboarding obrigatório
Se `_memoria/empresa.md` ainda contém os placeholders entre `{{ }}`, o sistema NÃO foi configurado.

Nesse caso:
1. Ative o `agentes/00-onboarding-agent.md`
2. Ele vai entrevistar o usuário e preencher `_memoria/` e `identidade/`
3. Só depois disso, os outros agentes podem ser usados

Nunca gere conteúdo, anúncio, site ou agente antes do onboarding estar completo.

## Mapa do sistema — 10 agentes

| # | Agente | Função |
|---|---|---|
| 00 | Onboarding Agent | Configura o sistema para o negócio do cliente |
| 01 | Social Media Agent | Conteúdo para redes sociais |
| 02 | Ads Agent | Campanhas de tráfego pago (Google, Meta, TikTok) |
| 03 | Landing Page Agent | Páginas de conversão |
| 04 | Website Agent | Sites completos |
| 05 | Strategic Marketing Agent | Decide o que fazer antes de qualquer execução — COMANDA OS OUTROS |
| 06 | Agent Builder | Cria agentes de IA personalizados para o negócio do cliente |
| 07 | CRM Agent | Pipeline de leads e clientes |
| 08 | Automation Agent | Fluxos de automação (WhatsApp, e-mail, follow-up) |
| 09 | Course Agent | Estrutura e conteúdo de cursos/treinamentos |

## Regra de ouro
**Decisão antes de execução.** Sempre passar pelo Strategic Marketing Agent (05) antes de ativar qualquer outro agente — exceto o Onboarding (00), que vem antes de tudo.

## Gate de qualidade — obrigatório antes de qualquer entrega
Nada (post, carrossel, site, anúncio) é mostrado como pronto sem passar pelo checklist de
`skills/SKILL-review-qa.md` primeiro — esse gate é BLOQUEANTE, se algo falhar, corrigir e revisar
de novo antes de entregar. Pra sites, consultar também `skills/SKILL-site-quality.md`. Pra conteúdo
de redes sociais, consultar `skills/SKILL-trends-algoritmo.md` antes de marcar como pronto pra
publicar.

## Gerar imagens (posts e carrosséis)
O sistema gera as imagens dos posts renderizando HTML via Puppeteer (não geração de imagem por
IA) — ver `skills/image-export.md` e o motor em `scripts/render-engine.js`. Requer `npm install`
uma vez (ver README). As cores e tipografia vêm sempre de `identidade/paleta.css` e
`identidade/tipografia.md`, nunca inventadas.

## Estrutura de pastas
```
_memoria/        memória persistente do negócio (lida no início de toda sessão)
identidade/      paleta, tipografia, assets visuais
agentes/         os 10 agentes do sistema
skills/          skills de geração que os agentes usam
conteudo/        saídas de redes sociais
ads/             saídas de campanhas pagas
sites/           landing pages e websites gerados
crm/             leads e pipeline
automacoes/      fluxos de automação documentados
cursos/          estrutura e conteúdo de cursos
saidas/          entregáveis prontos para aprovação
```

## Instruções gerais para o Claude
- Sempre ler `_memoria/` antes de gerar qualquer coisa
- Tom de voz e regras de comunicação ficam em `_memoria/preferencias.md` — seguir sempre
- Nada vai direto para publicação: saídas vão para `/saidas/aprovacoes/` primeiro
- Scripts e copies: entregar pronto para copiar, sem explicação excessiva
- Visualizações interativas quando organizar planos complexos
- Se faltar informação em `_memoria/`, perguntar antes de assumir
