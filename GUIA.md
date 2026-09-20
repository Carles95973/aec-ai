# Guía de la web del curso

Todo lo que hay que saber para mantener la web durante el curso. Está pensada para
que el 90 % de las veces solo abras **un fichero**: `docs/assets/enlaces.js`.

- **Web publicada:** https://Carles95973.github.io/aec-ai/
- **Se republica sola** con cada push a `main` (tarda 1–2 minutos).

---

## 1. Los tres ficheros

| Fichero | Qué hay dentro | Cuándo se toca |
|---|---|---|
| `docs/assets/enlaces.js` | **Las URL de Drive** y qué extras están destapados | Casi cada clase |
| `docs/assets/curso.js` | Textos: títulos, resúmenes, temario, ejercicios, fechas | Al preparar el curso o si cambia algo |
| `docs/assets/app.js`, `styles.css`, `index.html` | Cómo se pinta y cómo se ve | Solo para cambiar el diseño |

La regla: **contenido en `curso.js`, enlaces en `enlaces.js`.** Los `id` (`s01`…`s06`,
`m1`…`m4`, los ids de extras y el número de ejercicio) son lo que une los dos ficheros.
Si cambias un id en uno, cámbialo en el otro.

---

## 2. Lo del día a día

### Publicar la presentación y la carpeta de una sesión

En `enlaces.js`, busca la sesión y pega las URL:

```js
sesiones: {
  s01: { presentacion: "https://drive.google.com/file/d/…", carpeta: "https://drive.google.com/drive/folders/…" },
```

Las sesiones son `s01` = 22 sep, `s02` = 24 sep, `s03` = 28 sep, `s04` = 1 oct,
`s05` = 6 oct, `s06` = 8 oct.

### Publicar un ejercicio

Mismo fichero, por número:

```js
ejercicios: {
  1:  "https://drive.google.com/drive/folders/…",
  2:  "",   // sigue saliendo «Próximamente»
```

### Destapar un extra wow

Dos pasos, en `enlaces.js`:

```js
extras: {
  puente: "https://drive.google.com/drive/folders/…",   // 1. su enlace
  …
},
abiertos: ["puente"]                                     // 2. destapar la tarjeta
```

Para destapar varios: `abiertos: ["puente", "muro", "normativa"]`.

Ids disponibles: `presupuestos`, `puente`, `muro`, `planos`, `normativa`, `ancla`,
`plataforma`.

> Mientras un extra no esté en `abiertos`, su tarjeta sale como «Clasificado», sin
> título ni descripción. Es efecto sorpresa, no seguridad: quien mire el código
> fuente de la página puede leer los textos.

### Carpeta general y contacto

Arriba del todo de `enlaces.js`. Si los dejas vacíos, simplemente no salen en el pie.

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

- **Mover un ejercicio a otro día:** cambia su campo `sesion` (`"s02"` → `"s03"`).
  En la vista por días salta solo al otro día, y en la de itinerario se actualiza la
  fecha que muestra debajo.
- **Cambiar una fecha:** campo `fecha`, en formato `AAAA-MM-DD`. La web recalcula sola
  cuál es la próxima sesión y cuáles están impartidas.
- **Poner horario:** campo `horario` de la sesión, texto libre (`"16:00 – 20:00"`).
  Sale junto al día de la semana.
- **Cambiar un texto:** todos van en los dos idiomas, `{ es: "…", ca: "…" }`. Si
  cambias uno, cambia el otro.
- **Añadir una sesión o un ejercicio:** copia un bloque entero, cámbiale el `id` o el
  número `n`, y añade su entrada correspondiente en `enlaces.js`.

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

- **Dos vistas:** «Por días» (cronograma) y «Por itinerario» (temario por módulos).
  Recuerda la última que usó cada alumno. Enlaces directos: `…/#dias` y `…/#itinerario`.
- **La sesión de hoy** se resalta y aparece desplegada sola; antes del curso se
  resalta la próxima, y las ya dadas salen marcadas como impartidas.
- **Dos idiomas:** castellano y catalán, con selector arriba a la derecha. Por defecto
  entra en catalán si el navegador del alumno está en catalán, y si no, en castellano.
- **Lo que no tiene enlace** sale como «Próximamente», sin enlace roto.
- Funciona en móvil.

---

## 7. Si algo se rompe

| Síntoma | Causa probable |
|---|---|
| La web sale en blanco | Falta una coma o una comilla en `curso.js` o `enlaces.js`. Mira la consola (`F12`). |
| Un enlace no aparece | La URL no empieza por `https://`, o el id no casa entre los dos ficheros (la consola lo avisa). |
| Un extra sigue tapado | Falta su id en `abiertos`, o está mal escrito. |
| Los cambios no se ven en la web | El despliegue aún no ha acabado, o falló: mira **Actions** en GitHub. En el navegador, recarga con `Ctrl+F5`. |
| Quiero volver atrás | `git revert` del último commit, o edita y vuelve a subir. Cada versión queda en el historial. |
