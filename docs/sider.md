# Sider på webhjerte.dk

Opdateret: 15. november 2026 (brancher gjort synlige). Alle sider findes stadig i koden. De skjulte sider er **ikke** slettet –
de returnerer bare 404, er fjernet fra menu, footer, interne links, sitemap og `llms.txt`.

## Sådan skjuler / viser du sider

Alt styres ét sted: `src/app/data/hidden.js`.

| Hvad du vil | Gør dette |
| --- | --- |
| Vise alle skjulte sider på en preview | Sæt miljøvariablen `NEXT_PUBLIC_SHOW_HIDDEN_PAGES=1` i Vercel (Preview) og deploy igen |
| Vise én side for altid | Fjern dens slug fra listen i `hidden.js` |
| Skjule en ny side | Tilføj dens slug i den rigtige liste (`ai`, `local` eller `business`) |
| Tilføje en ny branche | 1) Indhold i `data/content/niches-more.js` 2) Hero + interaktiv blok i `components/variants/` og registrér i `registry.jsx` 3) Opret den i `data/branches.js` – så kommer den automatisk i menu, footer og på `/brancher` |

Links til skjulte sider fjernes automatisk fra menu, footer og indhold (teksten bevares).

---

## Synlige sider (live nu)

### Hovedsider
| Side | URL |
| --- | --- |
| Forside | `/` |
| Services | `/services` |
| Hjemmeside pris | `/hjemmeside-pris` |
| Portefølje | `/portefolje` |
| Om mig | `/om-mig` |
| Kontakt | `/kontakt` |
| Partnerskab | `/partner` |

### Hjemmesider og ydelser
| Side | URL |
| --- | --- |
| WordPress-hjemmeside | `/wordpress-hjemmeside` |
| Skræddersyede hjemmesider | `/skraeddersyede-hjemmesider` |
| Webshop | `/webshop-hjemmeside` |
| Shopify | `/shopify-hjemmeside` |
| Alle typer hjemmesider (platforme) | `/alle-typer-hjemmesider` |
| Hjemmeside til virksomhed | `/hjemmeside-til-virksomhed` |
| Hosting og vedligeholdelse | `/hosting-og-vedligeholdelse` |
| Webstrategi | `/webstrategi` |
| Bæredygtigt webdesign | `/baeredygtigt-webdesign` |
| Ny professionel hjemmeside (ikke i sitemap) | `/ny-professionel-hjemmeside` |

### Brancher (12 + oversigt)
| Side | URL |
| --- | --- |
| Oversigt – find din branche (søgning + grupper) | `/brancher` |
| Håndværkere | `/hjemmeside-til-haandvaerkere` |
| VVS | `/hjemmeside-til-vvs` |
| Elektrikere | `/hjemmeside-til-elektriker` |
| Tømrere | `/hjemmeside-til-tomrer` |
| Restauranter | `/hjemmeside-til-restauranter` |
| Saloner | `/hjemmeside-til-saloner` |
| Klinikker og behandlere (ny) | `/hjemmeside-til-klinik` |
| Fitness og træning (ny) | `/hjemmeside-til-fitness` |
| Køreskoler (ny) | `/hjemmeside-til-koereskole` |
| Rengøring og service (ny) | `/hjemmeside-til-rengoering` |
| Værksteder (ny) | `/hjemmeside-til-vaerksted` |
| Rådgivere og konsulenter (ny) | `/hjemmeside-til-raadgivere` |

Hver branche har sin egen hero-illustration og en interaktiv blok (fx booking-demo, holdplan, prisberegner).

### Gratis værktøjer
| Side | URL |
| --- | --- |
| Gratis SEO-tjek | `/gratis-seo-tjek-horsens` |
| Gratis analyse (ikke i sitemap) | `/gratis-analyse` |

### Blog (alle bevaret)
| Side | URL |
| --- | --- |
| Blog – oversigt | `/blog` |
| Hvad koster en hjemmeside i 2026? | `/blog/hvad-koster-en-hjemmeside-2026` |
| Hvad koster en hjemmeside om året? | `/blog/hvad-koster-en-hjemmeside-om-aaret` |
| Hvor lang tid tager det at lave en hjemmeside? | `/blog/hvor-lang-tid-tager-det-at-lave-en-hjemmeside` |
| WordPress eller skræddersyet | `/blog/wordpress-eller-skraeddersyet` |
| Vælg webbureau: 10 spørgsmål | `/blog/vaelg-webbureau-10-spoergsmaal` |
| SEO-tjekliste for lokale virksomheder | `/blog/seo-tjekliste-lokale-virksomheder` |
| AI i små virksomheder: 10 eksempler | `/blog/ai-i-smaa-virksomheder-10-eksempler` |
| Sådan bliver du nævnt af ChatGPT og Google AI | `/blog/saadan-bliver-du-nevnt-af-chatgpt-og-google-ai` |

### Portefølje – cases
`/portefolje/improve-physio`, `/portefolje/pizzaria`, `/portefolje/loenbaeks-koereskole`,
`/portefolje/hireon`, `/portefolje/veka-center`, `/portefolje/vitrazh`, `/portefolje/workout`,
`/portefolje/hesteklub`, `/portefolje/monolit`, `/portefolje/renserv`, `/portefolje/ukraine-hjaelpeprojekt`

### Juridisk
`/privacy`, `/terms`

---

## Skjulte sider (404 indtil de er færdige)

### AI-sider (5)
| Side | URL |
| --- | --- |
| AI SEO | `/ai-seo` |
| AI-løsninger | `/ai-loesninger` |
| AI-chatbot til hjemmeside | `/ai-chatbot-til-hjemmeside` |
| AI-automatisering | `/ai-automatisering-virksomhed` |
| AI-synlighed (GEO) | `/geo-ai-synlighed` |

### Lokale sider (8)
| Side | URL |
| --- | --- |
| Webbureau Aarhus (ny personlig side) | `/webbureau-aarhus` |
| Webbureau Vejle | `/webbureau-vejle` |
| Webbureau Jylland | `/webbureau-jylland` |
| Webbureau Midtjylland | `/webbureau-midtjylland` |
| WordPress Horsens | `/wordpress-horsens` |
| Digitalt bureau Horsens | `/digitalt-bureau-horsens` |
| Webdesign Horsens | `/webdesign-horsens` |
| SEO Horsens | `/seo-horsens` |

---

## Fjernet helt
- `/freelancer-vs-bureau` → omdirigerer til `/om-mig`
- `/ofte-stillede-spoergsmaal` (FAQ) → omdirigerer til `/`
