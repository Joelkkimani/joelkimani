import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const src = path.resolve('src/assets/joe.webp');
const outDir = path.resolve('src/assets');
const sizes = [192, 512];
const radius = 50; // px

async function makeRounded(size) {
  const out = path.join(outDir, `joe-${size}.png`);
  const svgMask = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/>
    </svg>
  `;

  await sharp(src)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: Buffer.from(svgMask), blend: 'dest-in' }])
    .png({ quality: 90 })
    .toFile(out);

  console.log(`Wrote ${out}`);
}

(async function () {
  try {
    await Promise.all(sizes.map(makeRounded));
    console.log('All favicons generated.');
  } catch (err) {
    console.error('Error generating favicons:', err);
    process.exit(1);
  }
})();
