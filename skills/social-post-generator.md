# Skill — social-post-generator

## Função
Gerar posts prontos para publicar em 3 formatos.

## Inputs obrigatórios
- Tema do post
- Formato (estático, carrossel ou reels)
- Pilar (educação, bastidor ou provocação)
- Ler `_memoria/persona.md` para adaptar linguagem
- Ler `_memoria/preferencias.md` para tom de voz

---

## Formato 1 — Estático

### Output
- Headline do post (texto da arte)
- Legenda completa
- Hashtags (máximo 6)
- CTA

### Estrutura da legenda
```
[Frase de impacto]

[Desenvolvimento — 3 a 5 linhas curtas]

[Lista ou bullets — máximo 4 itens]

[Fechamento com opinião ou convite]

[Hashtags]
```

---

## Formato 2 — Carrossel

### Output
- Slide 1: Capa (título + 1-2 palavras em destaque)
- Slides 2–6: Conteúdo (número + título + explicação)
- Slide final: CTA
- Legenda completa
- Hashtags

### Regra por slide
- Máximo 1 ideia por slide
- Título bold + explicação curta embaixo
- Número do slide no canto (01, 02, 03...)

---

## Formato 3 — Reels (roteiro narrado)

### Output
- Roteiro de narração (30–45 segundos)
- Sugestão de cena/vídeo de fundo
- Legenda completa
- Hashtags

### Estrutura do roteiro
```
[GANCHO — 5 segundos — para o scroll]
[PROBLEMA ou OBSERVAÇÃO — 10 segundos]
[VIRADA — o que a maioria não percebe — 10 segundos]
[SOLUÇÃO ou APRENDIZADO — 10 segundos]
[CTA — 5 segundos]
```

---

## Tom de voz (sempre aplicar)
- Direto, sem rodeio
- Frase curta, uma ideia por vez
- Sincero — pode falar de erro
- Sem: jornada, transformação, incrível, poderoso
- Sem começar com: "Você sabia que..."
