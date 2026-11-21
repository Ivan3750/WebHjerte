# Публікація: тексти (данською) і що де постити

Файли лежать у `social/out/`. Усе зроблено в стилі сайту (темний `#1c1e1e`, акцент `#00a8e8`, Unbounded + Inter). Без обличчя і голосу. Згідно з `docs/design-regler.md`, **цін у контенті нема** (тільки гарантія «0 kr»). Ціни дивляться на сайті.

Перегенерувати все: `node social/build.cjs` (лише картинки: `static`, лише відео: `reels`).

---

## INSTAGRAM

### Reel 1 · `out/reels/reel-1-hjemmeside-paa-48-timer.mp4` (28 с)
**Caption**
> Fra tom skærm til færdigt designudkast på 48 timer ⏱️
> Er du ikke tilfreds med udkastet, koster det 0 kr.
> Skriv **UDKAST** i en besked, så sender jeg et konkret tilbud inden for 24 timer.
>
> #hjemmeside #horsens #midtjylland #håndværker #smvdanmark

**Звук:** додайте у застосунку трендову музику (бібліотека Instagram/Facebook для бізнес-акаунтів обмежена, перевірте, що трек дозволений).

### Reel 2 · `out/reels/reel-2-det-her-ser-din-kunde.mp4` (17 с)
**Caption**
> Før en kunde ringer, søger de. Er din virksomhed nem at finde – og nem at ringe til?
> Skriv **UDKAST**, så ser jeg på det sammen med dig.
>
> #lokalsynlighed #vvs #elektriker #tømrer #horsens

### Карусель · `out/instagram/karrusel-3-tegn/slide-1…6.png`
**Caption**
> 3 tegn på, at din hjemmeside koster dig kunder – tjek din egen side 👆
> Kan du genkende noget? Det kan ofte rettes på få dage.
> Gem opslaget 📌 og skriv **UDKAST** for et gratis designudkast.
>
> #hjemmeside #lokalseo #horsens #håndværker

### Карусель-кейс · `out/instagram/karrusel-case-pizzaria/slide-1…6.png`
**Caption**
> Wolt og JustEat tog op mod 30 % af hver bestilling. Her er, hvordan en pizzaforretning i Horsens fik sine egne kunder 🍕
> Vil du også have egne kunder i stedet for gebyrer? Skriv **UDKAST**.
>
> #case #horsens #restaurant #hjemmeside

### Пост · `out/instagram/opslag-0-kr.png`
**Caption**
> Jeg tager risikoen, ikke dig.
> Første designudkast på 48 timer. Er du ikke tilfreds, betaler du 0 kr. Du betaler først, når siden er leveret.
> Skriv **UDKAST** i en besked 👇

### Stories · `out/instagram/stories/story-1…4.png`
Постити по порядку, у застосунку **додайте стікери**:
1. «Har din virksomhed en hjemmeside?» → стікер **Afstemning**: `Ja` / `Nej, endnu ikke`
2. «Hvad stopper dig?» → стікер **Afstemning**: `Pris` / `Tid` / `Ved ikke, hvor jeg skal starte`
3. «Du betaler først, når siden er leveret» → стікер **Link** на webhjerte.dk
4. «Vil du have et gratis udkast?» → стікер **Send besked**

Сторіс 3–4 збережіть у Highlights.

### Highlights · `out/instagram/highlights/`
`Cases`, `0 kr` (гарантія), `FAQ`. Завантажте як обкладинки, у кружечку видно центр.

---

## FACEBOOK

### Reel
Той самий файл, що Reel 1 (або 2). **Caption**
> Hjemmeside på 48 timer ⏱️ Se hele processen.
> Er du håndværker eller driver du lokal virksomhed i Horsens og omegn? Skriv **UDKAST** i en besked, så får du et konkret tilbud inden for 24 timer.
> 👉 webhjerte.dk

### Пост із картинкою · `out/facebook/opslag-facebook-vs-hjemmeside-1200x630.png`
> **En Facebook-side er ikke en hjemmeside. Her er forskellen.**
>
> Din Facebook-side er fin til billeder og opslag. Men du ejer ikke platformen, og du bestemmer ikke, hvad kunden ser først.
>
> Med en egen hjemmeside kan kunden ringe med ét klik, du bestemmer indholdet, og siden er bygget til at blive fundet lokalt.
>
> Jeg laver hjemmesider til små virksomheder i Horsens og Midtjylland. Første designudkast på 48 timer – er du ikke tilfreds, koster det 0 kr.
>
> Skriv til mig, hvis du vil se, hvordan din side kunne se ud 👉 webhjerte.dk

### Пост · `out/facebook/opslag-vedligehold-1080x1080.png`
> Har du en hjemmeside, men ingen tid til at passe den?
> Jeg tager mig af hosting, opdateringer og små ændringer. Ingen binding.
> Spørg mig, hvilken løsning der passer til dig 👉 webhjerte.dk

### Пост у локальну групу (текст без картинки)
**Спершу прочитайте правила групи**, багато груп забороняють рекламу. Публікуйте як пораду.
> Hej alle 👋 Kort tip til jer, der driver egen virksomhed:
> Søg på dit eget firmanavn + by og se, hvad kunden ser. Står dine ydelser og dit telefonnummer klart? Hvis ikke, er det ofte den hurtigste ting at rette.
> Skriv endelig, hvis I vil have et par råd. Ingen forpligtelser.

### Профіль
- Обкладинка: `out/facebook/cover-1640x624.png`
- Аватар (Instagram і Facebook): `out/profilbillede-1080x1080.png`

---

## Перед публікацією
- У відео й каруселях «Eksempel»/«fiktive virksomheder» стоїть там, де це не реальні клієнти. Не прибирайте ці підписи.
- Кейс «Pizzaria» береться з вашого сайту (`src/app/data/projects.ts`). Перевірте, що клієнт не проти показу.
- Цифра «op mod 30 %» взята з тексту кейсу на сайті, а не з окремого дослідження.
- Відповідайте на повідомлення за 5 хвилин (`docs/forretning/lead-svar.md`).
