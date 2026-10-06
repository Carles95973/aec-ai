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
      intro: "Seis sesiones para pasar de «la IA no me funciona» a procesos de oficina técnica fiables: modelos, contexto, agentes, automatización y gobernanza. Aquí tienes el temario, el material de cada sesión, los ejemplos y los ejercicios.",
      entrar: "Ver el temario", itinNav: "Temario", ejemNav: "Ejemplos",
      extras: "Artefactos",
      nou: "Nuevo", nouTxt: "Ejercicios prácticos", practNav: "Prácticas",
      practCod: "03 · PRÁCTICAS", practTitulo: "Ejercicios prácticos", practSub: "Un ejercicio por equipos cada semana. Abre cada semana para ver el enunciado.",
      semana: "Semana", expediente: "El expediente", entregable: "El entregable", reglas: "Las reglas del juego", carpetaExp: "Expediente en Drive",
      ejemCod: "02 · EJEMPLOS", ejemTitulo: "Ejemplos de clase", ejemSub: "Los ejemplos que hemos hecho en clase, todos en una carpeta de Drive.", ejemBoton: "Carpeta de ejemplos",
      material: "Material de las sesiones", carpetaC: "Carpeta",
      fEquipos: "Equipos", fCasos: "Casos", unCaso: "uno por equipo", fCuando: "Cuándo", primerDia: "Primera sesión", herramientas: "Herramientas",
      ruta: "Ruta", equipoDe: "Equipos de", escenario: "Escenario", criterios: "Criterios de éxito", tareas: "Tareas", verDetalle: "Criterios de éxito y tareas", carpetaPract: "Carpeta de prácticas",
      reqCod: "00 · ANTES DE EMPEZAR", reqTitulo: "Qué hay que instalar", reqSub: "Tenlo listo antes de la primera sesión.",
      obligatorio: "Imprescindible", opcional: "Opcional", descargar: "Descargar ↗", abrirWeb: "Abrir ↗",
      opcionales: "Opcionales", opcionalesTxt: "Solo para algunos ejercicios y los artefactos extra",
      itinCod: "01 · ITINERARIO", itinTitulo: "El temario", itinSub: "Cuatro módulos. Cada uno con el material de sus sesiones, sus bloques y sus ejercicios.",
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
      intro: "Sis sessions per passar de «la IA no em funciona» a processos d’oficina tècnica fiables: models, context, agents, automatització i governança. Aquí tens el temari, el material de cada sessió, els exemples i els exercicis.",
      entrar: "Veure el temari", itinNav: "Temari", ejemNav: "Exemples",
      extras: "Artefactes",
      nou: "Nou", nouTxt: "Exercicis pràctics", practNav: "Pràctiques",
      practCod: "03 · PRÀCTIQUES", practTitulo: "Exercicis pràctics", practSub: "Un exercici per equips cada setmana. Obre cada setmana per veure’n l’enunciat.",
      semana: "Setmana", expediente: "L’expedient", entregable: "El lliurable", reglas: "Les regles del joc", carpetaExp: "Expedient a Drive",
      ejemCod: "02 · EXEMPLES", ejemTitulo: "Exemples de classe", ejemSub: "Els exemples que hem fet a classe, tots en una carpeta de Drive.", ejemBoton: "Carpeta d’exemples",
      material: "Material de les sessions", carpetaC: "Carpeta",
      fEquipos: "Equips", fCasos: "Casos", unCaso: "un per equip", fCuando: "Quan", primerDia: "Primera sessió", herramientas: "Eines",
      ruta: "Ruta", equipoDe: "Equips de", escenario: "Escenari", criterios: "Criteris d’èxit", tareas: "Tasques", verDetalle: "Criteris d’èxit i tasques", carpetaPract: "Carpeta de pràctiques",
      reqCod: "00 · ABANS DE COMENÇAR", reqTitulo: "Què cal instal·lar", reqSub: "Tingues-ho a punt abans de la primera sessió.",
      obligatorio: "Imprescindible", opcional: "Opcional", descargar: "Descarregar ↗", abrirWeb: "Obrir ↗",
      opcionales: "Opcionals", opcionalesTxt: "Només per a alguns exercicis i els artefactes extra",
      itinCod: "01 · ITINERARI", itinTitulo: "El temari", itinSub: "Quatre mòduls. Cadascun amb el material de les seves sessions, els seus blocs i els seus exercicis.",
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
    idioma: leer("aecai.idioma") || "ca"   // català per defecte
  };

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
    ["extras", "ejemplos"].forEach(function (k) { if (L[k] !== undefined && typeof L[k] !== "string") fallos.push("enlaces.js → " + k + " ha de ser una URL entre comillas"); });
    var sem = {}; ((C.practicas && C.practicas.semanas) || []).forEach(function (w) { sem[w.id] = 1; });
    Object.keys(L.practicas || {}).forEach(function (k) { if (!sem[k]) fallos.push("enlaces.js → practicas." + k + " no existe en curso.js"); });
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

  /* -------------------------------------------------------------- ITINERARIO */
  function miniEnlace(u, texto) {
    var h = url(u);
    return h ? '<a href="' + h + '" target="_blank" rel="noopener">' + esc(texto) + " ↗</a>" : '<span class="pend" title="' + esc(t("pendiente")) + '">' + esc(texto) + "</span>";
  }
  function filaSesion(s, sit) {
    var d = fecha(s.fecha), hoy = sit.porSesion[s.id] === "hoy";
    return '<li class="ej ses' + (hoy ? " ses--hoy" : "") + '"><span class="ej__n">S' + s.id.slice(1) + '</span><span class="ej__t">' + esc(tx(s.titulo)) +
      '<span class="ej__sesion">' + esc(t("dias")[d.getDay()]) + " " + esc(corta(s.fecha)) + (s.horario ? " · " + esc(s.horario) : "") +
      (hoy ? ' · <b class="ses__hoy">' + esc(t("hoy")) + "</b>" : "") + '</span></span><span class="ses__acc">' +
      miniEnlace(lnkSesion(s.id, "presentacion"), t("presentacion")) + miniEnlace(lnkSesion(s.id, "carpeta"), t("carpetaC")) + "</span></li>";
  }
  function pintarItinerario() {
    var sit = situacion();
    var html = C.modulos.map(function (m) {
      var ejs = C.ejercicios.filter(function (e) { return e.modulo === m.id; });
      var propias = C.sesiones.filter(function (s) { return s.modulo === m.id; });
      var ids = C.sesiones.filter(function (s) { return s.modulo === m.id || ejs.some(function (e) { return e.sesion === s.id; }); });
      return '<article class="modulo aparece" data-mod="' + m.id + '" id="' + m.id + '">' +
        '<div class="modulo__lado"><div><span class="cod">' + esc(t("modulo")) + '</span><div class="modulo__num">0' + numMod(m.id) + "</div></div>" +
        '<div class="modulo__fechas">' + ids.map(function (s) { return "<span>S" + s.id.slice(1) + " · " + esc(corta(s.fecha)) + "</span>"; }).join("") + "</div></div>" +
        '<div class="modulo__cuerpo"><h3 class="modulo__titulo">' + esc(tx(m.titulo)) + "</h3>" +
        (propias.length ? '<h4 class="rotulo">' + esc(t("material")) + '</h4><ul class="ejs">' + propias.map(function (s) { return filaSesion(s, sit); }).join("") + "</ul>" : "") +
        '<h4 class="rotulo">' + esc(t("temas")) + '</h4><ul class="temas">' + m.bloques.map(function (b) { return "<li>" + esc(tx(b)) + "</li>"; }).join("") + "</ul>" +
        (ejs.length ? '<h4 class="rotulo">' + esc(t("ejercicios")) + '</h4><ul class="ejs">' + ejs.map(function (e) { return filaEj(e, true); }).join("") + "</ul>" : "") +
        (m.recursos && m.recursos.length ? '<h4 class="rotulo">' + esc(t("recursos")) + '</h4><div class="recursos">' +
          m.recursos.map(function (r) { return '<a href="' + url(r.url) + '" target="_blank" rel="noopener">' + esc(r.nombre) + " ↗</a>"; }).join("") + "</div>" : "") +
        "</div></article>";
    }).join("");
    $("#vista").innerHTML = '<div class="itin">' + html + "</div>";
  }

  /* ---------------------------------------------------------------- EJEMPLOS */
  function pintarEjemplos() {
    $("#ejemLista").innerHTML = '<div class="acciones">' + enlace(L.ejemplos, t("ejemBoton"), "boton--lleno") + "</div>";
  }

  /* ------------------------------------------------------------------ EXTRAS */
  function pintarExtras() {
    $("#extrasLista").innerHTML = '<ul class="ejs">' + C.extras.map(function (x, i) {
      return '<li class="ej"><span class="ej__n">X' + ("0" + (i + 1)).slice(-2) + '</span><span class="ej__t"><b>' + esc(tx(x.titulo)) +
        '</b><span class="ej__desc">' + esc(tx(x.desc)) + "</span></span></li>";
    }).join("") + '</ul><div class="acciones">' + enlace(L.extras, t("abrirExtra"), "boton--lleno") + "</div>";
  }

  /* ------------------------------------------------------------- REQUISITOS */
  var opcAbiertos = false;   // el desplegable de opcionales, cerrado hasta que el alumno lo toca
  function celdaReq(r) {
    return '<div class="req' + (r.obligatorio ? " req--si" : "") + '">' +
      '<span class="req__tipo">' + esc(t(r.obligatorio ? "obligatorio" : "opcional")) + "</span>" +
      '<span class="req__nom">' + esc(r.nombre) + "</span>" +
      '<span class="req__para">' + esc(tx(r.para)) + "</span>" +
      (url(r.url) ? '<a class="req__ir" href="' + url(r.url) + '" target="_blank" rel="noopener">' + esc(t(r.web ? "abrirWeb" : "descargar")) + "</a>" : "") +
      "</div>";
  }
  function pintarRequisitos() {
    var R = C.requisitos || [];
    var si = R.filter(function (r) { return r.obligatorio; }), no = R.filter(function (r) { return !r.obligatorio; });
    $("#reqLista").innerHTML =
      '<div class="reqs" style="--n:' + si.length + '">' + si.map(celdaReq).join("") + "</div>" +
      (no.length ? '<details class="opc"' + (opcAbiertos ? " open" : "") + '><summary><span class="opc__mas" aria-hidden="true">+</span>' +
        '<span class="opc__tit">' + esc(t("opcionales")) + " (" + no.length + ")</span>" +
        '<span class="opc__txt">' + esc(t("opcionalesTxt")) + "</span></summary>" +
        '<div class="reqs reqs--opc" style="--n:' + no.length + '">' + no.map(celdaReq).join("") + "</div></details>" : "");
    var d = $("#reqLista .opc");
    if (d) d.addEventListener("toggle", function () { opcAbiertos = d.open; });
  }

  /* ------------------------------------------------------ EXERCICIS PRÀCTICS */
  var casosAbiertos = {};   // detalle de cada caso: plegado hasta que se toca
  var semAbiertas = {};     // cajas de semana que el alumno ha abierto o cerrado
  function minutos(m) { return m % 60 ? (m >= 60 ? Math.floor(m / 60) + " h " + (m % 60) + " min" : m + " min") : (m / 60) + " h"; }
  function lista(items, ord) { var tag = ord ? "ol" : "ul"; return "<" + tag + ' class="' + (ord ? "tareas" : "temas") + '">' + items.map(function (x) { return "<li>" + esc(tx(x)) + "</li>"; }).join("") + "</" + tag + ">"; }
  function datosDl(filas, clase) {
    return '<dl class="prac-datos ' + (clase || "") + '">' + filas.map(function (p) {
      return "<div" + (p[2] ? ' class="dest"' : "") + "><dt>" + esc(p[0]) + "</dt><dd>" + esc(p[1]) + "</dd></div>";
    }).join("") + "</dl>";
  }
  function enlacePract(id) { return (L.practicas && typeof L.practicas === "object") ? (L.practicas[id] || "") : ""; }

  function cuerpoRutas(w) {
    var ses = C.sesiones.filter(function (x) { return x.id === w.inicio; })[0] || C.sesiones[0], sN = C.sesiones[C.sesiones.length - 1];
    var nCasos = 0; w.niveles.forEach(function (n) { n.rutas.forEach(function (r) { nCasos += r.casos.length; }); });
    var total = w.primerDia.reduce(function (a, b) { return a + b.min; }, 0);
    var datos = datosDl([[t("fEquipos"), tx(w.equipos)], [t("fCasos"), nCasos + " · " + t("unCaso")], [t("fCuando"), corta(ses.fecha)]]);
    var hoja = '<div class="roadmap"><div class="roadmap__cab"><span class="rotulo-s">' + esc(t("primerDia")) + " · " +
      esc(t("dias")[fecha(ses.fecha).getDay()]) + " " + esc(corta(ses.fecha)) + '</span><span class="roadmap__total">' + esc(minutos(total)) + "</span></div>" +
      '<div class="roadmap__barra">' + w.primerDia.map(function (b, k) {
        return '<div class="roadmap__tramo" style="flex:' + b.min + ";--p:" + (b.min / total * 100).toFixed(1) + '%"><span class="roadmap__min">' +
          ("0" + (k + 1)).slice(-2) + " · " + esc(minutos(b.min)) + "</span><b>" + esc(tx(b.titulo)) + "</b><span>" + esc(tx(b.desc)) + "</span></div>";
      }).join("") + '</div><p class="roadmap__nota">' + esc(tx(w.nota)) + "</p></div>";
    function caso(c) {
      return '<article class="cas"><div class="cas__cab"><span class="cas__id">' + esc(c.id) + "</span><h5>" + esc(tx(c.titulo)) + "</h5></div>" +
        '<p class="cas__esc"><span class="cas__etq">' + esc(t("escenario")) + "</span>" + esc(tx(c.escenario)) + "</p>" +
        '<details class="cas__det" data-caso="' + esc(c.id) + '"' + (casosAbiertos[c.id] ? " open" : "") + '><summary><span class="opc__mas" aria-hidden="true">+</span>' + esc(t("verDetalle")) + "</summary>" +
        '<div class="cas__cols"><div><h6 class="rotulo">' + esc(t("criterios")) + "</h6>" + lista(c.criterios) + "</div>" +
        '<div><h6 class="rotulo">' + esc(t("tareas")) + "</h6>" + lista(c.tareas, true) + "</div></div></details></article>";
    }
    var niveles = w.niveles.map(function (n) {
      return '<div class="nivel nivel--' + esc(n.id) + '"><div class="nivel__cab"><h3>' + esc(tx(n.titulo)) + '</h3><div class="nivel__eines"><span class="cod">' +
        esc(t("herramientas")) + "</span>" + n.herramientas.map(function (h) { return '<span class="chapa">' + esc(h) + "</span>"; }).join("") + "</div></div>" +
        n.rutas.map(function (r) {
          return '<section class="ruta"><div class="ruta__cab"><span class="ruta__n">' + esc(t("ruta")) + " " + r.n + "</span><h4>" + esc(tx(r.titulo)) +
            '</h4><span class="chapa">' + esc(t("equipoDe")) + " " + esc(r.equipo) + "</span></div>" +
            '<div class="casos">' + r.casos.map(caso).join("") + "</div></section>";
        }).join("") + "</div>";
    }).join("");
    return datos + hoja + niveles + '<div class="acciones">' + enlace(enlacePract(w.id), t("carpetaPract"), "boton--lleno") + "</div>";
  }

  function cuerpoCaso(w) {
    return '<div class="exp"><p class="exp__lema">' + esc(tx(w.lema)) + "</p>" +
      datosDl(w.cifras.map(function (c) { return [tx(c.etq), c.valor, c.destacar]; }), "prac-datos--cifras") +
      '<div class="exp__relato">' + w.relato.map(function (p) { return "<p>" + esc(tx(p)) + "</p>"; }).join("") +
      '<p class="exp__golpe">' + esc(tx(w.golpe)) + "</p></div>" +
      '<div class="exp__cols">' +
        '<div><h6 class="rotulo">' + esc(t("expediente")) + '</h6><p class="exp__intro">' + esc(tx(w.expediente.intro)) + "</p>" + lista(w.expediente.items) +
          '<p class="exp__nota">' + esc(tx(w.expediente.nota)) + "</p></div>" +
        '<div><h6 class="rotulo">' + esc(t("entregable")) + "</h6>" + lista(w.entregable, true) + "</div>" +
        '<div><h6 class="rotulo">' + esc(t("reglas")) + "</h6>" + lista(w.reglas, true) + "</div>" +
      "</div>" +
      '<div class="acciones">' + enlace(enlacePract(w.id), t("carpetaExp"), "boton--lleno") + "</div></div>";
  }

  function pintarPracticas() {
    var P = C.practicas, sec = $("#practicas");
    if (!P || !P.semanas) { sec.hidden = true; return; }
    $("#practLista").innerHTML = P.semanas.map(function (w) {
      var abierta = (w.id in semAbiertas) ? semAbiertas[w.id] : w.abierta;
      var fechas = (w.sesiones || []).map(function (id) { var x = C.sesiones.filter(function (y) { return y.id === id; })[0]; return x ? corta(x.fecha) : ""; }).filter(Boolean).join(" · ");
      return '<details class="semana semana--' + esc(w.tipo) + '" id="' + esc(w.id) + '" data-sem="' + esc(w.id) + '"' + (abierta ? " open" : "") + ">" +
        '<summary class="semana__cab"><span class="semana__n">' + esc(t("semana")) + " " + w.n + '</span><span class="semana__tit">' + esc(tx(w.titulo)) + '</span><span class="semana__fechas">' + esc(fechas) + '</span><span class="ficha__mas" aria-hidden="true">+</span></summary>' +
        '<div class="semana__cuerpo">' + (w.tipo === "caso" ? cuerpoCaso(w) : cuerpoRutas(w)) + "</div></details>";
    }).join("");
    $$("#practLista .semana").forEach(function (d) { d.addEventListener("toggle", function () { semAbiertas[d.getAttribute("data-sem")] = d.open; }); });
    $$("#practLista .cas__det").forEach(function (d) { d.addEventListener("toggle", function () { casosAbiertos[d.getAttribute("data-caso")] = d.open; }); });
    $$(".nou").forEach(function (a) { a.hidden = !P.nou; });
    if (P.nouTxt) $$(".nou__txt").forEach(function (el) { el.textContent = tx(P.nouTxt); });
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

  function pintarVista() { pintarItinerario(); observar(); }

  function ponerIdioma(i) { estado.idioma = i; guardar("aecai.idioma", i); pintarFijos(); pintarRequisitos(); pintarVista(); pintarEjemplos(); pintarPracticas(); pintarExtras(); observar(); }

  /* ---------------------------------------------------- APARICIÓN CON SCROLL */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("dentro"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function observar() { $$(".aparece:not(.dentro)").forEach(function (el) { if (io) io.observe(el); else el.classList.add("dentro"); }); }

  /* ----------------------------------------------------------------- EVENTOS */
  function eventos() {
    $$(".nou").forEach(function (a) {
      a.addEventListener("click", function () {
        var id = C.practicas && C.practicas.nouSemana, d = id && document.getElementById(id);
        if (d) { d.open = true; semAbiertas[id] = true; }
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
  revisar(); pintarFijos(); pintarRequisitos(); pintarVista(); pintarEjemplos(); pintarPracticas(); pintarExtras(); observar(); eventos(); lienzo();
  if (hash === "itinerario" || hash === "dias") setTimeout(function () { $("#curso").scrollIntoView({ block: "start" }); }, 60);
})();
