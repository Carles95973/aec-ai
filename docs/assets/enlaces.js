/* ==========================================================================
   ENLACES — el fichero del día a día.

   Aquí y solo aquí se pegan las URL de Drive y se desbloquean los extras.
   El contenido (títulos, resúmenes, temario) está en `curso.js` y no hace
   falta tocarlo para publicar material.

   CÓMO SE USA
   1. Pega la URL entre las comillas:  carpeta: "https://drive.google.com/..."
   2. Guarda el fichero y haz push. En un par de minutos está en la web.
   Lo que se quede vacío ("") sale en la web como «Próximamente».

   AVISO: esto NO es un .env con secretos. La web es pública y este fichero
   se descarga con ella, así que cualquier enlace que pegues aquí es visible.
   Comparte las carpetas de Drive con «cualquiera con el enlace» y no pongas
   aquí nada que no quieras que vean los alumnos.
   ========================================================================== */

window.ENLACES = {

  /* --- General ------------------------------------------------------------
     `general`  : carpeta raíz del curso en Drive (sale en el pie).
     `contacto` : correo o URL para dudas (sale en el pie). Vacío = no sale. */
  general:  "",
  contacto: "",

  /* --- Sesiones -----------------------------------------------------------
     Una entrada por día de clase. `presentacion` es el PDF o las diapos;
     `carpeta`, la carpeta de Drive de esa sesión.
     s01 · 22 sep  ·  s02 · 24 sep  ·  s03 · 28 sep
     s04 ·  1 oct  ·  s05 ·  6 oct  ·  s06 ·  8 oct                          */
  sesiones: {
    s01: { presentacion: "", carpeta: "" },
    s02: { presentacion: "", carpeta: "" },
    s03: { presentacion: "", carpeta: "" },
    s04: { presentacion: "", carpeta: "" },
    s05: { presentacion: "", carpeta: "" },
    s06: { presentacion: "", carpeta: "" }
  },

  /* --- Ejercicios ---------------------------------------------------------
     Por número de ejercicio, del 1 al 19. El título de cada uno está en
     `curso.js`; aquí solo va su carpeta o documento en Drive.               */
  ejercicios: {
    1:  "",   // Herramientas comerciales básicas: ChatGPT y Claude
    2:  "",   // Funciones de generación con ChatGPT
    3:  "",   // Sistemas agénticos: Work, Cowork y Claude Code
    4:  "",   // Tarea resuelta a partir de specs: comparativa de cubierta
    5:  "",   // Una skill y su procedimiento
    6:  "",   // Informe de visita: prompt rápido vs. prompt + spec + skill
    7:  "",   // Introducción a NotebookLM
    8:  "",   // Gestión del contexto en Claude
    9:  "",   // Catálogo de conocimiento con Obsidian
    10: "",   // Servicio RAG para normativa
    11: "",   // Artefacto de cálculo rápido en obra
    12: "",   // Skill e informe semanal automatizado
    13: "",   // Conexión móvil ↔ escritorio con «Despacho»
    14: "",   // Integración con herramientas ofimáticas
    15: "",   // Integrar todos los procesos anteriores
    16: "",   // Servicios a través de MCP
    17: "",   // Evaluar el sistema
    18: "",   // Ataque al sistema
    19: ""    // Plan y materialización de la seguridad
  },

  /* --- Extras wow: enlaces ------------------------------------------------
     Pegar el enlace NO destapa la tarjeta: eso se hace en `abiertos`, abajo. */
  extras: {
    presupuestos: "",
    puente:       "",
    muro:         "",
    planos:       "",
    normativa:    "",
    ancla:        "",
    plataforma:   ""
  },

  /* --- Extras wow: cuáles se destapan -------------------------------------
     Mientras un extra no esté en esta lista, su tarjeta sale como
     «Clasificado», sin título ni descripción. Para destapar uno en clase,
     añade su id entre comillas, separado por comas. Por ejemplo:

        abiertos: ["puente", "muro"],

     Ids disponibles: presupuestos, puente, muro, planos, normativa, ancla,
     plataforma.                                                             */
  abiertos: []
};
