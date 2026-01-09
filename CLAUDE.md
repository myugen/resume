# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JSON Resume project that uses the `resumed` CLI to render a resume from `resume.json` into HTML and PDF formats. The resume follows the JSON Resume schema (v1.0.0).

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
```

## Architecture

- **resume.en.json**: English version of the resume (default, served at `/`).
- **resume.es.json**: Spanish version of the resume (served at `/es/`).
- **dist/**: Build output directory:
  - `dist/index.html` - English version
  - `dist/es/index.html` - Spanish version
- **scripts/inject-export-button.js**: Post-build script that injects export button and language switcher.
- **Theme**: Uses `jsonresume-theme-dev-ats` for rendering (ATS-friendly theme).

## Node Version

Requires Node.js v24.11.1 (specified in `.nvmrc`).

## Deployment

GitHub Actions deploys automatically to GitHub Pages when `resume.en.json`, `resume.es.json`, `package.json`, `package-lock.json`, or `scripts/**` change on the `main` branch.
