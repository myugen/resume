# 📄 Resume

*[Leer en español](README_es.md)*

CV in [JSON Resume](https://jsonresume.org/) format with multilingual support and automatic deployment to GitHub Pages.

## 💻 Local Development

```bash
# Install dependencies
npm install

# Build and serve locally
npm run serve

# Build everything (HTML, PDF, JSON)
npm run build
```

## ⚙️ Configuration

The project uses environment variables. Copy `.env.example` to `.env` for local development:

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_PATH` | Base path for GitHub Pages | `''` |
| `CV_NAME` | Name in slug format (e.g., `john-doe`) | `john-doe` |
| `LANGUAGES` | Supported languages (comma-separated) | `en,es` |

> [!TIP]
> PDFs are generated as `{CV_NAME}_cv_{lang}.pdf`.

## 📁 Structure

| File | Description |
|------|-------------|
| `config.js` | Centralized configuration |
| `resume.{lang}.json` | CV in the specified language |
| `.env.example` | Configuration example |

## 📦 Output

> [!NOTE]
> The first language in `LANGUAGES` is served at root (`/`), others in subdirectories (`/{lang}/`).

| File | Description |
|------|-------------|
| `dist/index.html` | Default language HTML |
| `dist/{name}_cv_{lang}.pdf` | Default language PDF |
| `dist/content.json` | Default language JSON |
| `dist/{lang}/...` | Other language files |

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `npm run serve` | Build and serve CV locally |
| `npm run build` | Build everything (HTML, PDF, JSON) |
| `npm run build:html` | Generate HTML for all languages |
| `npm run build:pdf` | Generate PDF for all languages |
| `npm run build:json` | Copy JSON for all languages |

## 🍴 Customize for Your Fork

1. Create your `resume.{lang}.json` files
2. Configure variables in GitHub:
   - Go to **Settings** → **Secrets and variables** → **Actions** → **Variables**
   - Create the following repository variables:

   | Variable | Description | Example |
   |----------|-------------|---------|
   | `BASE_PATH` | Your repository name | `resume` |
   | `CV_NAME` | Your name in slug format | `john-doe` |
   | `LANGUAGES` | Languages comma-separated | `en,es` |

3. Enable GitHub Pages:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

4. Push and GitHub Pages will deploy automatically

## 🚀 Deployment

The CV deploys automatically to GitHub Pages when pushing to `main` with changes in `resume.*.json`, `config.js`, or `scripts/`.

## 📜 License

[MIT](LICENSE)
