# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JSON Resume project that uses the `resumed` CLI to render a multilingual resume into HTML and PDF formats. The resume follows the JSON Resume schema (v1.0.0).

## Commands

```bash
# Install dependencies
npm install

# Build everything (HTML, PDF, JSON)
npm run build

# Build and serve resume locally
npm run serve

# Individual builds
npm run build:html
npm run build:pdf
npm run build:json
```

## Configuration

The project uses environment variables for configuration. Create a `.env` file for local development (see `.env.example`):

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_PATH` | Base path for GitHub Pages | `''` |
| `CV_NAME` | Name slug for filenames (e.g., `john-doe`) | `john-doe` |
| `LANGUAGES` | Comma-separated language codes | `en,es` |

PDF files are generated as `{CV_NAME}_cv_{lang}.pdf`.

## Architecture

- **config.js**: Centralized configuration (reads environment variables).
- **resume.{lang}.json**: Resume source files (e.g., `resume.en.json`, `resume.es.json`).
- **dist/**: Build output directory:
  - First language (default): `dist/index.html`, `dist/{author}_cv_{lang}.pdf`, `dist/content.json`
  - Other languages: `dist/{lang}/index.html`, `dist/{lang}/{author}_cv_{lang}.pdf`, `dist/{lang}/content.json`
- **scripts/**:
  - `build-html.js`: Renders HTML for all configured languages.
  - `build-pdf.js`: Generates PDFs using Puppeteer (with CI-compatible flags).
  - `build-json.js`: Copies JSON files for export.
  - `inject-controls.js`: Injects language switcher and export button into HTML.
- **Theme**: Uses `jsonresume-theme-dev-ats` for rendering (ATS-friendly theme).

## Node Version

Requires Node.js v24.11.1 (specified in `.nvmrc`).

## Deployment

GitHub Actions deploys automatically to GitHub Pages when `resume.*.json`, `config.js`, `package.json`, `package-lock.json`, or `scripts/**` change on the `main` branch.

Environment variables are configured in GitHub repository settings (Settings → Secrets and variables → Actions → Variables).
