# Das Wimmer - Projektwebsite

Website zum Wohnprojekt **Das Wimmer**, Wimmergasse 20, 1050 Wien.
Gründerzeit-Eckhaus von 1880, saniert und weitergebaut: 31 Wohnungen.
Vermarktung: UNIO.

## Aufbau

Statische Site, aus einem Claude-Design-Build exportiert. Jede Seite ist
self-contained: die Laufzeit (`support.js`, `image-slot.js`), die Pluto-Fonts
und alle Bildzuschnitte sind als data-URIs eingebettet. React 18 wird zur
Laufzeit von unpkg geladen, die Schrift Outfit von Google Fonts.

| Datei               | Route           |
| ------------------- | --------------- |
| `index.html`        | `/`             |
| `das-projekt.html`  | `/das-projekt`  |
| `wohnungen.html`    | `/wohnungen`    |
| `lage.html`         | `/lage`         |
| `rechtliches.html`  | `/rechtliches`  |

Clean URLs kommen aus `vercel.json`. Kein Build-Step, kein Framework.

* `assets/` - die im Build verwendeten Bildzuschnitte (Quelle der data-URIs)
* `uploads/` - Originalmaterial und Briefing-Dokumente, per `.vercelignore`
  vom Deploy ausgeschlossen
* `CLAUDE.md` - Notizen zum Umgang mit den `.dc.html`-Quellen

## Lokal ansehen

```bash
python3 -m http.server 4321
```

Dann `http://localhost:4321/` öffnen. Ohne Clean-URL-Rewrite sind die
Unterseiten unter `/das-projekt.html` erreichbar.

## Deploy

Vercel, verbunden mit diesem Repo. Jeder Push auf `main` deployt.

## Bitte beachten

* Die eingebetteten Pluto-Schnitte sind **Trial-Versionen** (HvD Trial).
  Vor dem Livegang durch Lizenzversionen ersetzen.
* Im Text stehen noch `[pruefen]`-Platzhalter - bewusst sichtbar, bis die
  offenen Punkte (Baujahr, Distanzen, Zimmeranzahlen, Preise, Energieausweis DG)
  freigegeben sind.
* Keine Geviert-/Halbgeviertstriche in Texten, Sie-Form.
