// Ottimizza un singolo file passato come argomento.
// Uso: node optimize-one.js <nome_file> [maxSide=2000] [quality=82]
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const file = process.argv[2];
const maxSide = parseInt(process.argv[3] || '2000', 10);
const quality = parseInt(process.argv[4] || '82', 10);

if (!file) {
  console.error('Uso: node optimize-one.js <nome_file> [maxSide=2000] [quality=82]');
  process.exit(1);
}

const src = path.resolve(__dirname, '..', 'images', file);
if (!fs.existsSync(src)) {
  console.error(`File non trovato: ${src}`);
  process.exit(1);
}

(async () => {
  const tmp = src + '.tmp';
  const meta = await sharp(src).metadata();
  const before = fs.statSync(src).size;

  await sharp(src)
    .resize({ width: maxSide, height: maxSide, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality, progressive: true })
    .toFile(tmp);

  const newMeta = await sharp(tmp).metadata();
  fs.renameSync(tmp, src);
  const after = fs.statSync(src).size;

  console.log(`${file}: ${meta.width}x${meta.height} ${(before/1024).toFixed(0)}KB  →  ${newMeta.width}x${newMeta.height} ${(after/1024).toFixed(0)}KB  (-${((1-after/before)*100).toFixed(0)}%)`);
})();
