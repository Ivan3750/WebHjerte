// Statiske billeder: karruseller, opslag, stories, Facebook-grafik, profilbilleder.
const { C, OUT, HEART, CASES, shot, brandFooter, path } = require("./base.cjs");

const heartImg = (size = 44) => `<img class="heart" style="font-size:${size}px" src="file://${HEART}">`;

const svg = {
  phone: (c = "currentColor", s = 54) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>`,
  pin: (c = "currentColor", s = 40) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  check: (c = C.green, s = 40) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  cross: (c = "#ff6b6b", s = 40) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  arrowR: (c = "currentColor", s = 44) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  arrowD: (c = "currentColor", s = 90) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v15M6 13l6 6 6-6"/></svg>`,
  search: (c = "currentColor", s = 44) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
};

// ---------- Karrusel-slide (1080 x 1350) ----------
function carouselSlide({ theme = "dark", tag = "", h, p = "", visual = "", idx, total, cover = false, hSize }) {
  const hs = hSize || (cover ? 76 : 66);
  const tagColor = theme === "light" ? C.blueLink : theme === "blue" ? C.dark : C.blue;
  const dim = theme === "light" ? "#6a6a6a" : theme === "blue" ? C.dark : C.dim;
  return `<div class="slide ${theme}" style="padding:84px 84px 76px;display:flex;flex-direction:column">
    <div style="display:flex;justify-content:space-between;align-items:center;height:44px">
      <div class="h6" style="font-size:28px;color:${tagColor}">${tag}</div>
      <div class="h6" style="font-size:24px;color:${dim}">${idx} / ${total}</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:40px">
      <div class="h" style="font-size:${hs}px">${h}</div>
      ${p ? `<div class="p" style="font-size:38px;max-width:880px">${p}</div>` : ""}
      ${visual}
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center">
      ${brandFooter()}
      ${cover ? `<div class="pill line" style="font-size:26px;padding:16px 30px;color:${theme === "light" ? C.dark : "#fff"}">Swipe ${svg.arrowR("currentColor", 30)}</div>` : `<div class="h6" style="font-size:24px;color:${dim}">webhjerte.dk</div>`}
    </div>
  </div>`;
}

const phoneMock = (good) => `
<div style="width:330px;height:560px;border:9px solid ${C.dark};border-radius:52px;background:#fff;position:relative;overflow:hidden">
  ${
    good
      ? `<div style="padding:34px 24px;display:flex;flex-direction:column;gap:18px">
          <div style="display:flex;justify-content:space-between;align-items:center"><div style="width:44px;height:44px;border-radius:12px;background:${C.blue}"></div><div style="width:34px;height:4px;background:${C.dark};box-shadow:0 10px 0 ${C.dark},0 -10px 0 ${C.dark}"></div></div>
          <div class="h" style="font-size:28px;margin-top:10px">Din lokale VVS i Horsens</div>
          <div style="height:10px;border-radius:5px;background:${C.border};width:92%"></div>
          <div style="height:10px;border-radius:5px;background:${C.border};width:70%"></div>
          <div class="h6" style="margin-top:12px;background:${C.blue};border-radius:14px;padding:20px;text-align:center;font-size:22px;display:flex;justify-content:center;gap:10px;align-items:center">${svg.phone(C.dark, 26)} Ring nu</div>
          <div style="height:90px;border-radius:14px;background:${C.paleBlue};margin-top:8px"></div>
        </div>`
      : `<div style="transform:scale(.52);transform-origin:top left;width:640px;padding:16px">
          <div style="display:flex;gap:14px;margin-bottom:14px">${["Forside", "Ydelser", "Om os", "Galleri", "Kontakt", "Links"].map((x) => `<div style="font-size:22px;color:${C.body}">${x}</div>`).join("")}</div>
          <div style="font-size:30px;font-weight:700;margin-bottom:10px">Velkommen til vores hjemmeside</div>
          ${[100, 96, 99, 90, 98, 70, 100, 94].map((w) => `<div style="height:12px;border-radius:6px;background:${C.border};width:${w}%;margin-bottom:12px"></div>`).join("")}
          <div style="font-size:20px;color:${C.body};margin-top:14px">Tlf. 12 34 56 78 · info@firma.dk</div>
          ${[100, 88, 96].map((w) => `<div style="height:12px;border-radius:6px;background:${C.border};width:${w}%;margin-top:12px"></div>`).join("")}
        </div>`
  }
</div>`;

const compare = `
<div style="display:flex;gap:70px;justify-content:center;align-items:flex-start">
  <div style="display:flex;flex-direction:column;align-items:center;gap:22px">${phoneMock(false)}
    <div class="h6" style="display:flex;gap:10px;align-items:center;font-size:24px">${svg.cross("#e5484d", 30)} Svær at bruge</div></div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:22px">${phoneMock(true)}
    <div class="h6" style="display:flex;gap:10px;align-items:center;font-size:24px">${svg.check("#1a9e63", 30)} Nem at bruge</div></div>
</div>`;

async function carouselTegn() {
  const dir = path.join(OUT, "instagram", "karrusel-3-tegn");
  const T = 6;
  const slides = [
    carouselSlide({ theme: "dark", cover: true, idx: 1, total: T, tag: "Tjek din egen side",
      h: `3 tegn på, at din hjemmeside koster dig <span class="accent">kunder</span>`, hSize: 82,
      p: "Det tager under ét minut at tjekke." }),
    carouselSlide({ theme: "light", idx: 2, total: T, tag: "Tegn 1",
      h: "Den er svær at bruge på mobil",
      p: "Mange finder dig fra telefonen. Skal de zoome og lede, trykker de tilbage og ringer til en anden.",
      visual: compare, hSize: 60 }),
    carouselSlide({ theme: "dark", idx: 3, total: T, tag: "Tegn 2",
      h: "Man kan ikke ringe med ét klik",
      p: "Står dit nummer kun som tekst, skal kunden selv skrive det af. Gør det til en knap.",
      visual: `<div class="pill solid" style="font-size:44px;padding:36px 60px;align-self:flex-start">${svg.phone(C.dark, 56)} Ring til os</div>` }),
    carouselSlide({ theme: "light", idx: 4, total: T, tag: "Tegn 3",
      h: "Den siger ikke, hvor du arbejder",
      p: "Skriv tydeligt, hvilke områder du dækker. Så forstår både kunder og Google, at du er lokal.",
      visual: `<div style="display:flex;gap:18px;flex-wrap:wrap">${["Horsens", "Vejle", "Midtjylland"].map((x) => `<div class="pill" style="background:#fff;border:2px solid ${C.border};font-size:34px;padding:22px 34px">${svg.pin(C.blueLink, 38)} ${x}</div>`).join("")}</div>` }),
    carouselSlide({ theme: "dark", idx: 5, total: T, tag: "Gode nyheder",
      h: "Det kan rettes. Ofte på få dage.",
      visual: `<div style="display:flex;gap:30px">
        <div style="flex:1;background:${C.card};border:1px solid rgba(255,255,255,.1);border-radius:28px;padding:40px"><div class="h accent num" style="font-size:104px">48 t</div><div class="p" style="font-size:32px;margin-top:10px">til dit første designudkast</div></div>
        <div style="flex:1;background:${C.card};border:1px solid rgba(255,255,255,.1);border-radius:28px;padding:40px"><div class="h accent num" style="font-size:104px">0 kr</div><div class="p" style="font-size:32px;margin-top:10px">hvis du ikke er tilfreds</div></div>
      </div>` }),
    carouselSlide({ theme: "blue", idx: 6, total: T, tag: "Næste skridt",
      h: "Skriv UDKAST i en besked", hSize: 78,
      p: "Så sender jeg et konkret tilbud inden for 24 timer. Fast pris, og du betaler først, når siden er leveret.",
      visual: `<div class="pill solid" style="font-size:34px;padding:28px 46px;align-self:flex-start">webhjerte.dk ${svg.arrowR("#fff", 36)}</div>` }),
  ];
  for (let i = 0; i < slides.length; i++) await shot(path.join(dir, `slide-${i + 1}.png`), 1080, 1350, slides[i]);
}

// ---------- Case-karrusel: Pizzaria i Horsens ----------
const laptopCrop = (file, crop, w) => {
  const [cx, cy, cw, ch] = crop; // udsnit i originalbilledet (1920x1080)
  const s = w / cw;
  return `<div style="width:${w}px;height:${Math.round(ch * s)}px;border-radius:26px;background:url('file://${path.join(CASES, file)}') -${Math.round(cx * s)}px -${Math.round(cy * s)}px / ${Math.round(1920 * s)}px ${Math.round(1080 * s)}px no-repeat;border:1px solid rgba(255,255,255,.12)"></div>`;
};

async function carouselCase() {
  const dir = path.join(OUT, "instagram", "karrusel-case-pizzaria");
  const T = 6;
  const slides = [
    carouselSlide({ theme: "dark", cover: true, idx: 1, total: T, tag: "Case · Horsens",
      h: `Wolt og JustEat tog op mod <span class="accent">30 %</span> af hver bestilling`, hSize: 70,
      p: "Sådan fik en pizzaforretning i Horsens sine egne kunder." }),
    carouselSlide({ theme: "light", idx: 2, total: T, tag: "Problemet",
      h: "Jo mere de solgte, jo mindre tjente de.",
      p: "Uden en ordentlig hjemmeside havde forretningen intet alternativ at sende kunderne hen til.",
      visual: `<div style="background:#fff;border:2px solid ${C.border};border-radius:28px;padding:36px 44px;display:flex;align-items:baseline;gap:24px"><div class="h num" style="font-size:120px;color:${C.blueLink}">30 %</div><div class="p" style="font-size:32px">op mod i gebyr pr. bestilling</div></div>` }),
    carouselSlide({ theme: "dark", idx: 3, total: T, tag: "Løsningen",
      h: "En side, kunderne selv vil bestille fra", hSize: 58,
      visual: laptopCrop("PizzleM.png", [330, 130, 1230, 840], 912) }),
    carouselSlide({ theme: "light", idx: 4, total: T, tag: "Sådan virker den",
      h: "Mad bestilt på under et minut",
      p: "Hurtig og mobiloptimeret, uden unødvendige klik. Bestillingsknappen er aldrig langt væk." }),
    carouselSlide({ theme: "dark", idx: 5, total: T, tag: "Lokal synlighed",
      h: "Fundet, når kunderne søger lokalt",
      p: "Siden er optimeret til søgninger som “Pizza Horsens”, så nye kunder finder frem uden en app med gebyr.",
      visual: `<div style="display:flex;align-items:center;gap:20px;background:#fff;color:${C.dark};border-radius:999px;padding:26px 38px;width:640px;font-size:38px">${svg.search(C.body, 44)} <span>pizza horsens</span></div>` }),
    carouselSlide({ theme: "blue", idx: 6, total: T, tag: "Din tur",
      h: "Egne kunder i stedet for gebyrer?", hSize: 74,
      p: "Skriv UDKAST i en besked, så får du første designudkast på 48 timer. Er du ikke tilfreds, koster det 0 kr.",
      visual: `<div class="pill solid" style="font-size:34px;padding:28px 46px;align-self:flex-start">webhjerte.dk ${svg.arrowR("#fff", 36)}</div>` }),
  ];
  for (let i = 0; i < slides.length; i++) await shot(path.join(dir, `slide-${i + 1}.png`), 1080, 1350, slides[i]);
}

// ---------- Enkelt Instagram-opslag (1080 x 1350) ----------
async function igSingle() {
  const html = `<div class="slide dark" style="padding:90px 84px 76px;display:flex;flex-direction:column;justify-content:space-between">
    ${brandFooter()}
    <div style="display:flex;flex-direction:column;gap:46px">
      <div class="h" style="font-size:96px">Ikke tilfreds med designet? Så betaler du <span class="accent num">0 kr.</span></div>
      <div class="p" style="font-size:40px;max-width:860px">Første designudkast på 48 timer. Du betaler først, når siden er leveret.</div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div class="pill solid" style="font-size:36px;padding:30px 52px">Skriv UDKAST ${svg.arrowR(C.dark, 40)}</div>
      <div class="h6" style="font-size:24px;color:${C.dim}">webhjerte.dk</div>
    </div>
  </div>`;
  await shot(path.join(OUT, "instagram", "opslag-0-kr.png"), 1080, 1350, html);
}

// ---------- Stories (1080 x 1920, sikre zoner: 250 øverst, 340 nederst) ----------
const storyWrap = (theme, inner) =>
  `<div class="slide ${theme}" style="padding:250px 84px 340px;display:flex;flex-direction:column;justify-content:space-between">
    <div style="position:absolute;top:110px;left:84px">${brandFooter()}</div>
    ${inner}
  </div>`;

async function stories() {
  const dir = path.join(OUT, "instagram", "stories");
  const s = [
    storyWrap("dark", `<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-start;gap:36px">
        <div class="h" style="font-size:92px">Har din virksomhed en <span class="accent">hjemmeside?</span></div>
        <div class="p" style="font-size:38px">Svar på afstemningen herunder ↓</div></div>`),
    storyWrap("light", `<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-start;gap:36px">
        <div class="h" style="font-size:96px">Hvad stopper dig?</div>
        <div class="p" style="font-size:38px">Pris, tid eller ved du ikke, hvor du skal starte? Stem herunder ↓</div></div>`),
    storyWrap("dark", `<div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:44px">
        <div class="h" style="font-size:88px">Du betaler først, når siden er <span class="accent">leveret.</span></div>
        <div class="p" style="font-size:40px">Fast pris, før vi går i gang. Ikke tilfreds med designet? Så koster det 0 kr.</div></div>`),
    storyWrap("blue", `<div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:44px">
        <div class="h" style="font-size:92px">Vil du have et gratis udkast?</div>
        <div class="p" style="font-size:42px">Send mig ordet <b>UDKAST</b> i en besked.</div>
        <div style="margin-top:20px">${svg.arrowD(C.dark, 120)}</div></div>`),
  ];
  for (let i = 0; i < s.length; i++) await shot(path.join(dir, `story-${i + 1}.png`), 1080, 1920, s[i]);
}

// ---------- Highlight-covers (1080 x 1920, midten vises i en cirkel) ----------
async function highlights() {
  const dir = path.join(OUT, "instagram", "highlights");
  const items = [["Cases", "cases"], ["0 kr", "garanti"], ["FAQ", "faq"]];
  for (const [label, name] of items) {
    const html = `<div class="slide dark" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:40px">
      ${heartImg(170)}
      <div class="h${label === "0 kr" ? " num" : ""}" style="font-size:${label.length > 4 ? 120 : 150}px">${label}</div></div>`;
    await shot(path.join(dir, `highlight-${name}.png`), 1080, 1920, html);
  }
}

// ---------- Facebook ----------
async function fbCompare() {
  const col = (title, items, good) => `
    <div style="flex:1;background:${C.card};border:1px solid rgba(255,255,255,.1);border-radius:26px;padding:34px 36px;display:flex;flex-direction:column;gap:22px">
      <div class="h6" style="font-size:28px;color:${good ? C.blue : "#fff"}">${title}</div>
      ${items.map(([ok, t]) => `<div style="display:flex;gap:14px;align-items:flex-start;font-size:25px;line-height:1.35;color:#fff"><span style="flex:none;margin-top:1px">${ok ? svg.check(C.green, 30) : svg.cross("#ff6b6b", 30)}</span><span>${t}</span></div>`).join("")}
    </div>`;
  const html = `<div class="slide dark" style="padding:48px 56px;display:flex;flex-direction:column;gap:30px">
    <div class="h" style="font-size:46px;max-width:1000px">En Facebook-side er ikke en <span class="accent">hjemmeside.</span></div>
    <div style="display:flex;gap:28px;flex:1">
      ${col("Facebook-side", [[true, "Fin til billeder og opslag"], [false, "Du ejer ikke platformen"], [false, "Du styrer ikke, hvad kunden ser først"]], false)}
      ${col("Hjemmeside", [[true, "Kunden ringer med ét klik"], [true, "Du bestemmer indholdet"], [true, "Bygget til at blive fundet lokalt"]], true)}
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center">${brandFooter()}<div class="h6" style="font-size:22px;color:${C.dim}">webhjerte.dk</div></div>
  </div>`;
  await shot(path.join(OUT, "facebook", "opslag-facebook-vs-hjemmeside-1200x630.png"), 1200, 630, html);
}

async function fbVedligehold() {
  const html = `<div class="slide light" style="padding:80px;display:flex;flex-direction:column;justify-content:space-between">
    ${brandFooter()}
    <div style="display:flex;flex-direction:column;gap:36px">
      <div class="h" style="font-size:70px">Har du en hjemmeside, men ingen tid til at passe den?</div>
      <div class="p" style="font-size:36px;max-width:860px">Jeg tager mig af hosting, opdateringer og små ændringer. Ingen binding.</div>
    </div>
    <div class="pill solid" style="font-size:32px;padding:28px 46px;align-self:flex-start">Spørg om vedligehold ${svg.arrowR(C.dark, 36)}</div>
  </div>`;
  await shot(path.join(OUT, "facebook", "opslag-vedligehold-1080x1080.png"), 1080, 1080, html);
}

async function fbCover() {
  const html = `<div class="slide dark" style="padding:0 0 0 420px;display:flex;flex-direction:column;justify-content:center;gap:28px">
    <div class="h" style="font-size:64px;max-width:1000px">Hjemmesider til små virksomheder</div>
    <div class="p" style="font-size:32px;max-width:1000px">Horsens og Midtjylland · Fast pris · Første udkast på 48 timer</div>
  </div>`;
  await shot(path.join(OUT, "facebook", "cover-1640x624.png"), 1640, 624, html);
}

async function avatar() {
  const html = `<div class="slide dark" style="display:flex;align-items:center;justify-content:center">${heartImg(560)}</div>`;
  await shot(path.join(OUT, "profilbillede-1080x1080.png"), 1080, 1080, html);
}

module.exports = { carouselTegn, carouselCase, igSingle, stories, highlights, fbCompare, fbVedligehold, fbCover, avatar };
