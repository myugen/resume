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

- **resume.json**: The main resume data file following the JSON Resume schema. Edit this file to update resume content.
- **dist/**: Build output directory containing rendered HTML and PDF files.
- **Theme**: Uses `jsonresume-theme-dev-ats` for rendering (ATS-friendly theme). Theme can be changed by modifying the `-t` flag in package.json scripts.

## Node Version

Requires Node.js v24.11.1 (specified in `.nvmrc`).

## Deployment

GitHub Actions deploys automáticamente a GitHub Pages cuando cambia `resume.json`, `package.json` o `package-lock.json` en la rama `main`.
