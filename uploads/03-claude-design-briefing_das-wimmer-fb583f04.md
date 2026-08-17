# DAS WIMMER · Briefing für Claude Design

Baue die Projekt-Website für "Das Wimmer" (Wimmergasse 20, 1050 Wien): 4 Seiten (Startseite, Wohnungen, Lage, Das Projekt) plus Impressum/Datenschutz-Stubs. Sprache Deutsch, Sie-Form. Design exakt nach `02-design-system_das-wimmer.md` (1:1-Systematik der Screenrecording-Referenz). Story und Fakten aus `01-projekt-story_das-wimmer.md`. Nur dort belegte Fakten verwenden; [prüfen]-Platzhalter sichtbar als solche lassen. Wichtig: keine Geviertstriche oder Halbgeviertstriche in Texten, stattdessen Komma, Doppelpunkt oder Bindestrich.

Navigation (fix, gesperrte Caps, hairline-unterstrichener Active-State): Startseite (Logo) · Wohnungen · Lage · Das Projekt · Kontakt (Anker zum Formular). Rechts außen dezenter Textlink "Anfragen".

---

## SEITE 1: STARTSEITE

**S0 + S1 Hero (verbindliche Referenz-Implementierung: `hero_das-wimmer.html`):** Die Hero ist als fertiges HTML-File umgesetzt und wird 1:1 übernommen (Markup, Tokens, Typografie, Animationstiming). Ablauf exakt wie die Vorlage, in zwei Phasen:

1. **Build-up (Preloader-Overlay):** Ivory-Fläche. Meta-Zeile oben (links Claim "Ein schönes Gefühl, zuhause anzukommen.", rechts "1050 Wien"). Wortmarke mittig-links ("DAS" klein gesperrt über "WIMMER" in Cormorant Light), darunter eine faint Hairline in voller Breite, über die eine dunkle Linie als Fortschrittsbalken synchron zum Zähler wächst. Unten rechts riesiger kursiver Serif-Zähler 0 bis 100 %. Bei 100 % fährt das Overlay als Curtain nach oben.
2. **Hero (Zwei-Spalten-Layout, ca. 64/36):** Links oben große Serif-Headline "DAS WIMMER" (eine Zeile, Zeilen-Reveal über Maske), darunter kleine Subline in Grotesk ("31 Wohnungen in einem Gründerzeit-Eckhaus von 1880. Saniert, weitergebaut, mitten in Margareten."). Links unten, unter der Headline: kleineres Bild (4:3, Clip-Reveal von links), daneben Stat-Block mit großer Serif-Zahl "31" + Label "Wohnungen im Verkauf", Mikro-Zeile "Errichtet 1880, weitergebaut 2026" und dunkler Pfeil-Button "Mehr erfahren" (einziger gefüllter Button). Rechts: Bild in voller Höhe der Hero (Hochformat, Clip-Reveal von oben). Danach beim Scroll: Mikro-Label "Das Haus" + großer Intro-Absatz, dann Full-width Key Visual mit Clip-Reveal.

Technischer Hinweis aus der Referenz-Implementierung: beim Clip-Reveal die umgebende Section per IntersectionObserver beobachten, nicht das geclippte Element selbst (voll geclippte Elemente melden Ratio 0). Platzhalter im File ersetzen: Emblem-SVG durch echtes Logo, Espresso-Flächen durch echte Bilder (links Fassadenrendering, rechts Interieur/Fassade hochformat, Full-width Straßenecke).

**S2 Story-Intro (Editorial):** Links Mikro-Label "Das Haus", rechts zweispaltiger kurzer Text mit Corner-Bracket: die Kern-Story in 4 Sätzen (Ecke Wimmergasse/Stolberggasse, 1880, Substanz wird aufgearbeitet, Dachgeschoss wird weitergebaut). Dazwischen als Wasserzeichen riesiges "1880".

**S3 Zahlenband:** 4 große Serif-Zahlen mit Counter-Animation, nur Hairlines dazwischen: 1880 (Baujahr [prüfen]) · 31 (Wohnungen) · 10 (Dachgeschoss-Wohnungen) · 230 m² (Freiflächen). Darunter Mikro-Caption "Stand Nutzflächenaufstellung 03/2026".

**S4 Zwei Welten (Teaser Wohnungen):** Gekippte Foto-Collage (Altbau-Render, DG-Terrassen-Render, Hofansicht) mit Wasserzeichen "WIMMER". Zwei Bracket-Textblöcke: "Der sanierte Altbau: 21 Wohnungen, ca. 24 bis 99 m²" und "Das neue Dachgeschoss: 10 Wohnungen mit Terrassen und Stadtblick, ca. 42 bis 101 m²". Textlink mit Gold-Underline: "Alle Wohnungen ansehen".

**S5 Dunkles Kapitel (Signature-Moment):** Espresso-Sektion wie Referenz-Dark-Hero. Kleiner Meta-Text oben links: "Hinter der Fassade von 1880 entsteht Wien von morgen." Riesige Serif-Zeile "DAS WIMMER", rechts kleines Inset-Bild (Stiegenhaus/Jugendstilfliesen) mit vertikaler Hairline. Unten gesperrte Caps: "SUBSTANZ. HANDWERK. RUHE."

**S6 Material-Teaser:** Bento light, 3 Wechsel aus Bild + Bracket-Text: Mérida-Fliesen und Terrazzo, Haustor massive Eiche nach Vorbild 1880, Glasaufzug im begrünten Innenhof. Link "Das Projekt entdecken".

**S7 Lage-Teaser:** Monochrome Karten-Illustration Margareten + Distanzliste (5 Zeilen, Werte in Serif): U-Bahn, Naschmarkt, Hauptbahnhof, Innere Stadt, Margaretenplatz [alle Distanzen prüfen]. Hover-Foto am Cursor. Headline: "Mitten in Margareten. Gemessen leise." 

**S8 Kontakt + Footer:** Formular-Pattern (Name, E-Mail, Telefon, Nachricht, DSGVO-Checkbox, dunkler Pfeil-Button "Anfrage senden"), links Ansprechpartner-Karte [Name/Foto Vertrieb UNIO einsetzen]. Danach Espresso-Footer mit voller Wortmarke, Caps-Nav, Impressum/Datenschutz, Zeile "Ein Projekt der W20 Development GmbH".

## SEITE 2: WOHNUNGEN

**W1 Hero (kompakt):** Mikro-Label "Wohnungen", Serif-Headline "Vom Altbau-Original bis zum Dach über Wien.", Subline: 31 Wohnungen, ca. 24 bis 101 m², EG bis 3. Dachgeschoss-Ebene.

**W2 Zwei Kategorien:** nebeneinander (asymmetrisch 7/5): "Sanierter Altbau" und "Neues Dachgeschoss" mit je Bild, Bracket-Text und 3 Kennzahlen (Anzahl, Flächenspanne, Freiflächen/Loggien). Altbau-Fakten: neue Fenster und Eingangstüren in freien Einheiten, erneuerte Wasser-, Elektro- und Internetleitungen bis zur Wohnungstür, Brennwertherme je Wohnung möglich (Gasanschluss + freier Kamin je Wohnung, befundet), Raumhöhen des Bestands [Wert prüfen]. DG-Fakten: 3 Ebenen, alle mit Freifläche, Dachterrassen mit Eiche-Holzlattenrost, Stadtblick.

**W3 Materialien & Ausstattung:** Galerie-Slider (Referenz-Pattern) mit Bemusterungs-/Referenzbildern aus dem Produktkatalog, danach Datenliste im Hairline-Stil: Fenster Holz-Alu (außen RAL 9010), Wohnungseingangstüren EI2 30 in RAL 9016, Fliesen Mérida (Stiegenhaus), Loggien straßen-/hofseitig neu (u. a. Top 5, 12 [prüfen]), Lichtkonzept Belighted. Caption: "Maßgeblich sind Bemusterung und Ausführungsplanung."

**W4 Grundriss-Prinzip:** kurzer Bracket-Text: Grundrisse im Zuge der Sanierung neu gedacht (Zusammenlegungen wie Top 12 mit ca. 99 m²), Bad/WC-Positionen folgen der Bestandsstruktur. Daneben 1 bis 2 exemplarische Grundrisspläne (aus Mappe 24.04.2026) als ruhige Plan-Grafiken.

**W5 Wohnungsnavigator (Abschluss der Seite):** Editorial-Tabelle, keine Cards. Spalten: Top · Ebene · Typ · Wohnfläche · Freifläche · Status. Filter als Text-Toggles mit Hairline-Unterstrich (Ebene: EG / 1. OG / 2. OG / 3. OG / Dachgeschoss · Fläche: bis 40 / 40 bis 70 / über 70 m² · Status: verfügbar / vermietet). Zeilen-Hover: Zeile hebt sich minimal, rechts erscheint Pfeil; Klick öffnet Detail-Layer (Grundriss, Kennzahlen, Anfrage-Button). Zahlen in Serif, Bezeichnungen in Grotesk. Datenbasis (SOLL, Stand 24.03.2026, Preise folgen, Status "vermietet" = Bestandsmietvertrag/Anlegerprodukt):

| Top | Ebene | Typ | NFL m² | Freifläche m² | Status |
|---|---|---|---|---|---|
| 2 | EG | Wohnung | 58,51 | [Loggia prüfen] | verfügbar |
| 4 | EG | Wohnung | 44,01 | - | verfügbar |
| 5 | EG | Wohnung | 54,79 | [Loggia prüfen] | verfügbar |
| 6 | 1. OG | Wohnung | 39,95 | - | vermietet |
| 7 | 1. OG | Wohnung | 28,63 | - | verfügbar |
| 8 | 1. OG | Wohnung | 49,19 | - | verfügbar |
| 10 | 1. OG | Wohnung | 54,95 | - | verfügbar |
| 12 | 1. OG | Wohnung | 99,38 | [Loggia prüfen] | verfügbar |
| 13 | 2. OG | Wohnung | 39,11 | - | vermietet |
| 14 | 2. OG | Wohnung | 34,73 | - | verfügbar |
| 16 | 2. OG | Wohnung | 41,92 | - | verfügbar |
| 17 | 2. OG | Wohnung | 57,16 | - | verfügbar ab [10/2027, intern prüfen] |
| 18 | 2. OG | Wohnung | 33,57 | - | verfügbar ab [06/2028, intern prüfen] |
| 19 | 2. OG | Wohnung | 37,57 | - | vermietet |
| 20 | 3. OG | Wohnung | 38,68 | - | vermietet |
| 21 | 3. OG | Wohnung | 23,91 | - | vermietet |
| 22 | 3. OG | Wohnung | 25,15 | - | vermietet |
| 23 | 3. OG | Wohnung | 25,67 | - | vermietet |
| 24 | 3. OG | Wohnung | 50,10 | - | verfügbar ab [01/2027, intern prüfen] |
| 25 | 3. OG | Wohnung | 33,31 | - | verfügbar ab [01/2027, intern prüfen] |
| 26 | 3. OG | Wohnung | 37,71 | - | verfügbar ab [01/2027, intern prüfen] |
| 27 | 1. DG | Wohnung | 58,50 | 2,49 | verfügbar |
| 28 | 1. DG | Wohnung | 49,26 | 6,03 | verfügbar |
| 29 | 1. DG | Wohnung | 63,56 | 3,64 | verfügbar |
| 30 | 1. DG | Wohnung | 74,87 | 13,37 | verfügbar |
| 31 | 2. DG | Wohnung | 101,44 | 4,35 | verfügbar |
| 32 | 2. DG | Wohnung | 68,04 | - | verfügbar |
| 33 | 2. DG | Wohnung | 78,87 | 10,09 | verfügbar |
| 34 | 3. DG | Wohnung | 42,31 | 18,28 | verfügbar |
| 35 | 3. DG | Wohnung | 54,19 | 13,95 | verfügbar |
| 36 | 3. DG | Wohnung | 62,28 | 5,65 | verfügbar |

Hinweise: Top 1, 9, 11, 15 wurden zusammengelegt und entfallen; Top 3 ist das Geschäftslokal (ca. 180 m², EG + KG, vermietet), optional als letzte Zeile "Lokal" führen. "Verfügbar ab"-Termine sind interne Planungsstände: vor Veröffentlichung mit Bauträger freigeben, sonst nur "in Vorbereitung" anzeigen. Zimmeranzahlen aus Verkaufsplänen ergänzen, sobald freigegeben.

**W6 Energie/Recht (klein, am Seitenende):** Hairline-Zeile: "Energieausweis (Bestand, EG bis 3. OG): HWB 110,1 kWh/m²a, fGEE 1,97, Klasse D. Dachgeschoss: Energieausweis in Erstellung." Symbolbild-Disclaimer.

**W7 Kontakt-CTA + Footer** wie Startseite (verkürzt: nur Formular-Anker-Banner "Wohnung anfragen" + Footer).

## SEITE 3: LAGE

**L1 Hero:** Mikro-Label "Lage", Serif-Headline "Margareten. Mitten im Fünften, gemessen leise." Subline: Eckhaus Wimmergasse/Stolberggasse, 1050 Wien.

**L2 Mikrolage:** Karten-Sektion nach Referenz-Pattern: reduzierte Karten-Illustration des Grätzls (Ivory, Hairline-Straßen, Pin am Eckhaus), links Distanzliste mit Hover-Fotos: Nahversorgung, Margaretenplatz/Schlossquadrat, Naschmarkt, U-Bahn, Schulen/Kindergärten [alle Anker und Gehminuten via Karte verifizieren, Mikrolage-Recherche laut Datenerhebung offen]. Danach 3er-Bildreihe (Referenz-Pattern "Living in Kierszek"): Grätzl-Leben, Kaffeehaus, Grün am Wienfluss/Bruno-Kreisky-Park [Motive bei Fotoshooting produzieren].

**L3 Die gemessene Ruhe (Story-USP):** Espresso- oder Paper-Block mit einer großen Serif-Zahl "21 dB" [nachts, LA,eq, Wert je Kommunikation final abstimmen] und Bracket-Text: "24-Stunden-Schallmessungen in den Erdgeschoss-Lokalen, November 2025: nachts 18 bis 29 dB im Rauminneren. Innerstädtisch wohnen, ohne die Stadt zu hören." Mikro-Caption mit Quelle.

**L4 Makrolage:** Wien-Weitwinkel: kurzer Text (5. Bezirk, innerstädtisch, Anbindung Hauptbahnhof/Karlsplatz [prüfen]) + Distanzliste größerer Maßstab (Hauptbahnhof, Innere Stadt, Flughafen [prüfen]). Optional dezentes Luftbild/Stadtpanorama als full-width Bild mit Parallax.

**L5 Kontakt-CTA + Footer.**

## SEITE 4: DAS PROJEKT

**P1 Hero:** Mikro-Label "Das Projekt", Serif-Headline "Gebaut 1880. Gedacht für die nächsten hundert Jahre." Key Visual Hofansicht.

**P2 Geschichte/Substanz:** Editorial-Text mit Wasserzeichen "W20": Gründerzeit-Eckhaus, Jugendstilfliesen, Stuck, Terrazzo, Gusseisengeländer. Collage aus Bestandsdetails (Fotoshooting: Fliesen, Geländer, Stuck close-ups).

**P3 Die Instandsetzung (Herzstück, Produktkatalog-Storytelling):** nummerierte Positionsliste wie ein Werkverzeichnis (002 Gegensprechanlage, 003 Postkästen, 004 Natursteinpflaster, 005 Wohnungseingangstüren, 006 Haustor Eiche 1880, 007 Innenhoftüre, 008/009 Leuchten, 010 Mérida-Fliesen, 011 Tür- und Geschoßschilder, 012 Bestandseingangstüre): je Position kleines Bild + Bracket-Text, Nummern in Serif. Das ist der Beleg-Charakter des Projekts als Design-Element.

**P4 Das Neue:** Bento light: Glasaufzug im Innenhof, begrünter Hof (Natursteinpflaster, Bewässerung), Fahrrad- und Kinderwagenraum, Müllraum, neue Loggien, Fassadensanierung (Curcuma 60 + RAL 9010), Mauerwerksverpressung/Trockenlegung, erneuerte Steigleitungen.

**P5 Farb- und Materialkonzept:** ruhige Swatch-Reihe (keine Pills: quadratische Farbfelder mit Hairline): Curcuma 60, RAL 233, RAL 9010, RAL 9016, Eiche, Terrazzo; Caption aus Produktkatalog ("verbindet den historischen Charakter des Hauses mit einer ruhigen, hochwertigen Gestaltung").

**P6 Zahlen & Fakten:** Datenliste: 32 Einheiten (31 Wohnungen + 1 Lokal), NFL ca. 1.741 m², EG + 3 OG + 3 DG-Ebenen, Baustart 03/2026, Vermarktungsstart 10/2026, Energieausweis Bestand Klasse D [DG folgt].

**P7 Team:** Hairline-Liste: Bauträger W20 Development GmbH (VPH), Architektur Büro Buschina, Licht Belighted, Fliesen L'argilla, Fenster Fenster Ludwig, Türen Holz Expert, Vermarktung UNIO. Keine Logos, nur Typo.

**P8 Kontakt-CTA + Footer.**

---

## Technische Vorgaben

- Next.js oder Astro, statisch, schnell (LCP unter 2s), Bilder als optimierte WebP/AVIF mit Ivory-LQIP.
- Lenis + GSAP/ScrollTrigger für Motion (Spezifikation in `02-design-system`), prefers-reduced-motion beachten.
- Wohnungsnavigator: Daten als JSON aus der Tabelle oben, Filter client-seitig, Detail-Layer pro Top vorbereitet (Grundriss-Platzhalter).
- Formular: Felder Name, E-Mail, Telefon, Nachricht, optional Interesse (Wohnung/Top-Auswahl), DSGVO-Checkbox; Endpoint-Platzhalter für UNIO Lead-Routing (Webhook/API folgt).
- SEO: Titles/Descriptions je Seite ("Das Wimmer: Eigentumswohnungen Wimmergasse 20, 1050 Wien" etc.), OG-Images aus Key Visual, strukturierte Daten Residence/Offer vorbereiten (ohne Preise).
- Rechtliches: Impressum + Datenschutz-Stubs, Energieausweis-Angaben, Symbolbild-Hinweis bei Renderings ("Symbolbild, Änderungen vorbehalten").
- Keine Geviertstriche/Halbgeviertstriche in sämtlichen Texten und Code-Kommentaren.
