# Skill — crm-pipeline

## Função
Criar e atualizar leads, e gerar relatórios de pipeline a partir dos arquivos em `/crm/leads/`.

## Inputs obrigatórios
- Ler `_memoria/crm.md` (estágios do funil, critérios de qualificação, cadência)
- Ação: cadastrar lead / atualizar estágio / gerar relatório
- Dados do lead (quando aplicável)

## Output por ação

### Cadastrar lead
Cria `/crm/leads/[nome-do-lead].md` no formato:
```
# Lead — [Nome]

- Contato: [telefone/e-mail]
- Origem: [de onde veio]
- Interesse: [produto/serviço]
- Estágio atual: [primeiro estágio de _memoria/crm.md]
- Valor estimado: [se aplicável]

## Histórico
- [data] — Lead criado
```

### Atualizar estágio
- Atualiza o campo "Estágio atual"
- Adiciona linha no histórico: `- [data] — Movido para [novo estágio]: [motivo, se houver]`

### Relatório de pipeline
Salvar em `/saidas/relatorios/crm-[AAAA-MM-DD].md`:
- Tabela: estágio → quantidade de leads → valor total estimado
- Lista de leads sem atualização há mais tempo que a cadência de `_memoria/crm.md`
- 3 recomendações de prioridade (quais leads contatar primeiro e por quê)

## Regras
- Nunca remover histórico de um lead — sempre adicionar
- Estágios devem seguir exatamente os definidos em `_memoria/crm.md`
- Atualizar a tabela resumo de `_memoria/crm.md` após qualquer mudança
- Na primeira configuração do CRM, criar `/crm/leads/_exemplo.md` com um lead fictício no formato padrão, para servir de modelo — não contar esse arquivo no resumo do pipeline
