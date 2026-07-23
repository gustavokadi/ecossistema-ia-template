require('dotenv').config();
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');

// -----------------------------------------------------------------------------
// Motor genérico de renderização HTML → PNG (posts, carrosséis, capas)
// Usado pelo Claude Code: ele monta o HTML do slide (lendo cores e tipografia
// de identidade/paleta.css e identidade/tipografia.md) e chama estas funções
// pra rasterizar em PNG pronto pra publicar. Ver skills/image-export.md.
// -----------------------------------------------------------------------------

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Lê identidade/paleta.css e devolve as CSS custom properties como objeto JS
// (ex: { 'cor-fundo': '#0A0A0A', 'cor-destaque': '#C9922A', ... })
function lerPaleta(paletaPath = path.resolve(__dirname, '../identidade/paleta.css')) {
  const css = fs.readFileSync(paletaPath, 'utf-8');
  const vars = {};
  for (const match of css.matchAll(/--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g)) {
    vars[match[1]] = match[2].trim();
  }
  return vars;
}

// Renderiza um HTML string em PNG numa página puppeteer já aberta
async function exportPNG(page, html, outputPath, { width = 1080, height = 1350 } = {}) {
  const tmp = path.join(os.tmpdir(), `slide_${Date.now()}_${Math.random().toString(36).slice(2)}.html`);
  fs.writeFileSync(tmp, html, 'utf-8');
  await page.goto(`file://${tmp}`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: outputPath, type: 'png', clip: { x: 0, y: 0, width, height } });
  fs.unlinkSync(tmp);
  console.log(`  ✓ ${path.basename(outputPath)}`);
}

// Gera um carrossel completo (ou um post único, passando 1 slide só)
// slides: array de HTML strings já prontos (montados pelo Claude Code)
async function criarCarrossel({ outputFolder, slides, legenda, width = 1080, height = 1350 }) {
  const outputDir = path.resolve(process.cwd(), `conteudo/output/${outputFolder}`);
  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`Gerando conteúdo em conteudo/output/${outputFolder}/\n`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 2 });

  for (let i = 0; i < slides.length; i++) {
    const nome = slides.length === 1 ? 'post.png' : `slide_${i + 1}.png`;
    await exportPNG(page, slides[i], path.join(outputDir, nome), { width, height });
  }

  await browser.close();

  if (legenda) {
    fs.writeFileSync(path.join(outputDir, 'legenda.md'), legenda, 'utf-8');
    console.log('  ✓ legenda.md');
  }

  console.log(`\n✓ Conteúdo completo! (${slides.length} imagem(ns) em ${outputDir})`);
}

// Busca uma foto de banco de imagens via Pexels (opcional — requer PEXELS_API_KEY em .env)
async function getPexelsImage(query) {
  if (!process.env.PEXELS_API_KEY) return '';
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=square`,
      { headers: { Authorization: process.env.PEXELS_API_KEY } }
    );
    const data = await res.json();
    return data.photos?.[0]?.src?.large2x || '';
  } catch {
    return '';
  }
}

// Rotação de fotos reais do cliente sem repetir, controlada por um JSON simples.
// controlPath: identidade/assets/fotos/controle-fotos.json
// { "ultima_foto_usada": "", "disponiveis": [...todas as fotos...], "historico": [] }
function getNextPhoto(assetsDir, controlPath) {
  if (!fs.existsSync(controlPath)) return null;
  const ctrl = JSON.parse(fs.readFileSync(controlPath, 'utf-8'));
  if (!ctrl.disponiveis || ctrl.disponiveis.length === 0) {
    ctrl.disponiveis = (ctrl.todas || []).filter((f) => f !== ctrl.ultima_foto_usada);
    ctrl.historico = [ctrl.ultima_foto_usada].filter(Boolean);
  }
  const foto = ctrl.disponiveis.shift();
  if (!foto) return null;
  const full = path.resolve(assetsDir, foto);
  if (!fs.existsSync(full)) return getNextPhoto(assetsDir, controlPath);
  ctrl.ultima_foto_usada = foto;
  ctrl.historico = ctrl.historico || [];
  ctrl.historico.push(foto);
  fs.writeFileSync(controlPath, JSON.stringify(ctrl, null, 2) + '\n', 'utf-8');
  return `file://${full}`;
}

module.exports = {
  slugify,
  lerPaleta,
  exportPNG,
  criarCarrossel,
  getPexelsImage,
  getNextPhoto,
};
