# Caffé Vintage — Piano di tracciamento (GA4)

> Misurazione e analytics per il sito vetrina di Caffé Vintage Bistrot.
> Documento di riferimento per l'implementazione di GA4.
> Creato: **24 maggio 2026** · da aggiornare quando il sito va online.

---

## 1. Obiettivo della misurazione

Il sito ha **un solo scopo che porta soldi**: ricevere richieste per la **sala privata** (eventi privati = segmento più redditizio — vedi `HANDOFF.md` §4).

Tutto il piano è quindi costruito attorno a **una domanda principale**:

> *Quante persone arrivano al sito → guardano la sezione sala → inviano il form di prenotazione, e quali canali portano le richieste migliori?*

Il resto serve solo per capire **come ottimizzare quel percorso** o per misurare contatti secondari (telefono, WhatsApp, Maps).

### Decisioni che i dati devono informare
| Decisione | Dato che serve |
|---|---|
| Su quali canali Virginia deve investire (Instagram? Google Business?) | Sorgenti delle conversioni (`source / medium`) |
| Quale messaggio funziona | Tasso conversione per landing path / dispositivo |
| Se il problema è il sito o il traffico | Funnel sala (drop-off tra view → start form → submit) |
| Se vale la pena fare campagne a pagamento | CPA simulato in base ai contatti reali ricevuti |
| Se il sito mobile funziona | Conversioni per dispositivo (oggi menu mobile rotto) |

---

## 2. Tool

**GA4** unico tool. Niente GTM per ora (sito statico, piccolo, gestione diretta più semplice). Si può migrare a GTM in futuro quando aumentano i tag (pixel Instagram, ecc.).

| Tool | Stato | Note |
|---|---|---|
| GA4 | da creare | Virginia crea property, copia Measurement ID `G-XXXXXXXXXX` |
| Iubenda (cookie consent) | in roadmap (~30€/anno) | Necessario perché siamo in UE |
| Google Search Console | nice to have | Per le ricerche organiche su "caffé vintage milano" |
| Google Business Profile | critico | Tracciato separatamente, ma porta traffico → UTM |

---

## 3. Conversioni

### 🎯 Conversione principale
| Evento | Quando | Valore strategico |
|---|---|---|
| **`prenotazione_sala_inviata`** | Form `#prenota` inviato con successo | Lead vero, segmento più redditizio |

### 🎯 Conversioni secondarie (lead intent)
| Evento | Quando |
|---|---|
| `contatto_cliccato` (channel=whatsapp) | Clic su qualunque link `wa.me/…` |
| `contatto_cliccato` (channel=telefono) | Clic su qualunque `tel:` link |
| `contatto_cliccato` (channel=email) | Clic su `mailto:` |
| `indicazioni_cliccato` | Clic su "Apri in Google Maps" |

**Tutte e 5 vanno marcate come "conversioni" in GA4 Admin → Events.**

---

## 4. Tabella eventi completa

Naming: **object_action**, lowercase, snake_case.

| Evento | Tipo | Proprietà | Trigger | Note |
|---|---|---|---|---|
| `page_view` | auto (Enhanced Measurement) | — | apertura pagina | basico |
| `scroll` | auto | percent_scrolled | 25/50/75/90% | per engagement |
| `prenotazione_sala_inviata` | conversione 🎯 | `tipo_evento`, `num_ospiti`, `has_data`, `has_note` | submit form `#prenota` | LA conversione che conta |
| `prenotazione_form_avviata` | engagement | — | focus sul primo campo del form | misura intenzione |
| `contatto_cliccato` | conversione 🎯 | `channel` (whatsapp/telefono/email), `location` (header/footer/sezione_dove/whatsapp_float) | clic su `wa.me`, `tel:`, `mailto:` | |
| `indicazioni_cliccato` | conversione 🎯 | — | clic "Apri in Google Maps" | |
| `nav_cliccato` | engagement | `target` (#colazione / #pranzo / ecc.) | clic link nav | capire cosa interessa |
| `cta_hero_cliccato` | engagement | `cta_text` (Colazione/Pranzo/Aperitivo/Sala privata) | clic sui 4 bottoni hero | |
| `sezione_vista` | engagement | `section_id` (#sala, #aperitivo, ecc.) | scroll dentro la sezione (IntersectionObserver) | funnel |

### Non tracciamo (volutamente)
- Hover, mouse move, tempo per sezione esatto → non servono a nessuna decisione
- Posizione GPS dell'utente → privacy issue + inutile
- Dati personali (nome, email del form) → MAI in GA4

---

## 5. Proprietà standard (custom dimensions)

| Nome | Scope | Da dove arriva |
|---|---|---|
| `tipo_evento` | event | dal select del form (Compleanno, Aziendale, Laurea…) |
| `num_ospiti` | event | dall'input numerico del form (bucketizzato: 8-12 / 13-18 / 19-22) |
| `channel` | event | parametrato a runtime in base al link cliccato |
| `location` | event | sezione del sito dove avviene il clic |
| `section_id` | event | ID HTML della sezione |

In GA4 Admin → **Custom dimensions** → registrare ognuna come *Event scope*.

---

## 6. Funnel "Sala privata" (quello che conta davvero)

```
[Landing]
   ↓ 100%
[Sezione #sala vista]        ← sezione_vista (section_id: #sala)
   ↓
[Form #prenota visualizzato] ← sezione_vista (section_id: #prenota)
   ↓
[Form avviato]                ← prenotazione_form_avviata
   ↓
[Form inviato]                ← prenotazione_sala_inviata 🎯
```

Configurare questo funnel in **GA4 → Explore → Funnel exploration**. È lo strumento più importante per capire se il problema è far arrivare la gente al sito o convertirla una volta lì.

---

## 7. Strategia UTM (per i canali esterni)

Ogni link che Virginia mette su un canale esterno deve avere UTM, altrimenti GA4 lo conta come "direct" e non si capisce cosa funziona.

### Convenzione
- **lowercase**, underscore tra parole
- `utm_source` = piattaforma (instagram, google, whatsapp)
- `utm_medium` = tipo di link (bio, post, story, business_profile, organic)
- `utm_campaign` = iniziativa specifica (lancio_sito, aperitivo_estate, focaccia_di_papa)

### Link pronti da usare (esempi)
| Dove | URL con UTM |
|---|---|
| Bio Instagram | `https://caffevintage.it/?utm_source=instagram&utm_medium=bio` |
| Post Instagram sulla sala | `…/#sala?utm_source=instagram&utm_medium=post&utm_campaign=sala_privata` |
| Google Business "sito web" | `https://caffevintage.it/?utm_source=google&utm_medium=business_profile` |
| Risposta WhatsApp | `…/?utm_source=whatsapp&utm_medium=chat` |
| Volantino con QR code | `…/?utm_source=qr&utm_medium=offline&utm_campaign=volantino_marzo` |

**Tenere un foglio Google con tutti gli UTM usati** — altrimenti in 6 mesi nessuno ricorda più cosa significava `utm_campaign=v2_new`.

---

## 8. Privacy & cookie consent (Italia/UE)

GA4 senza consenso = illegale in UE. Step obbligatori prima del go-live:

1. **Iubenda** (~30€/anno) o Cookiebot → genera banner + Privacy/Cookie Policy
2. **Consent Mode v2** abilitato nello snippet GA4 → eventi partono in modalità "consent_denied" finché l'utente non accetta
3. **Privacy Policy** linkata nel footer (oggi è un link vuoto `#`)
4. **IP anonimizzato** (default in GA4, ma verificare)
5. **Data retention**: 14 mesi in GA4 Admin (default 2 mesi, si può alzare)

---

## 9. Implementazione su HTML statico

Sito self-contained → tutto inline in `cafe_vintage_final.html`. Niente build, niente GTM.

### A. Snippet GA4 nel `<head>`
Da inserire **subito prima di `</head>`**. Sostituire `G-XXXXXXXXXX` con il Measurement ID di Virginia.

```html
<!-- Google Analytics 4 -->
<script>
  // Consent Mode v2 — partenza "denied", aggiornato da Iubenda dopo l'accept
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { 'anonymize_ip': true });
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### B. Tracciamento eventi (script in fondo al `<body>`)

```html
<script>
(function() {
  // Helper
  const track = (name, params = {}) => {
    if (typeof gtag === 'function') gtag('event', name, params);
  };

  // --- Form prenotazione sala ---
  const form = document.querySelector('#prenota form');
  if (form) {
    let started = false;
    form.addEventListener('focusin', () => {
      if (!started) {
        track('prenotazione_form_avviata');
        started = true;
      }
    }, { once: false });

    form.addEventListener('submit', (e) => {
      const ospiti = parseInt(form.querySelector('#ospiti')?.value || '0', 10);
      const bucket = ospiti <= 12 ? '8-12' : ospiti <= 18 ? '13-18' : '19-22';
      track('prenotazione_sala_inviata', {
        tipo_evento: form.querySelector('#evento')?.value || '',
        num_ospiti: bucket,
        has_data: !!form.querySelector('#data')?.value,
        has_note: !!form.querySelector('#note')?.value.trim()
      });
    });
  }

  // --- Contatti (WhatsApp, telefono, email) ---
  document.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href') || '';
    let channel = null;
    if (href.startsWith('tel:')) channel = 'telefono';
    else if (href.startsWith('mailto:')) channel = 'email';
    else if (href.includes('wa.me') || href.includes('whatsapp')) channel = 'whatsapp';
    if (channel) {
      a.addEventListener('click', () => {
        const location =
          a.closest('footer') ? 'footer' :
          a.classList.contains('whatsapp') ? 'whatsapp_float' :
          a.closest('#dove') ? 'sezione_dove' : 'altro';
        track('contatto_cliccato', { channel, location });
      });
    }
    // Google Maps
    if (href.includes('maps.google') || href.includes('goo.gl/maps')) {
      a.addEventListener('click', () => track('indicazioni_cliccato'));
    }
  });

  // --- Nav clicks ---
  document.querySelectorAll('.nav-links a, .hero-cta a').forEach(a => {
    a.addEventListener('click', () => {
      const target = a.getAttribute('href') || '';
      const evt = a.classList.contains('btn') ? 'cta_hero_cliccato' : 'nav_cliccato';
      track(evt, evt === 'cta_hero_cliccato' ? { cta_text: a.textContent.trim() } : { target });
    });
  });

  // --- Sezioni viste (IntersectionObserver) ---
  const seen = new Set();
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio >= 0.5) {
        const id = '#' + e.target.id;
        if (!seen.has(id)) {
          seen.add(id);
          track('sezione_vista', { section_id: id });
        }
      }
    });
  }, { threshold: 0.5 });
  ['colazione','pranzo','aperitivo','sala','prenota','dove'].forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
})();
</script>
```

### C. Form: oggi non parte davvero
Il form ha `onsubmit="event.preventDefault(); alert('...Demo')"` → l'evento `prenotazione_sala_inviata` partirebbe sempre, anche per richieste "finte" (perché è un alert). **Quando si collegherà a Formspree/Web3Forms**, il tracking si sposterà sul **callback di successo** (es. dopo che il servizio ha confermato l'invio), non sul `submit` JS.

---

## 10. Validazione

Prima di considerare l'implementazione "fatta":

- [ ] `G-XXXXXXXXXX` sostituito con il Measurement ID reale
- [ ] In **GA4 → DebugView** vedo arrivare `page_view`, `sezione_vista`, `contatto_cliccato` testando dal vivo
- [ ] Tutti e 5 i conversion event marcati come "Mark as conversion" in GA4 Admin
- [ ] Custom dimensions registrate (`tipo_evento`, `num_ospiti`, `channel`, `location`, `section_id`)
- [ ] Banner Iubenda attivo, blocca eventi finché non accetti
- [ ] Privacy/Cookie Policy linkate nel footer (non più `#`)
- [ ] Test su mobile (Chrome DevTools device emulation)
- [ ] Niente PII nelle proprietà (nome/email del form NON vengono passati a GA4 — verificato)
- [ ] UTM testati: aprire una URL con `?utm_source=test&utm_medium=test` e vedere se appaiono in DebugView

---

## 11. Cosa NON serve adesso (consapevolmente fuori scope)

- A/B testing → traffico troppo basso per ora; ricominciare a parlarne dopo 1.000 visite/mese
- Heatmap (Hotjar/Microsoft Clarity) → utile in futuro per capire il mobile, ma rumore in più all'inizio
- Mixpanel/Amplitude → eccessivi per un sito vetrina di 1 pagina
- Pixel Facebook/TikTok → solo se Virginia farà campagne paid, oggi no

---

## 12. Dipendenze (cosa serve PRIMA di implementare)

1. **Sito online** (Netlify Drop) — eventi su `localhost` funzionano ma sporcano i dati
2. **Account Google di Virginia** per creare la property GA4
3. **Iubenda attivato** (o equivalente) per i cookie
4. **Privacy Policy** generata da Iubenda
5. **Form connesso a Formspree/Web3Forms** — altrimenti `prenotazione_sala_inviata` parte da un alert finto

Senza questi 5, l'implementazione è prematura.

---

*Aggiornare questo documento ogni volta che si aggiungono/rimuovono eventi o cambiano gli obiettivi di business.*
