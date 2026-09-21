/* ==========================================================================
   CONTENIDO DEL CURSO — títulos, resúmenes, temario y ejercicios.

   Los ENLACES DE DRIVE NO están aquí: van en `enlaces.js`, que es el fichero
   del día a día. Este solo se toca para cambiar textos, fechas o el reparto
   de ejercicios por sesión.

   · Todos los textos van en los dos idiomas: { es: "...", ca: "..." }.
   · Cada ejercicio indica su `modulo` (vista itinerario) y su `sesion`
     (vista por días). Para mover un ejercicio de día, cambia `sesion`.
   · `fecha` en formato AAAA-MM-DD. La web resalta sola la sesión de hoy.
   · Los `id` de las sesiones (s01…s06) son los que enlazan con
     `enlaces.js`: si cambias uno, cámbialo allí.
   · `requisitos`: lo que hay que instalar, con su enlace de descarga.
   ========================================================================== */

window.CURSO = {

  meta: {
    titulo:    { es: "IA aplicada al día a día de la ingeniería", ca: "IA aplicada al dia a dia de l’enginyeria" },
    lugar:     "CETILL",
    autor:     "Carles Farré",
    repo:      "https://github.com/Carles95973/aec-ai"
  },

  /* ------------------------------------------------------------- REQUISITOS
     Lo que hay que tener instalado antes de empezar. Los `obligatorio: true`
     se ven siempre; los `false` quedan plegados en «Opcionals».              */
  requisitos: [
    { nombre: "Claude Desktop",  obligatorio: true,  url: "https://claude.ai/download",
      para: { es: "Chat, Cowork y Claude Code · plan de pago", ca: "Xat, Cowork i Claude Code · pla de pagament" } },
    { nombre: "ChatGPT Desktop", obligatorio: true,  url: "https://openai.com/chatgpt/download/",
      para: { es: "Chat, Work y generación · plan de pago",   ca: "Xat, Work i generació · pla de pagament" } },
    { nombre: "Obsidian",        obligatorio: true,  url: "https://obsidian.md/download",
      para: { es: "Catálogo de conocimiento · módulo 2",       ca: "Catàleg de coneixement · mòdul 2" } },
    { nombre: "VS Code",         obligatorio: false, url: "https://code.visualstudio.com/download",
      para: { es: "Editar skills, specs y Markdown",           ca: "Editar skills, specs i Markdown" } },
    { nombre: "Git",             obligatorio: false, url: "https://git-scm.com/downloads",
      para: { es: "Versionar skills y specs · módulo 2",       ca: "Versionar skills i specs · mòdul 2" } },
    { nombre: "Node.js",         obligatorio: false, url: "https://nodejs.org/en/download",
      para: { es: "Abrir los artefactos extra",                ca: "Obrir els artefactes extra" } },
    { nombre: "Python",          obligatorio: false, url: "https://www.python.org/downloads/",
      para: { es: "Servidor MCP del ejercicio RAG",            ca: "Servidor MCP de l’exercici RAG" } },
    { nombre: "Blender",         obligatorio: false, url: "https://www.blender.org/download/",
      para: { es: "Artefacto Levanta: del plano al 3D",        ca: "Artefacte Levanta: del plànol al 3D" } }
  ],

  /* ---------------------------------------------------------------- SESIONES */
  sesiones: [
    {
      id: "s01", fecha: "2026-09-22", horario: "", modulo: "m1",
      titulo:  { es: "El ecosistema y las tripas de un LLM", ca: "L’ecosistema i els budells d’un LLM" },
      resumen: {
        es: "Por qué «la IA no me funciona» y qué hay debajo: modelos, sistemas y agentes. Tokens, ventana de contexto, modelos rápidos y razonadores, y qué pueden y qué no pueden hacer hoy los LLM.",
        ca: "Per què «la IA no em funciona» i què hi ha a sota: models, sistemes i agents. Tokens, finestra de context, models ràpids i raonadors, i què poden i què no poden fer avui els LLM."
      },
      temas: [
        { es: "El ecosistema actual: modelos, sistemas y sistemas agénticos", ca: "L’ecosistema actual: models, sistemes i sistemes agèntics" },
        { es: "Tripas de un LLM: tokens, contexto y tiempo de pensamiento",    ca: "Budells d’un LLM: tokens, context i temps de pensament" },
        { es: "Capacidades y límites actuales de los modelos",                  ca: "Capacitats i límits actuals dels models" }
      ]
    },
    {
      id: "s02", fecha: "2026-09-24", horario: "", modulo: "m1",
      titulo:  { es: "De la IA generativa a la agéntica: prompt, spec y skill", ca: "De la IA generativa a l’agèntica: prompt, spec i skill" },
      resumen: {
        es: "Qué es un sistema agéntico y cuánto se le puede delegar. Harness y prompt engineering, y el salto del prompt a la especificación (SDD) y al procedimiento reutilizable (skills), aplicado a casos de oficina técnica.",
        ca: "Què és un sistema agèntic i quant se li pot delegar. Harness i prompt engineering, i el salt del prompt a l’especificació (SDD) i al procediment reutilitzable (skills), aplicat a casos d’oficina tècnica."
      },
      temas: [
        { es: "IA agéntica y escala de delegación admisible", ca: "IA agèntica i escala de delegació admissible" },
        { es: "Harness engineering y prompt engineering",     ca: "Harness engineering i prompt engineering" },
        { es: "Del prompt a la especificación: SDD",          ca: "Del prompt a l’especificació: SDD" },
        { es: "Skills: procedimientos reutilizables",         ca: "Skills: procediments reutilitzables" }
      ]
    },
    {
      id: "s03", fecha: "2026-09-30", horario: "", modulo: "m2",
      titulo:  { es: "Cómo gestionan el contexto las herramientas", ca: "Com gestionen el context les eines" },
      resumen: {
        es: "El contexto es todo lo que el agente tiene delante mientras trabaja. Versionado de skills y specs con Git, NotebookLM, las capas de contexto y la memoria de las herramientas: qué escribes tú y qué recuerdan ellas.",
        ca: "El context és tot el que l’agent té al davant mentre treballa. Versionat de skills i specs amb Git, NotebookLM, les capes de context i la memòria de les eines: què escrius tu i què recorden elles."
      },
      temas: [
        { es: "Versionado de skills y specs: Git y OpenSpec",                 ca: "Versionat de skills i specs: Git i OpenSpec" },
        { es: "Introducción a NotebookLM",                                     ca: "Introducció a NotebookLM" },
        { es: "Contexto operacional, contexto estructurado y conocimiento",    ca: "Context operacional, context estructurat i coneixement" },
        { es: "Gestión del contexto en Claude",                                ca: "Gestió del context a Claude" }
      ]
    },
    {
      id: "s04", fecha: "2026-10-01", horario: "", modulo: "m2",
      titulo:  { es: "Conocimiento, Obsidian y sistemas RAG", ca: "Coneixement, Obsidian i sistemes RAG" },
      resumen: {
        es: "Cómo construir un catálogo de conocimiento legible por personas y por agentes (LLM Wiki, OKF, Obsidian) y qué hacer cuando no cabe en la ventana: sistemas RAG, extracción, chunking y métricas de recuperación.",
        ca: "Com construir un catàleg de coneixement llegible per persones i per agents (LLM Wiki, OKF, Obsidian) i què fer quan no cap a la finestra: sistemes RAG, extracció, chunking i mètriques de recuperació."
      },
      temas: [
        { es: "Conocimiento semántico, procedimental y episódico", ca: "Coneixement semàntic, procedimental i episòdic" },
        { es: "Obsidian como repositorio de conocimiento",         ca: "Obsidian com a repositori de coneixement" },
        { es: "Contexto infinito y multimodal: sistemas RAG",      ca: "Context infinit i multimodal: sistemes RAG" }
      ]
    },
    {
      id: "s05", fecha: "2026-10-06", horario: "", modulo: "m3",
      titulo:  { es: "De hacer tareas a montar procesos", ca: "De fer tasques a muntar processos" },
      resumen: {
        es: "Artefactos, tareas programadas, conectores y plugins: las piezas para pasar de pedir cosas a tener procesos que corren solos. Cinco ejercicios encadenados sobre una misma obra, del cálculo rápido al informe del lunes.",
        ca: "Artefactes, tasques programades, connectors i plugins: les peces per passar de demanar coses a tenir processos que corren sols. Cinc exercicis encadenats sobre una mateixa obra, del càlcul ràpid a l’informe del dilluns."
      },
      temas: [
        { es: "Bajo demanda, programado y artefacto: cuándo automatizar", ca: "Sota demanda, programat i artefacte: quan automatitzar" },
        { es: "Artefactos, análisis de datos, Cowork y tareas programadas", ca: "Artefactes, anàlisi de dades, Cowork i tasques programades" },
        { es: "Conectores con herramientas ofimáticas y plugins",          ca: "Connectors amb eines ofimàtiques i plugins" }
      ]
    },
    {
      id: "s06", fecha: "2026-10-08", horario: "", modulo: "m4",
      titulo:  { es: "MCP, evaluación, seguridad y gobernanza", ca: "MCP, avaluació, seguretat i governança" },
      resumen: {
        es: "Cerramos la conectividad con el protocolo MCP y pasamos a las garantías: cómo evaluar un sistema, cómo se le ataca, y cómo gobernar la IA para industrializar los procesos de oficina técnica con el criterio técnico por delante.",
        ca: "Tanquem la connectivitat amb el protocol MCP i passem a les garanties: com avaluar un sistema, com se l’ataca, i com governar la IA per industrialitzar els processos d’oficina tècnica amb el criteri tècnic al davant."
      },
      temas: [
        { es: "Protocolo MCP: tools, resources y prompts",           ca: "Protocol MCP: tools, resources i prompts" },
        { es: "Evaluación de modelos y sistemas",                    ca: "Avaluació de models i sistemes" },
        { es: "Amenazas, gobernanza y seguridad",                    ca: "Amenaces, governança i seguretat" },
        { es: "Industrialización y panorama abierto (open source)",  ca: "Industrialització i panorama obert (open source)" }
      ]
    }
  ],

  /* ----------------------------------------------------------------- MÓDULOS */
  modulos: [
    {
      id: "m1",
      titulo: { es: "Introducción y aplicación práctica de modelos de lenguaje", ca: "Introducció i aplicació pràctica de models de llenguatge" },
      bloques: [
        { es: "El ecosistema actual",                                   ca: "L’ecosistema actual" },
        { es: "Tripas y capacidades de los LLM",                        ca: "Budells i capacitats dels LLM" },
        { es: "De los modelos generativos a la IA agéntica",            ca: "Dels models generatius a la IA agèntica" },
        { es: "Introducción al harness engineering y prompt engineering", ca: "Introducció al harness engineering i prompt engineering" },
        { es: "Casos de uso en la oficina técnica: SDD y skills",       ca: "Casos d’ús a l’oficina tècnica: SDD i skills" }
      ],
      recursos: [
        { nombre: "Transformer Explainer", url: "https://poloclub.github.io/transformer-explainer/" },
        { nombre: "Tokenizer",             url: "https://gptforwork.com/tools/tokenizer" },
        { nombre: "Artificial Analysis",   url: "https://artificialanalysis.ai/#intelligence" }
      ]
    },
    {
      id: "m2",
      titulo: { es: "Gestión avanzada del contexto y la documentación", ca: "Gestió avançada del context i la documentació" },
      bloques: [
        { es: "Cómo gestionamos el contexto en las herramientas. NotebookLM", ca: "Com gestionem el context en les eines. NotebookLM" },
        { es: "Gestión avanzada del contexto y del conocimiento. Obsidian",   ca: "Gestió avançada del context i del coneixement. Obsidian" },
        { es: "Contexto infinito y multimodal. Sistemas RAG",                 ca: "Context infinit i multimodal. Sistemes RAG" }
      ],
      recursos: [
        { nombre: "LLM Wiki (Karpathy)",   url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" },
        { nombre: "Open Knowledge Format", url: "https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf" },
        { nombre: "Obsidian",              url: "https://obsidian.md" }
      ]
    },
    {
      id: "m3",
      titulo: { es: "Conectividad y automatización de procesos", ca: "Connectivitat i automatització de processos" },
      bloques: [
        { es: "Automatizaciones, artefactos, conectores y otros",                       ca: "Automatitzacions, artefactes, connectors i altres" },
        { es: "Claude para entornos colaborativos y análisis de datos complejos",       ca: "Claude per a entorns col·laboratius i anàlisi de dades complexes" },
        { es: "Introducción al protocolo MCP para conectar herramientas",               ca: "Introducció al protocol MCP per connectar eines" }
      ],
      recursos: [
        { nombre: "MCP Servers", url: "https://mcpservers.org/" },
        { nombre: "Smithery",    url: "https://smithery.ai/" }
      ]
    },
    {
      id: "m4",
      titulo: { es: "Seguridad, gobernanza e implementación", ca: "Seguretat, governança i implementació" },
      bloques: [
        { es: "Evaluación de modelos y sistemas",                                   ca: "Avaluació de models i sistemes" },
        { es: "El criterio técnico por encima de la IA",                            ca: "El criteri tècnic per damunt de la IA" },
        { es: "Gobernanza y seguridad",                                             ca: "Governança i seguretat" },
        { es: "La IA como motor de industrialización de los servicios de ingeniería", ca: "La IA com a motor d’industrialització dels serveis d’enginyeria" },
        { es: "Panorama abierto: open source, alternativas y modelos chinos",       ca: "Panorama obert: open source, alternatives i models xinesos" }
      ],
      recursos: []
    }
  ],

  /* -------------------------------------------------------------- EJERCICIOS */
  ejercicios: [
    { n: 1,  modulo: "m1", sesion: "s01", titulo: { es: "Herramientas comerciales básicas: ChatGPT y Claude", ca: "Eines comercials bàsiques: ChatGPT i Claude" } },
    { n: 2,  modulo: "m1", sesion: "s01", titulo: { es: "Funciones de generación con ChatGPT", ca: "Funcions de generació amb ChatGPT" } },
    { n: 3,  modulo: "m1", sesion: "s02", titulo: { es: "Sistemas agénticos: ChatGPT Work, Claude Cowork y Claude Code", ca: "Sistemes agèntics: ChatGPT Work, Claude Cowork i Claude Code" } },
    { n: 4,  modulo: "m1", sesion: "s02", titulo: { es: "Tarea resuelta a partir de specs: comparativa de cubierta", ca: "Tasca resolta a partir de specs: comparativa de coberta" } },
    { n: 5,  modulo: "m1", sesion: "s02", titulo: { es: "Una skill y su procedimiento", ca: "Una skill i el seu procediment" } },
    { n: 6,  modulo: "m1", sesion: "s02", titulo: { es: "Informe de visita de obra: prompt rápido vs. prompt + spec + skill", ca: "Informe de visita d’obra: prompt ràpid vs. prompt + spec + skill" } },
    { n: 7,  modulo: "m2", sesion: "s03", titulo: { es: "Introducción a NotebookLM", ca: "Introducció a NotebookLM" } },
    { n: 8,  modulo: "m2", sesion: "s03", titulo: { es: "Gestión del contexto en Claude", ca: "Gestió del context a Claude" } },
    { n: 9,  modulo: "m2", sesion: "s04", titulo: { es: "Catálogo de conocimiento con Obsidian", ca: "Catàleg de coneixement amb Obsidian" } },
    { n: 10, modulo: "m2", sesion: "s04", titulo: { es: "Servicio RAG para normativa", ca: "Servei RAG per a normativa" } },
    { n: 11, modulo: "m3", sesion: "s05", titulo: { es: "Artefacto de cálculo rápido en obra", ca: "Artefacte de càlcul ràpid en obra" } },
    { n: 12, modulo: "m3", sesion: "s05", titulo: { es: "Skill e informe semanal automatizado", ca: "Skill i informe setmanal automatitzat" } },
    { n: 13, modulo: "m3", sesion: "s05", titulo: { es: "Conexión móvil ↔ escritorio con «Despacho»", ca: "Connexió mòbil ↔ escriptori amb «Despacho»" } },
    { n: 14, modulo: "m3", sesion: "s05", titulo: { es: "Integración con herramientas ofimáticas mediante conectores", ca: "Integració amb eines ofimàtiques mitjançant connectors" } },
    { n: 15, modulo: "m3", sesion: "s05", titulo: { es: "Integrar todos los procesos anteriores", ca: "Integrar tots els processos anteriors" } },
    { n: 16, modulo: "m3", sesion: "s06", titulo: { es: "Servicios a través de MCP", ca: "Serveis a través d’MCP" } },
    { n: 17, modulo: "m4", sesion: "s06", titulo: { es: "Evaluar el sistema", ca: "Avaluar el sistema" } },
    { n: 18, modulo: "m4", sesion: "s06", titulo: { es: "Ataque al sistema", ca: "Atac al sistema" } },
    { n: 19, modulo: "m4", sesion: "s06", titulo: { es: "Plan y materialización de la seguridad", ca: "Pla i materialització de la seguretat" } }
  ],

  /* -------------------------------------------------------- ARTEFACTOS EXTRA
     Lista de lo que hay en la carpeta de extras. El enlace a la carpeta está
     en enlaces.js (`extras`).                                               */
  extras: [
    {
      id: "presupuestos",
      titulo: { es: "Presupuestos IA", ca: "Pressupostos IA" },
      desc: {
        es: "Un programa de presupuestos de obra con alma de VS Code + Copilot: autocompletado de partidas mientras escribes y un agente que edita el mismo presupuesto que tú, en vivo.",
        ca: "Un programa de pressupostos d’obra amb ànima de VS Code + Copilot: autocompletat de partides mentre escrius i un agent que edita el mateix pressupost que tu, en viu."
      }
    },
    {
      id: "puente",
      titulo: { es: "Puente · simulador estructural 3D", ca: "Pont · simulador estructural 3D" },
      desc: {
        es: "Dos celosías Pratt de acero calculadas en tiempo real por el método de rigidez. Lanza vehículos, mira cómo trabaja cada barra… y qué pasa cuando una se agota.",
        ca: "Dues gelosies Pratt d’acer calculades en temps real pel mètode de rigidesa. Llança vehicles, mira com treballa cada barra… i què passa quan una s’esgota."
      }
    },
    {
      id: "muro",
      titulo: { es: "El Muro · simulador de estabilidad", ca: "El Mur · simulador d’estabilitat" },
      desc: {
        es: "Un muro de fábrica comprobado con el CTE —vuelco, deslizamiento, hundimiento y rotura del fuste— contra titanes de distintos tamaños. Cuándo falla y, sobre todo, cómo.",
        ca: "Un mur de fàbrica comprovat amb el CTE —bolcada, lliscament, enfonsament i trencament del fust— contra titans de diferents mides. Quan falla i, sobretot, com."
      }
    },
    {
      id: "planos",
      titulo: { es: "Levanta · del plano al modelo 3D", ca: "Levanta · del plànol al model 3D" },
      desc: {
        es: "Calca una planta sobre su imagen, abre huecos, amuebla y pulsa «Levantar»: el modelo 3D crece en vivo, con mediciones y exportación directa a Blender.",
        ca: "Calca una planta sobre la seva imatge, obre buits, mobla i prem «Levantar»: el model 3D creix en viu, amb amidaments i exportació directa a Blender."
      }
    },
    {
      id: "normativa",
      titulo: { es: "Supervault de normativa", ca: "Supervault de normativa" },
      desc: {
        es: "CTE, Código Estructural, REBT y RITE montados como un sistema conectado en Obsidian: cinco capas, tablas verificadas contra la fuente oficial y reglas para que lo recorra un agente.",
        ca: "CTE, Codi Estructural, REBT i RITE muntats com un sistema connectat a Obsidian: cinc capes, taules verificades contra la font oficial i regles perquè el recorri un agent."
      }
    },
    {
      id: "ancla",
      titulo: { es: "Ancla · la spec manda", ca: "Ancla · la spec mana" },
      desc: {
        es: "Una nave industrial que se construye a partir de su especificación: cambia un requisito y mira cómo se propaga al diseño, a las tareas y a la obra, con la traza de dónde sale cada cosa.",
        ca: "Una nau industrial que es construeix a partir de la seva especificació: canvia un requisit i mira com es propaga al disseny, a les tasques i a l’obra, amb la traça d’on surt cada cosa."
      }
    },
    {
      id: "plataforma",
      titulo: { es: "Plataforma de ingeniería", ca: "Plataforma d’enginyeria" },
      desc: {
        es: "Construye, simula, rómpelo y entiéndelo: una colección de juegos con un modelo de cálculo de verdad debajo, fallos espectaculares y un tutor con IA que explica qué pasó y qué dice la norma.",
        ca: "Construeix, simula, trenca-ho i entén-ho: una col·lecció de jocs amb un model de càlcul de veritat a sota, fallades espectaculars i un tutor amb IA que explica què ha passat i què diu la norma."
      }
    }
  ]
};
