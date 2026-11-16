# Sider på webhjerte.dk

Opdateret: 16. november 2026 (aften). Branchesider, 'hjemmeside til virksomhed' og /hjemmeside-pris er fjernet med 301 til /services. Indholdssider viser nu hele deres tekst og FAQ (se `components/seo/ServiceLayout.jsx`), og SEO-titler/ekstra afsnit ligger i `data/content/extra.js`. Alle sider findes stadig i koden. De skjulte sider er **ikke** slettet –
de returnerer bare 404, er fjernet fra menu, footer, interne links, sitemap og `llms.txt`.

## Sådan skjuler / viser du sider

Alt styres ét sted: `src/app/data/hidden.js`.

| Hvad du vil | Gør dette |
| --- | --- |
| Vise alle skjulte sider på en preview | Sæt miljøvariablen `NEXT_PUBLIC_SHOW_HIDDEN_PAGES=1` i Vercel (Preview) og deploy igen |
| Vise én side for altid | Fjern dens slug fra listen i `hidden.js` |
| Skjule en ny side | Tilføj dens slug i den rigtige liste (`ai`, `local` eller `business`) |

Links til skjulte sider fjernes automatisk fra menu, footer og indhold (teksten bevares).

---

## Synlige sider (live nu)

### Hovedsider
| Side | URL |
| --- | --- |
| Forside | `/` |
| Services | `/services` |
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
| Hosting og vedligeholdelse | `/hosting-og-vedligeholdelse` |
| Ny professionel hjemmeside (ikke i sitemap) | `/ny-professionel-hjemmeside` |

### SEO, AI og region (nyligt genåbnet, hver side med eget design)
| Side | URL |
| --- | --- |
| SEO Horsens | `/seo-horsens` |
| Webbureau Midtjylland | `/webbureau-midtjylland` |
| Webbureau Aarhus (personlig side) | `/webbureau-aarhus` |
| AI SEO | `/ai-seo` |
| AI-chatbot til hjemmeside | `/ai-chatbot-til-hjemmeside` |
| Webbureau Vejle | `/webbureau-vejle` |

### Gratis værktøjer
| Side | URL |
| --- | --- |
| Gratis SEO-tjek | `/gratis-seo-tjek-horsens` |
| Gratis analyse (ikke i sitemap) | `/gratis-analyse` |

### Blog (alle bevaret – udvidet 16. november til ca. 8–10 min. læsning, se data/content/articleExtra.js og articleDeep.js)
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
| Webstrategi | `/blog/webstrategi` |
| Bæredygtigt webdesign | `/blog/baeredygtigt-webdesign` |

### Portefølje – cases
`/portefolje/improve-physio`, `/portefolje/pizzaria`, `/portefolje/loenbaeks-koereskole`,
`/portefolje/hireon`, `/portefolje/veka-center`, `/portefolje/vitrazh`, `/portefolje/workout`,
`/portefolje/hesteklub`, `/portefolje/monolit`, `/portefolje/renserv`, `/portefolje/ukraine-hjaelpeprojekt`

### Juridisk
`/privacy`, `/terms`

---

## Skjulte sider (404 indtil de er færdige)

### AI-sider (1)
| Side | URL |
| --- | --- |
| AI-automatisering | `/ai-automatisering-virksomhed` |

### Lokale sider (1)
| Side | URL |
| --- | --- |
| Webdesign Horsens | `/webdesign-horsens` |

---

## Fjernet helt
- `/hjemmeside-til-haandvaerkere`, `-vvs`, `-elektriker`, `-tomrer`, `-restauranter`, `-saloner` og `/hjemmeside-til-virksomhed` → 301 til `/services`
- `/hjemmeside-pris` → 301 til `/services#priser` (priserne står nu på /services)
- `/freelancer-vs-bureau` → omdirigerer til `/om-mig`
- `/ofte-stillede-spoergsmaal` (FAQ) → omdirigerer til `/`
- `/webbureau-jylland` → 301 til `/webbureau-midtjylland`
- `/wordpress-horsens` → 301 til `/wordpress-hjemmeside`
- `/digitalt-bureau-horsens` → 301 til `/`
- `/geo-ai-synlighed` og `/ai-loesninger` → 301 til `/ai-seo`
- `/webstrategi` og `/baeredygtigt-webdesign` → 301 til `/blog/webstrategi` og `/blog/baeredygtigt-webdesign`
