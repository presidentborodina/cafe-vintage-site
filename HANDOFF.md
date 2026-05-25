# CAFFÉ VINTAGE BISTROT — Documento di handoff completo

> Questo documento riassume tutto il lavoro fatto sulla strategia e sul sito web di Caffé Vintage Bistrot (Milano). Serve come istruzione per riprendere il progetto in una nuova sessione, sia con Claude che con altri collaboratori.

---

## 1. CONTESTO DEL LOCALE

### Identità
- **Nome ufficiale:** Caffé Vintage (con due F e l'accento, come scritto sull'insegna)
- **Categoria:** Bar · Bistrot
- **Città:** Milano
- **Quartiere:** zona residenziale, non centro

### Persone
- **Titolare:** Virginia, 22 anni
- **Pasticcere/fornaio:** il padre di Virginia ("Papà") — fa la focaccia ogni mattina dalle 5:30
- **Comunicazione:** italiano

### Cosa c'è intorno al locale
- **Scuola** vicina (genera traffico alle 16:00 quando finisce, molto pieno in quella fascia)
- **Banca** (filiale piccola)
- **Farmacia** piccola
- **Centro medico** piccolo
- Altri piccoli business
- **NO grandi uffici** — è zona residenziale
- L'audience principale vive **a 5-10 minuti a piedi**

---

## 2. SITUAZIONE ATTUALE — ANDAMENTO DELLA GIORNATA

| Orario | Affluenza | Stato |
|---|---|---|
| 7:30–11:00 — Colazione | **Tanta gente** | ✅ Funziona |
| 12:00–14:30 — Pranzo | Pochi clienti | ❌ Problema |
| 14:30–16:00 — Pomeriggio | Vuoto naturale | ➖ Non si tocca |
| 16:00–17:00 — Dopo scuola | **Tanta gente** (genitori+bambini) | ✅ Funziona |
| 17:00–22:00 — Sera | **Vuoto** | ❌ Problema principale |

**Orari estivi:** venerdì e sabato aperti fino alle 22:00 ma con poca gente.

**Conclusione strategica:** ci sono **due buchi reali** — pranzo e sera dopo le 17. Il sito da solo non li risolve, ma può aiutare insieme ad altre azioni.

---

## 3. MENÙ ATTUALE

### Colazione (7:30–11:00, tutti i giorni)
- Caffè espresso
- Cappuccino con brioche (vuota, crema, cioccolato)
- **Focaccia di Papà** (semplice, con pomodori, con stracchino)
- Spremuta d'arancia (arance siciliane, fatte al momento)
- Cornetti, krapfen, torte della casa (cambia ogni giorno)

### Pranzo (12:00–14:30, lun-sab, servizio al tavolo)
- **2 primi** (paste) — **8€ ciascuno**
- **1 secondo del giorno** — **12€**
- **Mercoledì sempre Hamburger della casa** — **12€**
- **Contorni a scelta · 2** — **4€**
- **Insalatona della casa** — **8€**

**Buoni pasto:** stato ancora da verificare (Virginia deve chiedere al commercialista). Sul sito intanto è scritto "Edenred, Pellegrini, Ticket — chiedi al banco" come placeholder.

### Aperitivo (18:00–22:00)
- Cocktail + tagliera con focaccia di Papà
- **12€ a persona, tutto incluso**
- Cocktail disponibili: Negroni, Spritz, Americano, Negroni Sbagliato, Hugo, bicchiere di vino della casa
- Estate: tavoli all'aperto sotto i tigli

### Sala privata (su prenotazione)
- Fino a 22 persone
- 3 pacchetti proposti (cifre da confermare con Virginia):
  - **Aperitivo** — 28€/p, min 15 persone, 2 ore di sala
  - **Cena** — 45€/p, min 12 persone, serata intera
  - **Aperitivo lungo** — 38€/p, min 18 persone, 3 ore

---

## 4. STRATEGIA — DECISIONI CHIAVE

### Target audience (3 segmenti)
1. **Impiegata di quartiere** — *DEPRIORIZZATO* dopo aver scoperto che non ci sono grandi uffici intorno. Rimane solo il piccolo banco di banca/farmacia/centro medico.
2. **Coppia di quartiere 35-55** — abitanti della zona, target principale per aperitivo e fedeltà
3. **Organizzatore eventi privati** — il **segmento più redditizio**, target principale del sito

### Focus strategico
- **Il sito serve principalmente per la sala privata** (gli altri segmenti vengono via Instagram, Google Maps, passaparola)
- **Focaccia di Papà = cuore del brand** — storytelling familiare che funziona meglio di qualsiasi posizionamento "vintage chic"
- **Il problema della sera (17:00–22:00)** è il provala più grande e va affrontato con:
  - Aperitivo quotidiano 8€ (versione leggera, ogni giorno)
  - Giovedì aperitivo completo 12€ (versione "evento")
  - Estate: "Cinema sotto le stelle" sabato sera (idea da sviluppare)

### Tone of voice
- Caldo, leggermente ironico, "padrone di casa"
- USARE: *fatto in casa, lievito madre, di quartiere, rito, autentico, focaccia calda, ogni mattina*
- NON USARE: *concept, esperienza unica, eccellenza, lifestyle*, anglicismi food-marketing

---

## 5. SITO WEB — DECISIONI PRESE

### Piattaforma
**Decisione attuale:** lavorare **in locale** con file HTML modificato da Claude su richiesta di Virginia. NO Framer, NO WordPress, NO Tilda.

**Motivazione:**
- Virginia non vuole imparare nessuna piattaforma
- Le modifiche le farà Claude su sua indicazione
- Pubblicazione futura su **Netlify Drop** (gratis) o hosting italiano tipo Aruba

### Estetica scelta
**"Warm Vintage Italian"** — palette terracotta + paper cream + sage + ink, ispirata ai magazine gastronomici italiani anni '70 ma in chiave contemporanea.

### Font
- **Cinzel Decorative weight 900** — per il logo/brand (imita l'insegna del locale)
- **Fraunces** — per i titoli editorial (italic style)
- **DM Sans** — per il body text e le label

Tutti **Google Fonts**, gratis, già caricati nell'HTML.

### Palette colori (CSS variables)
```css
--terracotta: #B85042;       /* accento principale */
--terracotta-dark: #8A3A30;
--ink: #2C2420;              /* testo scuro */
--ink-soft: #3D332E;
--paper: #F5EFE6;            /* sfondo principale */
--paper-warm: #EDE4D3;
--cream: #FAF6EC;
--sand: #E7E0CD;
--sage: #7A8B6F;
--muted: #8B7E72;
--line: #D4C9B5;
```

### Struttura del sito (one-page)
1. **Nav** (sticky) — logo a sinistra, menu + CTA "Prenota la sala" a destra
2. **Hero** — grande "CAFFÉ VINTAGE / Bistrot · Milano" + 4 pulsanti (Colazione, Pranzo, Aperitivo, **Sala privata** evidenziata)
3. **Timeline "Tutto il giorno"** — fondo scuro, 4 colonne con gli orari della giornata
4. **Focaccia di Papà** — sezione storytelling con foto + 3 numeri chiave (5:30, 7:00, 365)
5. **Colazione** — menù + foto della tazza con dolci
6. **Pranzo** — menù reale strutturato (Primi, Secondo, Contorni & Insalate) + info + blocco Buoni pasto
7. **Aperitivo** — foto circolare + descrizione + lista cocktail
8. **Sala privata** (sezione più grande) — header + galleria 5 foto + 3 pacchetti + inclusioni + form di prenotazione
9. **Dove siamo** — foto facciata con pin + dettagli contatti + orari
10. **Footer** — logo grande + colonne (Il locale, Contatti, Social) + legal
11. **WhatsApp floating button**

---

## 6. FOTO DEL LOCALE — INVENTARIO E USO

Virginia ha caricato 18 foto. Ecco la mappatura completa:

### Foto usate nel sito (15)
| File originale | Nome file ottimizzato | Dove viene usato |
|---|---|---|
| `image7.jpeg` | `images/hero.jpg` | **Hero** — vista bancone con lampadari e piastrelle |
| `IMG_7312.jpg` | `images/colazione.jpg` | **Colazione** — tazza con pasticcini (foto HD) |
| `IMG_7478__1_.jpg` | `images/colazione_alt.jpg` | Riserva colazione — trubochki con noci |
| `IMG_7429_SnapseedCopy_SnapseedCopy.jpg` | `images/sala_main.jpg` | **Sala privata** — foto principale, sala con sedie colorate |
| `IMG_7458.jpg` | `images/facade.jpg` | **Dove siamo** — facciata con insegna |
| `IMG_7413.jpg` | `images/aperitivo_martini.jpg` | Riserva aperitivo — espresso martini |
| `Gemini_Generated_Image_*.jpg` | `images/aperitivo_main.jpg` | **Aperitivo** — bicchieri con patatine al bancone |
| `image9.jpeg` | `images/aperitivo_alt.jpg` | Riserva aperitivo — lampadario + bicchieri |
| `image0.jpeg` | `images/sala_glasses.jpg` | Galleria Sala — bicchieri appesi al soffitto |
| `image8.jpeg` | `images/sala_counter.jpg` | Galleria Sala — bancone verticale |
| `image10.jpeg` | `images/sala_diabolik.jpg` | Galleria Sala — poster Diabolik |
| `image14.jpeg` | `images/sala_wine.jpg` | Galleria Sala — scaffali con vini |
| `image11.jpeg` | `images/detail_comics.jpg` | Dettaglio — Topolino, Alan Ford (non ancora inserito) |
| `image6.jpeg` | `images/detail_phone.jpg` | Dettaglio — telefono Teleselezione (non ancora inserito) |
| `image13.jpeg` | `images/focaccia_temp.jpg` | **Focaccia di Papà** — TEMPORANEA, va sostituita |

### Foto NON usate (e perché)
- `IMG_7399.JPG` — pasta al pesto **AI-generated**, non reale. NON USARE.
- `recipe_image_*.webp` — pasta al pesto **AI-generated**, non reale. NON USARE.
- Il file con "Gemini" nel nome è **reale** (foto del bar fatta con cellulare, non AI) — USABILE.

### Foto MANCANTI — da scattare
**Priorità 1 (critica):**
- **Papà al forno alle 5:30** — la foto più importante che manca. Mani impastando, schiena di fronte al forno, focaccia che esce dal forno. Senza viso va benissimo se Papà non vuole farsi fotografare.

**Priorità 2 (importante):**
- **Piatti del pranzo reali** — una pasta del giorno, l'hamburger della casa, l'insalatona. Foto al volo con il telefono, alla luce naturale della finestra. 5 minuti di lavoro.

**Priorità 3 (nice to have):**
- Sala privata apparecchiata per evento (festa di compleanno, cena aziendale) — foto reali quando ci sarà un evento
- Vetrina della colazione al mattino con tutta la pasticceria

---

## 7. STATO ATTUALE DEL FILE HTML

### File principale
- `cafe_vintage_final.html` (circa 1500 righe)
- Cartella `images/` con 15 foto ottimizzate per il web (~2.6 MB totali)

### Placeholder da sostituire con dati reali
Cercare nel file HTML e sostituire:
- `[Indirizzo]` → indirizzo vero
- `+39 02 [...]` → numero di telefono reale (in 4 punti: 2 nelle sezioni, 1 nel footer, 1 nel WhatsApp link)
- `info@cafevintage.it` → email reale
- `P.IVA 00000000000` → P.IVA reale
- `[Nome]` (nel testo "Quartiere [Nome]") → nome del quartiere
- `20100 Milano` → CAP reale
- `https://maps.google.com` → link Google Maps reale
- `https://instagram.com` → link Instagram reale
- `https://wa.me/390000000` → link WhatsApp con numero reale (in 2 punti)

### Cose da decidere/confermare con Virginia
1. **Pacchetti sala privata** — confermare se 28€/45€/38€ sono giusti, o cambiarli
2. **Buoni pasto** — quali accettano davvero (Edenred, Pellegrini, Ticket)? Va chiesto al commercialista
3. **Orari precisi**:
   - Adesso sul sito: Lun-Gio 7:30-20:00, Ven-Sab 7:30-22:00, Domenica 8:00-13:00
   - Verificare se è giusto
4. **Foto di Papà** — quando potrà essere scattata
5. **"Sotto i tigli"** — confermare che è scritto giusto (potrebbe essere altro tipo di pianta/luogo)

---

## 8. CRONOLOGIA DEL LAVORO FATTO

### Fase 1: Strategia (presentazione)
- Creata presentazione in PowerPoint con 15 slide
- Versione **italiana**: `cafe_vintage_strategia_IT.pptx`
- Versione russa: `cafe_vintage_strategy.pptx`
- Contenuto: 3 segmenti di pubblico, obiezioni, messaggi, rubriche social, funnel cliente, esempi di post, KPI, roadmap, budget

### Fase 2: Prototipo sito V1 — Warm Vintage Italian
- Prima versione del sito con estetica calda, italiana, magazine-style
- Font: Fraunces + DM Sans
- File: `cafe_vintage_landing.html`

### Fase 3: Prototipo sito V2 — Swiss Editorial Minimal
- Versione alternativa più moderna, design-oriented
- Font: Instrument Serif + Inter Tight
- File: `cafe_vintage_landing_v2.html`
- **NON SCELTA** — Virginia ha preferito la prima estetica

### Fase 4: Sito finale con menù reale
- Aggiornata V1 con:
  - Sezione **Tutto il giorno** (timeline)
  - Sezione **Focaccia di Papà** (storytelling)
  - **Colazione** come sezione separata
  - **Menù pranzo reale** con prezzi veri (8€, 12€, 4€, 8€) e tag "Mercoledì" per l'hamburger
  - Blocco **Buoni pasto** in terracotta
- File: `cafe_vintage_final.html`

### Fase 5: Foto reali integrate
- 18 foto ricevute, analizzate, classificate
- 2 foto AI-generated escluse
- 15 foto ottimizzate per il web (ridimensionate, compresse)
- Tutte le foto integrate nelle sezioni corrispondenti
- Placeholder visibile sopra la foto temporanea di "Focaccia di Papà"

### Fase 6: Brand basato sull'insegna
- Identificato il font dell'insegna fisica (BISTROT · CAFFÉ VINTAGE)
- Scelto **Cinzel Decorative weight 900** come miglior approssimazione
- Brand applicato a:
  - **Nav** — logo `CAFFÉ VINTAGE` + sottotitolo `BISTROT · MILANO`
  - **Hero H1** — `CAFFÉ VINTAGE` grande + `Bistrot · Milano` con linee decorative
  - **Footer** — logo display con stesso stile

---

## 9. ROADMAP — PROSSIMI PASSI

### Modifiche urgenti (devono essere fatte prima del lancio)
1. Sostituire tutti i placeholder (indirizzo, telefono, email, P.IVA, link)
2. Confermare prezzi sala privata
3. Confermare buoni pasto
4. Scattare foto di Papà al forno

### Modifiche desiderabili (entro 1 mese dal lancio)
5. Foto reali dei piatti del pranzo
6. Embed reale di Google Maps al posto della foto-mappa
7. Form di prenotazione connesso a email reale (oggi è un alert "Demo")
8. Privacy Policy e Cookie Policy con **Iubenda** (~30€/anno)
9. Aggiungere Google Analytics 4 per tracciare visite
10. Aggiungere Caffé Vintage al **Google Business Profile** (critico per SEO locale)

### Quando pubblicare
**Opzioni di pubblicazione (in ordine di semplicità):**

**A. Netlify Drop** (RACCOMANDATO — gratis, semplice)
- Vai su [netlify.com/drop](https://netlify.com/drop)
- Trascina la cartella `cafe_vintage_site` (con HTML + images/)
- Ottieni un URL tipo `https://random-name.netlify.app` immediato
- Per usare `caffevintage.it`: compra dominio su Aruba (~12€/anno), configura DNS verso Netlify
- Totale: ~12€/anno

**B. Vercel** — simile a Netlify, gratuito

**C. Aruba Hosting tradizionale**
- ~50€/anno per dominio + hosting
- Più complicato (devi caricare via FTP)
- Vantaggio: tutto italiano per fatturazione

### Quando passare a una piattaforma "vera"
Quando Virginia avrà bisogno di:
- Modificare il sito da sola dal telefono ogni mattina (menù del giorno)
- Avere un blog/sezione eventi che cambia spesso
- Vendere online (gift card, prenotazione cene)

A quel punto valutare **Framer** (5€/mese) o **WordPress**.

---

## 10. COSE IMPORTANTI DA RICORDARE

### Sulla strategia
- **Non promuovere attivamente il pranzo** — la zona è residenziale, c'è poca domanda strutturale
- **Focus reale = sera (17-22)** + **sala privata** (più redditizia)
- **Focaccia di Papà** è il cuore del brand, va menzionata ovunque
- **Mai usare foto AI di cibo** — riconoscibili e dannose per la fiducia

### Sul tono dei contenuti
- Italiano vero, non tradotto da inglese
- Caldo, leggermente ironico
- Frasi tipo: *"La focaccia di oggi è uscita dal forno alle 11:47. Vi avvisiamo perché finisce sempre presto."*
- NO: *"L'eccellenza dell'esperienza gastronomica"* — è morte certa

### Sul nome
- Si scrive **Caffé Vintage** (due F, accento acuto sulla é) — come sull'insegna
- NON "Cafe Vintage" — Claude ha sbagliato spesso, fare attenzione
- Aggiungere sempre **Bistrot · Milano** per chiarezza

### Sul lavoro tra Claude e Virginia
- Virginia descrive cosa vuole cambiare a parole
- Claude modifica il file HTML
- Virginia salva il file aggiornato sul proprio computer
- Per ogni nuova sessione: allegare sempre il file HTML attuale all'inizio del chat

---

## 11. FILE FORNITI

Tutti i file sono nella cartella `outputs`:

1. **`cafe_vintage_site.zip`** — pacchetto completo con HTML + images (2.7 MB)
2. **`cafe_vintage_final.html`** — il file HTML del sito (versione attuale)
3. **`cafe_vintage_strategia_IT.pptx`** — presentazione strategia in italiano (per Virginia)
4. **`cafe_vintage_strategy.pptx`** — presentazione strategia in russo (backup)
5. **`cafe_vintage_landing.html`** — prototipo V1 originale (Warm Vintage)
6. **`cafe_vintage_landing_v2.html`** — prototipo V2 (Swiss Minimal — non scelto)
7. **`CAFFE_VINTAGE_HANDOFF.md`** — questo documento

---

## 12. ISTRUZIONI PER CONTINUARE IL LAVORO

### Se sei Claude in una nuova sessione:
1. Leggi questo documento per capire il contesto
2. Chiedi all'utente di allegare `cafe_vintage_final.html` se non è già allegato
3. Chiedi all'utente cosa vuole modificare/aggiungere
4. Modifica il file e restituiscilo aggiornato
5. **Mai inventare**: prezzi, orari, indirizzi, foto. Se non c'è il dato, lascia il placeholder o chiedi

### Se sei un nuovo collaboratore umano:
1. Apri `cafe_vintage_site.zip`, estrai i file mantenendo HTML e cartella images nella stessa directory
2. Apri `cafe_vintage_final.html` nel browser per vedere il sito attuale
3. Per modifiche: usa un editor di codice (VS Code consigliato) oppure chiedi a Claude
4. Per pubblicazione: vedi sezione 9 di questo documento

### Domande aperte da risolvere
- [ ] Indirizzo vero del locale?
- [ ] Telefono vero?
- [ ] Email vera?
- [ ] P.IVA per il footer?
- [ ] Pacchetti sala privata: 28€/45€/38€ vanno bene?
- [ ] Quali buoni pasto vengono accettati davvero?
- [ ] Orari di chiusura confermati?
- [ ] Quando Papà può essere fotografato al forno?
- [ ] Virginia ha già aperto un account Instagram per Caffé Vintage?
- [ ] Google Business Profile è già stato registrato?

---

*Documento generato il 24 maggio 2026. Aggiornare quando il progetto evolve.*
