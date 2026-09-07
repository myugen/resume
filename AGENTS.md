# Resume Project

This repository renders a multilingual JSON Resume into HTML, PDF, and JSON files for GitHub Pages. It uses the JSON Resume schema v1.0.0, `resumed`, and the ATS-friendly `jsonresume-theme-dev-ats` theme.

## Prerequisites

- Use Node.js v24.11.1, as specified in `.nvmrc`.
- Install dependencies with `npm install`.

## Commands

```bash
# Build HTML, then PDFs, then JSON exports
npm run build

# Build and serve the HTML locally
npm run serve

# Run individual build steps
npm run build:html
npm run build:pdf
npm run build:json
```

`npm run build:pdf` requires the HTML output from `npm run build:html`. There are no separate lint or test commands; use `npm run build` as the full verification step.

## Source and Output

- `resume.{lang}.json` files are the resume source of truth. Keep equivalent content aligned across supported languages.
- `config.js` reads `BASE_PATH`, `CV_NAME`, and `LANGUAGES` and defines all output paths.
- `scripts/build-html.js` renders the resume and injects language and export controls.
- `scripts/build-pdf.js` generates PDFs from the rendered HTML with Puppeteer.
- `scripts/build-json.js` copies source JSON files to the public output.
- `dist/` is generated output. Do not edit it manually.

## Configuration

For local development, copy `.env.example` to `.env` and set:

| Variable | Purpose | Default |
| --- | --- | --- |
| `BASE_PATH` | GitHub Pages base path | `''` |
| `CV_NAME` | Filename slug | `john-doe` |
| `LANGUAGES` | Comma-separated language codes | `en,es` |

The first language in `LANGUAGES` is published at `dist/index.html`; every additional language is published in `dist/{lang}/`. PDFs use `{CV_NAME}_cv_{lang}.pdf`.

## Deployment

GitHub Actions deploys the generated `dist/` directory to GitHub Pages after pushes to `main` that change resume data, build configuration, dependencies, or scripts. Repository variables supply the production `BASE_PATH`, `CV_NAME`, and `LANGUAGES` values.
