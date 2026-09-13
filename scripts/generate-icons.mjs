// One-off script to generate PWA icon assets from hand-authored SVG (no
// external logo asset exists in the repo). Not wired into any build/test
// script — run manually with:
//   pnpm exec node scripts/generate-icons.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const iconsDir = path.join(publicDir, "icons");

// Kept in sync with --color-ctextdark / --color-cbgdefault in src/index.css.
const ACCENT = "#0f172a";
const ACCENT_CONTRAST = "#ffffff";

// A geometric "K" monogram drawn from three strokes (no font dependency,
// renders identically everywhere).
function monogramK({ cx, cy, size, strokeWidth, color }) {
  const stemX = cx - size * 0.35;
  const armX = cx + size * 0.6;
  const topY = cy - size;
  const bottomY = cy + size;
  const common = `stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round"`;
  return `
    <line x1="${stemX}" y1="${topY}" x2="${stemX}" y2="${bottomY}" ${common} />
    <line x1="${stemX}" y1="${cy}" x2="${armX}" y2="${topY}" ${common} />
    <line x1="${stemX}" y1="${cy}" x2="${armX}" y2="${bottomY}" ${common} />
  `;
}

// "any" purpose icon: rounded-square card, monogram fills most of the icon.
// Safe to show with browser-applied rounding/shadowing.
const iconAnySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect x="0" y="0" width="512" height="512" rx="112" fill="${ACCENT}" />
  ${monogramK({ cx: 256, cy: 256, size: 150, strokeWidth: 64, color: ACCENT_CONTRAST })}
</svg>`;

// "maskable" icon: full-bleed square background (no rounding of our own —
// the OS applies its own mask shape), monogram kept inside the ~80% safe
// zone so it survives circular/squircle masking.
const iconMaskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect x="0" y="0" width="512" height="512" fill="${ACCENT}" />
  ${monogramK({ cx: 256, cy: 256, size: 110, strokeWidth: 46, color: ACCENT_CONTRAST })}
</svg>`;

mkdirSync(iconsDir, { recursive: true });

writeFileSync(path.join(publicDir, "favicon.svg"), iconAnySvg);

const jobs = [
  { svg: iconAnySvg, out: path.join(iconsDir, "icon-192.png"), size: 192 },
  { svg: iconAnySvg, out: path.join(iconsDir, "icon-512.png"), size: 512 },
  {
    svg: iconMaskableSvg,
    out: path.join(iconsDir, "icon-maskable-512.png"),
    size: 512,
  },
];

await Promise.all(
  jobs.map(({ svg, out, size }) =>
    sharp(Buffer.from(svg)).resize(size, size).png().toFile(out),
  ),
);

// Apple touch icon: iOS ignores alpha and applies its own rounding, so use
// the full-bleed (maskable) layout flattened onto an opaque background.
await sharp(Buffer.from(iconMaskableSvg))
  .resize(180, 180)
  .flatten({ background: ACCENT })
  .png()
  .toFile(path.join(publicDir, "apple-touch-icon.png"));

console.log("Generated icons in", iconsDir, "and", publicDir);
