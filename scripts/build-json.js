const fs = require('fs');
const path = require('path');
const config = require('../config');

config.languages.forEach(lang => {
  const source = config.getResumeJson(lang);
  const dest = config.getJsonPath(lang);

  // Ensure destination directory exists
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(source, dest);
  console.log(`JSON copied: ${source} -> ${dest}`);
});

console.log('All JSON files copied successfully');
