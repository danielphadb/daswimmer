/* Stage-Variante. Die Seite wird von React gerendert und kann Elemente neu aufbauen,
   deshalb haengt der Zustand an <html> und die Elemente werden bei jedem Takt frisch gesucht. */
(function(){
  var TAKT = 6600, i = 0;
  var wurzel = document.documentElement;
  setTimeout(function(){ wurzel.classList.add('stg-bereit'); }, 350);
  function kopf(){ var h = document.querySelector('header'); if (h) wurzel.style.setProperty('--kopf', Math.round(h.getBoundingClientRect().height) + 'px'); }
  setTimeout(kopf, 200); setTimeout(kopf, 900); window.addEventListener('resize', kopf);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function setze(){
    var bilder = document.querySelectorAll('.stg figure');
    var takte  = document.querySelectorAll('.stg-takt');
    var motiv  = document.querySelector('.stg-motiv');
    if (!bilder.length) return;
    for (var k = 0; k < bilder.length; k++) {
      if (k === i) bilder[k].setAttribute('data-an', '1'); else bilder[k].removeAttribute('data-an');
    }
    for (var t = 0; t < takte.length; t++) {
      takte[t].removeAttribute('data-an');
    }
    if (takte[i]) { void takte[i].offsetWidth; takte[i].setAttribute('data-an', '1'); }
    if (motiv && bilder[i]) motiv.textContent = bilder[i].getAttribute('data-motiv');
  }
  setInterval(function(){
    var n = document.querySelectorAll('.stg figure').length || 4;
    i = (i + 1) % n; setze();
  }, TAKT);
})();
