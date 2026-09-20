# IA aplicada al día a día de la ingeniería

Material del curso impartido en el CETILL por **Carles Farré**.

**Web del curso: https://Carles95973.github.io/aec-ai/**

Este repositorio contiene la web que enruta al alumno hacia el material: un cronograma
por días, el temario por itinerario y los extras. Las presentaciones y las carpetas de
ejercicios están en Google Drive y se enlazan desde la web.

## Estructura

```
docs/                 la web (estática, sin build)
  index.html          esqueleto de la página
  assets/enlaces.js   LOS ENLACES DE DRIVE y qué extras están destapados
  assets/curso.js     el contenido: sesiones, módulos, ejercicios y extras
  assets/app.js       pinta la página con los dos (vistas, idioma, animación)
  assets/styles.css   tema industrial
code/                 scripts y skills de los ejercicios (licencia MIT)
```

## Mantenimiento

**[GUIA.md](GUIA.md) explica todo el mantenimiento paso a paso.** En resumen:

- **Publicar material**: pega la URL en `docs/assets/enlaces.js` — por sesión
  (`presentacion` y `carpeta`), por número de ejercicio o por extra. Lo que quede
  vacío sale en la web como «Próximamente».
- **Destapar un extra wow**: añade su id a la lista `abiertos` de ese mismo fichero.
- **Cambiar textos, fechas o el reparto de ejercicios**: `docs/assets/curso.js`.

Cada push a `main` republica la web mediante GitHub Actions (publica `docs/` tal cual).

## Trabajar en local

```bash
python -m http.server 8137 --directory docs
```

y abre http://localhost:8137. Enlaces directos a cada vista: `#dias` y `#itinerario`.

## Licencia

Contenido bajo **CC BY-NC-SA 4.0** — ver [LICENSE.md](LICENSE.md).
Código y skills bajo **MIT** — ver [code/LICENSE](code/LICENSE).
Las imágenes, esquemas y citas de terceros pertenecen a sus titulares.
