# 📄 Resume

*[Read in English](README.md)*

CV en formato [JSON Resume](https://jsonresume.org/) con soporte multiidioma y despliegue automático a GitHub Pages.

## 💻 Desarrollo local

```bash
# Instalar dependencias
npm install

# Construir y servir localmente
npm run serve

# Construir todo (HTML, PDF, JSON)
npm run build
```

## ⚙️ Configuración

El proyecto usa variables de entorno. Copia `.env.example` a `.env` para desarrollo local:

| Variable | Descripción | Default |
|----------|-------------|---------|
| `BASE_PATH` | Ruta base para GitHub Pages | `''` |
| `CV_NAME` | Nombre en formato slug (ej: `john-doe`) | `john-doe` |
| `LANGUAGES` | Idiomas soportados (separados por coma) | `en,es` |

Los PDFs se generan como `{CV_NAME}_cv_{lang}.pdf`.

## 📁 Estructura

| Archivo | Descripción |
|---------|-------------|
| `config.js` | Configuración centralizada |
| `resume.{lang}.json` | CV en el idioma especificado |
| `.env.example` | Ejemplo de configuración |

## 📦 Output

El primer idioma en `LANGUAGES` se sirve en la raíz (`/`), los demás en subdirectorios (`/{lang}/`).

| Archivo | Descripción |
|---------|-------------|
| `dist/index.html` | HTML del idioma por defecto |
| `dist/{name}_cv_{lang}.pdf` | PDF del idioma por defecto |
| `dist/content.json` | JSON del idioma por defecto |
| `dist/{lang}/...` | Archivos de otros idiomas |

## 🛠️ Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run serve` | Construye y sirve el CV localmente |
| `npm run build` | Construye todo (HTML, PDF, JSON) |
| `npm run build:html` | Genera HTML para todos los idiomas |
| `npm run build:pdf` | Genera PDF para todos los idiomas |
| `npm run build:json` | Copia JSON para todos los idiomas |

## 🍴 Personalizar para tu fork

1. Crea tus archivos `resume.{lang}.json`
2. Configura las variables en GitHub:
   - Ve a **Settings** → **Secrets and variables** → **Actions** → **Variables**
   - Crea las siguientes variables de repositorio:

   | Variable | Descripción | Ejemplo |
   |----------|-------------|---------|
   | `BASE_PATH` | Nombre de tu repositorio | `resume` |
   | `CV_NAME` | Tu nombre en formato slug | `john-doe` |
   | `LANGUAGES` | Idiomas separados por coma | `en,es` |

3. Habilita GitHub Pages:
   - Ve a **Settings** → **Pages**
   - En **Source**, selecciona **GitHub Actions**

4. Haz push y GitHub Pages se desplegará automáticamente

## 🚀 Despliegue

El CV se despliega automáticamente a GitHub Pages cuando se hace push a `main` con cambios en `resume.*.json`, `config.js` o `scripts/`.

## 📜 Licencia

[MIT](LICENSE)
