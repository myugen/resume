const fs = require('fs');
const path = require('path');

const languages = [
  { code: 'en', htmlPath: 'dist/index.html', switchTo: 'ES', switchHref: '/es/' },
  { code: 'es', htmlPath: 'dist/es/index.html', switchTo: 'EN', switchHref: '/' }
];

function getExportButtonHTML(lang) {
  return `
<!-- Export Button & Language Switcher -->
<div class="controls export-controls">
  <a class="lang-switch" href="${lang.switchHref}">${lang.switchTo}</a>
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
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang-switch {
  background: white;
  color: #374151;
  border: 2px solid #e5e7eb;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.2s;
}

.lang-switch:hover {
  border-color: #2563eb;
  color: #2563eb;
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

  // Inject before closing </body> tag
  html = html.replace('</body>', getExportButtonHTML(lang) + '\n</body>');

  fs.writeFileSync(htmlPath, html);

  console.log(`Export button injected for ${lang.code.toUpperCase()} version`);
});

console.log('All versions processed successfully');
