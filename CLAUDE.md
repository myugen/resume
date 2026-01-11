# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JSON Resume project that uses the `resumed` CLI to render a multilingual resume (EN/ES) into HTML and PDF formats. The resume follows the JSON Resume schema (v1.0.0).

## Commands

```bash
# Install dependencies
npm install

# Build and serve resume locally
npm run serve

# Build HTML output
npm run build:html

# Build PDF output
npm run build:pdf

# Build JSON output (for export)
npm run build:json
```

## Architecture

- **resume.en.json**: English version of the resume (default, served at `/`).
- **resume.es.json**: Spanish version of the resume (served at `/es/`).
- **dist/**: Build output directory:
  - `dist/index.html` - English HTML
  - `dist/miguel-cabrera_cv_en.pdf` - English PDF
  - `dist/content.json` - English JSON (for export)
  - `dist/es/index.html` - Spanish HTML
  - `dist/es/miguel-cabrera_cv_es.pdf` - Spanish PDF
  - `dist/es/content.json` - Spanish JSON (for export)
- **scripts/inject-controls.js**: Post-build script that injects language switcher and export button.
- **scripts/build-pdf.js**: Custom Puppeteer script for PDF generation (with CI-compatible flags).
- **Theme**: Uses `jsonresume-theme-dev-ats` for rendering (ATS-friendly theme).

## Node Version

Requires Node.js v24.11.1 (specified in `.nvmrc`).

## Deployment

GitHub Actions deploys automatically to GitHub Pages when `resume.en.json`, `resume.es.json`, `package.json`, `package-lock.json`, or `scripts/**` change on the `main` branch.
