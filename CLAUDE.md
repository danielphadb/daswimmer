# Das Wimmer Website - Projekt-Notizen

- Die Preview-Infrastruktur lieferte Subressourcen (/serve/*) zeitweise mit 401 aus. Deshalb sind in allen .dc.html-Seiten eingebettet: support.js und image-slot.js als `<script src="data:text/javascript;base64,...">`, Logo/Emblem und alle Foto-Zuschnitte als data:image-URIs. Die Seiten funktionieren dadurch ohne funktionierenden Datei-Server.
- ACHTUNG: `dc_write` regeneriert den Datei-Kopf und wuerde die eingebettete Laufzeit durch `<script src="./support.js">` ersetzen. Fuer Aenderungen an diesen Seiten nur `dc_html_str_replace`/`dc_js_str_replace`/`run_script` verwenden, oder nach `dc_write` die Einbettung erneut ausfuehren.
- Inline-`<script>`-Tags mit JS-Text im Template werden vom Host-Parser verfaelscht (kebab-casing) und ein literales `<x-dc>` in JS-Strings bricht das Template-Parsing. Immer Base64-src statt Inline-Text verwenden.
- Quell-Zuschnitte liegen in assets/ (fassade-ecke, fassade-breit, panorama, altbau, dg, hof-breit, hof, aufzug-hoch, dg-terrasse, aufzug-quer, emblem, logo-full); Originale in uploads/.
- Keine Geviertstriche/Halbgeviertstriche in Texten. Sie-Form. [pruefen]-Platzhalter sichtbar lassen.
