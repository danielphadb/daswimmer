# DAS WIMMER · Design-System (1:1 nach Screenrecording-Referenz)

Referenz: Screenrecording eines Award-Level-Projekts ("Alder Park II", warmes Editorial-Design). Dieses Design wird 1:1 als Systematik übernommen und mit der Das-Wimmer-Markenwelt (Logo: ovales W-20-Emblem, Creme/Schwarz/Gold) befüllt. Kein AI-natives Design: keine Eyebrow-Pills, keine Gradient-Blobs, keine Schatten-Cards, keine Emoji-Icons.

---

## 1. Farben (Tokens)

```css
:root {
  --ivory:      #EFEBE4;  /* Seitengrund, warmes Papier-Creme (wie Referenz) */
  --paper:      #F6F3ED;  /* Karten/Flächen minimal heller */
  --espresso:   #2C2620;  /* dunkle Kapitel-Sektionen, Footer (warmes Braunschwarz) */
  --ink:        #1B1712;  /* Text auf hell */
  --ink-soft:   #6E675E;  /* Sekundärtext */
  --gold:       #C08A2D;  /* Akzent aus dem Logo ("20"), sparsam: Hover, Details, max 5% */
  --line:       rgba(27, 23, 18, 0.16);   /* Hairlines auf hell */
  --line-dark:  rgba(246, 243, 237, 0.22); /* Hairlines auf dunkel */
  --text-on-dark: #EDE8DF;
}
```

Regeln: Große ruhige Flächen in `--ivory`. Pro Seite genau ein bis zwei dunkle `--espresso`-Kapitelblöcke als dramaturgische Zäsur (wie der dunkle "Alder Park II"-Abschnitt in der Referenz). Gold nur als Mikroakzent (Logo-20, Hover-Unterstriche, aktive Zustände), nie als Flächenfarbe.

## 2. Typografie

| Rolle | Font | Fallback (frei) | Einsatz |
|---|---|---|---|
| Display-Serif | Canela oder Saol Display (lizenzpflichtig) | "Cormorant" 300/400 | H1, Kapitel-Headlines, große Zahlen, Wortmarken-Momente |
| Wortmarke/Caps | wie Logo (gesperrte Roman-Caps) | "Marcellus" | Navigation, DAS WIMMER Schriftzug, Mikro-Labels |
| Grotesk | Suisse Intl / Aeonik (lizenzpflichtig) | "Instrument Sans" 400/500 | Fließtext, Tabellen, Formulare, Captions |

Skala (Desktop): Display 96 bis 140px (Hero/Zahlen, letter-spacing leicht negativ bis 0), H2 48 bis 64px Serif, H3 24 bis 28px Grotesk Medium, Body 16px/1.6, Caption 11 bis 12px Uppercase mit 0.14em Tracking. Headlines nie fett-schwarz wuchtig, immer Light/Regular mit Kontrast über Größe.

Signature-Moves aus der Referenz:
- **Riesige Serif-Zahlen** als Content-Element (in der Referenz "38%"; bei uns "1880", "31", "W20").
- **Wasserzeichen-Typo:** übergroße, sehr helle Serif-Wortmarke (ca. 8% Opazität) hinter Foto-Collagen.
- **Mikro-Index-Labels:** winzige Uppercase-Labels ("Lage", "01") mit Hairline daneben. Das ist die einzige erlaubte Label-Form, keine Pills, keine farbigen Badges.

## 3. Layout-Patterns (aus dem Recording)

1. **Preloader:** Ivory-Fläche, Logo/Wortmarke blendet weich ein, darunter Hairline; rechts unten riesiger Serif-Zähler (0 bis 100). Dauer max 2,5s, danach Curtain-Reveal nach oben.
2. **Editorial-Hero:** viel Weißraum, kleine Meta-Zeile oben (links Claim, rechts Jahr), Wortmarke/Logo mittig-links, Hairline darunter, großes Bild erst beim Scroll.
3. **Corner-Bracket-Textblöcke:** kurze Absätze mit feinem 1px-Winkel (L-Bracket) oben links oder unten rechts, wie technische Plan-Anmerkungen. Signature-Element der Referenz.
4. **Gekippte Foto-Collage:** 2 bis 3 Bilder, leicht rotiert (-6° bis +6°), überlappend, dahinter Wasserzeichen-Typo; Bildunterschriften als Bracket-Blöcke links unten/rechts oben.
5. **Distanz-/Datenlisten:** Tabellenzeilen nur mit Hairlines getrennt: links Wert in Serif (250 M / 2,5 KM), rechts Bezeichnung in Grotesk. Keine Zebra-Streifen, keine Rahmen.
6. **Karten-Sektion:** reduzierte, monochrome Karten-Illustration (Ivory-Töne, dünne Straßen, Serif-Ortslabels, dunkle Pin-Marker), daneben Distanzliste; kleines gekipptes Foto erscheint am Cursor (Hover-Reveal).
7. **Galerie-Slider:** ein großes zentriertes Bild, seitlich angeschnittene Nachbarbilder, darunter minimale Bracket-Pfeile (keine runden Buttons).
8. **Bento light:** abwechselnd Bild links/Text rechts mit viel Abstand, Texte mit Bracket-Ticks, keine Card-Container.
9. **Dunkles Kapitel:** Espresso-Fläche, riesige Serif-Wortmarke, kleines Inset-Bild mit vertikaler Hairline daneben, Meta-Text oben links, Zeile unten in gesperrten Caps ("ARCHITEKTUR. SUBSTANZ. RUHE.").
10. **Formular:** zweispaltig, links Headline + Ansprechpartner-Karte (kleines Foto, Name, Telefon, Mail, Hairline-Rahmen), rechts Underline-Only-Inputs, Checkbox als feines Quadrat, Submit als dunkler rechteckiger Button mit Pfeil (einziger gefüllter Button der Seite).
11. **Footer:** Espresso, oben Kontaktzeile, kleine Caps-Navigation, darunter die Wortmarke DAS WIMMER über die volle Breite, Mikro-Copyright-Zeile.

## 4. Motion & Effekte (für Claude Design vorbereitet)

Basis: Lenis Smooth Scroll (lerp ~0.1), GSAP + ScrollTrigger oder IntersectionObserver. Easing global `cubic-bezier(0.25, 1, 0.25, 1)`, Dauer 0.8 bis 1.2s.

- **Preloader-Counter:** Zahl zählt mit Ease-out auf 100, Logo-Fade parallel, dann Slide-up-Reveal der Seite (clip-path oder translateY).
- **Scroll-Reveals:** Headlines zeilenweise (split lines, translateY 100% zu 0, Stagger 80ms); Bilder mit scale 1.15 zu 1.0 + clip-reveal; Textblöcke fade + 24px up.
- **Parallax:** Collage-Bilder mit unterschiedlichen Geschwindigkeiten (data-speed 0.85 bis 1.15), Rotation bleibt statisch.
- **Zahlen-Counter:** große Serif-Kennzahlen zählen beim Viewport-Eintritt hoch (einmalig).
- **Hover:** Bilder de-rotieren leicht Richtung 0° und skalieren 1.03; Links bekommen Gold-Underline (width 0 zu 100%); Tabellenzeilen heben Text minimal an (kein Background-Change).
- **Karten-Hover:** Distanzzeile hovern lässt zugehöriges Mini-Foto gekippt am Cursor erscheinen (wie Referenz).
- **Dark-Section-Enter:** Hintergrund der Seite blendet beim Scroll von Ivory zu Espresso über (background-color transition am body oder Sticky-Wrapper), Wortmarke skaliert minimal.
- **Marquee:** optional eine langsame Laufzeile der Wortmarke im Footer-Bereich, max 1x pro Seite.

Performance-Regeln: nur transform/opacity animieren, `will-change` sparsam, prefers-reduced-motion respektieren (alles auf simple Fades reduzieren), Bilder lazy + LQIP in Ivory-Ton.

## 5. No-Go-Checkliste (vor Abgabe prüfen)

- [ ] Keine Eyebrow-Pills oder farbigen Badges über Headlines
- [ ] Keine Border-Radius-Cards mit Schatten (Radius global 0, Ausnahme: keine)
- [ ] Keine Gradients, kein Glassmorphism, keine Emojis, keine generischen Icons (wenn Icon nötig: 1px-Strich-Icons, minimal)
- [ ] Keine zwei CTAs nebeneinander im Hero, kein Button-Stack
- [ ] Gold unter 5% Flächenanteil
- [ ] Alle Linien 1px Hairline
- [ ] Typo-Kontrast über Größe, nie über Fettung
