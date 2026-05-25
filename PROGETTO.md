# Caffé Vintage — Sito Web · Tracciamento Progetto

> Bar / Bistrot vintage a Milano. Sito vetrina single-page.
> Ultimo aggiornamento: **24 maggio 2026**
>
> 📘 **Per il contesto strategico completo (target, tono, roadmap, decisioni)** vedi `HANDOFF.md` nella stessa cartella.
> 📊 Per il piano di tracciamento GA4 (eventi, UTM, codice da inserire) vedi `TRACKING_PLAN.md`.
> 📝 Per lo storico cronologico sessione-per-sessione vedi `STORICO.md`.

---

## 1. Panoramica

- **Tipo:** landing page singola, file HTML self-contained (CSS + JS inline).
- **File principale:** `cafe_vintage_final.html`
- **Cartella immagini:** `images/`
- **Dipendenze esterne:** solo Google Fonts (Cinzel Decorative, Fraunces, DM Sans)
- **Lingua:** Italiano (`lang="it"`)
- **Stato attuale:** 🟡 Bozza / Demo — non pronto per la pubblicazione

### Sezioni della pagina
1. Nav fisso
2. Hero
3. Timeline "Tutto il giorno"
4. Storia — "La focaccia di Papà"
5. № 01 Colazione (`#colazione`)
6. № 02 Pranzo (`#pranzo`)
7. № 03 Aperitivo (`#aperitivo`)
8. № 04 Sala privata (`#sala`) — gallery, inclusioni, form prenotazione (`#prenota`)
9. Dove siamo (`#dove`)
10. Footer + bottone WhatsApp flottante

---

## 2. Contesto del locale (sintesi da HANDOFF.md)

### Persone
- **Virginia** (22 anni) — titolare. Comunicazione in italiano.
- **"Papà"** (padre di Virginia) — fa la focaccia ogni mattina dalle 5:30. Cuore del brand.

### Quartiere e clientela
- Zona **residenziale** di Milano, **NON centro**.
- Intorno: scuola (traffico ore 16), banca, farmacia, centro medico piccoli.
- **NO grandi uffici** → audience principale = abitanti a 5–10 min a piedi.

### Affluenza durante la giornata
| Fascia | Affluenza | Stato |
|---|---|---|
| 7:30–11:00 Colazione | Tanta gente | ✅ |
| 12:00–14:30 Pranzo | Pochi clienti | ❌ |
| 14:30–16:00 Pomeriggio | Vuoto naturale | ➖ |
| 16:00–17:00 Dopo scuola | Tanta gente (genitori+bambini) | ✅ |
| 17:00–22:00 Sera | **Vuoto** | ❌ Problema principale |

### Strategia (cosa serve il sito)
- **Target principale del sito = organizzatori di eventi privati** (segmento più redditizio). Sala privata fino a 22 persone.
- Coppia di quartiere 35–55 = fedeltà, ma via Instagram/passaparola, non sito.
- **NON promuovere attivamente il pranzo** — domanda strutturale bassa nella zona.
- **Focaccia di Papà = cuore del brand**, va menzionata ovunque.

### Tone of voice
- Caldo, leggermente ironico, "padrone di casa".
- **USARE:** *fatto in casa, lievito madre, di quartiere, rito, autentico, focaccia calda, ogni mattina*.
- **NON USARE:** *concept, esperienza unica, eccellenza, lifestyle*, anglicismi food-marketing.
- Frasi tipo: *"La focaccia di oggi è uscita dal forno alle 11:47. Vi avvisiamo perché finisce sempre presto."*

### Regole brand
- **"Caffé Vintage"** (due F, accento **acuto** sulla é) — come scritto sull'insegna. ⚠️ NON è "Caffè". NON è "Cafe Vintage".
- Aggiungere sempre **"Bistrot · Milano"** per chiarezza.
- **Mai foto AI di cibo** — riconoscibili e dannose per la fiducia.
- **Mai inventare** prezzi, orari, indirizzi, foto. Se manca il dato → placeholder o si chiede.

---

## 3. Identità visiva

| Elemento | Valore |
|---|---|
| Terracotta | `#B85042` (dark `#8A3A30`) |
| Ink (testo/scuro) | `#2C2420` |
| Paper (sfondo) | `#F5EFE6` |
| Cream | `#FAF6EC` |
| Sage (accento) | `#7A8B6F` |
| Font logo/brand | Cinzel Decorative weight 900 (imita l'insegna fisica) |
| Font titoli | Fraunces (italic editorial) |
| Font testo | DM Sans |
| Breakpoint responsive | 1024px (unico) |

---

## 4. Stato delle attività (TODO)

Priorità: 🔴 alta · 🟡 media · 🟢 bassa

### 🔴 Da fare prima di pubblicare
- [ ] **Contenuti segnaposto rimasti** — solo email `info@cafevintage.it` (da confermare se reale) e P.IVA `00000000000`. ✅ indirizzo, CAP, quartiere, orari, anno apertura, telefono, WhatsApp, Google Maps, Instagram sostituiti il 2026-05-24
- [ ] **Form prenotazione non funzionante** — ora fa solo `alert('Demo')`. Collegare backend/servizio (Formspree, Web3Forms, ecc.)
- [ ] **Menu mobile rotto** — sotto 1024px i link sono nascosti (`display:none`) senza hamburger
- [x] ~~**Foto da sostituire** — `focaccia_temp.jpg`~~ → sostituita con `focaccia.jpg` il 2026-05-24
- [ ] **Foto MANCANTE Priorità 1**: Papà al forno alle 5:30 (mani, schiena, focaccia, senza viso va bene)
- [ ] **Confermare con Virginia**: pacchetti sala privata (28€/45€/38€ erano placeholder → ora rimossi dalla pagina), buoni pasto reali, orari precisi
- [ ] **Verificare email** reale (`info@cafevintage.it`) e numero di telefono

### 🟡 Importante (entro 1 mese dal lancio)
- [ ] **SEO/meta** — aggiungere `meta description`, Open Graph, favicon
- [ ] **Dati strutturati** — schema `LocalBusiness`/`Restaurant` (indirizzo, orari) per Google
- [ ] **Google Business Profile** — registrare Caffé Vintage (critico per SEO locale)
- [ ] **Google Maps reale** — embed al posto della foto-mappa
- [ ] **Performance immagini** — comprimere/WebP. Pesanti: `sala_main.jpg` (678 KB), `facade.jpg` (486 KB), `focaccia.jpg` (1.2 MB)
- [ ] **Lazy loading + width/height** sulle `<img>` per evitare layout shift
- [ ] **Google Analytics 4** per tracciare visite
- [ ] **Privacy / Cookie Policy** — Iubenda (~30€/anno)
- [ ] **Foto Priorità 2**: piatti del pranzo reali (pasta del giorno, hamburger, insalatona) — foto al volo col telefono alla luce naturale

### 🟢 Da valutare
- [ ] **Pagine legali** — link Privacy / Cookie / Note legali oggi vuoti (`#`)
- [ ] **Pulizia immagini inutilizzate** (vedi §5)
- [ ] **CSS morto** dei pacchetti rimossi (~190 righe `.pacchetti`/`.pacchetto*`)
- [ ] **Asimmetria form**: il campo "Data preferita" ora occupa da solo la sua riga (dopo rimozione "Pacchetto di interesse")
- [ ] **"Sotto i tigli"** (in sezione Aperitivo) — confermare che è scritto giusto

### ❌ NON da fare (decisioni prese)
- ~~Refuso "Caffé" vs "Caffè"~~ → **NON è un refuso**, "Caffé" con accento acuto è voluto (come insegna)
- ~~Caricamento automatico su Framer~~ → impossibile, e comunque Virginia non vuole piattaforme: lavorare in locale, pubblicare via Netlify Drop

---

## 5. Inventario immagini

### In uso (10 nel sito attuale)
| File | Dimensione | Dove |
|---|---|---|
| `hero.jpg` | **421 KB** | Hero — bancone, lampadario di cristallo, Teleselezione (rinnovata + ottimizzata 25/05) |
| `focaccia.jpg` | 1.2 MB | Storia — mani che lavorano l'impasto con farina ⚠️ da ottimizzare |
| `colazione.jpg` | 156 KB | Colazione — tazza con pasticcini |
| `aperitivo_main.jpg` | 213 KB | Aperitivo — bicchieri con patatine al bancone |
| `sala_main.jpg` | 678 KB | Gallery sala — foto principale con sedie colorate |
| `sala_wine.jpg` | 100 KB | Gallery sala — scaffali con vini |
| `sala_glasses.jpg` | 75 KB | Gallery sala — bicchieri appesi al soffitto |
| `sala_diabolik.jpg` | 52 KB | Gallery sala — poster Diabolik |
| `sala_counter.jpg` | 64 KB | Gallery sala — bancone verticale |
| `facade.jpg` | 486 KB | Dove siamo — facciata con insegna |

### Non in uso (riserva o vecchi placeholder)
- `focaccia_temp.jpg` — vecchio placeholder, eliminabile
- `aperitivo_alt.jpg` — riserva: lampadario + bicchieri
- `aperitivo_martini.jpg` — riserva: espresso martini
- `colazione_alt.jpg` — riserva: trubochki con noci
- `detail_comics.jpg` — dettaglio Topolino/Alan Ford (non ancora inserito)
- `detail_phone.jpg` — dettaglio telefono Teleselezione (non ancora inserito)

---

## 6. Dati del locale (da confermare con Virginia)

| Campo | Valore attuale | Confermato? |
|---|---|---|
| Indirizzo | **Via delle Ande, 5 — Milano** | ✅ |
| CAP | **20151 Milano** | ✅ |
| Anno apertura | **2024** | ✅ |
| Quartiere | **Gallaratese** | ✅ |
| Telefono | **+39 342 906 2935** | ✅ |
| Email | `info@cafevintage.it` | ❌ |
| WhatsApp | **+39 342 906 2935** (stesso numero) | ✅ |
| Link Google Maps | **maps.app.goo.gl/TUf24KHt6irMfwTq6** | ✅ |
| Link Instagram | **instagram.com/caffe_vintage_bistrot** | ✅ |
| P.IVA | `00000000000` | ❌ |
| Orari | **Lun–Gio 7:00–21:00 · Ven 7:00–22:00 · Sab 7:30–22:00 · Dom 7:30–13:00** | ✅ |
| Capienza sala | fino a 22 persone | ❌ |
| Buoni pasto | Edenred, Pellegrini, Ticket | ❌ (Virginia da commercialista) |
| Pacchetti sala | (rimossi dal sito perché non confermati) | ❌ |

---

## 7. Pubblicazione futura

Quando si pubblica, l'opzione raccomandata è **Netlify Drop** (gratis): trascinare la cartella del sito su [netlify.com/drop](https://netlify.com/drop) → URL immediato. Per dominio `caffevintage.it`: comprare su Aruba (~12€/anno), puntare DNS a Netlify.

Vedi `HANDOFF.md` §9 per le alternative (Vercel, Aruba hosting tradizionale).

---

## 8. Registro modifiche

| Data | Modifica |
|---|---|
| 2026-05-24 | Analisi iniziale del sito e creazione di `PROGETTO.md` + `STORICO.md` |
| 2026-05-24 | Rimossa sezione "I tre pacchetti" (prezzi sala 28€/45€/38€ non confermati) |
| 2026-05-24 | Rimosso campo "Pacchetto di interesse" dal form di prenotazione |
| 2026-05-24 | Sostituita foto sezione Focaccia: placeholder `focaccia_temp.jpg` → `focaccia.jpg` |
| 2026-05-24 | Importato `HANDOFF.md` (contesto strategico, target, tono, roadmap) nel progetto e integrato nei file di tracciamento |
| 2026-05-24 | Creato `TRACKING_PLAN.md` — piano GA4 (eventi, UTM, privacy, codice da inserire). Dipendenze: 5 prerequisiti prima dell'implementazione |
| 2026-05-24 | Copy del funnel sala privata affilato (6 modifiche): CTA hero, timeline slot, descrizione sala, 2 voci inclusioni, sottotitolo form, bottone submit |
| 2026-05-24 | **Inseriti dati reali**: indirizzo `Via delle Ande 5, Milano` (Hero + Dove siamo + Footer) + orari completi (4 righe: Lun-Gio 7:00-21:00, Ven 7:00-22:00, Sab 7:30-22:00, Dom 7:30-13:00) |
| 2026-05-24 | Correzioni dati: CAP `20100` → **`20151`**; anno apertura `2026` → **`2024`** (ed eyebrow "Est. dal" → **"Aperti dal"**, applicato anticipo della proposta Batch 1 A) |
| 2026-05-24 | Quartiere `[Nome]` → **`Gallaratese`** (sezione Dove siamo intro). |
| 2026-05-24 | Pranzo orari `12:00–14:30` → **`12:00–14:00`** (timeline + info row). Giorni pranzo `lun–sab` → **`lun–ven`**. |
| 2026-05-24 | Focaccia di Papà gusti: `semplice, con pomodori, con stracchino` → **`al rosmarino, al pomodoro, al formaggio`** (Colazione). |
| 2026-05-24 | Aperitivo orario chiusura allineato agli orari reali: **`Fino a chiusura · Lun–Gio fino alle 21 · Ven–Sab fino alle 22 · domenica chiuso`**. |
| 2026-05-24 | Aperitivo "tagliera" → **"tagliera della casa"** (più elegante, brand-on) + testo descrittivo riscritto per comunicare la varietà giornaliera (verdure di stagione, affettati, formaggi). |
| 2026-05-24 | Inseriti dati di contatto reali: **telefono +39 342 906 2935** (in 2 punti visibili + 2 link `tel:`), **WhatsApp** con stesso numero (3 punti incluso bottone fluttuante), **link Google Maps** vero (in 2 punti). |
| 2026-05-24 | Orari mattutini allineati al reale: header timeline `Dalle 7:30` → **`Dalle 7`** · slot timeline Colazione `7:30 — 11:00` → **`7:00 — 11:00`** · meta Colazione idem. |
| 2026-05-24 | Link Instagram reale inserito: `instagram.com/caffe_vintage_bistrot` (Footer · Social, con target="_blank"). |
| 2026-05-24 | Gusti focaccia corretti (2 punti: Colazione + Aperitivo): `al rosmarino, al pomodoro, al formaggio` → **`semplice, con pomodoro, con rosmarino`**. Formaggio rimosso. |
| 2026-05-24 | Sezione Focaccia · rimosso il "365 GIORNI L'ANNO" dai numeri. Restano 2: `5:30 Inizia l'impasto` + `7:00 Esce dal forno`. |
| 2026-05-24 | Colazione · pasticceria mattutina: aggiunti **fagottini** e **veneziane** alla lista "Cornetti, krapfen, torte della casa" (riga "cambia ogni giorno"). |
| 2026-05-24 | Colazione · rimossi **krapfen** e **torte della casa** dalla riga pasticceria. Risultato finale: `Cornetti, fagottini, veneziane · cambia ogni giorno`. |
| 2026-05-24 | Colazione · Spremuta d'arancia: `arance siciliane, fatte al momento` → **`fatta al momento`** (rimossa la claim "arance siciliane"). |
| 2026-05-24 | **Batch 1 copy parzialmente applicato (3 modifiche su 5)**: ① Hero subtitle (pranzo casalingo → pranzo come a casa, e una sala tutta vostra); ④ Focaccia eyebrow `La nostra storia` → **`La nostra mattina`**; ⑤ Focaccia § 2 `primo a pranzo` → **`pasta a pranzo`**. Restano in coda ② meta e ③ tag (orari di apertura — l'utente vuole una frase che funzioni sia per i feriali 7 sia per il weekend 7:30). |
| 2026-05-24 | Sala privata · lista eventi rinnovata: rimossa **"cene aziendali"** (timeline + sezione), aggiunti **"battesimi"** e **"feste private"**. Per coerenza tolto anche **"presentazioni"** dalla sezione (era nella descrizione grande). Nuova lista: `Compleanni, lauree, battesimi, feste private`. Direzione: più famiglia, meno corporate. |
| 2026-05-24 | Hero · rimosso tag "● Aperto adesso" (Batch 1 punto ③ opzione D). Motivazione: sito statico, mente di notte/domenica pomeriggio. In attesa che l'utente fornisca foto hero a risoluzione più alta. |
| 2026-05-24 | Colazione · aggiunta voce **"Caffè firmati della casa · ricette nostre, cambiano spesso · 3€"** (esistono 5 ricette specialty creative tipo Nutellone, Pistacoffe, Hotcoffe, Caramelcoffe, Agrumito visibili sulla lavagna in locale — decisione di NON listarle sul sito per evitare aggiornamenti continui e dispersione dal core brand focaccia). |
| 2026-05-24 | Hero · sostituita `hero.jpg` con versione ad alta qualità (100 KB → 236 KB). Composizione: bancone con pasticceria + grande lampadario di cristallo + insegna Teleselezione + piastrelle decorate. Formato verticale = perfetto per il layout esistente. Sostituzione fatta dall'utente direttamente nel file system. |
| 2026-05-25 | **Ottimizzazione massiva foto** (script Node + libreria `sharp` in `_tools/`): hero (5.8 MB→421 KB), sala_main (7.0 MB→399 KB), sala_sera (10.9 MB→448 KB), detail_bancone (4.1 MB→354 KB), focaccia (1.2 MB→147 KB), facade (475 KB→412 KB). Totale: ~28 MB → ~2.2 MB. Rimosso duplicato `sala_main (2).jpg`. |
| 2026-05-25 | sala_main.jpg ripristinata su richiesta utente alla versione precedente (sedie colorate + archi) estratta dal zip iniziale del progetto. Ricompressa: 662 KB → 580 KB. La nuova foto del salotto velluto/bottiglie è andata persa nella sovrascrittura. |
| 2026-05-25 | Hero · brand mark riallineato all'insegna fisica: **"Bistrot"** ora in Cinzel Decorative 900 (stesso font di "CAFFÉ VINTAGE", colore terracotta, più piccolo per gerarchia). Rimosso "Milano" dal H1 (ridondante con riga indirizzo). HANDOFF conferma Cinzel Decorative come matching font dell'insegna. |
