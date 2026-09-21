/* AEC·AI — lógica de la web. El contenido vive en curso.js; aquí solo se pinta. */
(function () {
  "use strict";

  var C = window.CURSO;          // contenido: textos, temario, fechas
  var L = window.ENLACES || {};  // enlaces de Drive
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ------------------------------------------------------------ TEXTOS FIJOS */
  var T = {
    es: {
      marca: "IA aplicada a la ingeniería",
      intro: "Seis sesiones para pasar de «la IA no me funciona» a procesos de oficina técnica fiables: modelos, contexto, agentes, automatización y gobernanza. Aquí tienes cada sesión, su material y los enlaces a Drive.",
      verCurso: "Ver el curso", entrar: "Entrar",
      porDias: "Por días", porDiasDesc: "Cronograma: qué toca en cada sesión",
      porItinerario: "Por itinerario", porItinerarioDesc: "El temario, módulo a módulo",
      extras: "Artefactos",
      reqCod: "00 · ANTES DE EMPEZAR", reqTitulo: "Qué hay que instalar", reqSub: "Tenlo listo antes de la primera sesión. Lo opcional solo hace falta para algunos ejercicios y para los artefactos extra.",
      obligatorio: "Imprescindible", opcional: "Opcional", descargar: "Descargar ↗", abrirWeb: "Abrir ↗",
      diasCod: "01 · CRONOGRAMA", diasTitulo: "Sesión a sesión", diasSub: "Seis sesiones, de septiembre a octubre. Abre cada día para ver el resumen, los ejercicios y el material en Drive.",
      itinCod: "01 · ITINERARIO", itinTitulo: "El temario", itinSub: "Cuatro módulos. Cada uno con sus bloques, sus ejercicios y el día en que se trabaja.",
      extrasTitulo: "Artefactos extra", extrasSub: "Aplicaciones de ejemplo fuera de temario, hechas con IA. Están todas en una carpeta de Drive; se abren con doble clic en su .bat y necesitan Node.js.",
      sesion: "Sesión", modulo: "Módulo", hoy: "Hoy", siguiente: "Próxima", hecha: "Impartida",
      temas: "Contenido", ejercicios: "Ejercicios", recursos: "Para seguir", ejercicio: "Ejercicio",
      presentacion: "Presentación", carpeta: "Carpeta de la sesión", drive: "Drive ↗", pendiente: "Próximamente",
      abrirExtra: "Carpeta en Drive",
      dSesiones: "Sesiones", dFechas: "Fechas", dModulos: "Módulos", dEjercicios: "Ejercicios",
      anteHoy: "Hoy hay sesión", anteProx: "Próxima sesión", anteFin: "Curso finalizado · material disponible",
      licencia: "Licencia", licenciaTxt: "Contenido bajo CC BY-NC-SA 4.0. Código y skills bajo MIT. Las imágenes y citas de terceros pertenecen a sus titulares. Material formativo: no sustituye el criterio profesional ni la verificación contra la normativa vigente.",
      enlaces: "Enlaces", repo: "Repositorio en GitHub", driveGeneral: "Carpeta del curso en Drive", contacto: "Contacto",
      meses: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      dias: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
    },
    ca: {
      marca: "IA aplicada a l’enginyeria",
      intro: "Sis sessions per passar de «la IA no em funciona» a processos d’oficina tècnica fiables: models, context, agents, automatització i governança. Aquí tens cada sessió, el seu material i els enllaços a Drive.",
      verCurso: "Veure el curs", entrar: "Entrar",
      porDias: "Per dies", porDiasDesc: "Cronograma: què toca a cada sessió",
      porItinerario: "Per itinerari", porItinerarioDesc: "El temari, mòdul a mòdul",
      extras: "Artefactes",
      reqCod: "00 · ABANS DE COMENÇAR", reqTitulo: "Què cal instal·lar", reqSub: "Tingues-ho a punt abans de la primera sessió. L’opcional només cal per a alguns exercicis i per als artefactes extra.",
      obligatorio: "Imprescindible", opcional: "Opcional", descargar: "Descarregar ↗", abrirWeb: "Obrir ↗",
      diasCod: "01 · CRONOGRAMA", diasTitulo: "Sessió a sessió", diasSub: "Sis sessions, de setembre a octubre. Obre cada dia per veure’n el resum, els exercicis i el material a Drive.",
      itinCod: "01 · ITINERARI", itinTitulo: "El temari", itinSub: "Quatre mòduls. Cadascun amb els seus blocs, els seus exercicis i el dia en què es treballa.",
      extrasTitulo: "Artefactes extra", extrasSub: "Aplicacions d’exemple fora de temari, fetes amb IA. Són totes en una carpeta de Drive; s’obren amb doble clic al seu .bat i necessiten Node.js.",
      sesion: "Sessió", modulo: "Mòdul", hoy: "Avui", siguiente: "Propera", hecha: "Impartida",
      temas: "Contingut", ejercicios: "Exercicis", recursos: "Per seguir", ejercicio: "Exercici",
      presentacion: "Presentació", carpeta: "Carpeta de la sessió", drive: "Drive ↗", pendiente: "Properament",
      abrirExtra: "Carpeta a Drive",
      dSesiones: "Sessions", dFechas: "Dates", dModulos: "Mòduls", dEjercicios: "Exercicis",
      anteHoy: "Avui hi ha sessió", anteProx: "Propera sessió", anteFin: "Curs finalitzat · material disponible",
      licencia: "Llicència", licenciaTxt: "Contingut sota CC BY-NC-SA 4.0. Codi i skills sota MIT. Les imatges i cites de tercers pertanyen als seus titulars. Material formatiu: no substitueix el criteri professional ni la verificació contra la normativa vigent.",
      enlaces: "Enllaços", repo: "Repositori a GitHub", driveGeneral: "Carpeta del curs a Drive", contacto: "Contacte",
      meses: ["gen", "feb", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
      dias: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"]
    }
  };

  /* ------------------------------------------------------------------ ESTADO */
  function leer(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function guardar(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } }

  var hash = location.hash.replace("#", "");
  var estado = {
    idioma: leer("aecai.idioma") || "ca",   // català per defecte
    vista: (hash === "itinerario" || hash === "dias") ? hash : (leer("aecai.vista") || "dias")
  };
  var abiertas = null; // ids de sesiones desplegadas (se calcula en el primer pintado)

  function t(k) { return T[estado.idioma][k]; }
  function tx(o) { return o ? (o[estado.idioma] || o.es || "") : ""; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function url(u) { return /^(https?:|mailto:)/i.test(u || "") ? esc(u) : ""; }

  /* ------------------------------------------------------------------ FECHAS */
  function fecha(iso) { var p = iso.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function hoyIso() { var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function corta(iso) { var d = fecha(iso); return d.getDate() + " " + t("meses")[d.getMonth()]; }
  function situacion() {
    var h = hoyIso(), sig = null, m = {};
    C.sesiones.forEach(function (s) {
      m[s.id] = s.fecha < h ? "pasada" : s.fecha === h ? "hoy" : "futura";
      if (!sig && s.fecha >= h) sig = s;
    });
    if (sig && m[sig.id] === "futura") m[sig.id] = "siguiente";
    return { porSesion: m, foco: sig };
  }

  /* ----------------------------------------------------------- ENLACES (L) */
  function lnkSesion(id, campo) { var s = L.sesiones && L.sesiones[id]; return (s && s[campo]) || ""; }

  /* Avisa por consola si enlaces.js no encaja con curso.js. */
  function revisar() {
    var ids = {}, fallos = [];
    C.sesiones.forEach(function (s) { ids[s.id] = 1; });
    Object.keys(L.sesiones || {}).forEach(function (k) { if (!ids[k]) fallos.push("enlaces.js → sesiones." + k + " no existe en curso.js"); });
    if (L.extras !== undefined && typeof L.extras !== "string") fallos.push("enlaces.js → extras ha de ser una URL entre comillas");
    if (fallos.length && window.console) console.warn("[AEC·AI] Revisa enlaces.js:\n· " + fallos.join("\n· "));
  }

  /* ---------------------------------------------------------------- PIEZAS */
  function enlace(u, texto, clase) {
    var h = url(u);
    return h ? '<a class="boton ' + (clase || "") + '" href="' + h + '" target="_blank" rel="noopener">' + esc(texto) + " ↗</a>"
             : '<span class="boton boton--off">' + esc(texto) + " · " + esc(t("pendiente")) + "</span>";
  }
  function filaEj(e, conSesion) {
    var s = conSesion && C.sesiones.filter(function (x) { return x.id === e.sesion; })[0];
    return '<li class="ej"><span class="ej__n">E' + ("0" + e.n).slice(-2) + "</span>" +
      '<span class="ej__t">' + esc(tx(e.titulo)) +
      (s ? '<span class="ej__sesion">' + esc(t("sesion")) + " " + s.id.slice(1) + " · " + esc(corta(s.fecha)) + "</span>" : "") + "</span></li>";
  }
  function numMod(id) { return id.replace("m", ""); }

  /* -------------------------------------------------------------- VISTA DÍAS */
  function pintarDias() {
    var sit = situacion();
    if (!abiertas) { abiertas = {}; if (sit.foco) abiertas[sit.foco.id] = true; }
    var html = C.sesiones.map(function (s) {
      var est = sit.porSesion[s.id], d = fecha(s.fecha);
      var ejs = C.ejercicios.filter(function (e) { return e.sesion === s.id; });
      var mods = [s.modulo].concat(ejs.map(function (e) { return e.modulo; })).filter(function (m, i, a) { return a.indexOf(m) === i; }).sort();
      var chapaEst = est === "hoy" ? '<span class="chapa chapa--hoy">' + esc(t("hoy")) + "</span>"
        : est === "siguiente" ? '<span class="chapa chapa--hoy">' + esc(t("siguiente")) + "</span>"
        : est === "pasada" ? '<span class="chapa chapa--ok">✓ ' + esc(t("hecha")) + "</span>" : "";
      return '<article class="sesion aparece ' + est + (abiertas[s.id] ? " abierta" : "") + '" id="' + s.id + '" data-mod="' + s.modulo + '">' +
        '<div class="sesion__fecha"><span class="sesion__dia">' + ("0" + d.getDate()).slice(-2) + '</span><span class="sesion__mes">' + esc(t("meses")[d.getMonth()]) + " " + d.getFullYear() +
        '</span><span class="sesion__sem">' + esc(t("dias")[d.getDay()]) + (s.horario ? " · " + esc(s.horario) : "") + "</span></div>" +
        '<div class="ficha"><button type="button" class="ficha__cab" aria-expanded="' + (abiertas[s.id] ? "true" : "false") + '">' +
        '<span class="ficha__meta"><span class="chapa">S' + s.id.slice(1) + "</span>" +
        mods.map(function (m) { return '<span class="chapa chapa--mod">' + esc(t("modulo")) + " " + numMod(m) + "</span>"; }).join("") + chapaEst + "</span>" +
        '<span class="ficha__titulo">' + esc(tx(s.titulo)) + '</span><span class="ficha__mas" aria-hidden="true">+</span></button>' +
        '<div class="ficha__cuerpo"><p class="ficha__resumen">' + esc(tx(s.resumen)) + "</p>" +
        '<h4 class="rotulo">' + esc(t("temas")) + '</h4><ul class="temas">' + s.temas.map(function (x) { return "<li>" + esc(tx(x)) + "</li>"; }).join("") + "</ul>" +
        (ejs.length ? '<h4 class="rotulo">' + esc(t("ejercicios")) + '</h4><ul class="ejs">' + ejs.map(function (e) { return filaEj(e, false); }).join("") + "</ul>" : "") +
        '<div class="acciones">' + enlace(lnkSesion(s.id, "carpeta"), t("carpeta"), "boton--lleno") + enlace(lnkSesion(s.id, "presentacion"), t("presentacion")) + "</div>" +
        "</div></div></article>";
    }).join("");
    $("#vista").innerHTML = '<div class="crono">' + html + "</div>";
    $$(".ficha__cab").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = b.closest(".sesion"), on = a.classList.toggle("abierta");
        abiertas[a.id] = on; b.setAttribute("aria-expanded", on ? "true" : "false");
      });
    });
  }

  /* -------------------------------------------------------- VISTA ITINERARIO */
  function pintarItinerario() {
    var html = C.modulos.map(function (m) {
      var ejs = C.ejercicios.filter(function (e) { return e.modulo === m.id; });
      var ids = C.sesiones.filter(function (s) { return s.modulo === m.id || ejs.some(function (e) { return e.sesion === s.id; }); });
      return '<article class="modulo aparece" data-mod="' + m.id + '" id="' + m.id + '">' +
        '<div class="modulo__lado"><div><span class="cod">' + esc(t("modulo")) + '</span><div class="modulo__num">0' + numMod(m.id) + "</div></div>" +
        '<div class="modulo__fechas">' + ids.map(function (s) { return '<a href="#' + s.id + '" data-ir="' + s.id + '">S' + s.id.slice(1) + " · " + esc(corta(s.fecha)) + " →</a>"; }).join("") + "</div></div>" +
        '<div class="modulo__cuerpo"><h3 class="modulo__titulo">' + esc(tx(m.titulo)) + "</h3>" +
        '<h4 class="rotulo">' + esc(t("temas")) + '</h4><ul class="temas">' + m.bloques.map(function (b) { return "<li>" + esc(tx(b)) + "</li>"; }).join("") + "</ul>" +
        (ejs.length ? '<h4 class="rotulo">' + esc(t("ejercicios")) + '</h4><ul class="ejs">' + ejs.map(function (e) { return filaEj(e, true); }).join("") + "</ul>" : "") +
        (m.recursos && m.recursos.length ? '<h4 class="rotulo">' + esc(t("recursos")) + '</h4><div class="recursos">' +
          m.recursos.map(function (r) { return '<a href="' + url(r.url) + '" target="_blank" rel="noopener">' + esc(r.nombre) + " ↗</a>"; }).join("") + "</div>" : "") +
        "</div></article>";
    }).join("");
    $("#vista").innerHTML = '<div class="itin">' + html + "</div>";
    $$("[data-ir]").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        var id = a.getAttribute("data-ir");
        abiertas = abiertas || {}; abiertas[id] = true;
        ponerVista("dias");
        var el = document.getElementById(id); if (el) el.scrollIntoView({ block: "start" });
      });
    });
  }

  /* ------------------------------------------------------------------ EXTRAS */
  function pintarExtras() {
    $("#extrasLista").innerHTML = '<ul class="ejs">' + C.extras.map(function (x, i) {
      return '<li class="ej"><span class="ej__n">X' + ("0" + (i + 1)).slice(-2) + '</span><span class="ej__t"><b>' + esc(tx(x.titulo)) +
        '</b><span class="ej__desc">' + esc(tx(x.desc)) + "</span></span></li>";
    }).join("") + '</ul><div class="acciones">' + enlace(L.extras, t("abrirExtra"), "boton--lleno") + "</div>";
  }

  /* ------------------------------------------------------------- REQUISITOS */
  function pintarRequisitos() {
    $("#reqLista").innerHTML = (C.requisitos || []).map(function (r) {
      return '<div class="req' + (r.obligatorio ? " req--si" : "") + '">' +
        '<span class="req__tipo">' + esc(t(r.obligatorio ? "obligatorio" : "opcional")) + "</span>" +
        '<span class="req__nom">' + esc(r.nombre) + "</span>" +
        '<span class="req__para">' + esc(tx(r.para)) + "</span>" +
        (url(r.url) ? '<a class="req__ir" href="' + url(r.url) + '" target="_blank" rel="noopener">' + esc(t(r.web ? "abrirWeb" : "descargar")) + "</a>" : "") +
        "</div>";
    }).join("");
  }

  /* -------------------------------------------------------------- PINTAR TODO */
  function pintarFijos() {
    document.documentElement.lang = estado.idioma;
    document.title = tx(C.meta.titulo) + " · " + C.meta.lugar;
    $$("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
    $$("[data-idioma]").forEach(function (b) { b.classList.toggle("activo", b.getAttribute("data-idioma") === estado.idioma); });

    $("#heroTitulo").innerHTML = esc(tx(C.meta.titulo)).replace(/^IA\b/, "<em>IA</em>");
    var sit = situacion(), f = sit.foco;
    $("#heroAnte").textContent = C.meta.lugar + " · " + (!f ? t("anteFin") : sit.porSesion[f.id] === "hoy" ? t("anteHoy") : t("anteProx") + " · " + t("dias")[fecha(f.fecha).getDay()] + " " + corta(f.fecha));

    var s = C.sesiones;
    $("#heroDatos").innerHTML = [
      [t("dSesiones"), ("0" + s.length).slice(-2)],
      [t("dFechas"), corta(s[0].fecha) + " – " + corta(s[s.length - 1].fecha)],
      [t("dModulos"), ("0" + C.modulos.length).slice(-2)],
      [t("dEjercicios"), ("0" + C.ejercicios.length).slice(-2)]
    ].map(function (p) { return "<div><dt>" + esc(p[0]) + "</dt><dd>" + esc(p[1]) + "</dd></div>"; }).join("");

    var li = [];
    if (url(L.general)) li.push('<li><a href="' + url(L.general) + '" target="_blank" rel="noopener">' + esc(t("driveGeneral")) + " ↗</a></li>");
    if (url(C.meta.repo)) li.push('<li><a href="' + url(C.meta.repo) + '" target="_blank" rel="noopener">' + esc(t("repo")) + " ↗</a></li>");
    if (L.contacto) li.push('<li><a href="' + (L.contacto.indexOf("@") > 0 && !/^mailto:/.test(L.contacto) ? "mailto:" : "") + esc(L.contacto) + '">' + esc(t("contacto")) + "</a></li>");
    $("#pieEnlaces").innerHTML = "<h3>" + esc(t("enlaces")) + "</h3><ul>" + li.join("") + "</ul>";
  }

  function pintarVista() {
    var d = estado.vista === "dias";
    $("#cursoCod").textContent = t(d ? "diasCod" : "itinCod");
    $("#cursoTitulo").textContent = t(d ? "diasTitulo" : "itinTitulo");
    $("#cursoSub").textContent = t(d ? "diasSub" : "itinSub");
    $("#desplegableTxt").textContent = t(d ? "porDias" : "porItinerario");
    $$("[data-vista]").forEach(function (b) {
      var on = b.getAttribute("data-vista") === estado.vista;
      b.classList.toggle("activo", on); if (b.tagName === "LI") b.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (d) pintarDias(); else pintarItinerario();
    observar();
  }

  function ponerVista(v) { estado.vista = v; guardar("aecai.vista", v); pintarVista(); }
  function ponerIdioma(i) { estado.idioma = i; guardar("aecai.idioma", i); pintarFijos(); pintarRequisitos(); pintarVista(); pintarExtras(); observar(); }

  /* ---------------------------------------------------- APARICIÓN CON SCROLL */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("dentro"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function observar() { $$(".aparece:not(.dentro)").forEach(function (el) { if (io) io.observe(el); else el.classList.add("dentro"); }); }

  /* ----------------------------------------------------------------- EVENTOS */
  function eventos() {
    var dd = $("#desplegable"), btn = $("#desplegableBtn");
    function cerrar() { dd.classList.remove("abierto"); btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function (e) { e.stopPropagation(); var a = dd.classList.toggle("abierto"); btn.setAttribute("aria-expanded", a ? "true" : "false"); });
    document.addEventListener("click", cerrar);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrar(); });

    $$("[data-vista]").forEach(function (b) {
      b.addEventListener("click", function () {
        ponerVista(b.getAttribute("data-vista"));
        cerrar();
        $("#curso").scrollIntoView({ block: "start" });
      });
    });
    $$("[data-idioma]").forEach(function (b) { b.addEventListener("click", function () { ponerIdioma(b.getAttribute("data-idioma")); }); });

    var barra = $("#barra"), hero = $("#inicio");
    function alScroll() { barra.classList.toggle("visible", window.scrollY > hero.offsetHeight - 120); }
    window.addEventListener("scroll", alScroll, { passive: true }); alScroll();
  }

  /* ==========================================================================
     HERO: rejilla de plano + celosía Pratt con pulsos que recorren las barras.
     ========================================================================== */
  function lienzo() {
    var cv = $("#lienzo"); if (!cv || !cv.getContext) return;
    var ctx = cv.getContext("2d"), W = 0, H = 0, nodos = [], barras = [], vecinos = [], pulsos = [], destellos = [];
    var quieto = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var visible = true, t0 = performance.now(), geo = null;

    function montar() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Escritorio: a la derecha, bajo el título. Pantallas medias: junto al título. Móvil: detrás, muy tenue.
      var movil = W < 760, medio = !movil && W < 1100, n = movil ? 6 : 8;
      var luz = movil ? W * 0.92 : medio ? W * 0.5 : W * 0.43, x0 = movil ? W * 0.04 : medio ? W * 0.47 : W * 0.54;
      var p = luz / n, alto = p * 0.92, yb = movil ? H * 0.4 : medio ? H * 0.45 : H * 0.62;
      geo = { x0: x0, yb: yb, luz: luz, alto: alto, alfa: movil ? 0.3 : medio ? 0.75 : 1 };
      nodos = []; barras = [];
      var inf = [], sup = [], i;
      for (i = 0; i <= n; i++) { inf.push(nodos.length); nodos.push({ x: x0 + i * p, y: yb }); }
      for (i = 1; i < n; i++) { sup[i] = nodos.length; nodos.push({ x: x0 + i * p, y: yb - alto }); }
      for (i = 0; i < n; i++) barras.push([inf[i], inf[i + 1], 1]);
      for (i = 1; i < n - 1; i++) barras.push([sup[i], sup[i + 1], 1]);
      barras.push([inf[0], sup[1], 1], [sup[n - 1], inf[n], 1]);
      for (i = 1; i < n; i++) barras.push([inf[i], sup[i], 0]);
      for (i = 1; i < n / 2; i++) { barras.push([sup[i], inf[i + 1], 0]); barras.push([sup[n - i], inf[n - i - 1], 0]); }
      vecinos = nodos.map(function () { return []; });
      barras.forEach(function (b) { vecinos[b[0]].push(b[1]); vecinos[b[1]].push(b[0]); });
      pulsos = []; destellos = [];
      for (i = 0; i < (movil ? 5 : 9); i++) {
        var a = Math.floor(Math.random() * nodos.length);
        pulsos.push({ a: a, b: vecinos[a][Math.floor(Math.random() * vecinos[a].length)], k: Math.random(), v: 0.006 + Math.random() * 0.008 });
      }
    }

    function rejilla() {
      var paso = 32, x, y;
      ctx.lineWidth = 1;
      for (x = 0.5; x < W; x += paso) { ctx.strokeStyle = (Math.round(x / paso) % 5 === 0) ? "rgba(120,140,160,.13)" : "rgba(120,140,160,.05)"; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (y = 0.5; y < H; y += paso) { ctx.strokeStyle = (Math.round(y / paso) % 5 === 0) ? "rgba(120,140,160,.13)" : "rgba(120,140,160,.05)"; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    }

    function cota() {
      var g = geo, y = g.yb + 46, x1 = g.x0, x2 = g.x0 + g.luz;
      ctx.strokeStyle = "rgba(255,179,107,.45)"; ctx.fillStyle = "rgba(255,179,107,.7)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y);
      ctx.moveTo(x1, y - 7); ctx.lineTo(x1, y + 7); ctx.moveTo(x2, y - 7); ctx.lineTo(x2, y + 7);
      ctx.moveTo(x1 - 4, y + 4); ctx.lineTo(x1 + 4, y - 4); ctx.moveTo(x2 - 4, y + 4); ctx.lineTo(x2 + 4, y - 4); ctx.stroke();
      ctx.font = "500 11px 'JetBrains Mono', monospace"; ctx.textAlign = "center";
      ctx.fillText("L = 48,00 m", (x1 + x2) / 2, y - 8);
      // apoyos
      [x1, x2].forEach(function (x, i) {
        ctx.strokeStyle = "rgba(200,210,220,.5)"; ctx.beginPath(); ctx.moveTo(x, g.yb + 4); ctx.lineTo(x - 10, g.yb + 20); ctx.lineTo(x + 10, g.yb + 20); ctx.closePath(); ctx.stroke();
        if (i) { ctx.beginPath(); ctx.moveTo(x - 12, g.yb + 25); ctx.lineTo(x + 12, g.yb + 25); ctx.stroke(); }
      });
    }

    function cuadro(ahora) {
      var prog = quieto ? 1 : Math.min(1, (ahora - t0) / 2200);
      ctx.clearRect(0, 0, W, H);
      rejilla();
      ctx.globalAlpha = geo.alfa;

      barras.forEach(function (b, i) {
        var k = Math.max(0, Math.min(1, prog * barras.length / 6 - i / 6 * 0.9));
        if (k <= 0) return;
        var A = nodos[b[0]], B = nodos[b[1]];
        ctx.strokeStyle = b[2] ? "rgba(214,222,230,.62)" : "rgba(170,182,194,.36)"; ctx.lineWidth = b[2] ? 2 : 1.25;
        ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(A.x + (B.x - A.x) * k, A.y + (B.y - A.y) * k); ctx.stroke();
      });
      if (prog >= 1) cota();

      if (prog >= 1 && !quieto) {
        pulsos.forEach(function (p) {
          p.k += p.v;
          if (p.k >= 1) {
            destellos.push({ n: p.b, e: 1 });
            var op = vecinos[p.b].filter(function (n) { return n !== p.a; }), sig = op[Math.floor(Math.random() * op.length)];
            p.a = p.b; p.b = sig === undefined ? vecinos[p.a][0] : sig; p.k = 0;
          }
          var A = nodos[p.a], B = nodos[p.b], x = A.x + (B.x - A.x) * p.k, y = A.y + (B.y - A.y) * p.k;
          var k0 = Math.max(0, p.k - 0.28), gx = A.x + (B.x - A.x) * k0, gy = A.y + (B.y - A.y) * k0;
          var gr = ctx.createLinearGradient(gx, gy, x, y); gr.addColorStop(0, "rgba(255,106,19,0)"); gr.addColorStop(1, "rgba(255,106,19,.95)");
          ctx.strokeStyle = gr; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(x, y); ctx.stroke();
          ctx.fillStyle = "#ffd2ad"; ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 6.3); ctx.fill();
        });
      }

      destellos = destellos.filter(function (d) { return (d.e -= 0.035) > 0; });
      destellos.forEach(function (d) {
        var N = nodos[d.n]; ctx.strokeStyle = "rgba(255,106,19," + d.e * 0.8 + ")"; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(N.x, N.y, 4 + (1 - d.e) * 16, 0, 6.3); ctx.stroke();
      });
      if (prog > 0.5) nodos.forEach(function (N) {
        ctx.fillStyle = "#0d1013"; ctx.strokeStyle = "rgba(225,232,238,.8)"; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(N.x, N.y, 3.5, 0, 6.3); ctx.fill(); ctx.stroke();
      });

      ctx.globalAlpha = 1;
      if (!quieto && visible) requestAnimationFrame(cuadro);
    }

    montar();
    requestAnimationFrame(cuadro);
    var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { montar(); if (quieto || !visible) cuadro(performance.now()); }, 120); });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) {
      var v = e[0].isIntersecting; if (v && !visible) { visible = true; requestAnimationFrame(cuadro); } else visible = v;
    }).observe(cv);
  }

  /* ------------------------------------------------------------------ INICIO */
  revisar(); pintarFijos(); pintarRequisitos(); pintarVista(); pintarExtras(); observar(); eventos(); lienzo();
  if (hash === "itinerario" || hash === "dias") setTimeout(function () { $("#curso").scrollIntoView({ block: "start" }); }, 60);
})();
