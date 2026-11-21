// Fælles brand, CSS og render-hjælpere til social-indhold.
// Stil følger docs/design-regler.md: mørk #1c1e1e, accent #00a8e8, Unbounded + Inter, ingen gradienter/glød.
const fs = require("fs");
const os = require("os");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const REPO = path.resolve(ROOT, "..");
const FONT_DIR = path.join(ROOT, "fonts");
const OUT = path.join(ROOT, "out");
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), "webhjerte-social-"));
const HEART = path.join(REPO, "public", "W.png");
const CASES = path.join(REPO, "src", "app", "assets", "cases");

const C = {
  dark: "#1c1e1e",
  card: "#242828",
  light: "#f7f6f6",
  grey: "#eceeee",
  blue: "#00a8e8",
  blueLink: "#007aab",
  paleBlue: "#e4f0f7",
  mute: "#b4bdbd",
  dim: "#8a9696",
  body: "#4a4a4a",
  border: "#e8e6e6",
  green: "#3ddc97",
};

const baseCss = (w, h) => `
@font-face{font-family:'Unbounded';font-weight:600;src:url('file://${FONT_DIR}/Unbounded-600.ttf')}
@font-face{font-family:'Unbounded';font-weight:700;src:url('file://${FONT_DIR}/Unbounded-700.ttf')}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${w}px;height:${h}px;overflow:hidden}
body{font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;color:${C.dark}}
.h{font-family:'Unbounded',sans-serif;font-weight:700;letter-spacing:-0.02em;line-height:1.14}
.num{font-family:'Inter',sans-serif!important;font-weight:800;letter-spacing:-0.04em;white-space:nowrap}
.h6{font-family:'Unbounded',sans-serif;font-weight:600;letter-spacing:-0.01em}
.slide{position:relative;width:${w}px;height:${h}px;overflow:hidden}
.dark{background:${C.dark};color:#fff}
.light{background:${C.light};color:${C.dark}}
.blue{background:${C.blue};color:${C.dark}}
.accent{color:${C.blue}}
.dark .p{color:${C.mute}}
.light .p{color:${C.body}}
.blue .p{color:${C.dark}}
.p{line-height:1.5}
.heart{width:1em;height:1em;object-fit:contain;display:block}
.blue .heart{filter:brightness(0)}
.brand{display:flex;align-items:center;gap:14px;font-family:'Unbounded',sans-serif;font-weight:600;font-size:28px;letter-spacing:-0.01em}
.brand .heart{font-size:44px}
.pill{display:inline-flex;align-items:center;gap:14px;border-radius:999px;font-family:'Unbounded',sans-serif;font-weight:600}
.pill.solid{background:${C.blue};color:${C.dark}}
.blue .pill.solid{background:${C.dark};color:#fff}
.pill.line{border:3px solid currentColor}
`;

function page(w, h, bodyHtml, extraCss = "") {
  return `<!doctype html><html><head><meta charset="utf-8"><style>${baseCss(w, h)}${extraCss}</style></head><body>${bodyHtml}</body></html>`;
}

let browser;
async function getBrowser() {
  if (!browser) browser = await chromium.launch();
  return browser;
}
async function closeBrowser() {
  if (browser) await browser.close();
  browser = null;
}

let counter = 0;
async function openHtml(w, h, html) {
  const b = await getBrowser();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  const file = path.join(TMP, `p${counter++}.html`);
  fs.writeFileSync(file, html);
  await p.goto("file://" + file);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(80);
  return { p, ctx };
}

async function shot(outPath, w, h, bodyHtml, extraCss = "") {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const { p, ctx } = await openHtml(w, h, page(w, h, bodyHtml, extraCss));
  await p.screenshot({ path: outPath, type: "png" });
  await ctx.close();
  console.log("  ✓", path.relative(ROOT, outPath));
}

const brandFooter = (extra = "") =>
  `<div class="brand"><img class="heart" src="file://${HEART}"><span>WebHjerte</span>${extra}</div>`;

module.exports = { C, ROOT, REPO, OUT, TMP, HEART, CASES, page, shot, openHtml, getBrowser, closeBrowser, brandFooter, fs, path };
