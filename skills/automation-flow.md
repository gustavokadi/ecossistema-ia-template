# Skill — automation-flow

## Função
Gerar a especificação de um fluxo de automação, passo a passo, pronta para ser montada em n8n, Make, Zapier ou via API direta.

## Inputs obrigatórios
- Objetivo da automação (em uma frase)
- Gatilho inicial
- Ferramentas disponíveis do cliente
- Pontos de aprovação humana

## Output completo

### 1. Visão geral
- Nome do fluxo
- Objetivo
- Ferramenta recomendada (n8n / Make / Zapier / API direta) e por quê

### 2. Diagrama em texto
```
[GATILHO]
  → [CONDIÇÃO 1?]
      → SIM: [AÇÃO]
      → NÃO: [AÇÃO ALTERNATIVA]
  → [CHECAGEM HUMANA] (se aplicável)
  → [AÇÃO FINAL]
  → [CONDIÇÃO: sem resposta/avanço em X dias?]
      → SIM: [AÇÃO: marcar como perdido/encerrar fluxo]
```

Se o fluxo envolve aguardar resposta humana em qualquer etapa, sempre incluir a condição de timeout acima — evita leads "esquecidos" no meio do funil.

### 3. Detalhamento por etapa
Para cada etapa: nome, tipo (gatilho/condição/ação/checagem humana), ferramenta/integração usada, dados de entrada e saída.

### 4. Lista de integrações necessárias
- Nome da ferramenta
- O que precisa estar configurado (API key, webhook, etc.) — sem expor credenciais, só indicar o que falta configurar

### 5. Casos de erro
- O que acontece se uma etapa falhar
- Para onde vai o alerta (responsável humano)

## Formato de saída
Salvar em `/automacoes/[nome-do-fluxo].md`

## Regras
- Sempre incluir pelo menos uma checagem humana antes de ações irreversíveis (cobrança, envio em massa, exclusão)
- Nunca assumir que uma ferramenta está disponível — perguntar se não estiver em `_memoria/empresa.md`
- Linguagem da especificação deve ser entendível por quem vai montar no n8n/Make, não só por dev
