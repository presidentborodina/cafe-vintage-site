// Re-extract the "Pranzo" plate illustration from the high-res original,
// preserving pencil shading and boosting contrast so it reads as well
// as the bolder timeline sketches (Sala, Aperitivo).
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const base = path.join(__dirname, '..', 'images');
const src = path.join(base, 'hand-drawn-cutlery-set', 'dw21-mynt-11.jpg');

// Levels: pixels darker than LOW -> black, lighter than HIGH -> white.
// Tightening this range darkens the pencil strokes and deepens shading.
const LOW = 175;
const HIGH = 250;

async function run(out) {
  // Higher render size keeps the linework crisp; resize 320 max side like the others.
  const pipeline = sharp(src).resize(360, 360, { fit: 'inside', withoutEnlargement: true });
  const { data, info } = await pipeline.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    // Levels remap -> increases contrast / darkens strokes
    let t = (lum - LOW) / (HIGH - LOW);
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const outLum = Math.round(t * 255);

    // Alpha: pure background transparent, strokes & shading opaque
    let alpha;
    if (outLum >= 250) alpha = 0;
    else if (outLum >= 215) alpha = Math.round((255 - outLum) * 4);
    else alpha = 255;
    if (alpha > 255) alpha = 255;

    data[i] = data[i + 1] = data[i + 2] = outLum; // neutral gray->black linework
    data[i + 3] = alpha;
  }

  await sharp(Buffer.from(data), {
    raw: { width: info.width, height: info.height, channels: 4 }
  }).png({ compressionLevel: 8 }).toFile(out);

  const kb = Math.round(fs.statSync(out).size / 1024);
  console.log(`OK ${path.basename(out)} (${info.width}x${info.height}px, ${kb}KB)`);
}

run(path.join(base, 'sketch_pranzo_preview.png'));
