const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const config = require('../config');

async function buildPDF(htmlPath, outputPath) {
  const absoluteHtmlPath = path.resolve(htmlPath);

  if (!fs.existsSync(absoluteHtmlPath)) {
    console.error(`HTML file not found: ${absoluteHtmlPath}`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });

  try {
    const page = await browser.newPage();

    const fileUrl = `file://${absoluteHtmlPath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Hide controls that shouldn't appear in PDF
    await page.evaluate(() => {
      const controls = document.querySelector('.export-controls');
      if (controls) controls.style.display = 'none';
      const langSwitcher = document.querySelector('.lang-switcher');
      if (langSwitcher) langSwitcher.style.display = 'none';
    });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      }
    });

    console.log(`PDF generated: ${outputPath}`);
  } finally {
    await browser.close();
  }
}

async function main() {
  const configs = config.languages.map(lang => ({
    html: config.getHtmlPath(lang),
    pdf: config.getPdfPath(lang)
  }));

  for (const c of configs) {
    await buildPDF(c.html, c.pdf);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
