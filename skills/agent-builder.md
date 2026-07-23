# Skill — agent-builder

## Função
Gerar a especificação completa de um novo agente de IA personalizado para o negócio do cliente.

## Inputs obrigatórios
- Objetivo do agente (em uma frase)
- Canal de operação (WhatsApp, site/chat, Instagram DM, interno/Claude Code)
- Perguntas/situações mais comuns
- O que o agente NUNCA deve fazer
- Ler `_memoria/empresa.md`, `_memoria/persona.md` e `_memoria/preferencias.md`

## Output completo

### 1. Identidade do agente
- Nome do agente
- Função em uma frase
- Tom de voz (herda de `_memoria/preferencias.md`, com ajustes se necessário)

### 2. Prompt de sistema
Bloco de prompt pronto para colar no canal escolhido, contendo:
- Quem o agente representa (o negócio do cliente)
- O que ele sabe (produtos, preços, condições — vindos de `_memoria/empresa.md`)
- Como ele responde (tom, formato, tamanho das respostas)
- Lista de perguntas frequentes com respostas modelo
- Regras explícitas do que NUNCA fazer
- Regra de escalada: frase exata que o agente usa para transferir para humano, e gatilhos que disparam isso

### 3. Memória do agente
Arquivo `.md` com:
- Base de respostas (FAQ)
- Tabela de produtos/preços/condições
- Política de escalada

### 4. Roteiro de implantação
Passo a passo de como colocar o agente no ar, de acordo com o canal. Sempre apresentar dois caminhos:
- **Caminho recomendado (validar primeiro):** ferramenta no-code/low-cost (ex: ManyChat, Zaia ou similar) com o prompt de sistema colado direto — rápido para testar antes de qualquer investimento em infraestrutura
- **Caminho avançado (depois de validar):** API oficial do canal + automação (n8n/Make) — ver `automation-flow`

Por canal:
- **WhatsApp:** ferramenta no-code → depois WhatsApp Business API + automação
- **Site/chat:** snippet de integração ou indicação de ferramenta
- **Instagram DM:** automação via ferramenta de terceiros
- **Interno/Claude Code:** pasta com `CLAUDE.md` próprio do agente

## Formato de saída
Salvar em `/saidas/aprovacoes/agentes/[nome-do-agente]/`:
- `prompt-sistema.md`
- `memoria-agente.md`
- `roteiro-implantacao.md`

## Regras
- Sempre incluir regra de escalada para humano — sem exceção
- Respostas do agente devem seguir o tom definido em `_memoria/preferencias.md`
- Nunca inventar produto, preço ou condição que não esteja em `_memoria/empresa.md` — se faltar dado, marcar com `{{CONFIRMAR}}` e perguntar ao cliente
