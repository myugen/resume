require('dotenv').config();

const basePath = process.env.BASE_PATH || '';
const cvName = process.env.CV_NAME || 'john-doe';
const languages = (process.env.LANGUAGES || 'en,es').split(',');

module.exports = {
  basePath,
  cvName,
  languages,
  getPdfName: (lang) => `${cvName}_cv_${lang}.pdf`,
  getHtmlPath: (lang) => lang === languages[0] ? 'dist/index.html' : `dist/${lang}/index.html`,
  getPdfPath: (lang) => lang === languages[0] ? `dist/${cvName}_cv_${lang}.pdf` : `dist/${lang}/${cvName}_cv_${lang}.pdf`,
  getJsonPath: (lang) => lang === languages[0] ? 'dist/content.json' : `dist/${lang}/content.json`,
  getResumeJson: (lang) => `resume.${lang}.json`
};
