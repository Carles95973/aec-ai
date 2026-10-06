/* ==========================================================================
   ENLACES — el fichero del día a día.

   Aquí y solo aquí se pegan las URL de Drive.
   El contenido (títulos, resúmenes, temario) está en `curso.js` y no hace
   falta tocarlo para publicar material.

   CÓMO SE USA
   1. Pega la URL entre las comillas:  carpeta: "https://drive.google.com/..."
   2. Guarda el fichero y haz push. En un par de minutos está en la web.
   Lo que no tenga enlace, simplemente no sale en la web.

   AVISO: esto NO es un .env con secretos. La web es pública y este fichero
   se descarga con ella, así que cualquier enlace que pegues aquí es visible.
   Comparte las carpetas de Drive con «cualquiera con el enlace» y no pongas
   aquí nada que no quieras que vean los alumnos.
   ========================================================================== */

window.ENLACES = {

  /* --- Presentació completa i exemples de classe --------------------------
     Dos recuadros, uno al lado del otro.
     `presentacionCompleta`: la presentación entera del curso.
     `ejemplos`: la carpeta de Drive con los ejemplos hechos en clase.        */
  presentacionCompleta: "https://docs.google.com/presentation/d/1pqU2VYVY5737cZk3yWuVchcQsFG-iQbr/edit?usp=sharing&ouid=114465327299430353015&rtpof=true&sd=true",
  ejemplos: "https://drive.google.com/drive/folders/1BPGWNcc1HfeCqkV_5Lg0lnL-lKDSGaXO?usp=sharing",

  /* --- Classes gravades ----------------------------------------------------
     Una entrada por sesión grabada: `sesion` (s01…s06) y la URL de YouTube
     (vale cualquier formato: /live/…, watch?v=…, youtu.be/…). Salen en este
     orden, con la vista previa del vídeo.                                    */
  grabaciones: [
    { sesion: "s02", url: "https://youtube.com/live/O6k7GNeSY6o?feature=share" },
    { sesion: "s03", url: "https://youtube.com/live/TLBEM04XTQk?feature=share" },
    { sesion: "s04", url: "https://youtube.com/live/Ynq2PkW5eN0?feature=share" }
  ],

  /* --- Exercicis pràctics ------------------------------------------------
     Una carpeta por semana. La semana sin entrada sale sin botón.           */
  practicas: {
    semana3: "https://drive.google.com/drive/folders/15BQYI-v1d1eMHVHxMfpXDiXArFsS59jN?usp=sharing"   // Cas tipus DC-100
  },

  /* --- Artefactos extra -------------------------------------------------
     La carpeta de Drive con todos los artefactos extra.                       */
  extras: "https://drive.google.com/drive/folders/1QxnGmE3qTv9iJgfrp69QhZ7qrrT9WQnz?usp=sharing"
};
