// Reels (1080 x 1920, 30 fps): siden er en ren funktion af tiden t, så hver frame renderes deterministisk.
const { C, OUT, TMP, HEART, page, openHtml, brandFooter, fs, path } = require("./base.cjs");
const { execFileSync } = require("child_process");

const FPS = 30;

// Fælles tidshjælpere, indsat i siden.
const helpers = `
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const ease=x=>1-Math.pow(1-x,3);
const easeIO=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
const lin=(t,a,b)=>clamp((t-a)/(b-a));
const seg=(t,a,b)=>ease(lin(t,a,b));
const $=id=>document.getElementById(id);
function fade(el,t,a,b,dy=24){const v=seg(t,a,b);el.style.opacity=v;el.style.transform='translateY('+((1-v)*dy)+'px)';return v;}
function phases(t,list,elS,elB){let hit=null;for(const [s,e,a,b] of list){if(t>=s&&t<e){hit=[s,e,a,b];break;}}
  if(!hit){elS.style.opacity=0;elB.style.opacity=0;return;}
  const [s,e,a,b]=hit;const v=Math.min(seg(t,s,s+.35),1-seg(t,e-.3,e));
  elS.textContent=a;elB.innerHTML=b;elS.style.opacity=v;elB.style.opacity=v;
  elS.style.transform=elB.style.transform='translateY('+((1-v)*28)+'px)';}
`;

async function capture(name, w, h, html, duration, setup) {
  const dir = path.join(TMP, name);
  fs.mkdirSync(dir, { recursive: true });
  const { p, ctx } = await openHtml(w, h, html);
  await p.addScriptTag({ content: helpers });
  await p.evaluate(setup);
  if (process.env.STILLS) {
    const SC = process.env.SCRATCH;
    for (const t of process.env.STILLS.split(",").map(Number)) {
      await p.evaluate((x) => window.render(x), t);
      await p.screenshot({ path: path.join(SC, `${name}-t${t}.png`), type: "png" });
    }
    await ctx.close();
    return;
  }
  const total = Math.round(duration * FPS);
  for (let i = 0; i < total; i++) {
    await p.evaluate((t) => window.render(t), i / FPS);
    await p.screenshot({ path: path.join(dir, `f${String(i).padStart(5, "0")}.jpg`), type: "jpeg", quality: 93 });
    if (i % 90 === 0) console.log(`  ${name}: ${i}/${total}`);
  }
  await ctx.close();
  const out = path.join(OUT, "reels", `${name}.mp4`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", path.join(dir, "f%05d.jpg"),
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "17", "-preset", "medium", "-movflags", "+faststart", out]);
  fs.rmSync(dir, { recursive: true, force: true });
  console.log("  ✓", path.relative(path.resolve(OUT, ".."), out));
}

const icon = {
  phone: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>`,
  search: `<svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="${C.body}" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  check: `<svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="${C.dark}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
};

const sk = (w, extra = "") => `<div style="height:14px;border-radius:7px;background:${C.border};width:${w};${extra}"></div>`;

// =====================================================================
// Reel 1: "Hjemmeside på 48 timer"
// =====================================================================
async function reel48() {
  const DUR = 28;
  const html = page(1080, 1920, `
  <div class="slide dark" id="stage">
    <div style="position:absolute;top:120px;left:84px">${brandFooter()}</div>

    <div style="position:absolute;top:230px;left:84px;right:84px;height:270px">
      <div id="capS" class="h6" style="font-size:36px;color:${C.blue}"></div>
      <div id="capB" class="h" style="font-size:76px;margin-top:16px"></div>
    </div>

    <div id="timer" class="num" style="position:absolute;top:520px;left:84px;font-size:64px;display:flex;align-items:baseline;gap:16px">
      <span id="tv" style="color:${C.blue}">00</span><span style="font-size:32px;font-weight:600;color:${C.mute}">timer</span>
    </div>

    <!-- Browser -->
    <div id="browser" style="position:absolute;left:84px;top:700px;width:912px;height:700px;border-radius:26px;background:#fff;overflow:hidden;box-shadow:0 0 0 2px rgba(255,255,255,.08)">
      <div style="height:58px;background:${C.grey};display:flex;align-items:center;gap:10px;padding:0 22px">
        <i style="width:14px;height:14px;border-radius:50%;background:#ff5f57"></i><i style="width:14px;height:14px;border-radius:50%;background:#febc2e"></i><i style="width:14px;height:14px;border-radius:50%;background:#28c840"></i>
        <div style="margin-left:22px;flex:1;height:34px;border-radius:17px;background:#fff;font-size:20px;color:${C.body};display:flex;align-items:center;padding-left:18px">dit-firma.dk</div>
      </div>
      <div style="padding:0 40px;position:relative;height:642px">
        <div id="bHead" style="height:92px;display:flex;align-items:center;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:14px"><div style="width:46px;height:46px;border-radius:12px;background:${C.blue}"></div><div style="width:130px;height:16px;border-radius:8px;background:${C.dark}"></div></div>
          <div style="display:flex;gap:26px">${sk("62px")}${sk("62px")}${sk("62px")}</div>
        </div>
        <div style="display:flex;gap:36px;margin-top:20px">
          <div style="flex:1.2">
            <div id="bH" class="h" style="font-size:44px;min-height:150px;color:${C.dark}"></div>
            <div id="bLines" style="display:flex;flex-direction:column;gap:14px;margin-top:20px">${sk("96%")}${sk("78%")}</div>
            <div id="bBtn" class="h6" style="margin-top:34px;display:inline-flex;align-items:center;gap:12px;background:${C.blue};color:${C.dark};border-radius:16px;padding:20px 32px;font-size:24px">${icon.phone} Ring nu</div>
          </div>
          <div id="bImg" style="flex:1;height:280px;border-radius:22px;background:${C.paleBlue};display:flex;align-items:center;justify-content:center"><div style="width:120px;height:120px;border-radius:50%;background:${C.blue}"></div></div>
        </div>
        <div id="bCards" style="display:flex;gap:22px;margin-top:34px">
          ${["Rør og afløb", "Varme", "Badeværelse"].map((x) => `<div class="bc" style="flex:1;height:110px;border-radius:18px;border:2px solid ${C.border};padding:22px;font-weight:600;font-size:22px">${x}</div>`).join("")}
        </div>
      </div>
    </div>

    <!-- Telefon -->
    <div id="phone" style="position:absolute;left:310px;top:650px;width:460px;height:880px;border:11px solid #fff;border-radius:62px;background:#fff;overflow:hidden;opacity:0">
      <div style="padding:46px 28px;display:flex;flex-direction:column;gap:22px;height:100%;background:#fff">
        <div class="pp" style="display:flex;justify-content:space-between;align-items:center"><div style="width:48px;height:48px;border-radius:13px;background:${C.blue}"></div><div style="width:36px;height:4px;background:${C.dark};box-shadow:0 11px 0 ${C.dark},0 -11px 0 ${C.dark}"></div></div>
        <div class="pp h" style="font-size:36px;margin-top:6px">Din lokale VVS i Horsens</div>
        <div class="pp">${sk("94%")}${sk("72%", "margin-top:14px")}</div>
        <div id="pBtn" class="h6" style="position:relative;display:flex;justify-content:center;align-items:center;gap:12px;background:${C.blue};color:${C.dark};border-radius:20px;padding:26px;font-size:28px;margin-top:6px"><span id="pBtnT">${icon.phone} Ring nu</span><i id="rip" style="position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px;border-radius:50%;border:5px solid ${C.dark};opacity:0"></i></div>
        <div class="pp" style="display:flex;flex-direction:column;gap:14px;margin-top:6px">
          ${["Rør og afløb", "Varme", "Badeværelse"].map((x) => `<div style="height:78px;border-radius:16px;background:${C.paleBlue};padding:26px 24px;font-weight:600;font-size:23px;color:${C.dark}">${x}</div>`).join("")}
        </div>
      </div>
    </div>

    <div id="done" style="position:absolute;left:700px;top:600px;width:150px;height:150px;border-radius:50%;background:${C.green};display:flex;align-items:center;justify-content:center;opacity:0">${icon.check}</div>
    <div id="eks" style="position:absolute;right:84px;top:548px;font-size:26px;color:${C.dim}">Eksempel · ikke en rigtig kunde</div>

    <div id="end" style="position:absolute;inset:0;background:${C.dark};opacity:0;padding:420px 84px 0">
      <div class="h" style="font-size:88px">Ikke tilfreds med udkastet? Så betaler du <span class="accent num">0 kr.</span></div>
      <div class="p" style="font-size:40px;margin-top:46px;max-width:860px;color:${C.mute}">Fast pris. Du betaler først, når siden er leveret.</div>
      <div class="pill solid" style="margin-top:70px;font-size:40px;padding:34px 58px">Skriv UDKAST</div>
      <div class="h6" style="margin-top:44px;font-size:30px;color:${C.dim}">webhjerte.dk</div>
    </div>
  </div>`);

  await capture("reel-1-hjemmeside-paa-48-timer", 1080, 1920, html, DUR, () => {
    const H = "Din lokale VVS i Horsens";
    const caps = [
      [0, 3, "Mandag kl. 9", "Ingen hjemmeside endnu."],
      [3, 8, "Dag 1", "Design og tekst"],
      [8, 14, "Dag 1", "Tilpasset mobilen"],
      [14, 19, "Dag 2", "Ring med ét klik"],
      [19, 23, "Onsdag kl. 9", "Dit udkast er klar"],
    ];
    const bc = [...document.querySelectorAll(".bc")];
    const pp = [...document.querySelectorAll(".pp")];
    window.render = (t) => {
      phases(t, caps, $("capS"), $("capB"));
      // timer
      $("tv").textContent = String(Math.round(48 * lin(t, 3, 22))).padStart(2, "0");
      // browser
      const bIn = seg(t, 0.2, 1.0);
      const bOut = seg(t, 8.0, 9.0);
      $("browser").style.opacity = bIn * (1 - bOut);
      $("browser").style.transform = `translateX(${-bOut * 140}px) scale(${0.96 + 0.04 * bIn})`;
      fade($("bHead"), t, 3.1, 4.0);
      const n = Math.round(H.length * lin(t, 4.1, 6.6));
      $("bH").textContent = H.slice(0, n) + (n < H.length && t > 4.1 ? "▍" : "");
      fade($("bImg"), t, 4.8, 5.8, 0);
      fade($("bLines"), t, 6.6, 7.4);
      fade($("bBtn"), t, 7.0, 7.7);
      bc.forEach((c, i) => fade(c, t, 6.4 + i * 0.35, 7.2 + i * 0.35));
      // telefon
      const pIn = seg(t, 8.2, 9.3);
      $("phone").style.opacity = pIn * (1 - seg(t, 22.8, 23.3));
      $("phone").style.transform = `translateX(${(1 - pIn) * 160}px) scale(${0.96 + 0.04 * pIn})`;
      pp.forEach((el, i) => fade(el, t, 9.4 + i * 0.5, 10.3 + i * 0.5));
      const btn = $("pBtn");
      fade(btn, t, 10.2, 11.0);
      // fremhæv knap + tryk
      const pulse = lin(t, 14.2, 15.2);
      const press = t > 16.0 && t < 16.4 ? 0.95 : 1;
      btn.style.transform += ` scale(${press * (1 + 0.035 * Math.sin(pulse * Math.PI * 3) * (t < 16 ? 1 : 0))})`;
      const r = lin(t, 16.0, 17.0);
      $("rip").style.opacity = t >= 16.0 && t < 17.0 ? 1 - r : 0;
      $("rip").style.transform = `scale(${1 + r * 9})`;
      $("pBtnT").innerHTML = t > 16.4 ? "Ringer …" : `${document.querySelector("#bBtn svg").outerHTML} Ring nu`;
      // færdig-badge
      const dn = seg(t, 19.4, 20.2);
      $("done").style.opacity = dn * (1 - seg(t, 22.8, 23.2));
      $("done").style.transform = `scale(${0.5 + 0.5 * dn})`;
      $("eks").style.opacity = 1 - seg(t, 22.8, 23.2);
      $("timer").style.opacity = 1 - seg(t, 22.8, 23.2);
      // slutkort
      $("end").style.opacity = seg(t, 22.8, 23.6);
      const e = $("end").children;
      for (let i = 0; i < e.length; i++) fade(e[i], t, 23.2 + i * 0.35, 24.0 + i * 0.35, 30);
    };
  });
}

// =====================================================================
// Reel 2: "Det her ser din kunde"
// =====================================================================
async function reelGoogle() {
  const DUR = 17;
  const card = (id, url, title, desc, btn, dim) => `
    <div id="${id}" class="rc" style="background:#fff;border-radius:26px;padding:30px 36px;height:250px;display:flex;flex-direction:column;justify-content:center;gap:8px;position:relative;${dim ? "" : ""}">
      <div style="font-size:23px;color:#6a6a6a">${url}</div>
      <div style="font-size:35px;font-weight:600;color:${C.blueLink}">${title}</div>
      <div style="font-size:25px;color:${C.body};max-width:610px;line-height:1.35">${desc}</div>
      ${btn ? `<div id="${id}b" class="h6" style="position:absolute;right:34px;top:50%;margin-top:-34px;background:${C.blue};color:${C.dark};border-radius:999px;padding:20px 32px;font-size:24px;display:flex;gap:10px;align-items:center;white-space:nowrap"><span>${icon.phone} ${btn}</span></div>` : ""}
    </div>`;
  const html = page(1080, 1920, `
  <div class="slide dark">
    <div style="position:absolute;top:120px;left:84px">${brandFooter()}</div>
    <div style="position:absolute;top:230px;left:84px;right:84px;height:250px">
      <div id="capS" class="h6" style="font-size:36px;color:${C.blue}"></div>
      <div id="capB" class="h" style="font-size:70px;margin-top:16px"></div>
    </div>

    <div id="bar" style="position:absolute;left:84px;top:600px;width:912px;height:112px;border-radius:56px;background:#fff;display:flex;align-items:center;gap:24px;padding:0 40px;font-size:40px;color:${C.dark}">
      ${icon.search}<span id="q"></span>
    </div>

    <div id="list" style="position:absolute;left:84px;top:760px;width:912px;display:flex;flex-direction:column;gap:22px">
      ${card("cA", "eksempel-vvs.dk", "Eksempel VVS ApS", "Akut hjælp i Horsens og omegn. Ring direkte – åbent i dag.", "Ring nu")}
      ${card("cB", "eksempel-blik-vvs.dk", "Eksempel Blik &amp; VVS", "Se ydelser og områder. Book tid online.", "Book tid")}
      ${card("cC", "facebook.com", "Eksempel VVS – Facebook", "Opslag og billeder. Telefonnummer og ydelser er svære at finde.", "")}
    </div>

    <svg id="cur" width="64" height="64" viewBox="0 0 24 24" style="position:absolute;left:0;top:0;opacity:0"><path d="M5 3l14 8-6.2 1.6L9.6 19z" fill="#fff" stroke="${C.dark}" stroke-width="1.4" stroke-linejoin="round"/></svg>
    <i id="rip" style="position:absolute;width:60px;height:60px;border-radius:50%;border:6px solid ${C.blue};opacity:0"></i>
    <div id="eks" style="position:absolute;left:84px;top:1565px;font-size:26px;color:${C.dim}">Eksempel · fiktive virksomheder</div>

    <div id="mid" style="position:absolute;left:84px;right:84px;top:640px;opacity:0">
      <div class="h" style="font-size:84px">Er din virksomhed nem at finde <span class="accent">og</span> nem at ringe til?</div>
    </div>

    <div id="end" style="position:absolute;inset:0;background:${C.dark};opacity:0;padding:420px 84px 0">
      <div class="h" style="font-size:88px">Få et gratis designudkast på <span class="accent num">48 timer.</span></div>
      <div class="p" style="font-size:40px;margin-top:46px;max-width:860px;color:${C.mute}">Ikke tilfreds? Så koster det 0 kr.</div>
      <div class="pill solid" style="margin-top:70px;font-size:40px;padding:34px 58px">Skriv UDKAST</div>
      <div class="h6" style="margin-top:44px;font-size:30px;color:${C.dim}">webhjerte.dk</div>
    </div>
  </div>`);

  await capture("reel-2-det-her-ser-din-kunde", 1080, 1920, html, DUR, () => {
    const Q = "vvs horsens";
    const caps = [
      [0, 5, "Før kunden ringer", "…søger de først."],
      [5, 9.2, "Kunden vælger", "den, der er nem at kontakte."],
    ];
    const cards = ["cA", "cB", "cC"].map($);
    const btnA = $("cAb");
    const stage = document.querySelector(".slide").getBoundingClientRect();
    const target = (() => {
      const r = btnA.getBoundingClientRect();
      return { x: r.left + r.width * 0.55 - stage.left, y: r.top + r.height * 0.5 - stage.top };
    })();
    window.render = (t) => {
      phases(t, caps, $("capS"), $("capB"));
      fade($("bar"), t, 0.2, 0.9);
      const n = Math.round(Q.length * lin(t, 0.9, 2.3));
      $("q").textContent = Q.slice(0, n) + (t < 3 && Math.floor(t * 2) % 2 === 0 ? "|" : "");
      // resultater
      cards.forEach((c, i) => fade(c, t, 2.8 + i * 0.45, 3.6 + i * 0.45, 40));
      const dimB = seg(t, 6.0, 6.8);
      cards[1].style.opacity = parseFloat(cards[1].style.opacity || 1) * (1 - 0.65 * dimB);
      cards[2].style.opacity = parseFloat(cards[2].style.opacity || 1) * (1 - 0.65 * dimB);
      // markør
      const m = easeIO(lin(t, 5.0, 6.8));
      const sx = 860, sy = 1500;
      $("cur").style.opacity = t > 5.0 && t < 8.6 ? 1 : 0;
      $("cur").style.transform = `translate(${sx + (target.x - sx) * m}px, ${sy + (target.y - sy) * m}px) scale(${t > 7.0 && t < 7.25 ? 0.88 : 1})`;
      const r = lin(t, 7.0, 8.0);
      $("rip").style.opacity = t >= 7.0 && t < 8.0 ? 0.9 * (1 - r) : 0;
      $("rip").style.left = target.x - 30 + "px";
      $("rip").style.top = target.y - 30 + "px";
      $("rip").style.transform = `scale(${1 + r * 5})`;
      btnA.firstElementChild.innerHTML = t > 7.1 ? "Ringer …" : btnA.firstElementChild.innerHTML;
      // skift til afsluttende spørgsmål
      const out = seg(t, 9.2, 9.8);
      $("bar").style.opacity = parseFloat($("bar").style.opacity) * (1 - out);
      $("list").style.opacity = 1 - out;
      $("eks").style.opacity = 1 - out;
      $("cur").style.opacity = parseFloat($("cur").style.opacity) * (1 - out);
      const mid = Math.min(seg(t, 9.8, 10.6), 1 - seg(t, 12.6, 13.2));
      $("mid").style.opacity = mid;
      $("mid").style.transform = `translateY(${(1 - mid) * 30}px)`;
      // slutkort
      $("end").style.opacity = seg(t, 13.0, 13.7);
      const e = $("end").children;
      for (let i = 0; i < e.length; i++) fade(e[i], t, 13.4 + i * 0.35, 14.2 + i * 0.35, 30);
    };
  });
}

module.exports = { reel48, reelGoogle };
