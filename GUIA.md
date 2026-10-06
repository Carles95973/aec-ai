# Guía de la web del curso

Todo lo que hay que saber para mantener la web durante el curso. Está pensada para
que el 90 % de las veces solo abras **un fichero**: `docs/assets/enlaces.js`.

- **Web publicada:** https://Carles95973.github.io/aec-ai/
- **Se republica sola** con cada push a `main` (tarda 1–2 minutos).

---

## 1. Los tres ficheros

| Fichero | Qué hay dentro | Cuándo se toca |
|---|---|---|
| `docs/assets/enlaces.js` | **Las URL de Drive**: sesiones y carpeta de artefactos extra | Casi cada clase |
| `docs/assets/curso.js` | Textos: títulos, resúmenes, temario, ejercicios, fechas, lista de instalación | Al preparar el curso o si cambia algo |
| `docs/assets/app.js`, `styles.css`, `index.html` | Cómo se pinta y cómo se ve | Solo para cambiar el diseño |

La regla: **contenido en `curso.js`, enlaces en `enlaces.js`.** Los ids de las sesiones
(`s01`…`s06`) son lo que une los dos ficheros. Si cambias uno, cámbialo en el otro.

---

## 2. Lo del día a día

**Regla general: lo que no tiene enlace no sale en la web.** No hace falta dejar
entradas vacías; si un enlace no existe, se borra la línea entera.

### Carpeta de una sesión (opcional)

Ahora las sesiones no llevan enlace: el material está en la presentación completa y en
los ejemplos. Si algún día hace falta enlazar la carpeta de una sesión, se añade este
bloque a `enlaces.js` y sale junto a la sesión en el temario:

```js
sesiones: {
  s01: "https://drive.google.com/drive/folders/…",
},
```

Las sesiones son `s01` = 22 sep, `s02` = 24 sep, `s03` = 30 sep, `s04` = 1 oct,
`s05` = 6 oct, `s06` = 8 oct.

### Publicar los artefactos extra

Es una sola carpeta de Drive. En `enlaces.js`:

```js
extras: "https://drive.google.com/drive/folders/…"
```

La lista de artefactos que se ve
en la web (nombre y descripción) está en `curso.js`, en `extras`.

Los ejercicios no llevan enlace propio: su material está dentro de la carpeta de la
sesión.

### Presentació completa y exemples de classe

Dos recuadros al mismo nivel, uno al lado del otro: la presentación entera del curso y
la carpeta de Drive con los ejemplos hechos en clase. En `enlaces.js`:

```js
ejemplos: "https://drive.google.com/drive/folders/…",
presentacionCompleta: "https://docs.google.com/presentation/d/…",
```

### Classes gravades

Una entrada por sesión grabada, con el id de la sesión y la URL de YouTube (vale el
enlace que da YouTube al compartir). Salen en ese orden, con la vista previa del vídeo;
el reproductor solo se carga al pulsarla. En `enlaces.js`:

```js
grabaciones: [
  { sesion: "s02", url: "https://youtube.com/live/…" },
  { sesion: "s05", url: "https://youtu.be/…" }        // para añadir otra
],
```

El título y la fecha salen de la sesión. Si la lista se queda vacía, la sección y el
botón «Classes gravades» del menú desaparecen.

### Carpetas de los exercicis pràctics

Una carpeta por semana. En `enlaces.js`:

```js
practicas: {
  semana3: "https://drive.google.com/drive/folders/…"    // Cas tipus DC-100
},
```

Una semana sin entrada sale sin botón.

### Carpeta general y contacto (opcional)

Si algún día hacen falta, se añaden arriba del todo de `enlaces.js` y salen en el pie:

```js
general:  "https://drive.google.com/drive/folders/…",
contacto: "carles@…",
```

---

## 3. Publicar los cambios

Con el fichero guardado:

```bash
git add -A && git commit -m "Enlaces de la sesión 1" && git push
```

En un par de minutos está en la web. Si no aparece, mira la pestaña **Actions** del
repositorio en GitHub: ahí se ve si el despliegue falló.

---

## 4. Cambios de contenido (`curso.js`)

- **Mover un ejercicio a otro día:** cambia su campo `sesion` (`"s02"` → `"s03"`). En
  el temario se actualiza la sesión y la fecha que muestra debajo.
- **Cambiar una fecha:** campo `fecha`, en formato `AAAA-MM-DD`. La web marca sola la
  sesión de hoy y el aviso de la portada.
- **Poner horario:** campo `horario` de la sesión, texto libre (`"16:00 – 20:00"`).
  Sale junto al día de la semana.
- **Cambiar un texto:** todos van en los dos idiomas, `{ es: "…", ca: "…" }`. Si
  cambias uno, cambia el otro.
- **Añadir una sesión o un ejercicio:** copia un bloque entero y cámbiale el `id` o el
  número `n`. Si es una sesión, añade también su entrada en `enlaces.js`.
- **Exercicis pràctics:** bloque `practicas`, con una entrada por semana en `semanas`.
  Cada semana es una caja plegable: `n` (número), `sesiones` (las fechas que muestra),
  `abierta` (si sale desplegada al entrar) y `tipo`:
  - `"rutas"` (semana 2): casos para elegir, con el reparto del primer día
    (`primerDia`, en minutos: la barra es proporcional) y niveles → rutas → casos.
  - `"enunciado"` (semana 3, cas tipus DC-100): un único enunciado para todos, con
    `lema`, `cifras`, `enunciado`, `ficha` (la tabla del caso), `incluye`/`excluye`,
    `recibis`, `pasos` (cada uno con `titulo`, `desc`, `items` y `nota`),
    `entregables`, `plan` (tramos en minutos: la barra es proporcional) y `rutas`.

  Para añadir una semana, copia el bloque de una del mismo tipo y añade su carpeta en
  `enlaces.js` → `practicas`. El aviso «Nou» de la portada se controla con `nou`
  (`false` lo quita), `nouTxt` (su texto) y `nouSemana` (la caja que abre al pulsarlo).
- **Cambiar la lista de instalación:** `requisitos`, arriba del todo. Cada programa
  lleva `nombre`, `obligatorio`, `url` de descarga y `para` (una línea en los dos
  idiomas). Los `obligatorio: true` se ven siempre como «Imprescindible»; los `false`
  quedan plegados en un desplegable «Opcionals» que el alumno abre si lo necesita.

Cuidado con las comas y las comillas: es un fichero JavaScript. Si te comes una coma,
la web se queda en blanco. Para comprobarlo antes de subir, mira el punto 5.

---

## 5. Ver la web antes de subirla

```bash
python -m http.server 8137 --directory docs
```

Abre http://localhost:8137. Si algo no sale, abre la consola del navegador
(`F12` → Console): la web avisa ahí si un id de `enlaces.js` no existe en `curso.js`,
y los errores de coma o comilla también se ven en esa pestaña.

---

## 6. Cómo se comporta la web

- **Orden de la página:** portada → Què cal instal·lar → Temari → Presentació completa
  y Exemples de classe → Exercicis pràctics → Artefactes extra → Classes gravades.
- **Temari:** un bloque por módulo con el material de sus sesiones (presentación y
  carpeta), el contenido, los ejercicios y los recursos. La sesión de hoy sale marcada.
- **Dos idiomas:** catalán (por defecto) y castellano, con selector arriba a la derecha.
  Se recuerda la elección de cada alumno.
- **Què cal instal·lar:** los imprescindibles a la vista; los opcionales, plegados.
- **Exercicis pràctics:** una caja plegable por semana. El aviso «Nou» de la portada
  lleva a ellos y abre la semana indicada.
- **Lo que no tiene enlace** no sale: ni botón vacío ni enlace roto.
- Funciona en móvil.

---

## 7. Si algo se rompe

| Síntoma | Causa probable |
|---|---|
| La web sale en blanco | Falta una coma o una comilla en `curso.js` o `enlaces.js`. Mira la consola (`F12`). |
| Un enlace no aparece | La URL no empieza por `https://`, o el id de la sesión no casa entre los dos ficheros (la consola lo avisa). |
| Los cambios no se ven en la web | El despliegue aún no ha acabado, o falló: mira **Actions** en GitHub. Si ya acabó, recarga con `Ctrl+F5`: el navegador guarda la página hasta 10 minutos. Cada despliegue marca los ficheros con su versión (`?v=…` en `index.html`, lo pone el workflow), así que nunca se mezclan ficheros de dos versiones. |
| Quiero volver atrás | `git revert` del último commit, o edita y vuelve a subir. Cada versión queda en el historial. |
