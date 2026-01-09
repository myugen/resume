const fs = require('fs');
const path = require('path');

const languages = [
  { code: 'en', htmlPath: 'dist/index.html', currentLabel: 'EN', otherLabel: 'ES', otherHref: '/es/' },
  { code: 'es', htmlPath: 'dist/es/index.html', currentLabel: 'ES', otherLabel: 'EN', otherHref: '/' }
];

function getLanguageSwitcherHTML(lang) {
  const enPart = lang.code === 'en'
    ? '<span class="lang-current">EN</span>'
    : '<a class="lang-link" href="/">EN</a>';
  const esPart = lang.code === 'es'
    ? '<span class="lang-current">ES</span>'
    : '<a class="lang-link" href="/es/">ES</a>';

  return `
<!-- Language Switcher -->
<div class="lang-switcher">${enPart} | ${esPart}</div>
`;
}

function getLanguageSwitcherStyles() {
  return `
<style>
.lang-switcher {
  text-align: center;
  margin: 0 0 8px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
}

.lang-current {
  text-decoration: underline;
  font-weight: 600;
}

.lang-link {
  color: #2563eb;
  text-decoration: none;
}

.lang-link:hover {
  text-decoration: underline;
}

@media print {
  .lang-switcher {
    display: none !important;
  }
}
</style>
`;
}

function getExportButtonHTML() {
  return `
<!-- Export Button -->
<div class="controls export-controls">
  <div class="export-dropdown">
    <button class="export-btn" onclick="toggleDropdown()">Export</button>
    <div class="export-menu" id="exportMenu">
      <button onclick="window.print()">Print / Save as PDF</button>
      <a href="resume.pdf" download>Download PDF</a>
    </div>
  </div>
</div>

<style>
.export-controls {
  position: fixed;
  bottom: 24px;
  right: 48px;
  z-index: 1000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.export-dropdown {
  position: relative;
}

.export-btn {
  background: white;
  color: #2563eb;
  border: 2px solid #2563eb;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: background 0.2s;
}

.export-btn:hover {
  background: #1d4ed8;
  color: white;
  border-color: #1d4ed8;
}

.export-menu {
  display: none;
  position: absolute;
  right: 0;
  bottom: 100%;
  margin-bottom: 4px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  min-width: 180px;
  overflow: hidden;
}

.export-menu.show {
  display: block;
}

.export-menu button,
.export-menu a {
  display: block;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  text-decoration: none;
  box-sizing: border-box;
}

.export-menu button:hover,
.export-menu a:hover {
  background: #f3f4f6;
}

@media print {
  .export-controls {
    display: none !important;
  }
}
</style>

<script>
function toggleDropdown() {
  document.getElementById('exportMenu').classList.toggle('show');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.export-dropdown')) {
    document.getElementById('exportMenu').classList.remove('show');
  }
});
</script>
`;
}

languages.forEach(lang => {
  const htmlPath = path.join(__dirname, '..', lang.htmlPath);

  if (!fs.existsSync(htmlPath)) {
    console.log(`Skipping ${lang.code}: ${htmlPath} not found`);
    return;
  }

  let html = fs.readFileSync(htmlPath, 'utf-8');

  // Inject language switcher before <h1>
  html = html.replace('<h1>', getLanguageSwitcherHTML(lang) + getLanguageSwitcherStyles() + '<h1>');

  // Inject export button before closing </body> tag
  html = html.replace('</body>', getExportButtonHTML() + '\n</body>');

  fs.writeFileSync(htmlPath, html);

  console.log(`Injected for ${lang.code.toUpperCase()} version`);
});

console.log('All versions processed successfully');
