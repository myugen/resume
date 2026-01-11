# Resume

CV en formato [JSON Resume](https://jsonresume.org/) con soporte multiidioma (EN/ES) y despliegue automático a GitHub Pages.

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Construir y servir localmente
npm run serve
```

## Estructura

| Archivo | Descripción |
|---------|-------------|
| `resume.en.json` | CV en inglés (por defecto en `/`) |
| `resume.es.json` | CV en español (en `/es/`) |

## Output

| Idioma | HTML | PDF | JSON |
|--------|------|-----|------|
| EN | `dist/index.html` | `dist/miguel-cabrera_cv_en.pdf` | `dist/content.json` |
| ES | `dist/es/index.html` | `dist/es/miguel-cabrera_cv_es.pdf` | `dist/es/content.json` |

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run serve` | Construye y sirve el CV localmente |
| `npm run build:html` | Genera HTML para ambos idiomas |
| `npm run build:html:en` | Genera solo HTML en inglés |
| `npm run build:html:es` | Genera solo HTML en español |
| `npm run build:pdf` | Genera PDF para ambos idiomas |
| `npm run build:json` | Copia JSON para ambos idiomas |
| `npm run build:json:en` | Copia solo JSON en inglés |
| `npm run build:json:es` | Copia solo JSON en español |

## Despliegue

El CV se despliega automáticamente a GitHub Pages cuando se hace push a `main` con cambios en `resume.en.json`, `resume.es.json` o `scripts/`.
