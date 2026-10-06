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
   · `practicas`: los exercicis pràctics, uno por semana.
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

  /* ------------------------------------------------------ EXERCICIS PRÀCTICS
     Un exercici per setmana; a la web, cada setmana és una caixa plegable.
     · `nou: true` mostra l'avís «Nou» a la portada; `nouTxt` és el text i
       `nouSemana` la setmana que obre en clicar-lo.
     · Cada setmana: `n`, `sesiones` (les dates que es mostren), `abierta`
       (si surt desplegada) i `tipo`: "rutas" (casos per triar) o
       "enunciado" (un únic enunciat per a tothom: fitxa, passos, lliurables,
       planificació i rutes).
     · Les carpetes de Drive van a enlaces.js → `practicas.semana2` / `semana3`. */
  practicas: {
    nou: true,
    nouTxt: { es: "Caso DC-100", ca: "Cas DC-100" },
    nouSemana: "semana3",
    semanas: [
      {
        id: "semana2", n: 2, sesiones: ["s04"], abierta: false, tipo: "rutas",
        titulo: { es: "Rutas por equipos", ca: "Rutes per equips" },
        inicio: "s04",
        equipos: { es: "2 personas (rutas 1–3) · 2–4 (ruta 4)", ca: "2 persones (rutes 1–3) · 2–4 (ruta 4)" },
        primerDia: [
          { min: 60,
            titulo: { es: "Planteamiento",     ca: "Plantejament" },
            desc:   { es: "Cómo resolver el caso: spec, datos, herramientas y evaluación.", ca: "Com resoldre el cas: spec, dades, eines i avaluació." } },
          { min: 30,
            titulo: { es: "Primeros ejemplos", ca: "Primers exemples" },
            desc:   { es: "Generar los primeros datos y pruebas.",                          ca: "Generar les primeres dades i proves." } },
          { min: 90,
            titulo: { es: "Implementación",    ca: "Implementació" },
            desc:   { es: "Construir la primera versión de la herramienta.",               ca: "Construir la primera versió de l’eina." } }
        ],
        nota: {
          es: "El resto de la sesión es explicación. En las sesiones siguientes se va mejorando la herramienta.",
          ca: "La resta de la sessió és explicació. A les sessions següents es va millorant l’eina."
        },

        niveles: [
          {
            id: "novell",
            titulo: { es: "Rutas nivel novel", ca: "Rutes nivell novell" },
            herramientas: ["Claude", "ChatGPT"],
            rutas: [
              {
                n: 1, equipo: "2",
                titulo: { es: "Asistente personal y correo", ca: "Assistent personal i correu" },
                casos: [
                  {
                    id: "1A",
                    titulo:    { es: "Consulta técnica y respuesta por correo", ca: "Consulta tècnica i resposta per correu" },
                    escenario: { es: "Una empresa de mantenimiento industrial tiene un conjunto de manuales y necesita una herramienta interna para consultarlos.",
                                 ca: "Una empresa de manteniment industrial té un conjunt de manuals i necessita una eina interna per consultar-los." },
                    criterios: [
                      { es: "Una herramienta capaz de navegar de forma escalable hasta 100 manuales.", ca: "Una eina capaç de navegar de manera escalable fins a 100 manuals." },
                      { es: "Número de aciertos >90 %.",                                            ca: "Percentatge d’encerts >90 %." },
                      { es: "Capacidad de aprender y clasificar consultas.",                        ca: "Capacitat d’aprendre i classificar consultes." },
                      { es: "Responder peticiones por correo electrónico.",                         ca: "Respondre peticions per correu electrònic." },
                      { es: "Redacción de un breve análisis de riesgos y mitigación.",              ca: "Redacció d’una breu anàlisi de riscos i mitigació." }
                    ],
                    tareas: [
                      { es: "Recopilar datos abiertos o generar datos.",                            ca: "Recopilar dades obertes o generar-ne." },
                      { es: "Escoger el sistema de almacenamiento y consulta de documentos.",       ca: "Triar el sistema d’emmagatzematge i consulta de documents." },
                      { es: "Implementar la evaluación con casos canónicos positivos y negativos.", ca: "Implementar l’avaluació amb casos canònics positius i negatius." },
                      { es: "Testear y evaluar.",                                                   ca: "Provar i avaluar." },
                      { es: "Conectarlo a un servicio de correo.",                                  ca: "Connectar-ho a un servei de correu." }
                    ]
                  },
                  {
                    id: "1B",
                    titulo:    { es: "Triaje de bandeja y borradores", ca: "Triatge de la safata d’entrada i esborranys" },
                    escenario: { es: "Se necesita un sistema que procese los correos, los clasifique y gestione sus respuestas.",
                                 ca: "Cal un sistema que processi els correus, els classifiqui i en gestioni les respostes." },
                    criterios: [
                      { es: "Una herramienta capaz de leer los correos desde una fecha y clasificarlos.", ca: "Una eina capaç de llegir els correus des d’una data i classificar-los." },
                      { es: "Actuar de forma diferente según la clasificación (limitado a 2 intenciones posibles, p. ej. presupuesto y asistencia).",
                        ca: "Actuar de manera diferent segons la classificació (limitat a 2 intencions possibles, p. ex. pressupost i assistència)." },
                      { es: "Capacidad de aprender y clasificar consultas.",                        ca: "Capacitat d’aprendre i classificar consultes." },
                      { es: "Responder peticiones por correo electrónico.",                         ca: "Respondre peticions per correu electrònic." }
                    ],
                    tareas: [
                      { es: "Implementar la evaluación con casos canónicos positivos y negativos.", ca: "Implementar l’avaluació amb casos canònics positius i negatius." },
                      { es: "Testear y evaluar.",                                                   ca: "Provar i avaluar." },
                      { es: "Conectarlo a un servicio de correo.",                                  ca: "Connectar-ho a un servei de correu." }
                    ]
                  }
                ]
              },
              {
                n: 2, equipo: "2",
                titulo: { es: "Generación de documentación técnica", ca: "Generació de documentació tècnica" },
                casos: [
                  {
                    id: "2A",
                    titulo:    { es: "Memoria técnica a partir de cálculos", ca: "Memòria tècnica a partir de càlculs" },
                    escenario: { es: "A partir de unos datos base de resultados de cálculo y de los datos básicos de un proyecto, hay que generar una memoria técnica lista para entregar.",
                                 ca: "A partir d’unes dades base de resultats de càlcul i de les dades bàsiques d’un projecte, cal generar una memòria tècnica a punt per lliurar." },
                    criterios: [
                      { es: "Una herramienta capaz de generar un Word y un PDF a partir de un conjunto de datos.", ca: "Una eina capaç de generar un Word i un PDF a partir d’un conjunt de dades." },
                      { es: "Precisión >95 %.",                                                     ca: "Precisió >95 %." },
                      { es: "Capacidad de aprender conceptos y adaptarse a la evolución de la normativa.", ca: "Capacitat d’aprendre conceptes i adaptar-se a l’evolució de la normativa." }
                    ],
                    tareas: [
                      { es: "Recopilar datos abiertos o generar datos.",                            ca: "Recopilar dades obertes o generar-ne." },
                      { es: "Construir un sistema de plantillas.",                                  ca: "Construir un sistema de plantilles." },
                      { es: "Establecer un procedimiento.",                                         ca: "Establir un procediment." },
                      { es: "Implementar la evaluación con casos canónicos positivos y negativos.", ca: "Implementar l’avaluació amb casos canònics positius i negatius." },
                      { es: "Testear y evaluar.",                                                   ca: "Provar i avaluar." }
                    ]
                  },
                  {
                    id: "2B",
                    titulo:    { es: "Informe pericial", ca: "Informe pericial" },
                    escenario: { es: "A partir de unos datos básicos sobre una patología y un conjunto de imágenes, hay que generar un informe pericial listo para entregar.",
                                 ca: "A partir d’unes dades bàsiques sobre una patologia i un conjunt d’imatges, cal generar un informe pericial a punt per lliurar." },
                    criterios: [
                      { es: "Una herramienta capaz de generar un Word y un PDF a partir de un conjunto de datos.", ca: "Una eina capaç de generar un Word i un PDF a partir d’un conjunt de dades." },
                      { es: "Precisión >95 %.",                                                     ca: "Precisió >95 %." },
                      { es: "Capacidad de aprender conceptos y casos anteriores.",                  ca: "Capacitat d’aprendre conceptes i casos anteriors." }
                    ],
                    tareas: [
                      { es: "Recopilar datos abiertos o generar datos.",                            ca: "Recopilar dades obertes o generar-ne." },
                      { es: "Construir un sistema de plantillas.",                                  ca: "Construir un sistema de plantilles." },
                      { es: "Establecer un procedimiento.",                                         ca: "Establir un procediment." },
                      { es: "Implementar la evaluación con casos canónicos positivos y negativos.", ca: "Implementar l’avaluació amb casos canònics positius i negatius." },
                      { es: "Testear y evaluar.",                                                   ca: "Provar i avaluar." }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "avancat",
            titulo: { es: "Rutas nivel avanzado", ca: "Rutes nivell avançat" },
            herramientas: ["Claude", "ChatGPT", "Claude Code", "Codex"],
            rutas: [
              {
                n: 3, equipo: "2",
                titulo: { es: "Automatización de documentos y gestión de la comunicación", ca: "Automatització de documents i gestió de la comunicació" },
                casos: [
                  {
                    id: "3A",
                    titulo:    { es: "Acta de reunión de obra y seguimiento de acciones", ca: "Acta de reunió d’obra i seguiment d’accions" },
                    escenario: { es: "Una dirección de obra necesita que, tras cada reunión, se genere el acta a partir de las notas, las imágenes y el audio. El sistema también tiene que actualizar el registro de acciones pendientes y enviar a cada agente lo que le afecta.",
                                 ca: "Una direcció d’obra necessita que, després de cada reunió, es generi l’acta a partir de les notes, les imatges i l’àudio. El sistema també ha d’actualitzar el registre d’accions pendents i enviar a cada agent el que l’afecta." },
                    criterios: [
                      { es: "Una herramienta capaz de generar el acta en Word y PDF a partir de notas, imágenes y audio.", ca: "Una eina capaç de generar l’acta en Word i PDF a partir de notes, imatges i àudio." },
                      { es: "Arrastre de las acciones abiertas del acta anterior sin pérdidas (100 % trazadas).",         ca: "Arrossegament de les accions obertes de l’acta anterior sense pèrdues (100 % traçades)." },
                      { es: "Precisión >95 % en acuerdos, responsables y fechas frente a un acta de referencia.",        ca: "Precisió >95 % en acords, responsables i dates respecte a una acta de referència." },
                      { es: "Envío por correo a cada agente de sus pendientes, solo tras aprobación humana.",            ca: "Enviament per correu a cada agent dels seus pendents, només després de l’aprovació humana." },
                      { es: "Capacidad de aprender el formato y los criterios de la dirección de obra.",                 ca: "Capacitat d’aprendre el format i els criteris de la direcció d’obra." }
                    ],
                    tareas: [
                      { es: "Recopilar datos abiertos o generar datos (2–3 reuniones simuladas con audio, notas y fotos).", ca: "Recopilar dades obertes o generar-ne (2–3 reunions simulades amb àudio, notes i fotos)." },
                      { es: "Redactar la spec: agentes, formato del acta, numeración de acciones y criterios de envío.",   ca: "Redactar la spec: agents, format de l’acta, numeració d’accions i criteris d’enviament." },
                      { es: "Construir un sistema de plantillas.",                                  ca: "Construir un sistema de plantilles." },
                      { es: "Establecer un procedimiento.",                                         ca: "Establir un procediment." },
                      { es: "Implementar la evaluación con casos canónicos positivos y negativos.", ca: "Implementar l’avaluació amb casos canònics positius i negatius." },
                      { es: "Testear y evaluar.",                                                   ca: "Provar i avaluar." }
                    ]
                  },
                  {
                    id: "3B",
                    titulo:    { es: "Control documental y selección de soluciones", ca: "Control documental i selecció de solucions" },
                    escenario: { es: "Una oficina técnica necesita comprobar si las soluciones propuestas por el contratista o disponibles en el mercado cumplen los requisitos del proyecto. De las aptas, tiene que seleccionar la mejor y comunicar la decisión.",
                                 ca: "Una oficina tècnica necessita comprovar si les solucions proposades pel contractista o disponibles al mercat compleixen els requisits del projecte. D’entre les aptes, ha de seleccionar la millor i comunicar la decisió." },
                    criterios: [
                      { es: "Una herramienta capaz de recibir documentación técnica (fichas, certificados, etc.) y completarla buscando en la web del fabricante y en la normativa.",
                        ca: "Una eina capaç de rebre documentació tècnica (fitxes, certificats, etc.) i completar-la cercant al web del fabricant i a la normativa." },
                      { es: "Extracción de los datos clave.",                                       ca: "Extracció de les dades clau." },
                      { es: "Precisión >95 % en los datos extraídos y en el veredicto apto / no apto.", ca: "Precisió >95 % en les dades extretes i en el veredicte apte / no apte." },
                      { es: "Selección de la mejor opción, justificada con criterios ponderados.",  ca: "Selecció de la millor opció, justificada amb criteris ponderats." },
                      { es: "Informe comparativo en Word y PDF.",                                   ca: "Informe comparatiu en Word i PDF." },
                      { es: "Correo al contratista con la decisión y la documentación que falta.",  ca: "Correu al contractista amb la decisió i la documentació que falta." },
                      { es: "Capacidad de aprender criterios de decisión de proyectos anteriores.", ca: "Capacitat d’aprendre criteris de decisió de projectes anteriors." }
                    ],
                    tareas: [
                      { es: "Recopilar datos abiertos o generar datos (fichas reales de 3–5 soluciones de fabricante).",   ca: "Recopilar dades obertes o generar-ne (fitxes reals de 3–5 solucions de fabricant)." },
                      { es: "Redactar la spec: requisitos del proyecto, fuentes válidas, criterios de aptitud y ponderación.", ca: "Redactar la spec: requisits del projecte, fonts vàlides, criteris d’aptitud i ponderació." },
                      { es: "Construir un sistema de plantillas.",                                  ca: "Construir un sistema de plantilles." },
                      { es: "Establecer un procedimiento.",                                         ca: "Establir un procediment." },
                      { es: "Conectarlo a un servicio de correo.",                                  ca: "Connectar-ho a un servei de correu." },
                      { es: "Implementar la evaluación con casos canónicos positivos y negativos (una solución no apta sembrada y un certificado caducado).",
                        ca: "Implementar l’avaluació amb casos canònics positius i negatius (una solució no apta sembrada i un certificat caducat)." },
                      { es: "Testear y evaluar.",                                                   ca: "Provar i avaluar." }
                    ]
                  }
                ]
              },
              {
                n: 4, equipo: "2–4",
                titulo: { es: "Desarrollo de software", ca: "Desenvolupament de software" },
                casos: [
                  {
                    id: "4",
                    titulo:    { es: "Herramienta de consulta de precios y generación de ofertas", ca: "Eina de consulta de preus i generació d’ofertes" },
                    escenario: { es: "Construir una herramienta que permita consultar bases de datos de precios y construir un presupuesto u oferta a partir de estos datos, con introducción manual del usuario y/o mediante un chatbot integrado.",
                                 ca: "Construir una eina que permeti consultar bases de dades de preus i confeccionar un pressupost o una oferta a partir d’aquestes dades, amb introducció manual per part de l’usuari i/o mitjançant un xatbot integrat." },
                    criterios: [
                      { es: "Tener una herramienta que permita realizar consultas de precios.",     ca: "Disposar d’una eina que permeti fer consultes de preus." },
                      { es: "Las consultas tienen que ir a una base de datos PostgreSQL.",          ca: "Les consultes han d’anar a una base de dades PostgreSQL." },
                      { es: "La herramienta tiene que construir un presupuesto coherente, como mínimo para instalaciones de climatización.", ca: "L’eina ha de construir un pressupost coherent, com a mínim per a instal·lacions de climatització." },
                      { es: "Stack moderno con Python.",                                            ca: "Stack modern amb Python." },
                      { es: "Capacidad de aprender la forma de proceder del usuario.",              ca: "Capacitat d’aprendre la manera de procedir de l’usuari." }
                    ],
                    tareas: [
                      { es: "Recopilar datos abiertos o generar datos.",                            ca: "Recopilar dades obertes o generar-ne." },
                      { es: "Construir la herramienta.",                                            ca: "Construir l’eina." },
                      { es: "Testear y evaluar.",                                                   ca: "Provar i avaluar." }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "semana3", n: 3, sesiones: ["s05", "s06"], abierta: true, tipo: "enunciado",
        titulo: { es: "El caso tipo DC-100", ca: "El cas tipus DC-100" },
        lema:   { es: "Un presupuesto de 2023 que tiene que ponerse al día cada año", ca: "Un pressupost del 2023 que s’ha de posar al dia cada any" },
        cifras: [
          { etq: { es: "Potencia TI", ca: "Potència TI" },           valor: "100 MW" },
          { etq: { es: "PEM 2023",    ca: "PEM 2023" },              valor: "879,4 M€" },
          { etq: { es: "PEC 2023",    ca: "PEC 2023" },              valor: "1.046,5 M€" },
          { etq: { es: "Base de precios", ca: "Base de preus" },     valor: { es: "Marzo 2023", ca: "Març 2023" }, destacar: true }
        ],
        enunciado: [
          { es: "Una oficina técnica trabaja siempre con una tipología de obra muy determinada: es especialista en centros de datos de unos 100 MW. Para hacer ofertas rápidas y coherentes usa un caso tipo, un centro de datos de referencia con su presupuesto, que adapta a cada cliente.",
            ca: "Una oficina tècnica treballa sempre amb una tipologia d’obra molt determinada: és especialista en centres de dades d’uns 100 MW. Per fer ofertes ràpides i coherents fa servir un cas tipus, un centre de dades de referència amb el seu pressupost, que adapta a cada client." },
          { es: "El problema es que el caso tipo se presupuestó en marzo de 2023 y desde entonces nadie lo ha tocado. La oficina quiere tenerlo siempre al día y que se actualice cada año. La actualización tiene que tener en cuenta:",
            ca: "El problema és que el cas tipus es va pressupostar el març de 2023 i des de llavors ningú no l’ha tocat. L’oficina vol tenir-lo sempre al dia i que s’actualitzi cada any. L’actualització ha de tenir en compte:" }
        ],
        tenerEnCuenta: [
          { es: "la evolución de los precios;",               ca: "l’evolució dels preus;" },
          { es: "los productos que ya no se fabrican;",       ca: "els productes que ja no es fabriquen;" },
          { es: "los cambios de normativa.",                  ca: "els canvis de normativa." }
        ],
        cierre: { es: "La oficina siempre trabaja en España.", ca: "L’oficina sempre treballa a Espanya." },
        ficha: [
          { etq: { es: "Potencia TI", ca: "Potència TI" }, valor: { es: "100 MW", ca: "100 MW" } },
          { etq: { es: "Ubicación tipo", ca: "Ubicació tipus" },
            valor: { es: "España peninsular, polígono industrial de interior, conexión a 220 kV", ca: "Espanya peninsular, polígon industrial d’interior, connexió a 220 kV" } },
          { etq: { es: "Edificios", ca: "Edificis" },
            valor: { es: "2 edificios de centro de datos (DC-A y DC-B) de 2 plantas y 32.000 m² cada uno; 1 edificio administrativo de 6.000 m²",
                     ca: "2 edificis de centre de dades (DC-A i DC-B) de 2 plantes i 32.000 m² cadascun; 1 edifici administratiu de 6.000 m²" } },
          { etq: { es: "Salas TI", ca: "Sales TI" }, valor: { es: "8 salas de 12,5 MW (4 por edificio)", ca: "8 sales de 12,5 MW (4 per edifici)" } },
          { etq: { es: "Densidad", ca: "Densitat" },
            valor: { es: "12–15 kW por rack, refrigeración por aire (unos 7.000 racks)", ca: "12–15 kW per rack, refrigeració per aire (uns 7.000 racks)" } },
          { etq: { es: "PUE anual de diseño", ca: "PUE anual de disseny" }, valor: { es: "1,30", ca: "1,30" } },
          { etq: { es: "Electricidad", ca: "Electricitat" },
            valor: { es: "Subestación 220/30 kV con 3 transformadores de 80 MVA; bloques de 2,5 MW (40 TI + 8 de reserva + 8 mecánicos); 56 grupos electrógenos diésel; SAI con baterías",
                     ca: "Subestació 220/30 kV amb 3 transformadors de 80 MVA; blocs de 2,5 MW (40 TI + 8 de reserva + 8 mecànics); 56 grups electrògens dièsel; SAI amb bateries" } },
          { etq: { es: "Refrigeración", ca: "Refrigeració" },
            valor: { es: "Enfriadoras condensadas por aire con free-cooling y unidades fan wall en sala", ca: "Refredadores condensades per aire amb free-cooling i unitats fan wall a sala" } },
          { etq: { es: "Redundancia", ca: "Redundància" },
            valor: { es: "Mantenibilidad concurrente (equivalente a Tier III), sin certificación", ca: "Mantenibilitat concurrent (equivalent a Tier III), sense certificació" } },
          { etq: { es: "Base de precios", ca: "Base de preus" }, valor: { es: "Marzo de 2023 · importes sin IVA", ca: "Març de 2023 · imports sense IVA" } },
          { etq: { es: "PEM", ca: "PEM" }, valor: { es: "879,4 M€ (8,8 M€/MW TI)", ca: "879,4 M€ (8,8 M€/MW TI)" } },
          { etq: { es: "PEC (GG 13 % + BI 6 %)", ca: "PEC (DG 13 % + BI 6 %)" }, valor: { es: "1.046,5 M€ (10,5 M€/MW TI)", ca: "1.046,5 M€ (10,5 M€/MW TI)" } }
        ],
        incluye: { es: "Urbanización interior, obra civil, arquitectura, instalaciones, subestación y pruebas.",
                   ca: "Urbanització interior, obra civil, arquitectura, instal·lacions, subestació i proves." },
        excluye: { es: "Terreno, equipamiento TI activo, conexión eléctrica fuera de parcela, honorarios, licencias, impuestos y contingencias del promotor.",
                   ca: "Terreny, equipament TI actiu, connexió elèctrica fora de parcel·la, honoraris, llicències, impostos i contingències del promotor." },
        recibis: {
          fichero: "DC100_pressupost_base_2023.xlsx",
          intro: { es: "el presupuesto base del caso tipo, partida a partida.", ca: "el pressupost base del cas tipus, partida a partida." }
        },
        pasos: [
          { titulo: { es: "Planificar antes de construir", ca: "Planificar abans de construir" },
            desc: { es: "Redactad la spec (alcance, datos de entrada, método, qué es obsoleto, criterios de aceptación y riesgos) y validadla con el profesor.",
                    ca: "Redacteu la spec (abast, dades d’entrada, mètode, què és obsolet, criteris d’acceptació i riscos) i valideu-la amb el professor." } },
          { titulo: { es: "Definir las fuentes", ca: "Definir les fonts" },
            desc: { es: "Catálogo de fuentes públicas y propias: origen, fecha, cobertura, fiabilidad y si se pueden consultar de forma automática.",
                    ca: "Catàleg de fonts públiques i pròpies: origen, data, cobertura, fiabilitat i si es poden consultar de manera automàtica." } },
          { titulo: { es: "Comprobar la vigencia", ca: "Comprovar la vigència" },
            desc: { es: "Partida por partida: si el producto aún se puede comprar en España, si le afecta algún cambio normativo y, si no es vigente, una alternativa equivalente justificada.",
                    ca: "Partida per partida: si el producte encara es pot comprar a Espanya, si li afecta algun canvi normatiu i, si no és vigent, una alternativa equivalent justificada." } },
          { titulo: { es: "Regenerar los precios", ca: "Regenerar els preus" },
            desc: { es: "Cada partida con su método: precio actual de una fuente, actualización por índice o sustitución por una alternativa.",
                    ca: "Cada partida amb el seu mètode: preu actual d’una font, actualització per índex o substitució per una alternativa." } },
          { titulo: { es: "Generar el informe", ca: "Generar l’informe" },
            desc: { es: "Nuevo PEM y PEC, variaciones, partidas que más pesan, índices frente a regeneración completa, cambios de producto y normativa, y contraste con el mercado.",
                    ca: "Nou PEM i PEC, variacions, partides que més pesen, índexs davant de regeneració completa, canvis de producte i normativa, i contrast amb el mercat." } },
          { titulo: { es: "Automatizar la actualización anual", ca: "Automatitzar l’actualització anual" },
            desc: { es: "Una vez al año: consulta las fuentes, revisa vigencia y normativa, regenera precios e informe, y se detiene para validación humana cuando detecta cambios.",
                    ca: "Un cop l’any: consulta les fonts, revisa vigència i normativa, regenera preus i informe, i s’atura per a validació humana quan detecta canvis." },
            nota: { es: "Probadlo con fechas de corte en 2024, 2025 y 2026.", ca: "Proveu-lo amb dates de tall a 2024, 2025 i 2026." } }
        ],
        entregables: [
          { es: "La spec y su registro de cambios.", ca: "La spec i el seu registre de canvis." },
          { es: "El catálogo de fuentes.", ca: "El catàleg de fonts." },
          { es: "El informe de vigencia y de normativa.", ca: "L’informe de vigència i de normativa." },
          { es: "El presupuesto regenerado (xlsx).", ca: "El pressupost regenerat (xlsx)." },
          { es: "El informe para la oficina.", ca: "L’informe per a l’oficina." },
          { es: "La automatización con un documento breve de operación: qué hace, cuándo se ejecuta y qué hay que revisar a mano.", ca: "L’automatització amb un document breu d’operació: què fa, quan s’executa i què cal revisar a mà." },
          { es: "Una presentación de 5 minutos.", ca: "Una presentació de 5 minuts." }
        ],
        plan: {
          cab: { es: "6 h · grupos de 2", ca: "6 h · grups de 2" },
          tramos: [
            { min: 60, titulo: { es: "Spec y validación",                         ca: "Spec i validació" } },
            { min: 45, titulo: { es: "Catálogo de fuentes",                       ca: "Catàleg de fonts" } },
            { min: 75, titulo: { es: "Vigencia, normativa y alternativas",        ca: "Vigència, normativa i alternatives" } },
            { min: 75, titulo: { es: "Regeneración de precios e informe",         ca: "Regeneració de preus i informe" } },
            { min: 75, titulo: { es: "Automatización y prueba con fechas de corte", ca: "Automatització i prova amb dates de tall" } },
            { min: 30, titulo: { es: "Presentaciones",                            ca: "Presentacions" } }
          ]
        },
        rutas: [
          { titulo: { es: "Ruta novel", ca: "Ruta novell" },
            desc: { es: "Proyecto de Claude, una skill de regeneración y el informe como artefacto. La automatización se hace con una tarea programada.",
                    ca: "Projecte de Claude, una skill de regeneració i l’informe com a artefacte. L’automatització es fa amb una tasca programada." } },
          { titulo: { es: "Ruta avanzada", ca: "Ruta avançada" },
            desc: { es: "Claude Code con Python para la ingesta y el cálculo. La automatización se hace con una tarea programada, n8n o CI.",
                    ca: "Claude Code amb Python per a la ingesta i el càlcul. L’automatització es fa amb una tasca programada, n8n o CI." } }
        ]
      }
    ]
  },

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
