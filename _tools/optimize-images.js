// Ottimizza le foto del sito Caffé Vintage per il web.
// Ridimensiona (lato lungo) + ricomprime JPEG con qualità 82% progressive.
// Sovrascrive i file in `../images/`.

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.resolve(__dirname, '..', 'images');

const targets = [
  { file: 'hero.jpg',           maxSide: 2000 },
  { file: 'sala_main.jpg',      maxSide: 1800 },
  { file: 'sala_sera.jpg',      maxSide: 1800 },
  { file: 'detail_bancone.jpg', maxSide: 1600 },
  { file: 'focaccia.jpg',       maxSide: 1600 },
  { file: 'facade.jpg',         maxSide: 1800 },
];

const QUALITY = 82;

async function optimize(t) {
  const src = path.join(imgDir, t.file);
  if (!fs.existsSync(src)) {
    return { file: t.file, status: 'SKIP (mancante)' };
  }
  const tmp = src + '.tmp';
  const meta = await sharp(src).metadata();
  const before = fs.statSync(src).size;

  await sharp(src)
    .resize({ width: t.maxSide, height: t.maxSide, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true })
    .toFile(tmp);

  const newMeta = await sharp(tmp).metadata();
  fs.renameSync(tmp, src);
  const after = fs.statSync(src).size;

  return {
    file: t.file,
    status: 'OK',
    fromPx: `${meta.width}x${meta.height}`,
    toPx: `${newMeta.width}x${newMeta.height}`,
    fromKB: (before / 1024).toFixed(0),
    toKB: (after / 1024).toFixed(0),
    savedPct: ((1 - after / before) * 100).toFixed(0),
  };
}

(async () => {
  console.log('Ottimizzazione immagini Caffé Vintage');
  console.log('-----------------------------------------');
  for (const t of targets) {
    try {
      const r = await optimize(t);
      if (r.status === 'OK') {
        console.log(`${r.file.padEnd(22)} ${r.fromPx.padEnd(11)} ${r.fromKB.padStart(5)}KB  →  ${r.toPx.padEnd(11)} ${r.toKB.padStart(5)}KB  (-${r.savedPct}%)`);
      } else {
        console.log(`${r.file.padEnd(22)} ${r.status}`);
      }
    } catch (e) {
      console.error(`${t.file}: ERRORE ${e.message}`);
    }
  }

  // Pulizia duplicati Windows "(2)"
  const dupePath = path.join(imgDir, 'sala_main (2).jpg');
  if (fs.existsSync(dupePath)) {
    fs.unlinkSync(dupePath);
    console.log(`\nRimosso duplicato Windows: 'sala_main (2).jpg'`);
  }

  console.log('\nFatto.');
})();
