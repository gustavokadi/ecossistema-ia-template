# Skill — image-export

## Função
Transformar um post ou carrossel já escrito (por `social-post-generator`) em imagens PNG prontas
pra publicar — a mesma técnica usada no laboratório: HTML renderizado via Puppeteer, não geração
de imagem por IA.

## Quando usar
Depois que o texto do post/carrossel já foi decidido (título, subtítulo, número de slides). Este é
o último passo antes de o conteúdo ir pra `saidas/aprovacoes/`.

## Pré-requisito (uma vez só)
`npm install` na raiz do projeto (instala `puppeteer` e `dotenv`, ver `package.json`). Se for usar
banco de imagens (Pexels), preencher `PEXELS_API_KEY` no `.env` (copiar de `.env.example`) — sem a
chave, o sistema simplesmente não busca foto de banco, sem quebrar.

## Como funciona
1. Ler `identidade/paleta.css` e `identidade/tipografia.md` — nunca inventar cor ou fonte.
2. Montar o HTML do slide (1080x1080 para post único, 1080x1350 para carrossel/reels), inline CSS
   usando as variáveis lidas no passo 1.
3. Escrever um script Node temporário que importa `scripts/render-engine.js` e chama
   `criarCarrossel({ outputFolder, slides, legenda })` passando os HTML strings montados.
4. Rodar o script com `node` (via Bash), depois apagar o script temporário — só o output em
   `conteudo/output/[data]_[tema-resumido]/` fica.
5. Passar pelo `skills/SKILL-review-qa.md` antes de considerar pronto.

## Exemplo de uso

```js
// tmp-gerar.js — apagar depois de rodar
const { criarCarrossel, lerPaleta } = require('./scripts/render-engine.js');
const cor = lerPaleta(); // { 'cor-fundo': '#0A0A0A', 'cor-destaque': '#C9922A', ... }

const slide1 = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1350px; background:${cor['cor-fundo']}; font-family:${cor['fonte-corpo']}; }
  .titulo { font-size:68px; font-weight:900; color:${cor['cor-texto']}; }
  .destaque { color:${cor['cor-destaque']}; }
</style></head><body>
  <h1 class="titulo">Título do post <span class="destaque">em destaque</span></h1>
</body></html>`;

criarCarrossel({
  outputFolder: '2026-07-22_tema-do-post',
  slides: [slide1 /*, slide2, slide3... */],
  legenda: 'Texto completo da legenda\n\n#hashtag1 #hashtag2',
});
```

## Fotos reais do cliente (opcional)
Se o cliente fornecer fotos próprias, salvar em `identidade/assets/fotos/` e criar
`identidade/assets/fotos/controle-fotos.json`:
```json
{ "ultima_foto_usada": "", "disponiveis": [], "historico": [], "todas": ["foto1.jpg", "foto2.jpg"] }
```
Usar `getNextPhoto(assetsDir, controlPath)` de `scripts/render-engine.js` pra rodar sem repetir a
mesma foto em posts seguidos.

## Regra de organização de output
- Nunca salvar solto em `conteudo/output/`
- Sempre subpasta `conteudo/output/YYYY-MM-DD_[tema-resumido]/`
- Um post = 1 imagem (`post.png`); um carrossel = várias (`slide_1.png`, `slide_2.png`...)
- `legenda.md` sempre junto, com o texto completo pronto pra colar
