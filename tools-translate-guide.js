/* One-time guide data localizer. It preserves technical fields and source EN text. */
const fs = require('fs');
const https = require('https');
const vm = require('vm');

const source = fs.readFileSync('guide.js', 'utf8');
const declaration = 'const KAZAKHSTAN_TRAVEL_GUIDE = ';
const expression = source.slice(source.indexOf(declaration) + declaration.length, source.indexOf('\n\nif (typeof window')).trim().replace(/;$/, '');
const guide = vm.runInNewContext(`(${expression})`);
const locales = ['kk', 'ru', 'en', 'tr', 'uz', 'ar', 'zh', 'ko', 'ja', 'fr'];
const technicalKeys = new Set(['id', 'number', 'img', 'icon', 'url', 'badgeColor', 'dailyUsd', 'dailyKzt']);
const cache = new Map();
let queue = Promise.resolve();

function request(text, target) {
  const key = `${target}\u0000${text}`;
  if (cache.has(key)) return cache.get(key);
  const promise = queue = queue.then(() => new Promise((resolve, reject) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;
    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve(parsed[0].map(part => part[0]).join(''));
        } catch (error) {
          const fallbackUrl = `https://translate.google.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;
          https.get(fallbackUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, fallback => {
            let fallbackBody = '';
            fallback.on('data', chunk => { fallbackBody += chunk; });
            fallback.on('end', () => {
              try { resolve(JSON.parse(fallbackBody)[0].map(part => part[0]).join('')); }
              catch (fallbackError) {
                const memoryUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${target}`;
                https.get(memoryUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, memory => {
                  let memoryBody = '';
                  memory.on('data', chunk => { memoryBody += chunk; });
                  memory.on('end', () => {
                    try {
                      const translated = JSON.parse(memoryBody).responseData.translatedText;
                      resolve(translated.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
                    } catch (memoryError) { reject(new Error(`Translation request failed for ${target}: ${memoryError.message}`)); }
                  });
                }).on('error', reject);
              }
            });
          }).on('error', reject);
        }
      });
    });
    request.on('error', reject);
  }).then(value => new Promise(resolve => setTimeout(() => resolve(value), 60))));
  cache.set(key, promise);
  return promise;
}

function shouldTranslate(key, value) {
  return typeof value === 'string' && !technicalKeys.has(key) && !value.includes('://') && /[A-Za-z]{3,}/.test(value);
}

async function localize(value, key = '') {
  if (Array.isArray(value)) return Promise.all(value.map(item => (typeof item === 'string' ? item : localize(item, key))));
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (typeof value.en === 'string') {
    const output = { ...value, en: value.en };
    const missing = locales.filter(locale => !output[locale] && locale !== 'en');
    const translated = await Promise.all(missing.map(locale => request(value.en, locale)));
    missing.forEach((locale, index) => { output[locale] = translated[index]; });
    return output;
  }
  const entries = await Promise.all(Object.entries(value).map(async ([childKey, child]) => [childKey, await localize(child, childKey)]));
  return Object.fromEntries(entries);
}

(async () => {
  const localized = await localize(guide);
  const output = `/* QONAQ — Kazakhstan Travel Guide & Editorial Field Manual (guide.js) */\n\nconst KAZAKHSTAN_TRAVEL_GUIDE = ${JSON.stringify(localized, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.KAZAKHSTAN_TRAVEL_GUIDE = KAZAKHSTAN_TRAVEL_GUIDE;\n}\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = KAZAKHSTAN_TRAVEL_GUIDE;\n}\n`;
  fs.writeFileSync('guide.js', output, 'utf8');
  console.log(`Localized guide.js with ${cache.size} source strings.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
