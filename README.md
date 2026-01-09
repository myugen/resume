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

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run serve` | Construye y sirve el CV localmente |
| `npm run build:html` | Genera `dist/index.html` (EN) y `dist/es/index.html` (ES) |
| `npm run build:pdf` | Genera `dist/resume.pdf` |

## Despliegue

El CV se despliega automáticamente a GitHub Pages cuando se hace push a `main` con cambios en `resume.en.json`, `resume.es.json` o `scripts/`.
