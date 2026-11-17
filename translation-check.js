/* QONAQ guide translation audit. Run: node translation-check.js */
const guide = require('./guide.js');

const LOCALES = ['kk', 'ru', 'en', 'tr', 'uz', 'ar', 'zh', 'ko', 'ja', 'fr'];
const issues = [];
const TECHNICAL_KEYS = new Set(['id', 'number', 'img', 'icon', 'url', 'badgeColor', 'dailyUsd', 'dailyKzt']);
const isLocaleObject = value => value && typeof value === 'object' && !Array.isArray(value)
  && LOCALES.every(locale => Object.prototype.hasOwnProperty.call(value, locale));

function walk(value, path, key = '') {
  if (isLocaleObject(value)) {
    for (const locale of LOCALES) {
      if (typeof value[locale] !== 'string' || !value[locale].trim()) issues.push(`${path}.${locale}: missing or empty translation`);
    }
    return;
  }
  if (typeof value === 'string') {
    if (!TECHNICAL_KEYS.has(key) && /[A-Za-z]{3,}/.test(value)) issues.push(`${path}: scalar text has no kk/ru/en/tr translations`);
    return;
  }
  if (Array.isArray(value)) return value.forEach((item, index) => walk(item, `${path}[${index}]`, key));
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    if (key === '__qonaqCore') continue;
    if (isLocaleObject(child)) {
      for (const locale of LOCALES) {
        if (child[locale] == null || (typeof child[locale] === 'string' && !child[locale].trim())) {
          issues.push(`${path}.${key}.${locale}: missing or empty translation`);
        }
        if (Array.isArray(child[locale])) child[locale].forEach((item, index) => {
          const itemPath = `${path}.${key}.${locale}[${index}]`;
          if (!isLocaleObject(item)) issues.push(`${itemPath}: array item has no kk/ru/en/tr translations`);
          else LOCALES.forEach(itemLocale => {
            if (typeof item[itemLocale] !== 'string' || !item[itemLocale].trim()) issues.push(`${itemPath}.${itemLocale}: missing or empty translation`);
          });
        });
      }
      continue;
    }
    walk(child, `${path}.${key}`, key);
  }
}

walk(guide, 'KAZAKHSTAN_TRAVEL_GUIDE');
if (issues.length) {
  console.error(`Translation audit failed: ${issues.length} untranslated scalar fields.`);
  console.error(issues.slice(0, 25).join('\n'));
  if (issues.length > 25) console.error(`…and ${issues.length - 25} more.`);
  process.exitCode = 1;
} else {
  console.log('Translation audit passed: every guide text field has KK, RU, EN, TR, UZ, AR, ZH, KO, JA and FR values.');
}
