import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'public', 'og-default.jpg');
const avatarPath = join(root, 'public', 'avatar.jpg');

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d2e0da"/>
      <stop offset="35%" stop-color="#e8f0ec"/>
      <stop offset="70%" stop-color="#d6e2dd"/>
      <stop offset="100%" stop-color="#c4d6cf"/>
    </linearGradient>
    <radialGradient id="orb1" cx="15%" cy="20%" r="45%">
      <stop offset="0%" stop-color="#235347" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#235347" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="85%" cy="70%" r="40%">
      <stop offset="0%" stop-color="#235347" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#235347" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#orb1)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#orb2)"/>
  <text x="72" y="220" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="64" font-weight="700" fill="#121917">Martin Ruiz</text>
  <text x="72" y="290" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="32" font-weight="500" fill="#235347">Forward Deployed Engineer</text>
  <text x="72" y="350" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="26" font-weight="400" fill="#3d524a">Citus.dev · GDG Quito · Quito, Ecuador</text>
  <text x="72" y="540" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="24" font-weight="500" fill="#235347">martinruiz.dev</text>
</svg>
`;

const avatarSize = 360;
const avatar = await sharp(avatarPath)
  .resize(avatarSize, avatarSize, { fit: 'cover', position: 'centre' })
  .png()
  .toBuffer();

// Circular mask for avatar
const circleMask = Buffer.from(
  `<svg width="${avatarSize}" height="${avatarSize}"><circle cx="${avatarSize / 2}" cy="${avatarSize / 2}" r="${avatarSize / 2}" fill="white"/></svg>`,
);

const avatarRounded = await sharp(avatar)
  .composite([{ input: circleMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

const ring = Buffer.from(
  `<svg width="${avatarSize + 16}" height="${avatarSize + 16}">
    <circle cx="${(avatarSize + 16) / 2}" cy="${(avatarSize + 16) / 2}" r="${avatarSize / 2 + 4}" fill="none" stroke="#235347" stroke-opacity="0.35" stroke-width="4"/>
  </svg>`,
);

await sharp(Buffer.from(svg))
  .composite([
    {
      input: ring,
      left: WIDTH - avatarSize - 88 - 8,
      top: Math.round((HEIGHT - avatarSize) / 2) - 8,
    },
    {
      input: avatarRounded,
      left: WIDTH - avatarSize - 88,
      top: Math.round((HEIGHT - avatarSize) / 2),
    },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(outPath);

const meta = await sharp(outPath).metadata();
console.log(`Wrote ${outPath} (${meta.width}x${meta.height}, ${meta.size} bytes)`);
