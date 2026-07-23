# SKILL: Review e QA — Checklist de Qualidade

## Objetivo
Nada sai sem passar por essa revisao. Aplica-se a sites, posts, copy, paginas e qualquer entregavel gerado pelo sistema.

## Gate bloqueante — regra obrigatoria
Este gate BLOQUEIA a entrega. Se qualquer item do checklist aplicavel falhar, o conteudo NAO e mostrado como pronto: o proprio Claude corrige e roda o checklist de novo antes de entregar. Nunca entregar com aviso de "falhou aqui, mas segue assim".

---

## 1. Review de Sites / Landing Pages

### Visual
- [ ] Identidade visual aplicada corretamente (paleta, tipografia, espacamento) — ver `identidade/paleta.css` e `identidade/tipografia.md`
- [ ] Hierarquia visual clara: titulo > subtitulo > corpo > detalhe
- [ ] Espacamento consistente (sistema de 8px)
- [ ] Cores de acento e fundo seguem exatamente o que está em `identidade/paleta.css` — nunca inventar cor nova
- [ ] Respiracao adequada entre secoes (padding generoso)

### Codigo
- [ ] HTML semantico (`section`, `header`, `footer`, `main`)
- [ ] CSS sem repeticao desnecessaria (variaveis usadas)
- [ ] Responsivo testado em 375px, 768px, 1024px
- [ ] Zero overflow horizontal
- [ ] Animacoes suaves, nao exageradas
- [ ] JS minimo e no final do body

### Conteudo
- [ ] Headline responde "o que voce ganha"
- [ ] CTA claro e visivel sem scroll
- [ ] Sem erros de portugues
- [ ] Sem travessao (substituir por ponto, virgula ou dois-pontos) — salvo se `_memoria/preferencias.md` disser o contrario
- [ ] Tom direto, sem jargao ou exagero
- [ ] Prova social presente (numeros, depoimentos, resultados)

### Performance
- [ ] Imagens otimizadas (WebP, lazy loading)
- [ ] Fontes com font-display swap
- [ ] Sem bibliotecas JS desnecessarias
- [ ] Pagina carrega em menos de 3 segundos

---

## 2. Review de Posts para Redes Sociais

### Carrossel

#### Capa (slide 1)
- [ ] Titulo grande, legivel em miniatura (1080x1080 ou 1080x1350)
- [ ] Maximo 8-10 palavras
- [ ] Acento de cor conforme `identidade/paleta.css`
- [ ] Fundo conforme identidade visual do cliente
- [ ] Marca/handle do cliente visivel (ver `_memoria/empresa.md`)
- [ ] Contraste suficiente para leitura rapida
- [ ] Tipo de capa diferente do post publicado imediatamente antes (variar entre foto real, capa grafica, capa escrita, capa com IA), se o calendario de conteudo do cliente existir e definir isso
- [ ] Layout diferente do post anterior — alternar entre cards com icone, cards numerados, tipografia grande, comparativo lado a lado, timeline

#### Slides internos (2-6)
- [ ] Uma ideia por slide
- [ ] Numero do slide no canto (01, 02, 03...)
- [ ] Hierarquia de texto clara (titulo forte, explicacao secundaria)
- [ ] Fundo e cores conforme `identidade/paleta.css`
- [ ] Texto ocupa no maximo 70% do frame (respiracao)

#### Slide final
- [ ] CTA claro (seguir, salvar, compartilhar, link na bio)
- [ ] Marca/handle do cliente presente
- [ ] Nao repetir conteudo dos slides anteriores

#### Legenda
- [ ] Frase de impacto na primeira linha (aparece no feed)
- [ ] Desenvolvimento em 3-5 linhas curtas
- [ ] Lista ou bullets (maximo 4 itens)
- [ ] Fechamento com opiniao ou convite
- [ ] Hashtags: maximo 6, relevantes
- [ ] Sem travessao, salvo preferencia contraria em `_memoria/preferencias.md`

### Post Estatico
- [ ] Uma mensagem por post
- [ ] Texto grande, legivel em miniatura
- [ ] Paleta de `identidade/paleta.css` respeitada
- [ ] Sem fontes decorativas
- [ ] CTA na legenda

### Reels / Video
- [ ] Gancho nos primeiros 3 segundos
- [ ] Duracao: 30-60 segundos
- [ ] Uma ideia central
- [ ] CTA no final
- [ ] Legenda com contexto extra (nao repetir o audio)

---

## 3. Review de Copy

### Tom de voz
- [ ] Segue exatamente `_memoria/preferencias.md` (tom de voz, palavras proibidas, aberturas/finais proibidos)
- [ ] Frases curtas, uma ideia por vez
- [ ] Sincero, pode falar de erro quando fizer sentido pro negocio
- [ ] Sem: "jornada", "transformacao", "incrivel", "poderoso", "revolucionario" (salvo se o tom do cliente pedir o contrario)
- [ ] Sem comecar com: "Voce sabia que..."

### Estrutura
- [ ] Headline com beneficio claro
- [ ] Subheadline explica como ou pra quem
- [ ] Body text com frases de no maximo 2 linhas
- [ ] CTA com verbo de acao + beneficio
- [ ] Sem paragrafos longos (maximo 3 linhas por bloco)

### Credibilidade
- [ ] Nenhuma promessa impossivel de cumprir
- [ ] Resultados mencionados sao reais (nunca inventados)
- [ ] Nao exagerar numeros
- [ ] FAQ trata objecoes reais, nao genericas

---

## 4. Review de Anuncios

- [ ] Titulo dentro do limite de caracteres da plataforma
- [ ] Descricao complementa, nao repete o titulo
- [ ] CTA claro
- [ ] Publico-alvo definido e coerente com `_memoria/persona.md`
- [ ] Pelo menos 2 variacoes de titulo e descricao para teste A/B
- [ ] Tom consistente com o restante do conteudo

---

## 5. Criterios de Rejeicao

Rejeitar e refazer se qualquer um desses for verdade:

1. **Travessao presente** em qualquer texto de publicacao (salvo preferencia contraria em `_memoria/preferencias.md`)
2. **Cor ou fundo fora da paleta** definida em `identidade/paleta.css`
3. **Mais cores do que a paleta do cliente define**
4. **Headline vaga** que nao diz o que a pessoa ganha
5. **CTA ausente** ou generico ("saiba mais" sem contexto)
6. **Texto ilegivel** em miniatura no feed
7. **Overflow horizontal** em mobile
8. **Tom de guru** ("transforme sua vida", "metodo revolucionario")
9. **Copy generica** que poderia ser de qualquer marca — nao usa nada de `_memoria/empresa.md` ou `_memoria/persona.md`
10. **Imagem pesada** (>500KB sem otimizacao)
11. **Tipo de capa ou layout repetido** em relacao ao post publicado imediatamente antes
12. **Dado ou estatistica sem fonte** verificavel ou sem ser vivencia propria do cliente

---

## 6. Processo de Review

### Ordem de verificacao
1. Primeiro: criterios de rejeicao (se falhar, para e refaz)
2. Segundo: checklist especifico do tipo de entregavel
3. Terceiro: teste visual (abrir no navegador / visualizar em tamanho real)
4. Quarto: teste mobile (375px)
5. Quinto: leitura final da copy em voz alta (flui naturalmente?)

### Quando aplicar
- Antes de mandar pra pasta `saidas/aprovacoes/`
- Antes de publicar qualquer site
- Antes de entregar qualquer conteudo pro cliente revisar
- Em toda revisao de site existente que for solicitada
