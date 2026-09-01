# Skill — ingestao-dossie

## Função
Transformar o arquivo `dossie-<cliente>.md`, gerado pela entrevista de WhatsApp, na memória
completa do sistema. Substitui a entrevista ao vivo do agente 00 quando o cliente já respondeu
por conta própria.

## Input
- `dossie-<cliente>.md` (o cliente baixa no fim da entrevista e envia)
- Opcional: links de posts, prints, PDFs e materiais citados no dossiê

## Fluxo

### 1. Ler o dossiê inteiro antes de escrever qualquer coisa
O arquivo termina com um bloco ```json``` com as respostas estruturadas. Usar esse bloco como
fonte, não o texto corrido, quando houver diferença.

### 2. Distribuir para `_memoria/`

| Campo do dossiê | Vai para |
|---|---|
| nome_responsavel, nome_negocio, segmento, tempo_mercado, canais, produtos | `empresa.md` |
| carro_chefe, objetivo_30 | `estrategia.md` |
| ultimo_cliente_bom, dor, desejo, objecao | `persona.md` |
| tom, aparicao, palavras_proibidas, quem_aprova | `preferencias.md` |
| posts_bons, o_que_funciona, materiais | `referencias.md` + entrada na skill `dna-de-voz` |
| referencias_perfis, referencias_porque, concorrentes | `referencias.md` |
| concorrentes (followup: o que funciona / onde falha) | `referencias.md` → tabela "Concorrentes diretos" |
| ref_visual, ref_visual (followup) | `identidade/paleta.css` + `identidade/tipografia.md`, como referência de partida, nunca cópia literal |
| ideias_soltas, ideia_certeza | `experiencias.md`, semente da primeira pauta — não é caso, é matéria-prima crua |
| caso_transformacao, erro_proprio, bastidor, pergunta_repetida | `experiencias.md` |
| discordancia, frase_confianca | `_memoria/teses.md` — 3 a 5 frases curtas. Se a frase não permite discordância, não é tese, é slogan, não colar |
| odeia, nao_e, palavras_proibidas | `antimodelo.md` |
| restricao_producao | `preferencias.md` → seção "Aparição em vídeo", detalhando a restrição exata |

### 3. Regra de fidelidade
Copiar as palavras do cliente **literalmente** nos campos de dor, desejo, objeção e frases
citadas. Não melhorar, não formalizar, não resumir. O valor está no jeito que ele falou.
Onde precisar organizar, organizar em volta da frase original, mantendo ela entre aspas.

### 4. Preencher lacunas, não inventar
Toda resposta marcada como `_não respondido_` vira, no arquivo de destino:
`{{PENDENTE — perguntar na reunião de implantação}}`
Nunca preencher com suposição. No fim, listar todos os pendentes num bloco só.

### 5. Enriquecer com o que dá pra ver sozinho
Se o dossiê trouxe site e Instagram, rodar `client-analysis.md` em cima deles e completar
`persona.md` e `estrategia.md` com o que a análise achar, marcando cada linha como
`(análise automática, confirmar)`.

### 6. Rodar a skill `dna-de-voz.md`
Com os posts que o cliente indicou em `posts_bons` mais o texto do site.

### 7. Devolver o relatório de implantação
- O que foi preenchido
- O que ficou pendente e a pergunta exata pra fazer na reunião
- 3 riscos percebidos (ex: cliente sem material visual, sem caso real, nicho muito regulado)

## Regras
- Nunca começar a produzir conteúdo antes de entregar o relatório e o cliente confirmar
- Se o dossiê tiver menos de 60% das perguntas respondidas, avisar antes: o sistema vai sair raso
- Guardar o dossiê original em `_memoria/dossie-original.md` sem editar, pra consulta futura
