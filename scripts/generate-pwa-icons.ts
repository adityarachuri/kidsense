import { mkdirSync, readFileSync } from 'node:fs';
import sharp from 'sharp';

/**
 * Rasterizes public/favicon.svg into the PNG icon set the PWA manifest references. Run manually
 * (`npm run generate:pwa-icons`) and commit the output under public/icons/ — this is a one-off,
 * not part of `npm run build`, so the build has no image-processing dependency and output stays
 * deterministic across machines.
 */
async function generatePwaIcons(): Promise<void> {
  mkdirSync('public/icons', { recursive: true });

  const svg = readFileSync('public/favicon.svg', 'utf-8');

  await sharp(Buffer.from(svg)).resize(192, 192).png().toFile('public/icons/icon-192.png');
  await sharp(Buffer.from(svg)).resize(512, 512).png().toFile('public/icons/icon-512.png');
  await sharp(Buffer.from(svg)).resize(180, 180).png().toFile('public/icons/apple-touch-icon.png');

  // Maskable icons must keep all meaningful content inside the ~80%-diameter safe zone, since OS
  // mask shapes (circle/squircle) can clip anything closer to the edge. favicon.svg's glyph fills
  // nearly the whole 64x64 canvas, so rasterizing it directly would get clipped — instead, build a
  // full-bleed background (no rounded corners; the OS mask rounds it) with the glyph scaled down
  // and centered, then rasterize that.
  const glyphPaths = Array.from(svg.matchAll(/<path[^>]*\/>/g))
    .map((match) => match[0])
    .join('');
  const maskableSvg = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#8266C9"/>
  <g transform="translate(12.8,12.8) scale(0.6)">${glyphPaths}</g>
</svg>`;
  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile('public/icons/icon-512-maskable.png');
}

generatePwaIcons();
