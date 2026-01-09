# Resume

CV en formato [JSON Resume](https://jsonresume.org/) con despliegue automático a GitHub Pages.

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Construir y servir localmente
npm run serve
```

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run serve` | Construye y sirve el CV localmente |
| `npm run build:html` | Genera `dist/index.html` |
| `npm run build:pdf` | Genera `dist/resume.pdf` |

## Despliegue

El CV se despliega automáticamente a GitHub Pages cuando se hace push a `main` con cambios en `resume.json`.
