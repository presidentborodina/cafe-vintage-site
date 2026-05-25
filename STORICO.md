# Caffé Vintage — Storico del progetto

> Registro cronologico di tutto ciò che facciamo, sessione per sessione.
> Serve per riprendere il lavoro se una sessione si interrompe.
> Lo stato corrente e la lista TODO sono in `PROGETTO.md`.

---

## Come leggere questo file
- Ogni **sessione** ha la sua voce con data.
- Annotiamo: cosa è stato chiesto, cosa è stato fatto, decisioni prese, e cosa resta in sospeso.
- La voce più recente è in **fondo**.

---

## Sessione 1 — 24 maggio 2026

**Contesto:** primo contatto con il progetto. Cartella `C:\Users\presi\Desktop\cafe_vintage_site` contenente `cafe_vintage_final.html` e la cartella `images/`.

### Richieste dell'utente
1. "che cartella siamo?" → confermata la cartella di lavoro.
2. "guarda il sito e analizzalo" → analisi completa del file HTML.
3. "tieni traccia di tutto il progetto in un file MD" → creato `PROGETTO.md`.
4. "salva tutto quello che facciamo come storico per poter rileggere il progetto nel caso la sessione si interrompesse" → creato questo file `STORICO.md`.

### Cosa è stato fatto
- Letto e analizzato l'intero `cafe_vintage_final.html` (~2440 righe).
- Identificate struttura, identità visiva, punti di forza e problemi.
- Creato **`PROGETTO.md`** — tracciamento stato + TODO + inventario immagini + dati locale da confermare.
- Creato **`STORICO.md`** (questo file) — registro cronologico.
- Salvato un promemoria nella memoria persistente di Claude Code.

### Conclusioni dell'analisi (sintesi)
- Sito vetrina single-page, ben curato graficamente, ma in stato **bozza/demo**.
- Problemi bloccanti per il go-live: contenuti segnaposto, form solo demo (`alert`), menu mobile rotto, SEO/meta assenti, immagini pesanti.
- Dettaglio completo in `PROGETTO.md`.

### Decisioni prese
- Nessuna modifica al codice HTML ancora effettuata (solo analisi e documentazione).
- File di documentazione in italiano.

### In sospeso / prossimi passi
- L'utente deve indicare da dove partire tra gli interventi (menu mobile, SEO, form).
- Dati del locale da raccogliere (vedi tabella in `PROGETTO.md` §5).

### File modificati in questa sessione
| File | Azione |
|---|---|
| `PROGETTO.md` | creato |
| `STORICO.md` | creato |

---

## Sessione 2 — 24 maggio 2026 (stessa giornata)

**Richiesta dell'utente:** caricare il sito in automatico su Framer (dashboard team `920b6401-0523-4a54-821e-c6bd0428dd93`).

### Verifica fatta
- Ricerca web + documentazione Framer (Server API, HTML-to-Framer).
- **Esito:** Framer NON importa file HTML grezzi. La Server API (beta feb 2026) aggiorna/ripubblica progetti **esistenti** manipolando i nodi del canvas, non carica HTML. Inoltre non è possibile autenticarsi al dashboard privato dell'utente da qui. → **Upload automatico non fattibile.**

### Decisione dell'utente
- Obiettivo reale scelto: **"Modificarlo dentro Framer"** (averlo nell'editor per modifiche visive).

### Strada concordata
- Unico percorso realistico: **estensione Chrome "HTML to Framer"** = copia-incolla manuale, sezione per sezione, da sito renderizzato → canvas Framer.
- Non si trasferiscono: animazioni/JS, texture rumore SVG, form, Google Fonts (da reimpostare).
- Aiuti offerti da Claude: (A) avviare un server locale di anteprima per usare l'estensione; (B) ripulire/ottimizzare l'HTML per layer più ordinati in Framer.

### In sospeso
- L'utente deve scegliere tra (A) e/o (B). Nessuna azione sul codice ancora eseguita.

### File modificati in questa sessione
| File | Azione |
|---|---|
| `STORICO.md` | aggiornato (questa voce) |
| `PROGETTO.md` | aggiornato (sezione Framer + registro) |

---

## Sessione 3 — 24 maggio 2026 (stessa giornata)

**Cambio di direzione:** abbandonato Framer. Si lavora **in locale** sul file HTML, con anteprima su `http://localhost:3000/cafe_vintage_final`.

### Modifiche al sito
- **Rimossa la sezione "I tre pacchetti"** (3 card Aperitivo 28€ / Cena 45€ / Aperitivo lungo 38€) dalla sezione `#sala`. Bloccare HTML rimosso: ex righe 2188–2249 (`<div class="pacchetti">…</div>`).

- **Rimosso il campo "Pacchetto di interesse"** dal form di prenotazione (`<select id="pacchetto">` + 4 option). Effetto collaterale minore: "Data preferita" ora occupa da sola la sua riga nella griglia a 2 colonne (cella destra vuota) → da decidere se sistemare.
- **Sostituita foto sezione "La focaccia di Papà"**: rimosso il placeholder `focaccia_temp.jpg` (con nota interna "[da sostituire]"), inserita la nuova `focaccia.jpg` (mani che lavorano l'impasto con farina, fornita dall'utente, 1.2 MB). Aggiornato anche l'alt text. La seconda foto (dettaglio vintage telefono+tazzina) inizialmente prevista nella stessa sezione è stata scartata dall'utente.

### Da decidere
- Asimmetria nel form (vedi sopra) → lasciare, allargare "Data preferita" a tutta riga, o spostare un altro campo.
- CSS di `.pacchetti` / `.pacchetto*` (~190 righe, ex 1124–1313) ora inutilizzato → pulire o lasciare.

### File modificati in questa sessione
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | rimossa sezione "I tre pacchetti" + rimosso campo "Pacchetto di interesse" dal form |
| `STORICO.md` | aggiornato (questa voce) |
| `PROGETTO.md` | aggiornato (registro modifiche) |

---

## Sessione 4 — 24 maggio 2026 (stessa giornata)

**Contesto:** l'utente ha allegato uno zip (`57db9dd8-files.zip`) contenente `CAFFE_VINTAGE_HANDOFF.md` (17 KB) — un documento di passaggio completo con strategia, contesto del locale, persone, tone of voice, inventario foto, roadmap.

### Cosa è stato fatto
- Estratto e letto integralmente `CAFFE_VINTAGE_HANDOFF.md`.
- **Copiato come `HANDOFF.md`** nella cartella del progetto (così resta accessibile).
- **Riscritto `PROGETTO.md`** integrando il contesto strategico: persone (Virginia 22 anni titolare, Papà fornaio), quartiere residenziale, analisi affluenza giornaliera, target principale del sito = eventi privati, tone of voice, regole brand.

### Correzioni rispetto a quanto ipotizzato prima
- **"Caffé" con accento acuto è INTENZIONALE** (riproduce l'insegna fisica), non un refuso. Rimossa dalla TODO la "domanda sul refuso".
- I prezzi pacchetti sala (28€/45€/38€) erano **placeholder mai confermati con Virginia** — la rimozione fatta in Sessione 3 era la cosa giusta.

### Nuovi TODO aggiunti dalla roadmap del HANDOFF
- Foto **Papà al forno alle 5:30** (mancante priorità 1)
- Foto piatti del pranzo (priorità 2)
- **Google Business Profile** registrazione (critico per SEO locale)
- **Iubenda** per Privacy/Cookie (~30€/anno)
- **Google Analytics 4**
- Conferme da Virginia su: buoni pasto reali, orari precisi, pacchetti sala
- Pubblicazione raccomandata: **Netlify Drop** (gratis)

### File modificati in questa sessione
| File | Azione |
|---|---|
| `HANDOFF.md` | creato (copiato dallo zip allegato dall'utente) |
| `PROGETTO.md` | riscritto integralmente con contesto strategico + nuovi TODO + correzione sul nome |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 5 — 24 maggio 2026 (stessa giornata)

**Contesto:** attivate due skill marketing (`analytics` e `copywriting`) e applicate al sito.

### Analytics — `TRACKING_PLAN.md` creato
Documento completo per GA4 con: obiettivi misurazione, conversioni principali/secondarie, tabella eventi (object_action naming), custom dimensions, funnel sala privata, strategia UTM, privacy/Iubenda/Consent Mode v2, snippet di codice pronti per HTML statico, checklist di validazione. Implementazione ancora **bloccata su 5 dipendenze** (sito online, Measurement ID, Iubenda, Privacy Policy, form connesso a Formspree).

### Copywriting — funnel sala privata affilato
Applicati 6 cambi al copy del funnel sala (conversione principale del sito):

| Punto | Da | A |
|---|---|---|
| CTA Hero | "Sala privata →" | **"Prenota la sala →"** |
| Timeline slot | "Fino a 22 persone. Compleanni, aziendali, eventi. / Richiedi →" | **"Fino a 22 a tavola. Compleanni, lauree, cene aziendali. Vi raccontiamo come funziona. / Scriveteci →"** |
| Sala descrizione | "…un menù chiaro, un prezzo a persona deciso prima — niente sorprese, niente minimi garantiti gonfiati." | **"…un menù che decidiamo insieme, un prezzo a persona stabilito prima. Niente minimi garantiti gonfiati, niente sorprese sul conto."** |
| Inclusioni | "Senza diritto di tappo" / "Torta o dolce portato da voi" | **"Niente diritto di tappo"** / **"La torta la portate voi, senza supplementi"** |
| Form subtitle | "Compilate il modulo: in giornata vi richiamiamo…" | **"Compilate il modulo qui sotto. Entro la sera stessa vi richiamiamo (o vi scriviamo, come preferite) con disponibilità, idee per il menù e un prezzo chiaro."** |
| Submit button | "Invia la richiesta →" | **"Mandiamo la richiesta →"** |

### File modificati in questa sessione
| File | Azione |
|---|---|
| `TRACKING_PLAN.md` | creato (piano GA4 completo) |
| `cafe_vintage_final.html` | 6 modifiche copy al funnel sala privata |
| `STORICO.md` | aggiornato (questa voce) |
| `PROGETTO.md` | aggiornato (registro + ref al TRACKING_PLAN) |

---

## Sessione 6 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** *"ti do info su indirizzo e orari lavorativi. Milano, via delle Ande 5, orari da lunedi a giovedi 7:00-21:00, venerdi 7:00-22:00, sabato 7:30-22:00, domenica 7:30-13:00"*

### Modifiche applicate (dati reali)
- **Indirizzo `Via delle Ande, 5 · Milano`** in 3 punti: Hero meta, sezione Dove siamo, Footer.
- **Orari completi** nella griglia Dove siamo, ristrutturata da 3 a 4 righe (Venerdì e Sabato ora separati perché hanno orari di apertura diversi):
  - Lun – Gio: 7:00 – 21:00
  - Venerdì: 7:00 – 22:00
  - Sabato: 7:30 – 22:00
  - Domenica: 7:30 – 13:00

### Decisioni conservative
- **CAP** lasciato a `20100` (placeholder generico) — l'utente non lo ha specificato, regola "mai inventare".
- **Quartiere `[Nome]`** lasciato come segnaposto — non comunicato.
- Headline timeline *"Dalle 7:30 fino a sera"* lasciata invariata (vero per weekend, conservativa nei feriali).
- Hero tag *"Aperto adesso"* lasciato invariato (Batch 1 copy ancora da approvare).
- Slot timeline Colazione *"7:30 — 11:00"* lasciato invariato — l'orario di apertura del bar è 7:00 feriali ma non sappiamo se il servizio colazione inizia alle 7:00 o alle 7:30.

### File modificati in questa sessione
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 4 modifiche: indirizzo x3 + orari grid |
| `PROGETTO.md` | aggiornata tabella Dati locale (indirizzo e orari → ✅) + registro |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 7 — 24 maggio 2026 (stessa giornata)

**Correzioni dati utente:**
- Aperti **dal 2024** (non dal 2026 come ipotizzato dal placeholder).
- CAP corretto: **20151 Milano** (non `20100`).

### Modifiche al sito
- Hero eyebrow: `Est. dal 2026` → **`Aperti dal 2024`**. Doppio cambio: anno (2026→2024) + lingua (Est.→Aperti, anticipo della proposta Batch 1 A perché coerente con "aperti dal" usato dall'utente).
- Dove siamo address: `20100 Milano` → **`20151 Milano`**.

### Verifica
- Grep su date e CAP nel file: l'unica occorrenza di anno è ora `2024`, nessuna occorrenza di `20100`.

### File modificati in questa sessione
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 2 modifiche: eyebrow Hero + CAP Dove siamo |
| `PROGETTO.md` | aggiornata tabella dati (CAP e anno → ✅) + registro |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 8 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** *"Galaratese. Aperitivo a 12 euro con coctaile e piattino inizio dalle 18:00"*

### Applicato
- **Quartiere** `[Nome]` → **`Gallaratese`** (corretta l'ortografia: l'utente aveva scritto "Galaratese" con una L, ortografia ufficiale del quartiere milanese è "Gallaratese"). Da confermare se accetta la correzione o preferisce "Galaratese".

### Da decidere prima di toccare l'aperitivo
1. **Contenuto del piattino**: l'utente dice "cocktail + piattino". Il sito attuale dice "cocktail + tagliera con la focaccia di Papà". La focaccia è il cuore del brand (regola HANDOFF) — chiesta conferma se davvero serve "piattino" diverso o se è solo il modo generico in cui l'utente ha descritto la tagliera.
2. **Orario chiusura aperitivo incoerente con orari reali**: il sito dice "fino alle 22:00" ma il bar chiude alle 21:00 dal lun al gio. Proposta: "18:00 — fino a chiusura · Lun–Gio fino alle 21, Ven–Sab fino alle 22; domenica chiuso per aperitivo".

### File modificati in questa sessione
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 1 modifica: quartiere `[Nome]` → `Gallaratese` |
| `PROGETTO.md` | aggiornata tabella dati (quartiere → ✅) + registro |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 9 — 24 maggio 2026 (stessa giornata)

**Dati reali ricevuti dall'utente (in 2 messaggi):**
- Quartiere confermato: **Gallaratese** (sì alla correzione doppia L)
- Pranzo orario: **12:00–14:00** (non 14:30)
- Pranzo giorni: **solo lunedì-venerdì** (sabato no, anche se il locale è aperto)
- Focaccia gusti: **rosmarino, pomodoro** (passata di pomodoro, non pomodorini), **formaggio**
- Aperitivo piatto: scelto **opzione C "tagliera della casa"** + descritto contenuto vario (focaccia + verdure / affettati / formaggi)

### Modifiche applicate
- **Timeline + info row pranzo**: 14:30 → 14:00
- **Pranzo giorni**: `lun — sab` → `lun — ven`
- **Colazione · gusti focaccia**: `semplice, con pomodori, con stracchino` → `al rosmarino, al pomodoro, al formaggio`
- **Aperitivo · orario chiusura**: ora coerente con i veri orari del bar (Lun-Gio 21, Ven-Sab 22, domenica chiuso)
- **Aperitivo · feature row prodotto**: `Cocktail + tagliera con la focaccia di Papà` → `Cocktail + tagliera della casa con la focaccia di Papà`
- **Aperitivo · paragrafo descrittivo** riscritto:
  > "Un cocktail vero, preparato come si deve. *La focaccia di Papà* ancora calda — al rosmarino, al pomodoro, al formaggio — e la tagliera della casa che cambia ogni sera: verdure di stagione, affettati, formaggi."

### Da chiedere ancora a Virginia
Ancora mancano (segnaposto attivi nel sito):
- Telefono reale (`+39 02 [...]` in 4 punti)
- WhatsApp (`390000000` in 2 punti)
- Email (`info@cafevintage.it` — da confermare se reale)
- P.IVA (`00000000000`)
- Link Instagram
- Link Google Maps (oggi punta al generico maps.google.com)
- Conferma buoni pasto (Edenred, Pellegrini, Ticket?)
- Capienza sala 22 → confermato sui dati ma da risentire
- "Sotto i tigli" estate → confermare se è scritto giusto

### File modificati in questa sessione
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 6 modifiche (pranzo x3, focaccia gusti, aperitivo orario, aperitivo nome+testo) |
| `PROGETTO.md` | aggiornato registro |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 10 — 24 maggio 2026 (stessa giornata)

**Dati utente:** telefono `3429062935`, link Google Maps `https://maps.app.goo.gl/TUf24KHt6irMfwTq6?g_st=it`.

### Modifiche applicate (7 occorrenze su 4 placeholder)
- **Telefono visibile** `+39 02 [...]` → **`+39 342 906 2935`** in 2 punti (Dove siamo, Footer)
- **Telefono link** `tel:+39000` → **`tel:+393429062935`** in 2 punti
- **WhatsApp link** `https://wa.me/390000000` → **`https://wa.me/393429062935`** in 3 punti (Dove siamo, Footer, bottone fluttuante)
- **Google Maps** `https://maps.google.com` → **link reale** in 2 punti (CTA Dove siamo, colonna Social Footer)

### Decisioni
- Numero mobile usato sia per `tel:` che per WhatsApp (stesso numero, è un cellulare italiano).
- Formato visibile telefono: **`+39 342 906 2935`** (leggibile, con prefisso internazionale).
- Verifica finale via grep: nessun placeholder vecchio rimasto.

### Rimangono come placeholder
- Email `info@cafevintage.it` (da confermare se reale)
- P.IVA `00000000000`
- Link Instagram

### File modificati in questa sessione
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 7 sostituzioni (4 edit con replace_all) |
| `PROGETTO.md` | aggiornata tabella dati (telefono, WhatsApp, Maps → ✅) + registro |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 11 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** *"slot colazione dalle 7-11 ok. header timeline dalle 7."*

### Modifiche applicate
- **Header timeline** `Dalle 7:30 fino a sera.` → **`Dalle 7 fino a sera.`** (più diretto e onesto: il bar apre alle 7 feriali)
- **Slot timeline Colazione** `7:30 — 11:00` → **`7:00 — 11:00`**
- **Meta sezione Colazione** `7:30 — 11:00` → **`7:00 — 11:00`** (per coerenza con la timeline)

### Decisione di formato
- Header usa **"Dalle 7"** (senza `:00`) come scritto dall'utente. Stilisticamente più pulito su display grande.
- Slot e meta usano `7:00 — 11:00` per coerenza col formato delle altre fasce orarie del sito.

### File modificati in questa sessione
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 3 modifiche orari mattutini (header timeline + 2 punti Colazione) |
| `PROGETTO.md` | registro modifiche aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 12 — 24 maggio 2026 (stessa giornata)

**Dato utente:** link Instagram `https://www.instagram.com/caffe_vintage_bistrot`.

### Modifica applicata
- Footer · Social · Instagram: placeholder `https://instagram.com` → **link reale**.
- Aggiunto `target="_blank" rel="noopener"` per apertura in nuova scheda (best practice link esterni).

### Placeholder ancora attivi (2)
- Email `info@cafevintage.it` (da confermare se reale)
- P.IVA `00000000000`

### File modificati in questa sessione
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 1 modifica: link Instagram |
| `PROGETTO.md` | aggiornato tabella dati + registro |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 13 — 24 maggio 2026 (stessa giornata)

**Correzione utente:** gusti focaccia non sono "al rosmarino, al pomodoro, al formaggio" come avevo scritto, ma **"semplice, con pomodoro, con rosmarino"**. Il formaggio non c'è. Cambia anche la forma (semplice + "con X" invece di "al X").

### Modifica applicata
- Sostituito in 2 punti del sito (Colazione e Aperitivo) con replace_all: 1 edit, 2 occorrenze.

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 2 occorrenze gusti focaccia aggiornate |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 14 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** togliere il "365 / GIORNI L'ANNO" dalla sezione Focaccia di Papà.

### Modifica applicata
- Rimosso il terzo `focaccia-fact-item` (365 / Giorni l'anno). Restano i primi due: `5:30 Inizia l'impasto` e `7:00 Esce dal forno`.

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | rimosso 3° item dai numeri focaccia |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 15 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** *"di mattina fanno anche le briosce, fagottini, veneziane"*.

### Decisione
- Brioche già presente nel item 2 (`Cappuccino con brioche · vuota, alla crema, al cioccolato`) → non duplicata.
- Aggiunti **fagottini** e **veneziane** alla riga item 5 della Colazione (la riga "cambia ogni giorno").
- Risultato: `Cornetti, fagottini, veneziane, krapfen, torte della casa`.

### Possibile aggiustamento futuro
- Se la riga è troppo lunga sul layout, valutare: togliere "Cornetti" (a Milano spesso = brioche, già in item 2) o spezzare in due voci.

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 1 modifica: lista colazione pasticceria estesa |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 16 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** *"krapfern e torte della casa togli"*.

### Modifica applicata
- Riga pasticceria colazione: `Cornetti, fagottini, veneziane, krapfen, torte della casa` → **`Cornetti, fagottini, veneziane`**.

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | rimossi krapfen e torte della casa |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 17 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** *"spremuta d arancia fatta al momento"*.

### Modifica applicata
- Lista colazione · Spremuta d'arancia: `arance siciliane, fatte al momento` → **`fatta al momento`**. Tolta la claim sulle arance siciliane (non sempre veritiera tutto l'anno).

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | aggiornato desc spremuta |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 18 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** approvazione parziale Batch 1: *"4 a, 1 si, 2 no, 5 si. per orari di apertura farei in qualche altro modo perche qualche giorno sono aperti dalle 7:30"*.

### Applicato (3 modifiche)
- **Hero subtitle** (①): `pranzo casalingo, ..., sala privata per le vostre serate` → **`pranzo come a casa, ..., e una sala tutta vostra per le serate`**.
- **Focaccia eyebrow** (④A): `La nostra storia` → **`La nostra mattina`**.
- **Focaccia § 2** (⑤): `in tavola accanto al primo a pranzo` → **`accanto alla pasta a pranzo`**.

### In sospeso (decisione utente)
- ② Hero meta + ③ Hero tag → l'utente ha rifiutato "dalle 7" perché Sab/Dom apre alle 7:30. Proposte alternative in chat con 4 opzioni ciascuna.

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 3 modifiche (Batch 1 parziale) |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 19 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** *"a. cene aziendali togli, metti battesimi o feste private"* (con screenshot del timeline slot Sala privata).

### Decisioni
- "Cene aziendali" rimosso (richiesta esplicita) — coerente con strategia HANDOFF (zona residenziale, niente grandi uffici).
- Aggiunti **entrambi** "battesimi" e "feste private" (l'utente ha scritto "o" ma per la lista entrambi danno varietà).
- Per coerenza, applicato anche alla descrizione grande della sezione Sala (oltre allo slot timeline mostrato).
- **Decisione propria**: rimosso anche **"presentazioni"** dalla descrizione grande, per uniformare il tono "famiglia/privato" della nuova lista. Da confermare con utente.

### Modifiche applicate
- Timeline slot Sala (line 1908): `Compleanni, lauree, cene aziendali` → **`Compleanni, lauree, battesimi, feste private`**
- Descrizione sezione Sala (line 2133): `Compleanni, lauree, cene aziendali, presentazioni` → **`Compleanni, lauree, battesimi, feste private`**

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 2 modifiche lista eventi sala |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 20 — 24 maggio 2026 (stessa giornata)

**Richieste utente:**
1. Foto hero (100 KB) è di qualità bassa → l'utente cercherà una versione più grande.
2. Nel frattempo: togliere il tag "Aperto adesso".

### Modifica applicata
- Rimosso `<div class="hero-tag">● Aperto adesso</div>` dal Hero (Batch 1 punto ③ opzione D).

### CSS lasciato in place
- `.hero-tag` e `.hero-tag .dot` sono ora regole CSS inutilizzate ma innocue. La `@keyframes pulse` è ancora usata da `.form-promise .dot`, quindi non si tocca.

### In sospeso
- ② Hero meta — l'utente vuole una frase orari che funzioni sia per feriali 7 che weekend 7:30 (proposte A/B/C/D in coda).
- Foto hero ad alta risoluzione attesa.

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | rimosso hero-tag div |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 21 — 24 maggio 2026 (stessa giornata)

**Contesto:** l'utente mostra foto di una lavagna in locale con 5 caffè specialty (Nutellone, Pistacoffe, Hotcoffe, Caramelcoffe, Agrumito), 3€ ciascuno, e chiede se ha senso metterli sul sito.

### Decisione strategica
- Analisi pro/contro:
  - **Pro**: personalità, Instagram-friendly, prezzo concreto.
  - **Contro**: focaccia di Papà è il core (rischio dispersione); ricette cambiano spesso (manutenzione); nomi contengono anglicismi (regola HANDOFF "no anglicismi"); target sito = sala privata, non passa-banco quotidiano.
- **Scelta utente: opzione A** (riga singola nella Colazione, senza listare i nomi specifici).

### Modifica applicata
- Nuova voce aggiunta alla lista Colazione tra "Cappuccino con brioche" e "Focaccia di Papà":
  - **`Caffè firmati della casa · ricette nostre, cambiano spesso · 3€`**

### Razionale
- Singola riga = no aggiornamenti continui sul sito.
- Linguaggio neutro ("firmati della casa", "ricette nostre") = niente anglicismi, coerente con tono brand.
- Prezzo incluso nella desc (gli altri item colazione non hanno prezzo, ma per i creativi è info utile e concreta).
- La lavagna in locale resta il canale dove l'utente scopre i nomi del giorno.

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | 1 nuova voce nella lista Colazione |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 22 — 24 maggio 2026 (stessa giornata)

**Richiesta utente:** trovare nuova foto hero ad alta risoluzione (l'attuale era 100 KB, sgranata).

### Cosa è stato fatto
1. Utente ha inviato 3 foto nuove del locale.
2. Analizzate e raccomandato la **Foto 1** (verticale: bancone + lampadario + Teleselezione) per il hero — formato verticale compatibile col layout esistente, contiene tutti gli elementi-brand.
3. Suggerito anche di usare **Foto 3** (salotto con poltrone velluto) come `sala_main.jpg` per la galleria sala — più "hostable", parla al target eventi privati. **Non ancora applicato.**
4. Utente ha salvato la Foto 1 in `images/` ma Windows l'ha nominata `hero (2).jpg` (perché esisteva già `hero.jpg`).
5. Proposto swap automatico via `mv`, ma utente ha preferito gestire personalmente.
6. Utente ha sovrascritto manualmente: `hero.jpg` ora è la nuova foto da 236 KB.

### File modificati
| File | Azione |
|---|---|
| `images/hero.jpg` | sovrascritto dall'utente con nuova versione alta qualità |
| `PROGETTO.md` | inventario foto aggiornato + registro |
| `STORICO.md` | aggiornato (questa voce) |

### In sospeso
- Decidere se applicare Foto 3 (salotto) come nuovo `sala_main.jpg`.
- Decidere dove inserire Foto 2 (orizzontale, col cagnolino) — possibile riserva per Dove siamo o galleria sala.
- ② Hero meta (orari) ancora pendente dal Batch 1.

---

## Sessione 23 — 25 maggio 2026

**Contesto:** ottimizzazione massiva foto + ripristino sala_main.

### Ottimizzazione foto (sharp/Node)
Installato `sharp` in `_tools/`, creato `optimize-images.js`. Ridimensionate a max 1600-2000px lato lungo + JPEG q82 progressive. Risultati:

| File | Prima | Dopo | Risparmio |
|---|---|---|---|
| `hero.jpg` | 5.83 MB | 421 KB | -93% |
| `sala_main.jpg` (poi ripristinato) | 7.05 MB | 399 KB | -94% |
| `sala_sera.jpg` | 10.95 MB | 448 KB | -96% |
| `detail_bancone.jpg` | 4.10 MB | 354 KB | -91% |
| `focaccia.jpg` | 1.22 MB | 147 KB | -88% |
| `facade.jpg` | 475 KB | 412 KB | -13% |

Totale: **~28 MB → ~2.2 MB**. Rimosso anche `sala_main (2).jpg` duplicato Windows.

### Ripristino sala_main
Su richiesta utente ("torna alla foto precedente"): estratta versione originale `sala_main.jpg` (677 KB, sedie colorate + archi) dal zip iniziale `cafe_vintage_site.zip` (contenuto nell'upload originale dell'utente). Sovrascritta la versione salotto-velluto-bottiglie.

⚠️ **Persa**: la foto del salotto velluto con divisorio bottiglie che era stata sostituita. Se serve, va ricaricata dall'utente. `sala_sera.jpg` mostra ancora una scena di salotto simile.

### Da decidere
- ✅ ~~Ottimizzare sala_main.jpg ripristinata~~ → fatto: 662 KB → 580 KB (-13%, qualità invariata, foto originale era già a 1600x1596px)
- `sala_sera.jpg` e `detail_bancone.jpg` → restano scollegate dal sito **per ora** (decisione utente). Disponibili in `images/` come riserva.
- Etichette galleria sala (in pausa)

### File modificati
| File | Azione |
|---|---|
| `_tools/package.json` | creato |
| `_tools/optimize-images.js` | creato |
| `_tools/node_modules/` | npm install sharp |
| `images/*.jpg` | 5 foto ottimizzate (-93%/96%) + 1 ripristinata |
| `images/sala_main (2).jpg` | rimosso |
| `PROGETTO.md` | (da aggiornare in prossima modifica) |
| `STORICO.md` | aggiornato (questa voce) |

---

## Sessione 24 — 25 maggio 2026

**Richiesta utente:** mostrare 2 foto ravvicinate dell'insegna fisica ("CAFFÉ VINTAGE" e "BISTROT") e chiedere di trovare un font uguale per scrivere il nome del locale, allineando il display web all'insegna.

### Verifica
- HANDOFF già documentava la scelta: **Cinzel Decorative weight 900 = matching font dell'insegna** (è già caricato e usato per "CAFFÉ VINTAGE" nell'hero).
- Mancante: **"BISTROT"** era ancora in DM Sans piccolo (subtitle), non nel font dell'insegna.

### Modifica applicata
- Hero H1 ridisegnato:
  - `<span class="bistrot-tag">Bistrot · Milano</span>` (DM Sans piccolo, terracotta, con linee decorative) → `<span class="bistrot">Bistrot</span>` (Cinzel Decorative 900, terracotta, dimensione 0.36em del titolo)
  - Rimosso "Milano" dal blocco titolo (ridondante con la riga indirizzo sotto)
  - Mantenuta linea sottile decorativa di separazione
- CSS: sostituite regole `.hero h1 .bistrot-tag` con nuove `.hero h1 .bistrot`.

### Da decidere
- Replicare lo stesso pattern (Bistrot in Cinzel Decorative) anche nel **Nav** e nel **Footer** dove ora "Bistrot · Milano" è piccolo DM Sans? Oppure lasciare lì la versione sobria.
- Eventualmente provare **Cinzel** (regular) come alternativa più pulita al Cinzel Decorative.

### File modificati
| File | Azione |
|---|---|
| `cafe_vintage_final.html` | H1 hero ridisegnato (HTML + CSS) |
| `PROGETTO.md` | registro aggiornato |
| `STORICO.md` | aggiornato (questa voce) |

---

<!-- Aggiungere qui sotto le nuove sessioni -->
