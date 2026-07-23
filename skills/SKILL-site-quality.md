# SKILL: Qualidade de Sites — Padrão de Entrega

## Objetivo
Todo site gerado deve seguir essas regras antes de ser considerado pronto. Sem exceção.

---

## 1. Performance

### Fontes
- Usar `font-display: swap` em todas as fontes externas
- Limitar a no maximo 2 familias de fonte (titulo + corpo)
- Preferir variavel font quando disponivel
- Preload da fonte principal: `<link rel="preload" href="..." as="font" crossorigin>`

### Imagens
- Formato WebP como padrao, com fallback PNG/JPG via `<picture>`
- Atributo `loading="lazy"` em toda imagem abaixo do fold
- Atributo `width` e `height` explicitos para evitar layout shift
- Comprimir antes de usar (tinypng ou equivalente)
- Usar SVG para icones e ilustracoes simples

### CSS
- CSS critico inline no `<head>` para conteudo above-the-fold (hero)
- Minificar CSS em producao
- Evitar `@import` dentro do CSS (usar `<link>` no HTML)
- Nenhum CSS nao utilizado acima de 10% do arquivo total

### JavaScript
- Zero JS quando possivel (CSS-only para animacoes e interacoes simples)
- JS no final do `<body>` ou com `defer`
- Nenhuma biblioteca externa a menos que justificada (sem jQuery, sem frameworks pesados)
- Intersection Observer para animacoes de scroll

---

## 2. CSS Moderno

### Custom Properties
- Toda cor, fonte, espacamento e border-radius em variavel CSS
- Variaveis organizadas por categoria no `:root`
- Nunca hardcodar valores que ja existem como variavel
- Cores e tipografia vêm de `identidade/paleta.css` e `identidade/tipografia.md` — nunca inventar paleta nova

### Tipografia fluida
- Usar `clamp()` para font-size responsivo
- Escala tipografica consistente (ratio 1.25 ou 1.333)
- Exemplo: `font-size: clamp(2rem, 5vw + 1rem, 4.5rem)`

### Layout
- Mobile-first: estilos base para mobile, media queries so para expandir
- `min()` e `max()` para larguras flexiveis
- Grid com `auto-fit` / `auto-fill` quando o numero de colunas varia
- Flexbox para alinhamento, Grid para layout 2D

### Espacamento
- Sistema de 8px: todos os paddings, margins e gaps em multiplos de 8
- Valores permitidos: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 120, 160
- Variavel para cada nivel: `--space-xs: 4px`, `--space-sm: 8px`, `--space-md: 16px`, etc.

### Efeitos
- `backdrop-filter: blur()` para glassmorphism sutil
- `mix-blend-mode` para texturas e sobreposicoes
- Gradientes com transparencia para profundidade
- `box-shadow` em camadas (2-3 sombras para realismo)

---

## 3. Acessibilidade

### HTML semantico
- `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` nos lugares certos
- `<h1>` unico por pagina, hierarquia sem pular niveis
- `<button>` para acoes, `<a>` para navegacao
- `alt` descritivo em toda imagem (vazio + `aria-hidden="true"` so para decorativas)

### Interacao
- `:focus-visible` em todo elemento interativo (nunca `outline: none` sem substituto)
- Area de toque minima 44x44px em mobile
- Contraste minimo 4.5:1 para texto normal, 3:1 para texto grande
- `prefers-reduced-motion: reduce` respeitado (desativar animacoes)

### Formularios
- `<label>` associado a cada input
- Mensagens de erro claras e associadas via `aria-describedby`
- Nao depender so de cor para indicar estado

---

## 4. Responsividade

### Breakpoints
```css
/* Mobile first */
/* Tablet: min-width: 768px */
/* Desktop: min-width: 1024px */
/* Wide: min-width: 1440px */
```

### Regras
- Testar em 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1024px, 1440px
- Texto legivel sem zoom em qualquer largura
- Nenhum overflow horizontal
- Imagens nunca ultrapassam o container
- Menu hamburger em mobile se houver navegacao
- Touch targets generosos em mobile (minimo 44px)

### Tipografia responsiva
- Body text: 16px minimo em mobile
- Headings: usar `clamp()` para escalar suavemente
- Line-height: 1.5 a 1.7 para corpo, 1.0 a 1.1 para titulos

---

## 5. Animacoes

### Principios
- Animacoes servem para guiar atencao, nao para decorar
- Duracao: 200-400ms para micro-interacoes, 600-1000ms para transicoes de pagina
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` para entradas suaves
- Nunca animar `width`, `height`, `top`, `left` (usar `transform` e `opacity`)

### Scroll reveal
- Entrada sutil: `translateY(24px)` maximo (nao exagerar)
- Delay escalonado entre elementos: 60-100ms entre cada
- Threshold do observer: 0.1 a 0.15
- Cada elemento anima apenas uma vez (unobserve apos visivel)

### Hover
- `transform: translateY(-2px)` + sombra para elevacao
- Transicao de cor suave (0.2s a 0.3s)
- Nunca mudar layout no hover (nao mudar tamanho, padding, margin)

---

## 6. SEO e Meta Tags

### Obrigatorio em toda pagina
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Titulo da Pagina | {{NOME_NEGOCIO}}</title>
<meta name="description" content="Descricao com 150-160 caracteres">
<meta name="robots" content="index, follow">
<link rel="canonical" href="URL_COMPLETA">
```

### Open Graph (compartilhamento social)
```html
<meta property="og:title" content="Titulo">
<meta property="og:description" content="Descricao">
<meta property="og:image" content="URL_DA_IMAGEM_1200x630">
<meta property="og:url" content="URL_COMPLETA">
<meta property="og:type" content="website">
```

### Favicon
- `favicon.ico` (32x32) + `apple-touch-icon.png` (180x180)
- SVG favicon como preferencia quando possivel

---

## 7. Estrutura de Codigo

### Organizacao do CSS
1. Reset / base
2. Variaveis (`:root`)
3. Tipografia
4. Layout / grid
5. Componentes (cards, botoes, badges)
6. Secoes especificas
7. Utilitarios
8. Media queries agrupadas por componente (nao no final)

### Nomenclatura
- Classes descritivas em portugues ou ingles (manter consistencia)
- Prefixo por componente: `.card-problema`, `.card-agente`
- Modificadores com sufixo: `.btn-primary`, `.btn-secondary`
- Estado: `.is-visible`, `.is-active`, `.is-open`

### HTML
- Indentacao consistente (2 espacos)
- Comentarios de secao para blocos grandes: `<!-- HERO -->`, `<!-- AGENTES -->`
- Nenhum `<div>` desnecessario (flat DOM quando possivel)
- Atributos na ordem: class, id, data-*, aria-*, src/href, alt

---

## 8. Checklist pre-entrega (sites)

Antes de marcar como pronto:

- [ ] Validar HTML no W3C validator
- [ ] Testar em 375px, 768px, 1024px, 1440px
- [ ] Lighthouse score: Performance > 90, Accessibility > 90
- [ ] Todas as imagens otimizadas e com alt
- [ ] Links funcionando (sem 404)
- [ ] Favicon presente
- [ ] Open Graph tags presentes
- [ ] Animacoes respeitam `prefers-reduced-motion`
- [ ] Contraste de cores verificado
- [ ] Nenhum overflow horizontal
- [ ] Texto legivel sem zoom em mobile
- [ ] CTA visivel sem scroll em mobile
