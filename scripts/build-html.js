const { execSync } = require('child_process');
const fs = require('fs');
const config = require('../config');

config.languages.forEach(lang => {
  const resumeJson = config.getResumeJson(lang);
  const htmlPath = config.getHtmlPath(lang);
  const htmlDir = require('path').dirname(htmlPath);

  // Ensure output directory exists
  if (!fs.existsSync(htmlDir)) {
    fs.mkdirSync(htmlDir, { recursive: true });
  }

  const cmd = `npx resumed render ${resumeJson} -t jsonresume-theme-dev-ats -o ${htmlPath}`;
  console.log(`Building HTML for ${lang}...`);
  execSync(cmd, { stdio: 'inherit' });
});

// Run inject-controls after all HTML files are generated
console.log('Injecting controls...');
require('./inject-controls');
