/* ==========================================================================
   ENLACES — el fichero del día a día.

   Aquí y solo aquí se pegan las URL de Drive.
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
     s01 · 22 sep  ·  s02 · 24 sep  ·  s03 · 30 sep
     s04 ·  1 oct  ·  s05 ·  6 oct  ·  s06 ·  8 oct                          */
  sesiones: {
    s01: { presentacion: "https://docs.google.com/presentation/d/1LN4slj7T297xNWrJKroKlX7vwPl3m_Mx/edit?usp=sharing&ouid=114465327299430353015&rtpof=true&sd=true", carpeta: "https://drive.google.com/drive/folders/1rdz-MqtdI5y5UcINBndvFTxLMO-uCD8S?usp=sharing" },
    s02: { presentacion: "https://docs.google.com/presentation/d/1vPzA_nu68zhVtEjWOKMQzAozo0u_1FDN/edit?usp=sharing&ouid=114465327299430353015&rtpof=true&sd=true", carpeta: "https://drive.google.com/drive/folders/161KcF0Esd6NnkE0_bsPyjiqnJE3dwq8N?usp=sharing" },
    s03: { presentacion: "", carpeta: "https://drive.google.com/drive/folders/1svGEJSWLyo_2Ed8bVcDL_uFYZUtaEm-O?usp=sharing" },
    s04: { presentacion: "https://docs.google.com/presentation/d/1GTILaDz3EliPUE2P7apS4bphyXukXgYK/edit?usp=sharing&ouid=114465327299430353015&rtpof=true&sd=true", carpeta: "https://drive.google.com/drive/folders/12RpndnyjAGbJmNrxIuUj5Ag5-Ha-a8Wd?usp=sharing" },
    s05: { presentacion: "", carpeta: "" },
    s06: { presentacion: "", carpeta: "" }
  },

  /* --- Exercicis pràctics ------------------------------------------------
     Carpeta de Drive con el material de las prácticas (datos, plantillas…).
     Vacío = el botón sale como «Properament».                               */
  practicas: "",

  /* --- Artefactos extra -------------------------------------------------
     La carpeta de Drive con todos los artefactos extra. Vacío = «Properament». */
  extras: "https://drive.google.com/drive/folders/1QxnGmE3qTv9iJgfrp69QhZ7qrrT9WQnz?usp=sharing"
};
