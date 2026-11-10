// Samler editor.src.html + assets/ til én selvstændig fil: index.html
// Kør:  node tools/instagram-highlights/build.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const mime = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };
const assets = {};
for (const f of readdirSync(join(dir, "assets")).sort()) {
  const ext = extname(f).toLowerCase();
  if (!mime[ext]) continue;
  assets[basename(f, ext)] = `data:${mime[ext]};base64,${readFileSync(join(dir, "assets", f)).toString("base64")}`;
}
const src = readFileSync(join(dir, "editor.src.html"), "utf8");
if (!src.includes('"__ASSETS__"')) throw new Error("Placeholder mangler i editor.src.html");
writeFileSync(join(dir, "index.html"), src.replace('"__ASSETS__"', () => JSON.stringify(assets)));
console.log("index.html bygget –", Object.keys(assets).length, "billeder");
