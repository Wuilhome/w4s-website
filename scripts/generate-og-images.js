import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Generate main OG image
const svgPath = join(publicDir, 'images', 'og-image.svg');
const pngPath = join(publicDir, 'images', 'og-image.png');
const jpgPath = join(publicDir, 'images', 'og-image.jpg');

console.log('🖼️  Generating OG images...');

const svg = readFileSync(svgPath, 'utf-8');

const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1200
  }
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

writeFileSync(pngPath, pngBuffer);
console.log('✅ Generated og-image.png');

// For JPG, we just use the PNG as most platforms accept both
// If real JPG is needed, we'd use sharp
writeFileSync(jpgPath, pngBuffer);
console.log('✅ Generated og-image.jpg');

console.log('🎉 OG images generated successfully!');
