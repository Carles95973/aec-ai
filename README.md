# IA aplicada al día a día de la ingeniería

Material del curso impartido en el CETILL por **Carles Farré**.

**Web del curso: https://Carles95973.github.io/aec-ai/**

Este repositorio contiene la web (MkDocs Material) que indexa el material. Las
presentaciones y las carpetas de ejercicios están en Google Drive y se enlazan desde
cada módulo.

## Estructura

```
docs/            contenido de la web (markdown)
  modulos/       una página por módulo
code/            scripts y skills de los ejercicios (licencia MIT)
mkdocs.yml       configuración del sitio
```

## Trabajar en local

```bash
pip install -r requirements.txt
mkdocs serve          # vista previa en http://127.0.0.1:8000
```

Cada push a `main` republica la web automáticamente mediante GitHub Actions.

## Licencia

Contenido bajo **CC BY-NC-SA 4.0** — ver [LICENSE.md](LICENSE.md).
Código y skills bajo **MIT** — ver [code/LICENSE](code/LICENSE).
Las imágenes, esquemas y citas de terceros pertenecen a sus titulares.
